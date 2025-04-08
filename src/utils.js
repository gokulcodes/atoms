/** @format */

import { DEBOUNCE_DELAY } from './components/Autocomplete/controller/config';

/**
 * Debounce a function to reduce frequent execution.
 * @constructor
 * @param {func} func - function that need to debounced
 * @return {func} - debounced function
 */

function debounce(func) {
	let timerId = null;
	return function (...args) {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			func.apply(this, args); // this will preserved on debounce call.
		}, DEBOUNCE_DELAY);
	};
}

export { debounce };
