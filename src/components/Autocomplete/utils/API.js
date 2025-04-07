import cache from "./cache";
import { MAX_SEARCH_RESULTS } from "./config";

async function getResults(query) {
  if (cache.hasOwnProperty(query)) {
    return cache[query];
  }
  let url = `https://dummyjson.com/users/search?q=${query}&limit=${MAX_SEARCH_RESULTS}`;
  let response = await fetch(url);
  let data = await response.json();
  let users = data.users;
  cache[query] = users;
  return cache[query];
}

export default getResults;
