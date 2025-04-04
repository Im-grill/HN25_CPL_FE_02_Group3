import { useForm, SubmitHandler } from 'react-hook-form';
import { createOrder } from '../../../api/order.service';
import AlertContext from '../../../shared/context/AlertContext';
import { useContext } from 'react';

type Inputs = {
    userId: string,
    bookId: string
}

type OrderFormProps = {
    onGetOrders: () => {}
}

const OrderForm = ({ onGetOrders }: OrderFormProps) => {
    const alert = useContext(AlertContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const submitForm: SubmitHandler<Inputs> = async (data) => {
        const { userId, bookId } = data;
        const newOrder = {
            created_at: new Date().toISOString(),
            users: {
                id: parseInt(userId)
            },
            books: {
                id: parseInt(bookId)
            }
        }
        await createOrder(newOrder);
        alert?.success("Thêm mới đơn hàng thành công");
        onGetOrders()
    }

    return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Thêm mới đơn hàng</h1>
        </div>

        <form onSubmit={handleSubmit(submitForm)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
                <label htmlFor="userId" className="block mb-2">ID người dùng</label>
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
                <label htmlFor="bookId" className="block mb-2">ID sách</label>
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
}

export default OrderForm