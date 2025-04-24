

export default function DiscoverCate() {

    const cate = [
        {
            image: "/assets/englishbook.png"
            , name: "English Books"
        },
        {
            image: "/assets/sachtiengviet.png"
            , name: "Sách tiếng Việt"
        },
        {
            image: "/assets/vanphongpham.png"
            , name: "Văn phòng phẩm"
        },
        {
            image: "/assets/qualuuniem.png"
            , name: "Quà lưu niệm"
        }
    ]
    return (
        <div className='md:flex bg-white mt-[20px]   flex-col pb-2 cursor-pointer hidden'>
            <span className='font-semibold  mt-3 ml-4 '>Khám phá theo danh mục</span>
            <div className="flex ml-[45px] mt-2.5 pb-4  gap-10">
                {cate.map((cat,index) => 
                    <div key={index} className="flex flex-col justify-center items-center pl-6 pr-6">
                        <img src={cat.image} className="h-[88px] w-[88px] rounded-[44px] hover:scale-[110%] duration-500" alt="error"/>
                      <span className="text-sm font-medium mt-2.5">{cat.name}</span>
                    </div>
                )}

            </div>
        </div>
    )
}