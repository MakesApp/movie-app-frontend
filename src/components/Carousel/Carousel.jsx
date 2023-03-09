import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Carousel.styles';
import { useNavigate } from 'react-router-dom';

// 	{ id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU', title: 'Title 1', description: 'Description 1' },
// 	{ id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU', title: 'Title 2', description: 'Description 2' },
// 	{ id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU', title: 'Title 3', description: 'Description 3' },
// ];
const Carousel = ({data}) => {
	const navigate=useNavigate();
	const settings={
		autoplay:true,
		swipeToSlide: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		infinite: true,
		autoplaySpeed: 3000,
	};
	return (
		<Slider
			className='slick-slider'
			style={{
				padding: 0,
				width: "100%",
				maxHeight: "500px",
			}}
			{...settings}
		>
			{data?.map((movie) => (
				<S.Slide className='slide' key={movie.id} onClick={
					()=>{
						navigate(`/movies/details/${movie.id}`);
					}
				}>
					<S.Image src={movie?.poster||movie?.backdrop_path} alt={movie?.name} />
					<S.Info></S.Info>
					<S.Name>{movie?.name}</S.Name>
					<S.ImageDetail>{movie.description}</S.ImageDetail>
				</S.Slide>
			))}
		</Slider>
	);
};

export default Carousel;
