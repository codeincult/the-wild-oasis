import { QueryClient } from '@tanstack/query-core';

function mockCreateEditCabin(newCabin, id) {
  console.log("newCabin:", newCabin);
  console.log("id:", id);
}

mockCreateEditCabin({ name: "Test" });
