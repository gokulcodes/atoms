# Design Autocomplete

Autocomplete is one of the famous components in frontend which uses different techniques to make searching easier and faster. Some popular techniques involves Trie Data structure for search operations, Debouncing to optimizing search
function execution, caching results etc. Let's discuss the design part of Autocomplete component.

## Requirements:

Here, we'll draft all the necessary requirements to design autocomplete. This helps in grouping our ideas and work all the
way towards optimized implementation.

- What are the compatible devices ?
  Mobile, Desktop, Tablets etc

- What is the maximum letters we need to wait for user to type before doing search operations?
  Maximum of 3 letters is needed

- What is the maximum search results we need to show in the autocomplete list
  Maximum of top 5 results is enough

- What are the users we are targeting for?
  All possible users with or without any disabilities. Advanced accessibility is mandatory

- Should there be any submit button to do search or we have search on type?
  Search results should show on user type action, there will be no submit button

- Is it required to make SearchResults component to support pagination?
  Yes, expose API option to support pagination with infinite scrolling

- Do we need to support any other format in search results like GIF, png, SVG?
  No, just text support is fine for now

## Architecture:

We can divide the components into four majors blocks:

- View -> Autocomplete.Input and Autocomplete.Results UI components. Data is abstracted away from these components. It's responsibility is how a search result is rendered
- Controller -> SearchController is the brain of this entire module. It holds search results, query, reference to caching & make API calls to server
- Cache -> A simple inmemory cache, which holds all the results returned for specific keyword from the server
- Network calls -> Let's use fetch to make API calls to remote server. In this example we'll use dummyJSON [https://dummyjson.com/users/search?q=John]

![Autocomplete](https://github.com/gokulcodes/atoms/blob/main/src/components/Autocomplete/architecture.png "Autocomplete Architecture")

## Data Modal:

We'll use context API for handling data storage and accessibility between Autocomplete.Input & Autocomplete.Results component

- State:

```
InitialValue = {
    query: '',
    results: []
}
```

- Global Configuration:

```
MAX_SEARCH_RESULTS=5,
MIN_QUERY_LETTERS=3,
CAP_RESULTS=false
```

- Cache Structure:
  Since, map is suitable for frequent mutations in the data set we'll use map as a cache storage. For each key, it's value is stored in array format

## Interface Definition

We'll use composition pattern to group key components together with unified data flow with context provider.

- Autocomplete: It acts like a data provider between it's child components
  - Autocomplete.Input
  - Autocomplete.Results

No need of props, as communication between components is glued together by context API

## Optimization

### Network:

- Restrict concurrent API request for queries if user keeps on typing. If a new request comes in, reject the previous request and trigger a new API

### Performance:

- Use Debouncing techique to reduce number of API calls made for each input change.

### Cache:

- Cache results to do results lookups faster

### User experience:

- If infinite scrolling is enabled, use virtualized list to improve rendering performance
- AutoFocus when the Autocomplete component is mounted
- If search results are longer, handle them gracefully with text-ellipses
- Keyboard interaction for Results component. List should scroll according to Up/Down arrow pressed by user
- Results component should position properly according to viewport. It should always be visible when a result is shown
- Escape to dismiss the popup if it's visible
- Use from tag to support enter key

### Accessibility:

- role=combobox for input
- role=listbox for results
- aria-haspopup for element can trigger a popup
- aria-expanded=true/false for results show/hidden
- aria-live to indicate that this component change frequenctly with search results
- aria-autocomplete='inline', 'list', 'both' to indicate the way results are shown
