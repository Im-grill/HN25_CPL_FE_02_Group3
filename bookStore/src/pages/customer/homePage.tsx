import React from 'react'
import BookList from '../../shared/components/BookList'
import Sidebar from '../../shared/components/Sidebar'
import Breadcrumb from '../../shared/components/Breadcrumb'
// import BannerCarousel from '../../shared/components/BannerCarousel'
import DiscoverCate from '../../shared/components/DiscoverCate'
import FilterBook from '../../shared/components/FilterBook'

export default function HomePage() {
  return (

    <div className='w-full bg-[#F5F5FA] overflow-x-hidden'>
      {/* breadcrumb */}
      <div className=' bg-[#F5F5FA] ml-6 h-[53px] flex items-center'>
        <Breadcrumb />
      </div>
      {/* main content */}
      <div className='ml-6 mr-6 flex flex-row '>
        <Sidebar />
        {/* Carousel top sach*/}
        <div className='w-full ml-5 flex flex-col' >
          <div className='bg-white w-full h-[74px] rounded-b-lg pt-4 pl-4 '>
            <span className='text-[28px] font-semibold'>Nhà Sách Tiki</span>
          </div>
          <div className='w-full mt-3'>
            {/* <BannerCarousel /> */}
          </div>
          {/* kham pha danh muc */}
          <DiscoverCate />
          {/* filter book */}
          <FilterBook/>
          {/* list book data */}
          <BookList/>
        </div>

       
      </div>

    </div>


  )
}
