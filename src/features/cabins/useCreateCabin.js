import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,

    onSuccess: () => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: () => {
      toast.error("Cabin creation failed");
    },
  });

  return { createCabin, isCreating };
}
