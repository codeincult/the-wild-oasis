import { QueryClient } from '@tanstack/query-core';
const queryClient = new QueryClient();
try {
  queryClient.invalidateQueries(["cabins"]);
  console.log("No error!");
} catch (e) {
  console.log("Error:", e.message);
}
