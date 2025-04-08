import { debounce } from "@/utils";
import getResults from "../controller/API";
import { MIN_QUERY_LETTERS } from "../controller/config";
import { useCallback } from "react";
import PropTypes from "prop-types";

function Input({ dispatch }) {
  const handleQueryChange = useCallback(async (event) => {
    let query = event.target.value;

    if (query.length < MIN_QUERY_LETTERS) {
      dispatch({ type: "search", payload: query });
      dispatch({ type: "results", payload: [] });
      return;
    }

    dispatch({ type: "search", payload: event.target.value });
    let results = await getResults(query);
    dispatch({ type: "results", payload: results });
  }, []);

  const debouncedSearch = useCallback(debounce(handleQueryChange), []);

  return (
    <div className="flex flex-col gap-2">
      <label
        className="ml-2 dark:text-white opacity-60 text-sm"
        htmlFor="atomSearch"
      >
        Atoms search
      </label>
      <input
        type="text"
        id="atomSearch"
        autoCorrect="off"
        autoComplete="off"
        className="dark:bg-cardBg-dark outline-0 dark:text-white bg-white p-4 border-2 dark:border-cardBg-dark border-gray-200 rounded-2xl focus:border-blue-400"
        onChange={debouncedSearch}
        placeholder="Search anything"
      />
    </div>
  );
}

Input.propTypes = {
  dispatch: PropTypes.func,
};

export default Input;
