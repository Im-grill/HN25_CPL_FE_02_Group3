import { useState, useRef } from 'react';
import BookSeries from './BookSeries';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  // Tạo cặp BookSeries cho mỗi slide
  const slides = [
    [1, 2], // Slide 0
    [3, 4], // Slide 1
    [5, 6]  // Slide 2
  ];

  const handleBeforeChange = (_current: number, next: number) => {
    setCurrentSlide(next);
  };

  const goToSlide = (slideIndex: number) => {
    carouselRef.current?.goTo(slideIndex);
  };

  const next = () => carouselRef.current?.next();
  const prev = () => carouselRef.current?.prev();
  return (
    <div className='w-full overflow-hidden  mt-6  '>
      <div className='relative h-[200px] mx-auto max-w-[1200px]'>
        <Carousel
          ref={carouselRef}
          arrows={false}
          infinite={false}
          beforeChange={handleBeforeChange}
          dots={false}
          className="h-full"

        >

          {slides.map((_, index) => (
            <div key={`slide-${index}`} className="h-full ">
              <div className="flex h-full gap-4 ">
                <div className="flex-1 min-w-0">
                  <BookSeries />
                </div>
                <div className="flex-1 min-w-0">
                  <BookSeries />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        {/* custome button change slide */}
        <button
          onClick={prev}
          className="absolute  top-1/2 -translate-y-1/2 bg-black/10 p-1 rounded  pt-2 pb-2 cursor-pointer hover:bg-black/30"
        >
          <FontAwesomeIcon icon={faChevronLeft} size='xl' className='text-white/50' />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/10 p-1 rounded pt-2 pb-2 cursor-pointer hover:bg-black/30"
        >
          <FontAwesomeIcon icon={faChevronRight} size='xl' className='text-white/50' />
        </button>
        {/* cutome pagination */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 ">
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
    </div>
  );
}

export default BannerCarousel;