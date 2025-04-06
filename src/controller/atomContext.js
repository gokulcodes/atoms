import { createContext } from "react";
import { allComponents } from "./config";

export const initialState = {
  theme: "light",
  fitToScreen: false,
  components: allComponents,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { ...state, theme: action.payload }; // don't directly mutate the state, return a new object
    case "fitScreen":
      return { ...state, fitToScreen: !state.fitToScreen };
  }
};

const atomContext = createContext(null);
export default atomContext;
