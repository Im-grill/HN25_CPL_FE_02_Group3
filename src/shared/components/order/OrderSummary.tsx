import React from 'react';
import infoLogo from '../../../assets/Order-logo/img_5.png';
import {OrderData} from './types';

interface OrderSummaryProps {
    orderData: OrderData;
    totalPrice: number;
    shippingFee: number;
    shippingDiscount: number;
    discount: number;
    totalPayment: number;
    onPlaceOrder: () => void;
    error?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
                                                       orderData,
                                                       shippingFee,
                                                       shippingDiscount,
                                                       discount,
                                                       totalPayment,
                                                       onPlaceOrder,
                                                       error
                                                   }) => {
    return (
        <div className="bg-white rounded-md w-full max-w-full overflow-hidden">
            <div className="p-3 sm:p-3.5 md:p-4 leading-5 border-b border-[#ebebf0]">
                <div className="mb-1">
                    <h3 className="font-medium text-sm sm:text-base md:text-base text-[rgb(56,56,61)]">Đơn hàng</h3>
                </div>
                <div className="flex items-center flex-wrap">
                    <p className="text-xs sm:text-sm md:text-sm text-[rgb(128,128,137)] m-0 mr-1">
                        {orderData.quantity} sản phẩm.
                    </p>
                    <div className="flex items-center">
                        <p className="text-xs sm:text-sm md:text-sm text-[rgb(11,116,229)] font-normal">Xem thông
                            tin</p>
                        <svg
                            className="sub-title-link__arrow transform rotate-[90deg] transition-all duration-500 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.96967 8.46967C10.2626 8.17678 10.7374 8.17678 11.0303 8.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 9.67678 8.76256 9.96967 8.46967Z"
                                fill="#0B74E5"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div
                className="p-2 sm:p-3 md:p-4 grid gap-2 text-xs sm:text-xs md:text-sm leading-[18px] md:leading-[21px]">
                <div className="flex justify-between gap-x-2 sm:gap-x-3 md:gap-x-4">
                    <span className="text-[rgb(128,128,137)]">Tổng tiền hàng</span>
                    <span className="text-right whitespace-nowrap">
                        {(orderData.books.original_price * orderData.quantity).toLocaleString('vi-VN')}
                    </span>
                </div>
                <div className="flex justify-between gap-x-2 sm:gap-x-3 md:gap-x-4">
                    <span className="text-[rgb(128,128,137)]">Phí vận chuyển</span>
                    <span className="text-right whitespace-nowrap">{shippingFee.toLocaleString('vi-VN')}</span>
                </div>
                <div className="flex justify-between gap-x-2 sm:gap-x-3 md:gap-x-4">
                    <span className="text-[rgb(128,128,137)]">Giảm giá trực tếp</span>
                    <span className="text-[rgb(0,171,86)] text-right whitespace-nowrap">
                        -{discount.toLocaleString('vi-VN')}
                    </span>
                </div>
                <div className="flex justify-between gap-x-2 sm:gap-x-3 md:gap-x-4">
                    <div className="flex items-center">
                        <span className="text-[rgb(128,128,137)] mr-1">
                          Giảm giá vận chuyển
                        </span>
                        <img src={infoLogo} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" alt="Thông tin"/>
                    </div>
                    <span className="text-[rgb(0,171,86)] text-right whitespace-nowrap">
                        -{shippingDiscount.toLocaleString('vi-VN')}
                    </span>
                </div>
            </div>
            <div className="h-px bg-[#ebebf0]"></div>
            <div className="p-2 sm:p-3 md:p-4 flex justify-between items-center">
                <span className="font-medium text-xs sm:text-sm md:text-sm">Tổng tiền thanh toán</span>
                <div className="flex flex-col items-end">
                    <span
                        className="text-[rgb(255,66,78)] font-semibold text-base sm:text-lg md:text-xl leading-tight whitespace-nowrap">
                        {totalPayment.toLocaleString('vi-VN')}
                    </span>
                    <span className="text-[rgb(0,171,86)] text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                        Tiết kiệm {(discount + shippingDiscount).toLocaleString('vi-VN')}
                    </span>
                </div>
            </div>
            <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4">
                <span className="text-right block text-[10px] sm:text-xs md:text-xs text-[rgb(128,128,137)]">
                  (Giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và các chi phí phát sinh khác)
                </span>
            </div>
            {error &&
                <div className="text-red-500 px-2 sm:px-3 md:px-4 pb-2 text-xs sm:text-xs md:text-sm">{error}</div>}
            <div className="px-2 sm:px-3 md:px-4 pb-3 sm:pb-4 md:pb-4">
                <button
                    onClick={onPlaceOrder}
                    className="text-white bg-[#ff424e] border-none font-medium h-9 sm:h-10 md:h-10 w-full rounded-md cursor-pointer text-sm sm:text-sm md:text-base flex items-center justify-center"
                >
                    Đặt hàng
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;