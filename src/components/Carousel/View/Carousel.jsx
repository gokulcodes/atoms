import { useReducer, useRef } from 'react';
import CarouselContext, {
	initialState,
	reducer,
} from '../controller/CarouselContext';
import ProgressDots from './ProgressDots';
import Slide from './Slide';
import Controls from './Controls';
import PropTypes from 'prop-types';

function Carousel({ children, autoPlay, delay }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const carouselRef = useRef();

	return (
		<CarouselContext.Provider value={{ ...state, dispatch }}>
			<div className="w-full flex items-center justify-center">
				<div className="w-[600px] h-[600px] flex items-center justify-center overflow-hidden relative rounded-4xl">
					<Controls
						autoPlay={autoPlay}
						delay={delay}
						ref={carouselRef}
					/>
					<div
						ref={carouselRef}
						className="flex overflow-hidden"
					>
						{children}
					</div>
					<ProgressDots ref={carouselRef} />
				</div>
			</div>
		</CarouselContext.Provider>
	);
}

Carousel.Slide = Slide;

Carousel.propTypes = {
	children: PropTypes.element.isRequired,
	autoPlay: PropTypes.bool,
	delay: PropTypes.number,
};

export default Carousel;
