import React, {useState,useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(4);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);

return (
  <Carousel
    autoPlay={true}
    interval={3000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
    onChange={(index) => setCurrentSlide(index)}
    selectedItem={currentSlide}
    onClickItem={(index) => setCurrentSlide(index)}
    onInit={() => setTotalSlides(4)}
  >
    <div>
      <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/headers/3515100/0.jpg" />
    </div>

    <div>
      <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/headers/3515111/fea-2019-white-coat-ceremony.jpg" />
    </div>

    <div>
      <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/headers/3515112/landing-banner.jpg" />
    </div>

    <div>
      <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/headers/3515128/midage_group_inside_doctors_001_web_banner_center.jpg" />
    </div>
  </Carousel>
);
};

export default CarouselPage;