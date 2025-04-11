import { useContext } from 'react';
import carouselContext from '../controller/CarouselContext';
import PropTypes from 'prop-types';

function ProgressDots({ ref }) {
	const { currentActiveSlide, dispatch } = useContext(carouselContext);
	let totalSlides = ref?.current?.children.length;

	function handleProgressJump(index) {
		dispatch({ type: 'setSlide', payload: index });
	}
	return (
		<div className="w-full bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 ">
			<div className=" flex items-end justify-center gap-4 mb-5 ">
				{Array.from({ length: totalSlides }).map((_, index) => (
					<div
						key={index}
						onClick={() => handleProgressJump(index)}
						className={`w-2 h-2 rounded-full cursor-pointer hover:scale-150 transform ${
							currentActiveSlide == index
								? 'bg-white'
								: 'bg-white/20'
						} `}
					/>
				))}
			</div>
		</div>
	);
}

ProgressDots.propTypes = {
	ref: PropTypes.object,
};

export default ProgressDots;
