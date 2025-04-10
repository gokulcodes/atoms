import PropTypes from 'prop-types';

function Header({ children, handleClose }) {
	return (
		<header
			aria-label={children}
			className="relative top-0 px-8 p-4 border-b border-b-gray-200 flex items-center justify-between w-full "
		>
			<h2>{children}</h2>
			<button
				onClick={handleClose}
				className="hover:bg-gray-100 dark:hover:bg-bodyBg-dark cursor-pointer p-2 rounded-full"
			>
				<img
					className="w-4 h-auto dark:invert"
					src="/icons/close.png"
					alt="close"
				/>
			</button>
		</header>
	);
}

Header.propTypes = {
	children: PropTypes.string,
	handleClose: PropTypes.func,
};

export default Header;
