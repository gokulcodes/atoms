import { useContext, useEffect } from 'react';
import carouselContext from '../controller/CarouselContext';
import PropTypes from 'prop-types';

function Controls({ ref, autoPlay, delay }) {
	const { currentActiveSlide, dispatch } = useContext(carouselContext);
	let totalSlides = ref.current.children.length;
	function handlePreviousButton() {
		let newIndex = (currentActiveSlide + totalSlides - 1) % totalSlides;
		dispatch({ type: 'setSlide', payload: newIndex });
	}

	function handleNextButton() {
		let newIndex = (currentActiveSlide + totalSlides + 1) % totalSlides;
		dispatch({ type: 'setSlide', payload: newIndex });
	}

	useEffect(() => {
		let intervalId;
		if (autoPlay) {
			intervalId = setInterval(handleNextButton, delay);
		}
		return () => {
			clearInterval(intervalId);
		};
	}, [currentActiveSlide]);

	useEffect(() => {
		let carousel = ref.current;
		carousel.scrollTo({
			left: currentActiveSlide * 600,
			behavior: 'smooth',
		});
	}, [currentActiveSlide]);

	return (
		<div className="absolute top-[50%] w-11/12 text-white flex justify-between">
			<button
				onClick={handlePreviousButton}
				className="hover:bg-gray-100 dark:hover:bg-bodyBg-dark cursor-pointer p-2 rounded-full bg-white/20"
			>
				<img
					className="w-6 h-auto dark:invert"
					src="/icons/left.png"
					alt="left"
				/>
			</button>
			<button
				onClick={handleNextButton}
				className="hover:bg-gray-100 dark:hover:bg-bodyBg-dark cursor-pointer p-2 rounded-full bg-white/20"
			>
				<img
					className="w-6 transform rotate-180 h-auto dark:invert"
					src="/icons/left.png"
					alt="right"
				/>
			</button>
		</div>
	);
}

Controls.propTypes = {
	ref: PropTypes.object.isRequired,
	autoPlay: PropTypes.bool,
	delay: PropTypes.number,
};

export default Controls;
