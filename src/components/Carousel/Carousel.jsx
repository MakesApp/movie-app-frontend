import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Carousel.styles';

// 	{ id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU', title: 'Title 1', description: 'Description 1' },
// 	{ id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU', title: 'Title 2', description: 'Description 2' },
// 	{ id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU', title: 'Title 3', description: 'Description 3' },
// ];
const Carousel = ({data}) => {
	console.log(data);
	const settings={
		autoplay:true,
		swipeToSlide: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		infinite: true,
		autoplaySpeed: 2000



	};
	return (
		<Slider className='slick-slider'  style={{
			padding: 0, background: '#000', width: '100%', maxHeight: '500px',
		}}
		{...settings}>
			{data?.map(item => (
				<S.Slide className='slide' key={item.id}>
					<S.Image src={item?.poster} alt={item?.name} />
					<S.Info>
						 <S.Name>{item?.name}</S.Name>
						<p>{item.description}</p> 
					</S.Info>
				</S.Slide>
			))}
		</Slider>	
	);
};

export default Carousel;