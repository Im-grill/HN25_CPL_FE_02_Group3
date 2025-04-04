import { useState } from "react"
import BookEdit from "./BookEdit"

export default function BookListManagement() {
    const [openModal, setOpenModal] = useState(false)

    const isOpenModal = () => {
        setOpenModal(!openModal)
    }

    return (


        <div className="relative ">
            <span className='text-3xl font-bold block pb-5'>List Book </span>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
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
                    <tr className="bg-white border-b   border-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            0
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Sách thiếu nhi
                        </th>
                        <td className="px-6 py-4">
                            Kim đồng
                        </td>
                        <td className="px-6 py-4">
                            VN
                        </td>
                        <td className="px-6 py-4">
                            100.000
                        </td>
                        <td className="px-6 py-4">
                            <img src='https://s3-alpha-sig.figma.com/img/92f7/bcbe/caa9e65eaddb052d78527d6b1f5789a5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pz2auDE-dTU0tNx3XDGaCwB7M9AR6-ilh1z4mQyKbTSi825h1NrNiobV2ZN-CVtSTpab6fAJp6zQOa8P6noMQyME~fcAH9jVJC9dtUnGZa6Z6CRlS7zAkcOZ6q-EJNPv4YNJ9OQk~kVc~aqxGQzfcHwfXFCSLM2nexdTJw4WFantUY4a-zsppUlqHuC1Sw~IBeJAUaSyNuYDGMx3sNDmFMAvH3ldbC-HVgXUpk8xYRJkf6dB-45eJ~F0p~2H23GeUWpoLS1oCvTKQy~KYYg09xnF~bqqUx5XeHXh2FhTe994YEYxW0~cYE-i0Cew4~U5mzr6kyUXX-mtJRFGuAgrvQ__'
                                className='h-max max-w-[100px]'
                            />
                        </td>
                        <td className="px-6 py-4 ">
                            <button
                                className=" flex-1 cursor-pointer inline-flex items-center gap-2 rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                type='button'
                                onClick={isOpenModal}
                            >

                                <span className="text-sm font-medium"> Chỉnh sửa </span>
                            </button>
                            <button
                                className=" flex-1  ml-2 cursor-pointer inline-flex items-center gap-2 rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                type='button'
                            >

                                <span className="text-sm font-medium text-center"> Xóa</span>
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
            {/* pagination */}
            <ul className="flex justify-center gap-1 text-gray-900 mt-5">
                <li>
                    <a
                        href="#"
                        className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
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
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
                    >
                        1
                    </a>
                </li>

                <li
                    className="block size-8 rounded border border-indigo-600 bg-indigo-600 text-center text-sm/8 font-medium text-white"
                >
                    2
                </li>

                <li>
                    <a
                        href="#"
                        className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
                    >
                        3
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
                    >
                        4
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
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
                    </a>
                </li>
            </ul>
          

            {/* <!-- Main modal --> */}
            <BookEdit isOpen={openModal} onClose={isOpenModal} />




        </div>

    )
}
