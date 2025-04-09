/** @format */

import { createContext } from 'react';

export const initialState = {
	isOpen: false,
	activeItem: 0,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'toggle':
			return {
				...state,
				isOpen: !state.isOpen,
			}; // don't directly mutate the state, return a new object
		case 'updateActiveItem':
			return {
				...state,
				activeItem: action.payload,
			};
	}
};

let dropDownContext = createContext();
export default dropDownContext;
