import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BookSeries from './BookSeries';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
function BannerCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='relative'>
    <Carousel activeIndex={index} onSelect={handleSelect}   
    prevIcon={<div className=" bg-black/30 absolute left-0 px-1 pt-2 pb-2 "><FontAwesomeIcon icon={faChevronLeft}  className='text-white/50 opacity-75'/></div>} 
    nextIcon={<div className=" bg-black/30 absolute right-0 px-1 pt-2 pb-2"><FontAwesomeIcon icon={faChevronRight} className='text-white/50 opacity-75'/></div>} 
  indicators ={false}
    >
      <Carousel.Item>
        <div className='flex gap-2 w-full justify-between'>
        <BookSeries/>
        <BookSeries/>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className='flex'>
        <BookSeries/>
        <BookSeries/>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className='flex'>
        <BookSeries/>
        <BookSeries/>
        </div>
        
      </Carousel.Item>
      
    </Carousel>
    <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            className={`w-4 h-[2px] rounded-full transition-all ${
              index === idx ? "bg-[#0A68FF] w-6 h-[2px]" : "bg-gray-400"
            }`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;