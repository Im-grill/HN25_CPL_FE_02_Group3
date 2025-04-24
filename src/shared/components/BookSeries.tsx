
  type Book = {
    image: string;
    discount: string;
  };
  
  type Series = {
    name: string;
    books: Book[];
  };
export default function BookSeries({name,books}:Series) {
  
    return (
        <div className='flex bg-white  w-auto rounded-sm '>
            {/* 1980 books */}
            <div className="relative w-[186px] h-[186px] overflow-hidden  rounded-bl-sm rounded-tl-sm">
                {/* Ảnh nền */}
                <img
                    src="/assets/BookListBg.png"
                    alt="error"
                    className="w-full h-full object-cover blur-2xl absolute inset-0"
                />

                {/* Logo căn giữa */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/assets/Logo1980Book.png" alt="error" className="w-[123px] h-[123px]" />
                </div>
            </div>
            <div className='pt-4 pl-4'>
                <span className='text-[20px] font-medium h-[60px] block'>{name}</span>
                <div className='flex '>
                    <span className='text-[#808089] mr-1'>Tài trợ bởi </span>
                    <span className='font-medium mr-1'> 1980 Books Tại Tiki Trading</span>
                    <span className='text-[#808089] mr-1'>5/5 </span>
                    <img src='/assets/star.png'
                        alt='' className='size-5' />
                </div>
                {/* book */}
                <div className='flex mt-7'>
                    {books.map((book,index) =>
                        <div key={index} className='relative'>
                            <img className='size-16 ' src={book.image} />
                            <div className='flex absolute bottom-0 right-0 rounded-[8px] w-[35px] h-4 bg-red-500 items-center justify-center'>
                                <span className="text-white text-[10px] font-bold  ">{book.discount}</span>
                            </div>
                        </div>


                    )}
                </div>
            </div>





        </div>
    )
}