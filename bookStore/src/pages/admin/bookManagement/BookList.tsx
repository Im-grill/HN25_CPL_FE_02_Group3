import { useState, useEffect } from "react"
import BookEdit from "./BookEdit"
import { useNavigate } from "react-router-dom"
import { IBook } from "../../../interfaces/BookInterfaces";
import { deleteBook, getBook } from "../../../api/book.service";
import { useForm, SubmitHandler } from "react-hook-form";
type IFormInput = {
    search: string
    sort: number
}
export default function BookListManagement() {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [data, setData] = useState<IBook[]>([])
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const [searchItems, setSearchItems] = useState<IBook[]>([])
    const [currentBook, setCurrentBook] = useState<IBook>()
    const totalPages = Math.ceil(searchItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = searchItems.slice(startIndex, endIndex);
     
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const isOpenModal = (book:IBook) => {
        setOpenModal(true)
        setCurrentBook(book)
    }
    const isCloseModal = () => {
        setOpenModal(false)
    }

const handleDeleteBook = async (_id:string)=>{
 try {
  const res =   await deleteBook(_id);
  if(res){
  console.log("delete ok")
  getBookData();
  }
 } catch (error) {
    console.log(error)
 }
  
}
    const getBookData = async () => {
        const res = await getBook();
        setData(res)
        setSearchItems(res)
    }
    const seachBook: SubmitHandler<IFormInput> = (e) => {
        try {
            if (e.search.length > 0) {
                

                const book = data.filter((item) => item.name?.trim().toLowerCase().includes(e.search.trim().toLowerCase()))
                setSearchItems(book)
                return;
            }
            setSearchItems(data)
        } catch {
            console.log(errors)
        }

    }
    const sortByPrice = (e: string) => {
        const sortData = [...data]
        if (e.localeCompare("asc")) {
            setSearchItems(sortData.sort((a, b) => (b.current_seller?.price || 0) - (a.current_seller?.price || 0)))
            return;
        }
        if (e.localeCompare("dsc")) {
            setSearchItems(sortData.sort((a, b) => (a.current_seller?.price || 0) - (b.current_seller?.price || 0)))
            return;
        }
        else setSearchItems(data)
    }
    useEffect(() => {
        getBookData();
    }, [currentBook])
    return (


        <div className="relative  max-w-full overflow-x-auto ">
            <span className='text-3xl font-bold block pb-5'>List Book </span>
            {/* add new book button */}
            <button
                className="group relative inline-block text-sm font-medium text-indigo-600 focus:ring-3 focus:outline-hidden mb-3"
                onClick={() => navigate('/admin/book/add')}
            >
                <span
                    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                ></span>

                <span className="relative block border border-current bg-white px-8 py-3"> Add new book </span>
            </button>
            {/* search button */}
            <div className="mb-2.5">
                <form onSubmit={handleSubmit(seachBook)}>
                    <label htmlFor="Search">
                        <div className="relative">
                            <input
                                type="text"
                                id="Search"
                                placeholder="Enter book name..."
                                {...register('search')}
                                className="mt-0.5 w-full rounded border-gray-300 pe-10 shadow-sm sm:text-sm border-1 p-2 outline-0"
                            />
                            <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                                <button
                                    type="submit"


                                    className="rounded-full p-1.5  text-gray-700 transition-colors hover:bg-gray-100"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </label>
                </form>

            </div>
            {/* sort by price */}
            <div>
                <label htmlFor="Headline">

                    <select
                        name="Headline"
                        id="Headline"
                        className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm border-1 p-2 mb-4 outline-0"
                        onChange={e => sortByPrice(e.target.value)}
                    >
                        <option value="">Sort by price</option>
                        <option value='asc'>Low to high</option>
                        <option value="des">High to low</option>
                    </select>

                </label>
            </div>
            {/* table data of books */}
            <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 overflow-x-auto">
                <thead className="text-xs text-white uppercase bg-gray-700 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tên sách
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tác Giả
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nhà xuất bản
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Giá tiền
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hình ảnh
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tùy chỉnh
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((book, index) =>
                        <tr key={index} className="bg-white border-b   border-gray-500">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {index}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                {book.name}
                            </th>
                            <td className="px-6 py-4">
                                {book.authors?.[0].name}
                            </td>
                            <td className="px-6 py-4">
                                {book.specifications?.[0].attributes?.[0].value}
                            </td>
                            <td className="px-6 py-4">
                                {book.current_seller?.price}
                            </td>
                            <td className="px-6 py-4">
                                <img src={book.images?.[0].base_url}
                                    className='h-max max-w-[100px]'
                                />
                            </td>
                            <td className=" px-6 py-4 ">
                                <div className="flex">
                                    <button
                                        className=" flex-1 cursor-pointer inline-flex items-center gap-2 rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                        type='button'
                                        onClick={()=>isOpenModal(book)}
                                    >

                                        <span className="text-sm font-medium  whitespace-nowrap ">Chỉnh sửa</span>
                                    </button>
                                        {/* <!-- Main modal --> */}
          

                                    <button
                                        className=" flex-1  ml-2 cursor-pointer inline-flex items-center gap-2 rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                        type='button'
                                        onClick={()=>handleDeleteBook(book.id)}
                                    >

                                        <span className="text-sm font-medium text-center"> Xóa</span>
                                    </button>
                                </div>

                            </td>
                        </tr>
                    )}


                </tbody>
            </table>
            {/* pagination */}
            <ul className="flex justify-center gap-1 text-gray-900 mt-5 overflow-hidden">
                <li>
                    <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 disabled:opacity-50"
                        aria-label="Previous page"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <li key={page}>
                        <button
                            onClick={() => handlePageChange(page)}
                            className={`block size-8 rounded border ${currentPage === page ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-200 hover:bg-gray-50'} text-center text-sm/8 font-medium`}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                <li>
                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 disabled:opacity-50"
                        aria-label="Next page"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </li>
            </ul>
          {currentBook ?  <BookEdit isOpen={openModal} onClose={isCloseModal} bookData={currentBook} />:null} 

        



        </div>

    )
}
