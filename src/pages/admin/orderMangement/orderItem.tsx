import { IOrder } from "../../../interfaces";
import { deleteOrder } from "../../../api/order.service";

type OrderItemProps = {
    order: IOrder,
    onGetOrders: () => void,
    onUpdateOrder?: (id: number) => void,
}

const OrderItem = ({ order, onGetOrders, onUpdateOrder }: OrderItemProps) => {
    
    const onDeleteOrder = async (id?: number) => {
        if (id) {
            if (window.confirm("Are you sure you want to delete this order?")) {
                await deleteOrder(id);
                onGetOrders();
            }
        }
    }

    // Format the date for better display
    const formatDate = (dateString?: string) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }

    // Function to get status badge color
    const getStatusBadge = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'shipping':
                return 'bg-purple-100 text-purple-800';
            case 'completed':
                return 'bg-green-200 text-green-900';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    }

    return (
        <tr key={order.id} className="hover:bg-gray-50">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{order.id}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.users.email}</td>
            <td className="px-4 py-2 text-gray-700">{order.books.name}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.quantity}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">${order.total_price?.toLocaleString()}</td>
            <td className="whitespace-nowrap px-4 py-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadge(order.status)}`}>
                    {order.status}
                </span>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{formatDate(order.created_at)}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center items-center gap-3">
                <button
                    onClick={() => onUpdateOrder && onUpdateOrder(order.id as number)}
                    className="group relative text-sm text-black font-medium border-1 border-[#c2c2c2] focus:ring-3 rounded-md bg-white px-4 py-2 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 cursor-pointer"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDeleteOrder(order.id)}
                    className="group relative text-sm font-medium text-white focus:ring-3 rounded-md bg-red-600 px-4 py-2 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 cursor-pointer"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default OrderItem;