import { useContext } from "react";
import autoCompleteContext from "../controller/AutocompleteContext";
import Input from "./Input";
import Results from "./Results";

function AutocompleteView() {
  const { results, dispatch } = useContext(autoCompleteContext);

  return (
    <div className="flex flex-col gap-2 w-96 relative">
      <Input dispatch={dispatch} />
      <Results results={results} />
    </div>
  );
}

export default AutocompleteView;
