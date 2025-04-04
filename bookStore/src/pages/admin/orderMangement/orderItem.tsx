import React from "react";
import { IOrder } from "../../../interfaces";
import { deleteOrder } from "../../../api/order.service";

type OrderItemProps = {
    order: IOrder,
    onGetOrders: () => {},
    onUpdateOrder: (id?: number) => void,
}

const OrderItem = ({ order, onGetOrders, onUpdateOrder }: OrderItemProps) => {
    const onDeleteOrder = async (id?: number) => {
        if (id) {
            await deleteOrder(id)
            onGetOrders()
        }
    }

    // Format date
    const formatDate = (dateString?: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleString('vi-VN');
    }

    // Format price
    const formatPrice = (price?: number) => {
        if (!price) return "";
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    }

    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{order.id}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{formatDate(order.created_at)}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.users.email}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.books.name}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{formatPrice(order.books.original_price)}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <button
                    onClick={() => onUpdateOrder(order.id)}
                    className="group relative inline-block focus:ring-3 focus:outline-hidden mr-2">
                    <span
                        className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                    ></span>
                    <span
                        className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
                    >
                        Edit
                    </span>
                </button>
                <button
                    onClick={() => onDeleteOrder(order.id)}
                    className="group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
                >
                    <span className="absolute inset-0 border border-red-600"></span>
                    <span
                        className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                    >
                        Delete
                    </span>
                </button>
            </td>
        </tr>
    )
}

export default OrderItem;