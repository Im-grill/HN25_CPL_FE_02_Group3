import { useForm, SubmitHandler } from "react-hook-form";
type IFormInput = {
    name: string,
    author:string,
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
export default function BookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        console.log(errors)
    }
    return (
        // author name, categories, current seller(price),description, image,listprice,name, quantity sold,rating average,short description,specification
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-2xl font-semibold text-gray-900">Add New Book</h2>


                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                        <div className="col-span-full">
                            <label htmlFor="categories" className="block text-sm/6 font-medium text-gray-900">
                                Danh mục
                            </label>
                            <select id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("categories")}>
                                <option selected>Chọn danh mục</option>
                                <option value="sd">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>

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
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="seller_price" className="block text-sm/6 font-medium text-gray-900">
                                Giá bán
                            </label>
                            <div className="mt-2">
                                <input
                                    id="seller_price"
                                    {...register("seller_price")}
                                    type="number"
                                    autoComplete="given-name"
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

                        <div className="sm:col-span-4">

                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                            <textarea id="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter discription of book"
                                {...register("description")}
                            />

                        </div>
                        <div className="sm:col-span-4">

                            <label htmlFor="short_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Short description</label>
                            <textarea id="short_description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter discription of book"
                                {...register("short_description")}
                            />

                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="quantity_sold" className="block text-sm/6 font-medium text-gray-900">
                                Số lượng đã bán
                            </label>
                            <div className="mt-2">
                                <input
                                    id="quantity_sold"
                                    {...register("quantity_sold")}
                                    type="number"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="average_rating" className="block text-sm/6 font-medium text-gray-900">
                                Rating (0-5)
                            </label>
                            <div className="mt-2">
                                <input
                                    id="average_rating"
                                    {...register("average_rating")}
                                    type="number"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
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
                            <label htmlFor="publication_date" className="block text-sm/6 font-medium text-gray-900">
                                Ngày phát hành
                            </label>
                            <div className="mt-2">
                                <input
                                    id="publication_date"
                                    {...register("publication_date")}
                                    type="Date"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="dimensions" className="block text-sm/6 font-medium text-gray-900">
                                Kích thước
                            </label>
                            <div className="mt-2">
                                <input
                                    id="dimensions"
                                    {...register("dimensions")}
                                    type="text"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="book_cover" className="block text-sm/6 font-medium text-gray-900">
                                Loại bìa
                            </label>
                            <div className="mt-2">
                                <input
                                    id="book_cover"
                                    {...register("book_cover")}
                                    type="text"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="number_of_page" className="block text-sm/6 font-medium text-gray-900">
                                Số trang
                            </label>
                            <div className="mt-2">
                                <input
                                    id="number_of_page"
                                    {...register("number_of_page")}
                                    type="text"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
