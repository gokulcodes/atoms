import {
	cloneElement,
	Fragment,
	useCallback,
	useContext,
	useEffect,
	useRef,
} from 'react';
import dropDownContext from '../controller/DropdownContext';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

function List({ children }) {
	const { isOpen, dispatch } = useContext(dropDownContext);
	let ref = useRef();

	useEffect(() => {
		let root = document.getElementById('root');
		document.getElementById('root').onclick = toggleDropdown;
		return () => {
			root.onclick = null;
		};
	}, [isOpen]);

	const toggleDropdown = useCallback(
		(event) => {
			if (isOpen && event.target.id !== 'dropdown') {
				dispatch({ type: 'toggle' });
			}
		},
		[isOpen]
	);

	if (!isOpen) {
		return null;
	}

	const dropdown = document.getElementById('dropdownMenu');
	let geometry = dropdown.getBoundingClientRect();

	return createPortal(
		<ul
			ref={ref}
			style={{
				left: `${geometry.left}px`,
				top: `${geometry.top + geometry.height + 10}px`,
				width: `${geometry.width}px`,
			}}
			className="absolute shadow animate-openup rounded-2xl overflow-hidden"
		>
			{children.map((child, index) => (
				<Fragment key={index}>{cloneElement(child, { ref })}</Fragment>
			))}
		</ul>,
		document.body
	);
}

List.propTypes = {
	children: PropTypes.element,
};

export default List;
