/** @format */

import Modal from '@/components/ModalDialog';
import Autocomplete from '../components/Autocomplete';
import Dropdown from '../components/Dropdown';

export const allComponents = [
	{
		id: 'autocomplete',
		name: 'Autocomplete',
		component: <Autocomplete />,
		readMeUrl: `https://raw.githubusercontent.com/gokulcodes/atoms/refs/heads/main/src/components/Autocomplete/README.md`,
	},
	{
		id: 'dropdown',
		name: 'Dropdown',
		component: <Dropdown />,
		readMeUrl: `https://raw.githubusercontent.com/gokulcodes/atoms/refs/heads/main/src/components/Dropdown/README.md`,
	},
	{
		id: 'modal',
		name: 'Modal',
		component: <Modal />,
		readMeUrl: `https://raw.githubusercontent.com/gokulcodes/atoms/refs/heads/main/src/components/ModalDialog/README.md`,
	},
];

export default function getComponent(name) {
	let componentByName = allComponents.find(
		(component) => name == component.id
	);

	if (componentByName && componentByName.component) {
		return componentByName.component;
	}

	return null;
}
