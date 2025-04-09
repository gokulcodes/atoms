import { useReducer, Fragment, cloneElement } from 'react';
import DropDownContext, {
	initialState,
	reducer,
} from '../controller/DropdownContext';
import Button from './Button';
import Item from './Item';
import List from './List';
import PropTypes from 'prop-types';

function DropdownMenu({ children, isInitiallyOpen }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<DropDownContext.Provider value={{ ...state, dispatch }}>
			<div
				className="relative"
				id="dropdownMenu"
			>
				{children.map((children) => (
					<Fragment key={children.type.name}>
						{cloneElement(children, { isInitiallyOpen })}
					</Fragment>
				))}
			</div>
		</DropDownContext.Provider>
	);
}

DropdownMenu.propTypes = {
	children: PropTypes.element,
	isInitiallyOpen: PropTypes.bool,
};

DropdownMenu.Button = Button;
DropdownMenu.List = List;
DropdownMenu.Item = Item;

export default DropdownMenu;
