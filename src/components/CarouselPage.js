import React, {useState,useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(3);
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
  onChange={(index) => setCurrentSlide(index)}
  selectedItem={currentSlide}
  onClickItem={(index) => setCurrentSlide(index)}
  onInit={() => setTotalSlides(3)}>
    <div>
      <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/images/25371306/huge/vera_250.gif" />
      {/* <p className="legend">Legend 1</p> */}
    </div>

    <div>
      <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/images/25371306/huge/vera_250.gif" />
      <p className="legend">Legend 2</p>
    </div>

    <div>
      <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/images/25371306/huge/vera_250.gif" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);
};

export default CarouselPage;