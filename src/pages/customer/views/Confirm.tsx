import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getOrders } from '../../../api/order.service';
import { IOrder } from '../../../interfaces';
export default function Confirm() {
    const { state } = useLocation();
    const { order } = state || {};
    const [orderData,setOrderData] = useState<IOrder[]>([])
    const getOrderData = async () => {
        const res = await getOrders();
        const last = res.slice(-1);
        if(last){
            setOrderData(last)
        }
    }
    useEffect(() => {
        getOrderData()
    }, [])
    useEffect(() => {
        console.log(orderData)
    }, [orderData])
    return (
        <div className='flex justify-center  mt-6 mb-10 flex-col items-center lg:flex-row lg:items-stretch lg:pl-4'>
            <div className="w-[90%]  md:max-w-[100%] lg:w-[718px] mb-5">
                <div className='bg-gradient-to-r from-[#0BBEE5] to-[#3856F3] w-full h-[112px] relative rounded-tr-lg rounded-tl-lg '>
                    <img src="/assets/confetti.svg.png " alt="" className="" />
                    <div className="absolute top-[40%] left-[50%] transform -translate-x-[50%] ">
                        <span className='font-medium text-2xl text-white block '>Yay, đặt hàng thành công!</span>
                        <span className='font-medium text-[18px] text-white '>Chuẩn bị tiền mặt {order.total_price.toLocaleString('vi-VN')} ₫</span>
                    </div>
                    <img src="/assets/icon.png" alt="" className="md:size-[150px] absolute md:top-10 md:left-10 size-[70px] top-5 left-5" />
                </div>
                <div className="bg-white  w-full rounded-br-lg rounded-bl-lg pb-50 ">
                    <div className="ml-[30%] flex justify-between p-5 border-b-[#EBEBF0] border-b mr-5">
                        <span className="font-normal text-sm text-[#808089]">Phương thức thanh toán</span>
                        <span className="text-[#38383D] font-normal text-sm">Thanh toán tiền mặt</span>
                    </div>
                    <div className="ml-[30%] flex justify-between p-5 pt-2 mr-5">
                        <span className="font-normal text-sm text-[#808089]">Tổng cộng</span>
                        <span className="text-[#38383D] font-normal text-lg">{order.total_price.toLocaleString('vi-VN')} ₫</span>
                    </div>
                    <div className="ml-[30%] text-center mr-5 ">
                        <Link to="/">
                            <button type="button" className="border-[#0B74E5] border-1 w-full p-3 rounded-sm cursor-pointer hover:underline decoration-[#0B74E5]">
                                <span className="text-[#0B74E5] ">Quay về trang chủ</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* tt don hang */}
            <div className="w-[90%] h-fit bg-white lg:ml-5 pb-5 rounded-lg lg:w-[318px] ">
                <div className=" flex justify-between border-b-1 border-[#EBEBF0] p-3">
                    <span className="text-sm text-[#38383D] font-bold">
                        Mã đơn hàng: 861977987
                    </span>
                    <Link to={`/userprofile/order/${orderData[0]?.id}`} className="text-[#0B74E5] text-sm font-medium">Xem đơn hàng</Link>
                </div>
                {/* time giao hang */}
                <div>
                    <span className="text-sm p-3 text-[#38383D] font-normal">Giao thứ 6, trước 13h, 28/03</span>
                </div>
                {/* thong tin detail sach */}
                <div className="flex items-center mt-2 p-3">
                    <img src={order.books.images?.[0].base_url}
                        alt=""
                        className="size-[50px]" />
                    <span className="text-sm font-normal text-[#808089]">{order.books.name}</span>
                </div>
            </div>
        </div>

    )
}
