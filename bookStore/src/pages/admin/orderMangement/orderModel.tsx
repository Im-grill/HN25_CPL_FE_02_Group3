import React, { useEffect, useState } from "react";
import { getOrderById, updateOrder } from "../../../api/order.service";
import { IOrder } from "../../../interfaces.ts";
import { useForm, SubmitHandler } from 'react-hook-form'

type OrderModalProps = {
    onClose: () => void,
    id: number
}

type Inputs = {
    userId: string,
    bookId: string,
    created_at: string
}

const OrderModal = ({ onClose, id }: OrderModalProps) => {
    const [order, setOrder] = useState<IOrder>()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()

    const submitForm: SubmitHandler<Inputs> = async (data) => {
        const updatedOrder = {
            created_at: data.created_at,
            users: {
                id: parseInt(data.userId)
            },
            books: {
                id: parseInt(data.bookId)
            }
        }
        await updateOrder(id, updatedOrder)
        onClose()
    }

    const fetchOrderById = async () => {
        const data = await getOrderById(id)
        setOrder(data)
    }

    useEffect(() => {
        fetchOrderById()
    }, [])

    useEffect(() => {
        if (order) {
            reset({
                userId: order.users.id.toString(),
                bookId: order.books.id.toString(),
                created_at: order.created_at
            })
        }
    }, [order])

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
                <h1 className="text-xl">Cập nhật đơn hàng</h1>
                <div>
                    <label htmlFor="userId" className="block mb-1">ID người dùng</label>
                    <div className="relative">
                        <input
                            {...register("userId", { required: true })}
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                            placeholder="Nhập ID người dùng"
                        />
                        {errors.userId && <span className="text-red-500">User ID là bắt buộc</span>}
                    </div>
                </div>
                <div>
                    <label htmlFor="bookId" className="block mb-1">ID sách</label>
                    <div className="relative">
                        <input
                            {...register("bookId", { required: true })}
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                            placeholder="Nhập ID sách"
                        />
                        {errors.bookId && <span className="text-red-500">Book ID là bắt buộc</span>}
                    </div>
                </div>
                <div>
                    <label htmlFor="created_at" className="block mb-1">Ngày tạo</label>
                    <div className="relative">
                        <input
                            {...register("created_at", { required: true })}
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                            placeholder="YYYY-MM-DDTHH:MM:SSZ"
                        />
                        {errors.created_at && <span className="text-red-500">Ngày tạo là bắt buộc</span>}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Cập nhật
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default OrderModal;