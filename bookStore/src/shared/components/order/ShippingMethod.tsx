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
        <div className="rounded relative p-3 mb-4 bg-white">
            <h3 className={'mb-4 text-[rgb(56,56,61)] font-bold text-lg leading-6 m-0'}>
                Chọn hình thức giao hàng
            </h3>
            <div className="relative w-[497px] pb-4 mb-4">
                <div className="shipping-method-list bg-[rgb(240,248,255)] border border-[rgb(194,225,255)] rounded-[10px] p-4 grid gap-y-3">
                    <div>
                        <label htmlFor="" className={'flex items-center'}>
                            <input
                                type="radio"
                                className={'w-[18px] h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}
                            />
                            <span className={'text-sm leading-5 text-[rgb(56,56,61)] items-center'}>
                <div className={'cursor-pointer py-1'}>
                  <div className={'flex items-center py-0.5'}>
                    <img
                        src={nowLogo}
                        className={'mr-1 object-contain w-8 h-4'}
                        alt=""
                    />
                    <span>Giao siêu tốc 2h</span>
                    <span className={'text-[13px] leading-5 font-medium inline-flex items-center text-[rgb(0,171,86)] px-1 bg-white ml-1 rounded'}>
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
                                className={'w-[18px] h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}
                            />
                            <span className={'text-sm leading-5 text-[rgb(56,56,61)] items-center'}>
                <div className={'cursor-pointer py-1'}>
                  <div className={'flex items-center py-0.5'}>
                    <span>Giao tiết kiệm</span>
                    <span className={'text-[13px] leading-5 font-medium inline-flex items-center text-[rgb(0,171,86)] px-1 bg-white ml-1 rounded'}>
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
                    className={'z-1 absolute w-[32px] h-[12px] left-1/2 bottom-4.5 transform translate-x-[-50%] translate-y-full'}
                />
            </div>
            <div className="gap-5">
                <div className="rounded-[12px] border border-[rgb(221,221,227)] mt-5 p-[20px_16px_16px] relative">
                    <div className="flex items-center text-sm leading-5 text-[rgb(7,148,73)] px-1 bg-white absolute top-0 left-3 transform -translate-y-1/2">
                        <div className="flex items-center mr-1">
                            <img src={packageLogo} className={'w-6 h-6'} alt="" />
                            <span>Gói: Giao siêu tốc 2h, trước 18h hôm nay</span>
                        </div>
                    </div>
                    <div className={'left-content'}>
                        <div className={'mt-4 w-[482px] flex justify-between'}>
                            <div className={'flex items-center'}>
                                <img
                                    src={nowLogo}
                                    alt=""
                                    className={'w-8 h-4 mr-1 object-contain'}
                                />
                                <span className={'text-xs leading-4 uppercase'}>
                  Giao siêu tốc 2h
                </span>
                            </div>
                            <div className={'text-sm leading-5 flex items-center'}>
                <span className={'text-[rgb(128,128,137)] line-through mr-2 font-medium text-xs'}>
                  25.000 đ
                </span>
                                <span className={'text-[rgb(0,171,86)] font-medium'}>
                  MIỄN PHÍ
                </span>
                                <img
                                    className={'w-[14px] h-[14px] cursor-pointer ml-0.5'}
                                    src={infoLogo}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={'package-item-list'}>
                            <div className={'flex py-3 items-center'}>
                                <div className={'mr-2 flex-shrink-0 max-h-12'}>
                                    <img
                                        src={orderData.books.images[0].base_url}
                                        alt=""
                                        className={'w-12 h-12'}
                                    />
                                </div>
                                <div className={'text-sm leading-5 text-[rgb(128,128,137)] flex-1'}>
                                    <div className={'mb-1 pr-5'}>
                                        <span>{orderData.books.name}</span>
                                    </div>
                                    <div className={'flex mb-1 pr-4 justify-between w-[440px]'}>
                                        <span>SL: {orderData.quantity}</span>
                                        <div>
                                            <div className="text-[rgb(255,66,78)] flex gap-4 items-center font-medium">
                        <span className={'original-price text-[rgb(128,128,137)] line-through text-xs font-normal leading-[18px]'}>
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
            <div className={'mt-4'}>
                <div className="seller-coupons-heading flex flex-nowrap items-center cursor-pointer pt-2 border-t border-[#EBEBF0] text-sm leading-[21px] ">
                    <img src={couponLogo} className={'mr-2 w-5 h-4'} alt="" />
                    <span>Thêm mã khuyến mãi của Shop</span>
                    <img src={arrowRightLogo} className={'w-5 h-5'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShippingMethod;
