
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {
  isOpen: boolean;
  onClose: () => void;
}
type IFormInput = {
  author: string,
  name: string,
  categories: string
  seller_price: number,
  original_price: number,
  description: string,
  short_description: string,
  quantity_sold: number,
  average_rating: number,
  publisher: string,
  publication_date: Date,
  dimensions: string,
  book_cover: string,
  number_of_page: number

}
export default function BookEdit({ isOpen, onClose }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    console.log(errors)
  }

  return (
    <div id="default-modal" aria-hidden="true" className={` ${isOpen ? '' : 'hidden'} overflow-y-auto overflow-x-hidden  flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-gray-300 rounded-lg shadow-sm ">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-400 ">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Edit Book
            </h3>
            <button type="button" className="text-gray-900 bg-transparent   rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" data-modal-hide="default-modal" onClick={onClose}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 md:p-5 space-y-4">

              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                  Tên sách
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                    <input
                      id="name"
                      type="text"
                      placeholder="Nhập tên sách"
                      {...register("name")}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="author" className="block text-sm/6 font-medium text-gray-900">
                  Tác giả
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                    <input
                      id="author"
                      type="text"
                      placeholder="Nhập tên tác giá"
                      {...register("author")}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="publisher" className="block text-sm/6 font-medium text-gray-900">
                  Công ty phát hành
                </label>
                <div className="mt-2">
                  <input
                    id="publisher"
                    {...register("publisher")}
                    type="text"
                    placeholder="Nhập tên nhà xuất bản"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="original_price" className="block text-sm/6 font-medium text-gray-900">
                  GIá nguyên bản
                </label>
                <div className="mt-2">
                  <input
                    id="original_price"
                    {...register("original_price")}
                    type="number"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                  Chọn ảnh sách
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">

                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-400 rounded-b">
            <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
          </div>
        </div>
      </div>

    </div>
  )
}
