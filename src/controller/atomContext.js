/** @format */

import { createContext } from 'react';

export const initialState = {
	theme: 'light',
	fitToScreen: false,
	selectedComponent: null,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'theme':
			return {
				...state,
				theme: action.payload,
			}; // don't directly mutate the state, return a new object
		case 'fitScreen':
			return {
				...state,
				fitToScreen: !state.fitToScreen,
			};
		case 'select_component':
			return {
				...state,
				selectedComponent: action.payload,
			};
	}
};

const atomContext = createContext(null);
export default atomContext;
