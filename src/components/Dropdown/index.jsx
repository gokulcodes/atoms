/** @format */

import DropdownMenu from './View/DropdownMenu';

function Dropdown() {
	return (
		<DropdownMenu isInitiallyOpen={true}>
			<DropdownMenu.Button>Atoms Dropdown</DropdownMenu.Button>
			<DropdownMenu.List>
				<DropdownMenu.Item>File</DropdownMenu.Item>
				<DropdownMenu.Item>Explore</DropdownMenu.Item>
				<DropdownMenu.Item>Folder</DropdownMenu.Item>
				<DropdownMenu.Item>View</DropdownMenu.Item>
				<DropdownMenu.Item>Tools</DropdownMenu.Item>
				<DropdownMenu.Item>Build</DropdownMenu.Item>
				<DropdownMenu.Item>
					Build Items at long spaceses
				</DropdownMenu.Item>
			</DropdownMenu.List>
		</DropdownMenu>
	);
}

export default Dropdown;
