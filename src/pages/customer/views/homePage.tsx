
import BookList from '../../../shared/components/BookList'
import Sidebar from '../../../shared/components/Sidebar'
import Breadcrumb from '../../../shared/components/Breadcrumb'
import BannerCarousel from '../../../shared/components/BannerCarousel'
import DiscoverCate from '../../../shared/components/DiscoverCate'
import { useState } from 'react'
import RelSearchTopSeller from '../../../shared/components/RelSearchTopSeller'
import FilterBook from '../../../shared/components/FilterBook'
import { FilterOptions } from '../../../interfaces/BookInterfaces'


export default function HomePage() {
  const [filters, setFilters] = useState<FilterOptions>({
    top_deal: false,
    freeship: false,
    rating: false,
    fastShip: false,
    sortBy: 'all'
  });
   
 
  return (

    <div className='w-full max-w-screen  bg-[#F5F5FA] overflow-hidden'>
        
      {/* breadcrumb */}
      <div className=' bg-[#F5F5FA] ml-6 h-[53px]  w-fit xl:flex items-center hidden'>
        <Breadcrumb />
      </div>
      {/* main content */}
      <div className='md:ml-6 md:mr-6 flex flex-row  max-w-screen '>
      <div className='shrink-0 hidden xl:flex'>
          <Sidebar />
        </div>
        {/* Carousel top sach*/}
        <div className=' xl:ml-6 flex flex-col xl:pl-6 min-w-0' >
          <div className='bg-white w-full h-[74px] rounded-b-lg pt-4 pl-4 hidden xl:block'>
            <span className='text-[28px] font-semibold'>Nhà Sách Tiki</span>
          </div>
          <div className='w-full overflow-hidden hidden xl:block'>
          <BannerCarousel />
          </div>
           

         
        
          {/* kham pha danh muc */}
          <DiscoverCate />
          {/* filter book */}
          <FilterBook  onFilterChange={(newFilters) => setFilters(newFilters)}  />
          {/* list book data */}
          <div className='w-full'>
          <BookList  filters={filters}/>
          </div>
         
          {/* tim kiem lien quan */}
          <div className='mt-15 mb-10 '>
          <RelSearchTopSeller/>
          </div>
      
        </div>

       
      </div>

    </div>


  )
}