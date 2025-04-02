import React from 'react'
import { IBook } from '../../interfaces'
type BookCardProps = {
  props: IBook,
}
export default function BookCard({ props }: BookCardProps) {
  return (

    <div className='relative z-1  rounded-2xl bg-white '>
      <span className='text-[10px] font-bold absolute top-2 right-2 z-1'>AD</span>
      {/* image */}
      <div className=' relative'>
        <img src={props.images?.[0].base_url} alt='' className='size-[300px] hover:scale-120 z-2 border-1 overflow-hidden object-cover' />
        <img src="/assets/Top_Free_Verify.png" alt="" className=' bottom-0 absolute' />
      </div>
      {/* price */}
      <div className='mt-2 ml-3 flex items-baseline'>
        <span className='text-[18px] text-[#FF424E] font-semibold'>69.000</span>
        <span className='text-[13.5px] text-[#FF424E] font-semibold self-start'>₫</span>
        <span className='font-medium text-[14px] ml-1 self-center'>-30%</span>
      </div>
      {/* author */}
      <div className='mt-2 ml-3'>
        <span className='text-[14px] text-[#808089] font-normal'>NGÔ TẤT TỐ</span>
      </div>
      {/* name book */}

      <div className='ml-3 mt-1 mr-5 '>
        <span>
          Sách - Lão Tử Đạo Đức Kinh
          (Bách Gia Tinh Hoa) - SBOOKS
        </span>
      </div>

      {/* time ship */}
      <div className='ml-3 mr-3 border-t-1 border-[#EBEBF0] mt-[50%]'>
        <span className='text-[#808089] font-normal'>Giao thứ 3, 01/04</span>
      </div>
    </div>
  )
}
