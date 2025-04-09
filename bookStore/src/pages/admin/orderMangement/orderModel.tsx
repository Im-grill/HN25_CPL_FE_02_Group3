import React, { useEffect, useState } from "react";
import { getOrderById, updateOrder } from "../../../api/order.service";
import { IOrder } from "../../../interfaces";
import { useForm, SubmitHandler } from 'react-hook-form';

type OrderModalProps = {
    onClose: () => void,
    id: number
}

type Inputs = {
    userEmail: string,
    bookName: string,
    bookPrice: number,
    quantity: number,
    total_price: number,
    status: string,
    created_at: string
}

const OrderModal = ({ onClose, id }: OrderModalProps) => {
    const [order, setOrder] = useState<IOrder>();
    const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm<Inputs>();

    // Watch quantity and book price to calculate total
    const watchQuantity = watch('quantity');
    const watchBookPrice = watch('bookPrice');

    // Update total price when quantity or book price changes
    useEffect(() => {
        if (watchQuantity && watchBookPrice) {
            setValue('total_price', watchQuantity * watchBookPrice);
        }
    }, [watchQuantity, watchBookPrice, setValue]);

    const submitForm: SubmitHandler<Inputs> = async (data) => {
        try {
            const updatedOrder: Partial<IOrder> = {
                created_at: data.created_at,
                users: {
                    email: data.userEmail
                },
                books: {
                    name: data.bookName,
                    original_price: data.bookPrice
                },
                quantity: data.quantity,
                total_price: data.total_price,
                status: data.status
            };

            await updateOrder(id, updatedOrder);
            onClose();
        } catch (error) {
            console.error("Error updating order:", error);
            alert("Failed to update order. Please try again.");
        }
    }

    const fetchOrderById = async () => {
        try {
            const data = await getOrderById(id);
            setOrder(data);
        } catch (error) {
            console.error(`Error fetching order ${id}:`, error);
            alert("Failed to fetch order details. Please try again.");
        }
    }

    useEffect(() => {
        fetchOrderById();
    }, [id]);

    useEffect(() => {
        if (order) {
            // Format the form data from the order object
            reset({
                userEmail: order.users.email,
                bookName: order.books.name,
                bookPrice: order.books.original_price,
                quantity: order.quantity,
                total_price: order.total_price,
                status: order.status,
                created_at: order.created_at
            });
        }
    }, [order, reset]);

    return (
        <div className="bg-gray-300/70 top-0 left-0 h-full w-full fixed flex justify-center items-center z-50">
            <div className="w-1/2 max-h-[90vh] overflow-y-auto relative rounded-lg border border-gray-200 shadow-lg opacity-100 bg-white p-4">
                <button
                    onClick={onClose}
                    className="absolute right-2 top-2 rounded-full border border-gray-300 bg-gray-100 p-1"
                >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                <form onSubmit={handleSubmit(submitForm)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <h1 className="text-xl font-bold">Update Order</h1>

                    <div>
                        <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">User Email</label>
                        <div className="relative mt-1">
                            <input
                                {...register("userEmail", { required: "User email is required" })}
                                type="email"
                                id="userEmail"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="User email"
                            />
                            {errors.userEmail && <p className="text-red-500 text-xs mt-1">{errors.userEmail.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="bookName" className="block text-sm font-medium text-gray-700">Book Name</label>
                        <div className="relative mt-1">
                            <input
                                {...register("bookName", { required: "Book name is required" })}
                                type="text"
                                id="bookName"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Book name"
                            />
                            {errors.bookName && <p className="text-red-500 text-xs mt-1">{errors.bookName.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-700">Book Price</label>
                        <div className="relative mt-1">
                            <input
                                {...register("bookPrice", {
                                    required: "Book price is required",
                                    min: { value: 0, message: "Price must be positive" }
                                })}
                                type="number"
                                id="bookPrice"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Book price"
                            />
                            {errors.bookPrice && <p className="text-red-500 text-xs mt-1">{errors.bookPrice.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                        <div className="relative mt-1">
                            <input
                                {...register("quantity", {
                                    required: "Quantity is required",
                                    min: { value: 1, message: "Quantity must be at least 1" }
                                })}
                                type="number"
                                id="quantity"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Quantity"
                            />
                            {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="total_price" className="block text-sm font-medium text-gray-700">Total Price</label>
                        <div className="relative mt-1">
                            <input
                                {...register("total_price")}
                                type="number"
                                id="total_price"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-100"
                                readOnly
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                        <div className="relative mt-1">
                            <select
                                {...register("status", { required: "Status is required" })}
                                id="status"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            >
                                <option value="pending">Pending</option>
                                
                                <option value="shipped">Shipping</option>
                                
                                <option value="completed">Completed</option>
                                
                            </select>
                            {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="created_at" className="block text-sm font-medium text-gray-700">Created At</label>
                        <div className="relative mt-1">
                            <input
                                {...register("created_at")}
                                type="datetime-local"
                                id="created_at"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-block rounded-lg bg-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600"
                        >
                            Update Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OrderModal;