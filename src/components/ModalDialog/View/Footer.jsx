import PropTypes from 'prop-types';

function Footer({ children }) {
	return (
		<footer className="relative bottom-0 px-8 p-4 border-t border-t-gray-200 flex items-center justify-between w-full ">
			{children}
		</footer>
	);
}

Footer.propTypes = {
	children: PropTypes.element,
};

export default Footer;
