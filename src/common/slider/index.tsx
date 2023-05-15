import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './styles.scss';

const Slider = () => {
  const ImageList = [
    {
      id: 1,
      src: 'https://swiperjs.com/demos/images/nature-1.jpg',
    },
    {
      id: 2,
      src: 'https://swiperjs.com/demos/images/nature-2.jpg',
    },
    {
      id: 3,
      src: 'https://swiperjs.com/demos/images/nature-3.jpg',
    },
    {
      id: 4,
      src: 'https://swiperjs.com/demos/images/nature-4.jpg',
    },
    {
      id: 5,
      src: 'https://swiperjs.com/demos/images/nature-5.jpg',
    },
  ];
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 800,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {ImageList.map((el: any) => {
        return (
          <SwiperSlide key={el.id}>
            <Image src={el.src} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
