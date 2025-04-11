import { cloneElement, useReducer } from 'react';
import PollContext, { initialState, reducer } from '../controller/PollContext';
import PropTypes from 'prop-types';

function PollWidget({ children, title }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<PollContext.Provider value={{ ...state, dispatch }}>
			<div className="bg-cardBg dark:bg-cardBg-dark max-w-96 shadow p-10 rounded-4xl">
				<h2
					aria-label={title}
					className="dark:text-white"
				>
					{title}
				</h2>
				<div className="flex flex-col items-start gap-3 py-4">
					{children.map((child) =>
						cloneElement(child, {
							isSelected: state?.selectedOptions?.includes(
								child.props.id
							),
						})
					)}
				</div>
				{/* <button className="w-full p-2 bg-blue-500 text-white rounded-full cursor-pointer mt-2">
					Submit
				</button> */}
			</div>
		</PollContext.Provider>
	);
}

PollWidget.propTypes = {
	children: PropTypes.element,
	title: PropTypes.string,
};

export default PollWidget;
