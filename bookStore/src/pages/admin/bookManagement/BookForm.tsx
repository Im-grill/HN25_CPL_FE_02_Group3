import { useForm, SubmitHandler } from "react-hook-form";
import { addNewBook } from "../../../api/book.service";
import { IBook } from "../../../interfaces/BookInterfaces";
import AlertContext from "../../../shared/context/AlertContext";
import { useContext } from "react";
export default function BookForm() {
    const alert = useContext(AlertContext)
    const { register, handleSubmit, formState: { errors } } = useForm<IBook>();
    const onSubmit: SubmitHandler<IBook> = async (data) => {
        try {
            console.log("ok")
            data.auth=true;
            localStorage.setItem("accessToken", import.meta.env.VITE_TOKEN)

            console.log(data)
            const res = await addNewBook(data);
            if (res) {
                alert?.success("them moi thanh cong", 3)
                console.log("p")
            }
            if (errors) {
                console.log(errors)
                alert?.error("loi form", 3)
            }

        } catch (error) {
            alert?.error("them moi that bai", 3)
            console.log(error)
        }

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
                                        {...register("name", { required: true })}
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
                                        {...register("authors.0.name", { required: true })}
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
                                {...register("category.name", { required: true })}
                                defaultValue="">
                                <option >Chọn danh mục</option>
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
                                <input type="text" className="w-full border-1 block" {...register("images.0.base_url", { required: true })} />
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
                                    {...register("current_seller.price", { required: true, min: 0 })}
                                    type="number"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="original_price" className="block text-sm/6 font-medium text-gray-900">
                                Giá nguyên bản
                            </label>
                            <div className="mt-2">
                                <input
                                    id="original_price"
                                    {...register("original_price", { required: true, min: 0 })}
                                    type="number"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">

                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                            <textarea id="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter discription of book"
                                {...register("description", { required: true })}
                            />

                        </div>
                        <div className="sm:col-span-4">

                            <label htmlFor="short_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Short description</label>
                            <textarea id="short_description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter discription of book"
                                {...register("short_description", { required: true })}
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
                                    {...register("rating_average", { required: true, min: 0, max: 5 })}
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
                                    {...register("specifications.0.attributes.0.value", { required: true })}
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
                                    {...register("specifications.0.attributes.1.value", { required: true })}
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
                                    {...register("specifications.0.attributes.2.value", { required: true })}
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
                                    {...register("specifications.0.attributes.3.value", { required: true })}
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
                                    {...register("specifications.0.attributes.4.value", { required: true })}
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
                    Add new
                </button>
            </div>
        </form>
    )
}
