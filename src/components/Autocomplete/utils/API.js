import cache from "./cache";
import { MAX_SEARCH_RESULTS } from "./config";

async function getResults(query) {
  if (cache.hasOwn(query)) {
    return cache[query];
  }
  let url = `https://dummyjson.com/users/search?q=${query}`;
  let response = await fetch(url);
  let data = await response.json();
  let users = data.users;
  users = users.slice(0, MAX_SEARCH_RESULTS);
  cache[query] = users;
  return cache[query];
}

export default getResults;
