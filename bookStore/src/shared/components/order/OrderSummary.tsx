import React from 'react';
import infoLogo from '../../../assets/order-logo/img_5.png';
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
        <div className="bg-white rounded-md">
            <div className="p-3 md:p-4 leading-5 border-b border-[#ebebf0]">
                <div className={'mb-1'}>
                    <h3 className={'font-medium text-sm md:text-base text-[rgb(56,56,61)]'}>Đơn hàng</h3>
                </div>
                <div className="flex items-center">
                    <p className={'text-xs md:text-sm text-[rgb(128,128,137)] m-0 mr-[4px]'}>
                        {orderData.quantity} sản phẩm.
                    </p>
                    <p className={'text-xs md:text-sm text-[rgb(11,116,229)] font-normal'}>Xem thông tin</p>
                    <svg
                        className="sub-title-link__arrow transform rotate-[90deg] transition-all duration-500 w-4 h-4 md:w-5 md:h-5"
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
            <div className="p-[8px_12px] md:p-[8px_16px] grid gap-[8px] text-xs md:text-[14px] leading-[18px] md:leading-[21px]">
                <div className="flex justify-between gap-x-[8px]">
                    <span className={'text-[rgb(128,128,137)]'}>Tổng tiền hàng</span>
                    <span>
                        {(orderData.books.original_price * orderData.quantity).toLocaleString('vi-VN')}
                    </span>
                </div>
                <div className="flex justify-between gap-x-[8px]">
                    <span className={'text-[rgb(128,128,137)]'}>Phí vận chuyển</span>
                    <span>{shippingFee.toLocaleString('vi-VN')}</span>
                </div>
                <div className="flex justify-between gap-x-[8px]">
                    <span className={'text-[rgb(128,128,137)]'}>Giảm giá trực tếp</span>
                    <span className={'text-[rgb(0,171,86)]'}>
                        -{discount.toLocaleString('vi-VN')}
                    </span>
                </div>
                <div className="flex justify-between gap-x-[8px]">
                    <div className="flex items-center">
                        <span className={'text-[rgb(128,128,137)]'}>
                          Giảm giá vận chuyển
                        </span>
                        <img src={infoLogo} className={'w-[12px] h-[12px] md:w-[14px] md:h-[14px] ml-1'} alt="" />
                    </div>
                    <span className={'text-[rgb(0,171,86)]'}>
                        -{shippingDiscount.toLocaleString('vi-VN')}
                    </span>
                </div>
            </div>
            <div className="h-[1px] bg-[#ebebf0]"></div>
            <div className={'p-[8px_12px] md:p-[8px_16px] flex gap-x-2 justify-between'}>
                <span className={'font-medium text-xs md:text-sm'}>Tổng tiền thanh toán</span>
                <div className={'flex flex-col items-end'}>
                    <span className={'text-[rgb(255,66,78)] font-semibold text-base md:text-[20px] leading-[24px] md:leading-[30px]'}>
                        {totalPayment.toLocaleString('vi-VN')}
                    </span>
                    <span className={'text-[rgb(0,171,86)] text-xs md:text-sm'}>
                        Tiết kiệm {(discount + shippingDiscount).toLocaleString('vi-VN')}
                    </span>
                </div>
            </div>
            <div className={'flex justify-between pt-0 pr-[8px] pb-[16px] pl-[8px]'}>
                <span className={'text-right text-[10px] md:text-xs text-[rgb(128,128,137)]'}>
                  (Giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và các chi phí phát sinh khác)
                </span>
            </div>
            {error && <div className="text-red-500 px-4 pb-2 text-xs md:text-sm">{error}</div>}
            <div className="flex justify-between">
                <button
                    onClick={onPlaceOrder}
                    className={'m-[0px_12px_12px] md:m-[0px_16px_16px] text-white bg-[#ff424e] border-none font-normal h-[36px] md:h-[40px] w-full items-center rounded-md cursor-pointer text-sm md:text-base'}
                >
                    Đặt hàng
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;