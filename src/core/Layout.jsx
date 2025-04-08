import PropTypes from 'prop-types';
import AtomContext, { initialState, reducer } from "../controller/atomContext"
import { memo, useReducer } from "react"
import Header from "./Header"

function Layout( {children} ){
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <AtomContext.Provider value={{ ...state, dispatch }}>
            <Header />
            {children}
        </AtomContext.Provider>
    )
}

Layout.propTypes = {
    children: PropTypes.element
}

export default memo(Layout)