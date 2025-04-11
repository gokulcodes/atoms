/** @format */

import { createContext } from 'react';

export const initialState = {
	selectedOptions: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'select':
			return {
				...state,
				selectedOptions: [...state.selectedOptions, action.payload],
			}; // don't directly mutate the state, return a new object
		case 'deselect':
			return {
				...state,
				selectedOptions: state.selectedOptions.filter(
					(option) => option !== action.payload
				),
			}; // don't directly mutate the state, return a new object
	}
};

let PollContext = createContext();
export default PollContext;
