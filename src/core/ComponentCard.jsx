/** @format */

import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

export default function ComponentCard({ details }) {
	const { name, id, readMeUrl, component } = details;
	const navigate = useNavigate();

	const handleComponentSelection = useCallback(
		() =>
			navigate(`/component/${id}`, {
				state: {
					id: id,
					name: name,
					readMeUrl: readMeUrl,
				},
			}),
		[]
	);

	return (
		<div
			className="dark:bg-cardBg-dark animate-openup cursor-pointer group transform overflow-hidden hover:-translate-y-1 hover:border-black/10 hover:dark:border-white/10 border border-transparent grow bg-cardBg rounded-4xl p-4"
			onClick={handleComponentSelection}
		>
			<div className="rounded-2xl overflow-hidden w-full">
				<div className="dark:bg-demoBg-dark group-hover:scale-105 transform bg-demoBg flex items-center justify-center h-40 xl:h-[15vh] pointer-events-none p-10">
					{component}
				</div>
			</div>
			<h2 className="dark:text-white flex justify-center mt-4 font-medium mb-2">
				{name}
			</h2>
		</div>
	);
}

ComponentCard.propTypes = {
	details: PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		component: PropTypes.element,
		readMeUrl: PropTypes.string.isRequired,
	}),
};
