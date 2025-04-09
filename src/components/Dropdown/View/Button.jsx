import { useCallback, useContext } from 'react';
import dropDownContext from '../controller/DropdownContext';
import PropTypes from 'prop-types';

function Button({ children }) {
	const { dispatch } = useContext(dropDownContext);

	const handleListDisplayToggle = useCallback(() => {
		dispatch({ type: 'toggle' });
	}, []);

	return (
		<button
			className="border flex flex-row items-center justify-between dark:border-white/10 border-gray-300 min-w-64 dark:bg-cardBg-dark dark:text-white bg-white p-4 rounded-xl cursor-pointer hover:dark:bg-bodyBg-dark hover:bg-gray-200"
			onClick={handleListDisplayToggle}
			id="dropdown"
		>
			{children}
			<img
				className="w-5 dark:invert"
				src="/icons/dropdown.png"
				alt="dropdown-icon"
			/>
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.element,
	isInitiallyOpen: PropTypes.bool,
};

export default Button;
