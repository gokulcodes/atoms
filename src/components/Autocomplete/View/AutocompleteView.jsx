import { useContext } from "react"
import autoCompleteContext from "../utils/AutocompleteContext"
import getResults from "../utils/API"
import { MIN_QUERY_LETTERS } from "../utils/config"
import PropTypes from 'prop-types';

function AutocompleteView() {
    return (
        <div className="flex flex-col gap-2 w-96 relative">
            <Input />
            <Results />
        </div>
    )
}

function Input() {
    const {  dispatch } = useContext(autoCompleteContext)

    async function handleQueryChange(event) {
        let query = event.target.value;
        
        if (query.length < MIN_QUERY_LETTERS) {
            dispatch({ type: "search", payload: query })
            dispatch({type: "results", payload: [] })
            return;
        }
        dispatch({ type: "search", payload: event.target.value })
        let results = await getResults(query);
        dispatch({type: "results", payload: results})
    }

    function debounce(func) {
        let timerId = null;
        return function (...args) {
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                func.apply(this, args)
            }, 500)
        }
    }

    const debouncedSearch = debounce(handleQueryChange)

    return (
        <div className="flex flex-col gap-2">
            <label className="ml-2 opacity-60 text-sm" htmlFor="atomSearch" >Autocomplete</label>
            <input
                id="atomSearch"
                className="bg-white p-4 border border-gray-300 rounded-2xl focus:border-blue-200"
                onChange={debouncedSearch} type="text" placeholder="Search anything"
            />
        </div>
    )

}

function ResultItem({result}) {
    return (
        <div className="w-full hover:bg-gray-100 cursor-pointer bg-white p-4 border-b border-gray-200 flex justify-between" >
            <div className="flex flex-row gap-2">
                <img loading="lazy" className="w-6 border border-bodyBg rounded-full" src={result.image} alt={result.firstName} />
                <p>{result.firstName + " " + result.lastName} </p>
            </div>
            <p>{result.age }</p>
        </div>
    )
}

ResultItem.propTypes = {
    result: PropTypes.shape({
        image: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.number,
    })
}

function Results() {
    const { results } = useContext(autoCompleteContext)


    return (
        <div className="absolute top-24 w-full rounded-2xl overflow-hidden" >
            {results?.map((result) => (
                <ResultItem key={result.id} result={result} />
            ))}
        </div>
    )
    
}

// AutocompleteView.Input = Input
// AutocompleteView.Results = Results
export default AutocompleteView