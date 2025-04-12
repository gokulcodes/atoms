/** @format */

import Modal from '@/components/ModalDialog';
import Autocomplete from '../components/Autocomplete';
import Dropdown from '../components/Dropdown';
import CarouselView from '@/components/Carousel';
import PollView from '@/components/PollWidget/Index';
import Accordian from '@/components/Accordian';
import Markdown from '@/components/Markdown';

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
	{
		id: 'carousel',
		name: 'Carousel',
		component: <CarouselView />,
		readMeUrl: `https://raw.githubusercontent.com/gokulcodes/atoms/refs/heads/main/src/components/Carousel/README.md`,
	},
	{
		id: 'pollwidget',
		name: 'Poll Widget',
		component: <PollView />,
		readMeUrl: `https://raw.githubusercontent.com/gokulcodes/atoms/refs/heads/main/src/components/PollWidget/README.md`,
	},
	{
		id: 'accordian',
		name: 'Accordian',
		component: <Accordian />,
		readMeUrl: `https://raw.githubusercontent.com/gokulcodes/atoms/refs/heads/main/src/components/Accordian/README.md`,
	},
	{
		id: 'markdown',
		name: 'Markdown Parser',
		component: <Markdown />,
		readMeUrl: `https://raw.githubusercontent.com/gokulcodes/atoms/refs/heads/main/src/components/Markdown/README.md`,
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
