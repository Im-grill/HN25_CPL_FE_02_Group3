import { useState, useRef } from 'react';
import BookSeries from './BookSeries';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Book = {
  image: string;
  discount: string;
};

type Series = {
  name: string;
  books: Book[];
};
function BannerCarousel() {
  const seriesBook: Series[] = [
    {
      name: "Top Sách Bán Chạy",
      books: [
        {
          image: "/assets/book1.png"
          , discount: "-32%"
        },
        {
          image: "/assets/book2.png"
          , discount: "-32%"
        },
        {
          image: "/assets/book3.png"
          , discount: "-37%"
        }
      ]
      ,
    },
    {
      name: "Bộ Sưu Tập Sách Mới Giảm Đến",
      books: [
        {
          image: "/assets/book4.png"
          , discount: "-50%"
        },
        {
          image: "/assets/book5.png"
          , discount: "-25%"
        },
        {
          image: "/assets/book6.png"
          , discount: "-32%"
        }
      ]
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  // Tạo cặp BookSeries cho mỗi slide


  const handleBeforeChange = (_current: number, next: number) => {
    setCurrentSlide(next);
  };

  const goToSlide = (slideIndex: number) => {
    carouselRef.current?.goTo(slideIndex);
  };

  const next = () => carouselRef.current?.next();
  const prev = () => carouselRef.current?.prev();
  return (
    <div className='w-full   mt-6  overflow-x-hidden cursor-pointer md:block hidden'>
      <div className='relative h-[200px]   '>
        <Carousel
          ref={carouselRef}
          arrows={false}
          infinite={false}
          beforeChange={handleBeforeChange}
          dots={false}
          className="h-full"

        >

          {seriesBook.map((items, index) => (
            <div key={`slide-${index}`} className="h-full ">
              <div className="flex h-full gap-4   ">
                <div className="flex-1 min-w-0">
                  <BookSeries name={items.name} books={items.books} />
                </div>
                <div className="flex-1 min-w-0">
                  {seriesBook[index + 1] && <BookSeries name={seriesBook[index + 1].name} books={seriesBook[index + 1].books} />}
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
          {seriesBook.map((_, idx) => (
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