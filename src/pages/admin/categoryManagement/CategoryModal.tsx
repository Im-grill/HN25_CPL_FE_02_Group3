import React, { use, useEffect, useState } from "react";
import { getCategoryById, updateCategory } from "../../../api/category.service";
import { ICategory } from "../../../interfaces.ts";
import { useForm, SubmitHandler } from 'react-hook-form'

type CategoryModalProps = {
  onClose: () => void,
  id: number
}

type Inputs = {
  name: string,
  createdAt: string
}

const CategoryModal = ({ onClose, id }: CategoryModalProps) => {
  const [category, setCategory] = useState<ICategory>()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()

  const submitForm: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    await updateCategory(id, data)
    onClose()
  }

  const fetchCategoryById = async () => {
    const data = await getCategoryById(id)
    setCategory(data)
  }

  useEffect(() => {
    fetchCategoryById()
  }, [])

  useEffect(() => {
    reset(category)
  }, [category])

  return <div className="bg-gray-300/70 top-0 h-full w-full absolute flex justify-center items-center">
    <div className="w-1/2 relative rounded-lg border border-gray-200 shadow-lg opacity-100 bg-white p-4">
      <button onClick={onClose}
        className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1">
        <span className="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <form onSubmit={handleSubmit(submitForm)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <h1 className="text-xl">Cập nhật category</h1>
        <div>
          <label htmlFor="email" className="sr-only">Tên danh mục</label>

          <div className="relative">
            <input
              {...register("name", { required: true })}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="Nhập vào tên danh mục"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Tên danh mục</label>

          <div className="relative">
            <input
              {...register("createdAt", { required: true })}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="Created at"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Thêm mới
          </button>
        </div>
      </form>
    </div>
  </div>
}

export default CategoryModal;
