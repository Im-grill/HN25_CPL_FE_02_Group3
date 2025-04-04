import { useContext, useEffect, useState } from 'react'
import OrderForm from './orderForm.tsx';
import { IOrder } from '../../../interfaces.ts';
import { getOrders } from '../../../api/order.service';
import OrderItem from './orderItem.tsx';
import OrderModal from './orderModel.tsx';
import AlertContext from '../../../shared/context/AlertContext.tsx';

const OrderList = () => {
    // State of component - Noi luu tru du lieu trong component
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [updateOrderId, setUpdateOrderId] = useState<number | null>()
    const alert = useContext(AlertContext);

    const getOrdersList = async () => {
        const data = await getOrders()
        setOrders(data);
    }

    const updateOrder = (id?: number) => {
        if (id) {
            setUpdateOrderId(id)
        }
    }

    const closeModal = () => {
        setUpdateOrderId(null);
        alert?.success("Cập nhật đơn hàng thành công")
        getOrdersList()
    }

    useEffect(() => {
        getOrdersList();
    }, [])

    return (
        <section className='relative'>
            <h1 className="text-3xl">Danh sách đơn hàng</h1>
            <OrderForm onGetOrders={getOrdersList} />
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Ngày tạo</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tên sách</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Giá gốc</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Thao tác</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => <OrderItem key={order.id} onUpdateOrder={() => updateOrder(order.id)} onGetOrders={getOrdersList} order={order} />)}
                    </tbody>
                </table>
            </div>
            {updateOrderId && <OrderModal id={updateOrderId} onClose={closeModal} />}
        </section>
    )
}
export default OrderList;