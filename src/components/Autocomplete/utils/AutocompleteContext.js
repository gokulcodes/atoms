import { createContext } from "react";

export const initialState = {
  query: "",
  results: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "search":
      return { ...state, query: action.payload }; // don't directly mutate the state, return a new object
    case "results":
      return { ...state, results: action.payload };
  }
};
let autoCompleteContext = createContext();
export default autoCompleteContext;
