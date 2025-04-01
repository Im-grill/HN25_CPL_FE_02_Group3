import React from 'react'

export default function FilterBook() {
    return (
        <div className='flex bg-white mt-[34px]   flex-col pb-2 pl-4'>
            <span className='font-semibold  mt-3 '>Tất cả sản phẩm</span>
            <div className="flex flex-col items-start gap-3">
                <label htmlFor="Option1" className="inline-flex items-center gap-3">
                    <input type="checkbox" className="size-5 rounded  shadow-sm" id="Option1" />

                    <span className="font-medium text-gray-700"> Option 1 </span>
                </label>


            </div>
        </div>
    )
}
