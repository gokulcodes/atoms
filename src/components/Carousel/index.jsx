import Carousel from './View/Carousel';

function CarouselView() {
	return (
		<Carousel
			autoPlay={true}
			delay={2000}
		>
			<Carousel.Slide>
				<img
					loading="lazy"
					className="object-cover"
					src="https://images.pexels.com/photos/110473/pexels-photo-110473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
			</Carousel.Slide>
			<Carousel.Slide>
				<img
					loading="lazy"
					className="object-cover"
					src="https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
			</Carousel.Slide>
			<Carousel.Slide>
				<img
					loading="lazy"
					className="object-cover"
					src="https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
			</Carousel.Slide>
			<Carousel.Slide>
				<img
					loading="lazy"
					className="object-cover"
					src="https://images.pexels.com/photos/3722806/pexels-photo-3722806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
			</Carousel.Slide>
		</Carousel>
	);
}

export default CarouselView;
