import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

function AccordianView({ title, description }) {
	const [open, setOpen] = useState(false);

	const handleAccordianView = useCallback(() => {
		setOpen(!open);
	}, [open]);

	return (
		<div className="w-96 self-center flex items-start flex-col rounded-2xl overflow-hidden">
			<button
				type="button"
				aria-label={title}
				onClick={handleAccordianView}
				className="flex w-full cursor-pointer hover:bg-gray-100 bg-white px-5 py-3 flex-row items-center justify-between"
			>
				<h2>{title}</h2>
				<img
					className={`w-3 h-3 dark:invert transform ${
						open ? '-rotate-90' : 'rotate-90'
					} `}
					src="/icons/rightarrow.png"
					alt="dropdown-icon"
				/>
			</button>
			<p
				aria-hidden={true}
				aria-description={description}
				aria-expanded={open}
				className={`${
					open ? 'h-full p-5' : 'p-0 h-0'
				} bg-gray-100 w-full overflow-hidden text-gray-700 `}
			>
				{description}
			</p>
		</div>
	);
}

AccordianView.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default AccordianView;
