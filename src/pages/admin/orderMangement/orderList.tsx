import { useContext, useEffect, useState } from 'react';
import { IOrder } from '../../../interfaces';
import { getOrders } from '../../../api/order.service';
import AlertContext from '../../../shared/context/AlertContext';
import OrderItem from './orderItem';
import OrderModal from './orderModel';
import OrderForm from './orderForm';

const OrderList = () => {
    // State of component
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [updateOrderId, setUpdateOrderId] = useState<number | null>();
    const alert = useContext(AlertContext);

    const getListOrders = async (filteredOrders?: IOrder[]) => {
        try {
            if (filteredOrders) {
                // if filtered orders are provided, use them
                setOrders(filteredOrders);
            } else {
                // otherwise fetch all orders
                const data = await getOrders();
                setOrders(data);
            }
        } catch (error) {
            alert?.error("Cannot fetch orders list.");
            console.error("Error fetching orders: ", error);
        }
    };

    const updateOrder = (id: number) => {
        if (id) {
            setUpdateOrderId(id);
        }
    }

    const closeModal = () => {
        setUpdateOrderId(null);
        alert?.success("Order updated successfully");
        getListOrders();
    }

    useEffect(() => {
        getListOrders();
    }, []);

    return (
        <section className='relative mt-10'>
            <h1 className="text-3xl mb-5">Order List</h1>
            <OrderForm onGetOrders={getListOrders} />
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">User</th>
                            <th className="px-4 py-2 font-medium text-gray-900">Book</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Qty</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Total</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
                            <th className="px-4 py-2 font-medium text-gray-900 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => (
                            <OrderItem
                                key={order.id}
                                order={order}
                                onGetOrders={getListOrders}
                                onUpdateOrder={updateOrder}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {updateOrderId && <OrderModal id={updateOrderId} onClose={closeModal} />}
        </section>
    );
}

export default OrderList;