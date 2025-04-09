import { useCallback, useContext, useEffect } from 'react';
import dropDownContext from '../controller/DropdownContext';
import PropTypes from 'prop-types';

function Button({ children }) {
	const { dispatch } = useContext(dropDownContext);

	useEffect(() => {
		dispatch({ type: 'toggle' });
	}, []);

	const handleListDisplayToggle = useCallback(() => {
		dispatch({ type: 'toggle' });
	}, []);

	return (
		<button
			className="border dark:border-white/10 border-gray-300 min-w-64 dark:bg-cardBg-dark dark:text-white bg-white px-4 py-4 md:px-8 md:py-4 rounded-xl cursor-pointer hover:dark:bg-bodyBg-dark hover:bg-gray-200"
			onClick={handleListDisplayToggle}
			id="dropdown"
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.element,
	isInitiallyOpen: PropTypes.bool,
};

export default Button;
