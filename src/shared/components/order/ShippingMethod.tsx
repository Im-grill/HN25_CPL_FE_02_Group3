import React from 'react';
import nowLogo from '../../../assets/order-logo/img_2.png';
import arrowLogo from '../../../assets/order-logo/img_3.png';
import packageLogo from '../../../assets/order-logo/img_4.png';
import infoLogo from '../../../assets/order-logo/img_5.png';
import couponLogo from '../../../assets/order-logo/img_7.png';
import arrowRightLogo from '../../../assets/order-logo/img_8.png';
import {OrderData} from './types';

interface ShippingMethodProps {
    orderData: OrderData;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({ orderData }) => {
    return (
        <div className="rounded relative p-3 mb-4 bg-white w-full">
            <h3 className={'mb-3 md:mb-4 text-[rgb(56,56,61)] font-bold text-base md:text-lg leading-6 m-0'}>
                Chọn hình thức giao hàng
            </h3>
            <div className="relative w-full md:w-full pb-4 mb-4">
                <div className="shipping-method-list bg-[rgb(240,248,255)] border border-[rgb(194,225,255)] rounded-[10px] p-3 md:p-4 grid gap-y-3">
                    <div>
                        <label htmlFor="" className={'flex items-center'}>
                            <input
                                type="radio"
                                className={'w-[16px] h-[16px] md:w-[18px] md:h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}
                            />
                            <span className={'text-xs md:text-sm leading-5 text-[rgb(56,56,61)] items-center'}>
                                <div className={'cursor-pointer py-1'}>
                                  <div className={'flex items-center py-0.5'}>
                                    <img
                                        src={nowLogo}
                                        className={'mr-1 object-contain w-6 h-3 md:w-8 md:h-4'}
                                        alt=""
                                    />
                                    <span>Giao siêu tốc 2h</span>
                                    <span className={'text-[11px] md:text-[13px] leading-5 font-medium inline-flex items-center text-[rgb(0,171,86)] px-1 bg-white ml-1 rounded'}>
                                      -25k
                                    </span>
                                  </div>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className={'flex items-center'}>
                            <input
                                type="radio"
                                className={'w-[16px] h-[16px] md:w-[18px] md:h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}
                            />
                            <span className={'text-xs md:text-sm leading-5 text-[rgb(56,56,61)] items-center'}>
                                <div className={'cursor-pointer py-1'}>
                                  <div className={'flex items-center py-0.5'}>
                                    <span>Giao tiết kiệm</span>
                                    <span className={'text-[11px] md:text-[13px] leading-5 font-medium inline-flex items-center text-[rgb(0,171,86)] px-1 bg-white ml-1 rounded'}>
                                      -16k
                                    </span>
                                  </div>
                                </div>
                            </span>
                        </label>
                    </div>
                </div>
                <img
                    src={arrowLogo}
                    alt=""
                    className={'z-1 absolute w-[24px] h-[10px] md:w-[32px] md:h-[12px] left-1/2 bottom-4.5 transform translate-x-[-50%] translate-y-full'}
                />
            </div>
            <div className="gap-5">
                <div className="rounded-[12px] border border-[rgb(221,221,227)] mt-5 p-[16px_12px_12px] md:p-[20px_16px_16px] relative">
                    <div className="flex items-center text-xs md:text-sm leading-5 text-[rgb(7,148,73)] px-1 bg-white absolute top-0 left-3 transform -translate-y-1/2">
                        <div className="flex items-center mr-1">
                            <img src={packageLogo} className={'w-5 h-5 md:w-6 md:h-6'} alt="" />
                            <span className="text-xs md:text-sm">Gói: Giao siêu tốc 2h, trước 18h hôm nay</span>
                        </div>
                    </div>
                    <div className={'left-content'}>
                        <div className={'mt-3 md:mt-4 w-full flex justify-between'}>
                            <div className={'flex items-center'}>
                                <img
                                    src={nowLogo}
                                    alt=""
                                    className={'w-6 h-3 md:w-8 md:h-4 mr-1 object-contain'}
                                />
                                <span className={'text-[10px] md:text-xs leading-4 uppercase'}>
                                  Giao siêu tốc 2h
                                </span>
                            </div>
                            <div className={'text-xs md:text-sm leading-5 flex items-center'}>
                                <span className={'text-[rgb(128,128,137)] line-through mr-2 font-medium text-[10px] md:text-xs'}>
                                  25.000 đ
                                </span>
                                <span className={'text-[rgb(0,171,86)] font-medium'}>
                                  MIỄN PHÍ
                                </span>
                                <img
                                    className={'w-[12px] h-[12px] md:w-[14px] md:h-[14px] cursor-pointer ml-0.5'}
                                    src={infoLogo}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={'package-item-list'}>
                            <div className={'flex py-2 md:py-3 items-center'}>
                                <div className={'mr-2 flex-shrink-0 max-h-10 md:max-h-12'}>
                                    <img
                                        src={orderData.books.images[0].base_url}
                                        alt=""
                                        className={'w-10 h-10 md:w-12 md:h-12 object-contain'}
                                    />
                                </div>
                                <div className={'text-xs md:text-sm leading-5 text-[rgb(128,128,137)] flex-1 overflow-hidden'}>
                                    <div className={'mb-1 pr-3 md:pr-5 line-clamp-2 overflow-hidden text-ellipsis'}>
                                        <span>{orderData.books.name}</span>
                                    </div>
                                    <div className={'flex mb-1 pr-2 md:pr-4 justify-between w-full flex-wrap md:flex-nowrap'}>
                                        <span>SL: {orderData.quantity}</span>
                                        <div>
                                            <div className="text-[rgb(255,66,78)] flex gap-2 md:gap-4 items-center font-medium">
                                                <span className={'original-price text-[rgb(128,128,137)] line-through text-[10px] md:text-xs font-normal leading-[16px] md:leading-[18px]'}>
                                                  {(orderData.books.original_price * orderData.quantity).toLocaleString('vi-VN')}
                                                </span>
                                                <span>
                                                  {(orderData.books.current_seller.price * orderData.quantity).toLocaleString('vi-VN')} ₫
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'mt-3 md:mt-4'}>
                <div className="seller-coupons-heading flex flex-nowrap items-center cursor-pointer pt-2 border-t border-[#EBEBF0] text-xs md:text-sm leading-[18px] md:leading-[21px]">
                    <img src={couponLogo} className={'mr-2 w-4 h-3 md:w-5 md:h-4'} alt="" />
                    <span>Thêm mã khuyến mãi của Shop</span>
                    <img src={arrowRightLogo} className={'w-4 h-4 md:w-5 md:h-5'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShippingMethod;