import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be loaded");
  }

  return cabins;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  let imageName, imagePath;

  if (!hasImagePath) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  } else {
    imagePath = newCabin.image;
  }

  // 1. Create/Edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (typeof id === "object") {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  // B) EDIT
  if (typeof id === "number") {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data: cabin, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin couldn't be created");
  }

  // 2. Upload an image
  if (hasImagePath) {
    return cabin;
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", cabin.id);
    console.error(storageError);
    throw new Error(
      "Cabin image couldn't be uploaded and the cabin was not created",
    );
  }

  return cabin;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin couldn't be deleted");
  }

  return data;
}
