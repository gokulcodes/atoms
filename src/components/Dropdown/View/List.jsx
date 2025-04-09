import { useContext } from 'react';
import dropDownContext from '../controller/DropdownContext';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

function List({ children }) {
	const { isOpen } = useContext(dropDownContext);
	let parent = document.getElementById('dropdownMenu');
	if (!isOpen || !parent) {
		return null;
	}
	return createPortal(
		<ul className="absolute animate-openup w-full rounded-xl overflow-hidden top-16">
			{children}
		</ul>,
		parent
	);
}

List.propTypes = {
	children: PropTypes.element,
};

export default List;
