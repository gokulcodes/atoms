import PropTypes from 'prop-types';

function Body({ children }) {
	return (
		<div className="w-full overflow-y-scroll flex items-center justify-center h-full">
			{children}
		</div>
	);
}

Body.propTypes = {
	children: PropTypes.element,
};

export default Body;
