
import BookList from '../../../shared/components/BookList'
import Sidebar from '../../../shared/components/Sidebar'
import Breadcrumb from '../../../shared/components/Breadcrumb'
import BannerCarousel from '../../../shared/components/BannerCarousel'
import DiscoverCate from '../../../shared/components/DiscoverCate'

import RelSearchTopSeller from '../../../shared/components/RelSearchTopSeller'
import FilterBook from '../../../shared/components/FilterBook'


export default function HomePage() {
  return (

    <div className='w-full max-w-screen  bg-[#F5F5FA] overflow-hidden'>
        
      {/* breadcrumb */}
      <div className=' bg-[#F5F5FA] ml-6 h-[53px]  w-fit flex items-center'>
        <Breadcrumb />
      </div>
      {/* main content */}
      <div className='ml-6 mr-6 flex flex-row  max-w-screen '>
      <div className='shrink-0 '>
          <Sidebar />
        </div>
        {/* Carousel top sach*/}
        <div className=' ml-6 flex flex-col pl-6 min-w-0' >
          <div className='bg-white w-full h-[74px] rounded-b-lg pt-4 pl-4 '>
            <span className='text-[28px] font-semibold'>Nhà Sách Tiki</span>
          </div>
          <div className='w-full'>
          <BannerCarousel />
          </div>
           

         
        
          {/* kham pha danh muc */}
          <DiscoverCate />
          {/* filter book */}
          <FilterBook/>
          {/* list book data */}
          <div className='w-full'>
          <BookList/>
          </div>
         
          {/* tim kiem lien quan */}
          <div className='mt-15 mb-10'>
          <RelSearchTopSeller/>
          </div>
      
        </div>

       
      </div>

    </div>


  )
}