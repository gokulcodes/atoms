import PropTypes from 'prop-types';
import AtomContext from "../controller/atomContext"
import { memo, useReducer } from "react"
import Header from "./Header"

const initialState = {
    theme: 'light',
    fitToScreen: false,
    components: [
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },

        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
        {
            name: 'AutoComplete',
            lastCommit: '2023-10-01',
            previewImage: 'https://dummyimage.com/16:9x1080'
        },
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'theme':
            return { ...state, theme: action.payload }; // don't directly mutate the state, return a new object
        case 'fitScreen':
            return {...state, fitToScreen: !state.fitToScreen}
    }
}

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