import { useReducer } from "react"
import AutoCompleteContext, { initialState, reducer } from "./utils/AutocompleteContext"
import AutocompleteView from "./View/AutocompleteView"

// import "./autocomplete.scss"

function Autocomplete() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AutoCompleteContext.Provider value={{ ...state, dispatch }} >
            <AutocompleteView />
        </AutoCompleteContext.Provider>
    )
}

export default Autocomplete