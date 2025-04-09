import { useContext } from 'react';
import dropDownContext from '../controller/DropdownContext';
import PropTypes from 'prop-types';

function Item({ children, index }) {
	const { dispatch } = useContext(dropDownContext);

	const handleItemSelect = () => {
		dispatch({ type: 'updateActiveItem', payload: index });
	};

	return (
		<li className="w-full dark:hover:bg-bodyBg-dark hover:bg-gray-100 cursor-pointer dark:bg-cardBg-dark dark:text-white bg-white px-6 py-4 border-b dark:border-white/10 border-gray-200 flex justify-between">
			<button
				className="text-left"
				onClick={handleItemSelect}
			>
				{children}
			</button>
		</li>
	);
}

Item.propTypes = {
	children: PropTypes.element,
	index: PropTypes.number,
};

export default Item;
