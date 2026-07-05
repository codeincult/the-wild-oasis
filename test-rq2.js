import { QueryClient } from '@tanstack/query-core';
const queryClient = new QueryClient();
queryClient.mount();
queryClient.setQueryData(["cabins"], [1, 2, 3]);
console.log("Before:", queryClient.getQueryState(["cabins"]).isInvalidated);
queryClient.invalidateQueries(["cabins"]);
console.log("After:", queryClient.getQueryState(["cabins"]).isInvalidated);
