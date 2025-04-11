import { useCallback, useContext } from 'react';
import PollContext from '../controller/PollContext';
import PropTypes from 'prop-types';

let totalVotes = 1000;
function PollOptions({ id, title, isSelected, votes }) {
	const { dispatch } = useContext(PollContext);
	const handleUpvote = useCallback(() => {
		dispatch({ type: 'select', payload: id });
	}, []);
	const handleDownvote = useCallback(() => {
		dispatch({ type: 'deselect', payload: id });
	}, []);
	let percentage = (votes / totalVotes) * 100;
	return (
		<button
			onClick={isSelected ? handleDownvote : handleUpvote}
			aria-label={title}
			aria-live="polite"
			className={`${
				isSelected
					? ' border-green-600'
					: 'grayscale dark:border-gray-600 border-gray-300 hover:border-gray-400'
			} bg-transparent  border p-3 rounded-xl w-full text-left cursor-pointer flex flex-row gap-2 overflow-hidden relative`}
		>
			<img
				className="w-6 z-10"
				src="/icons/checkmark.png"
				alt="check"
			/>
			<span className="dark:text-white z-10">{title}</span>
			<div
				style={{
					width: isSelected ? `${percentage}%` : 0,
				}}
				className="absolute top-0 dark:bg-green-800 bg-green-200 h-full left-0 rounded-xl"
			/>
		</button>
	);
}

PollOptions.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	isSelected: PropTypes.bool,
	votes: PropTypes.number,
};

export default PollOptions;
