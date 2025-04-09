/** @format */

import DropdownMenu from './View/DropdownMenu';

function Dropdown() {
	return (
		<DropdownMenu isInitiallyOpen={true}>
			<DropdownMenu.Button>Atoms Dropdown</DropdownMenu.Button>
			<DropdownMenu.List>
				<DropdownMenu.SubList title="Companies">
					<DropdownMenu.Item>Google</DropdownMenu.Item>
					<DropdownMenu.Item>Meta</DropdownMenu.Item>
				</DropdownMenu.SubList>
				<DropdownMenu.Item>Build</DropdownMenu.Item>
				<DropdownMenu.SubList title="All tools">
					<DropdownMenu.Item>Explore</DropdownMenu.Item>
					<DropdownMenu.Item>Folder</DropdownMenu.Item>
					<DropdownMenu.Item>Tools</DropdownMenu.Item>
					<DropdownMenu.Item>Build</DropdownMenu.Item>
				</DropdownMenu.SubList>
			</DropdownMenu.List>
		</DropdownMenu>
	);
}

export default Dropdown;
