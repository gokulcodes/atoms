/** @format */

import { createContext } from 'react';

export const initialState = {
	currentActiveSlide: 0,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setSlide':
			return {
				...state,
				currentActiveSlide: action.payload,
			}; // don't directly mutate the state, return a new object
	}
};

let carouselContext = createContext();
export default carouselContext;
