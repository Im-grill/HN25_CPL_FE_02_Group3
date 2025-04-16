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
          image: "https://s3-alpha-sig.figma.com/img/3baf/f054/9329b1d90b157988da41c763a18ef7b4?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xi7JJyz1aM~2hloVHpwvfWpdbR-dTqOldkJ85hwfYkjn5fC8wbOueLqS0rEzGO7xYcSMvHry~8T0SfRfd~dndKTfQ1Oodju0AucIiqtefCvB3PVGjjyz4kOyPK~2tewDYGkHxzeBgW71b69VZqn8IqWriWNxRVQ6Z~5WdU9AePSfvdkskFFn1vivhfpUPrdayxQAaXKtWdIh3-JyTJkuVpzsd1aj1oknxN1Yk2lTk9X62RK-PRwHisa~2jBu9vAf4iV91Q6g-Bk8Ekh30ZsNJMeWDUVxteokAQ9irAxseuSutZjSf2JHH-e~paosuJiwABopqIUNf0xF0BaDy3XhtQ__"
          , discount: "-32%"
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/866f/816d/467787ac76bacbc88e295991f23a5400?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWUEmAqovBmZJGhJBd4kUk8ti9fY~DsPabIBCNMtk7uM4PfJVoIlX7iOhGkLdMDzf5nQuFGgGlhJsfJpp7n5OyEgGXbY2GBTUnWchr-ceOJdz8z3nG6RYYX7nxIPQzPFOrRmCM-REgHMo1FBIPMndX6JC2Eijs30RlBVw0wVdceUWWt7vcJX2dyj~2UgxEbD3wDjW1mrHZzjkPyrB0wINSX~34CGEEHQfA6NPKdRKn7yEm9pHOdl8T7oMfZSZepZN7VQRnJsflVpIPPFrR31B7xlS6PlTj~kWBbv7idDtI1AIZsZoQ8VgGcVRLm0AXEd16NaXAphWSFkUFdPRs1iAw__"
          , discount: "-32%"
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/62b8/11f7/4c7c3a7f71eb3efadf9235b4832ab141?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ONZzu9Oh83BVqHZ8qBzENf2ULfjxSkXZzgk19oIWjhjuUfrlwLUGAXohRGvibBRW9lCLuVDPqrzjVO5rAZgppkTtgzVwPyz6mKRTg4ljjDOwmaDN2BHexaP5Eo3KjVO~ZWZVrSB~kzoFuWfdaar3sn7sboKE1hxO6DUY25jQZglye8TdJHKPS5HnwB~O3dB68kMsyLJqttbaHfbRCH~ympun6NVhlesE-f9Qyw~DHeY0dG6v9KIq0TF51ox-B9LGv2Sa6UER7yzYKwbLupFNxUyrgHCrcCaYQd8nOLiAYIqSxtscrd7oTu1To~BdRemSuqmTgpqj79qF0Kw~ehDByQ__"
          , discount: "-37%"
        }
      ]
      ,
    },
    {
      name: "Bộ Sưu Tập Sách Mới Giảm Đến",
      books: [
        {
          image: "https://s3-alpha-sig.figma.com/img/456e/1c32/705aed82dacdf1847d2ba14a8dd2ac03?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rPY2g~zFSA98FuAvqIUA7cdmKDUAGMPnoIy04LYuWDxq5yGTb5wHy1c4SU4QtV0OK3SBbAh6htvfKGAPOQj4i87qINCdq7fKPeAPTUtnXayuWQKs8ShqKqlm70TO9zQ1z~SFbWeuOrLrHfmtqttmk0Ckn5hqN1rxh16JoHNREE0j3-VD5AguOxw3BjLHdnJQlLDi9nfie2Kxm6jtpc91WR-0ll9qib0zebfeMfJWP4UUVMRXODYDo2cL5qQSv3Nqs0fMcGLAmJZrhqBan7XaIh4WVIgkE7pP4N2hbQPIu0KY5j8PISQhCnFVcvJgpWFU4ZSY64yOFTC4Ur7yciIh9Q__"
          , discount: "-50%"
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/9169/8e5a/958335e2c46519d43138c1407d9a73c8?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LB1V8p1IuVvKizXSJj29glq-vJhKDTewiDC-qo7WIb7jFcxoGb7WPMoGQqksEWLsPj3QNFiQd1A4GhQBJtX9s2kEnbItLQQ6NuGzvO3wGs6NBNnWpGeRYNUAR5CqdM01sXdlOgBoOsOXkaIcoOKFXlKdWIYMfXGZVA5YzE1KeJwFDdY-o6HPyeaRens3lEdWj0ueCWW8ogNkbbgVGCuRrtXy8itIKCjJCRVy2VL~~DCTtQPOOhMP8aF9WA1EHXQjxsZRm3JlYp8Tza1jhl0iwwaXBastAvNuywSAO7jQF2drieVF4OirxEa-EArzMqB1JfpJnlEXtQ0e9Yufb8~nqg__"
          , discount: "-25%"
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/d423/d451/cc94e0efeea82cf3acd323a2a9a67f93?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NRxxEn1ib44f3koUnjdkbv~xjW9xy77w5EOdv81q2DLfTDRNAw5I~67UoMZeVQE~ZNFi0eGPwaVRWi7D~xrpI07rSMpaGBb5EnWKCYBDvx5A0F~Cot706BEnJBHDmQVC5F1WVkQ7M81dH~Rp68~oiKrS1YTcDZOZMmRePwweJFiYv6lijJoJ1zvghBryAOGyj~owMfAyzh1~EJG7DxW-aiPcO5KRrANTxYo249HBbmavs2MRVF-2--uHCz4livYL8~VcrWot0YvA8JzZe4fWgq5eTnw3cLumR-2r3Jjf1ZOdMpQ650ld2GHSkvDVGZc-zln3Sjxzy-vIIPAcNFECmQ__"
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