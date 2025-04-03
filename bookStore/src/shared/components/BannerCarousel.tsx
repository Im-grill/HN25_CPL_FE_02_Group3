import { useState, useRef } from 'react';
import BookSeries from './BookSeries';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';

function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  // Tạo cặp BookSeries cho mỗi slide
  const slides = [
    [1, 2], // Slide 0
    [3, 4], // Slide 1
    [5, 6]  // Slide 2
  ];

  const handleBeforeChange = (current: number, next: number) => {
    setCurrentSlide(next);
  };

  const goToSlide = (slideIndex: number) => {
    carouselRef.current?.goTo(slideIndex);
  };

  return (
    <div className=' w-[100%]'>
      <Carousel
        ref={carouselRef}
        arrows
        infinite={false}
        beforeChange={handleBeforeChange}
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
      >
        {slides.map((pair, index) => (
          <div key={`slide-${index}`} className="flex gap-4 px-2">
            <div className=" flex">
              <BookSeries />
              <BookSeries />
            </div>

          </div>
          
        ))}
      </Carousel>

      {/* Custom dots */}
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-[2px] rounded-full transition-all ${currentSlide === idx ? "bg-[#0A68FF] w-6 h-[2px]" : "bg-gray-400"
              }`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;