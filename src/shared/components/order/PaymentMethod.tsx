import React from 'react';
import paymentLogo from '../../../assets/order-logo/img_9.png';
import ViettelPayment from '../../../assets/order-logo/img_10.png';
import BankPromotion from "./BankPromotion.tsx";

const PaymentMethod: React.FC = () => {
    return (
        <div className="relative p-3 md:p-4 mb-4 bg-white rounded-md">
            <h3 className={'mb-3 md:mb-4 flex items-baseline text-[#38383D] font-bold text-base md:text-[18px] leading-[20px] md:leading-[24px] m-0'}>
                Chọn hình thức thanh toán
            </h3>
            <div className={'w-full md:w-[868px] h-[50px] md:h-[64px]'}>
                <label htmlFor="" className={'flex items-center '}>
                    <input
                        type="radio"
                        className={'w-[16px] h-[16px] md:w-[18px] md:h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}
                    />
                    <span className={'label'}>
                        <div className={'cursor-pointer h-[50px] md:h-16]'}>
                          <div className={'flex items-center h-full'}>
                            <img src={paymentLogo} className={'h-6 w-6 md:h-8 md:w-8 mr-2 md:mr-3'} alt="" />
                            <span className={'text-xs md:text-sm text-[rgb(56,56,61)]'}>
                              Thanh toán tiền mặt
                            </span>
                          </div>
                        </div>
                    </span>
                </label>
            </div>
            <div className={'w-full md:w-[868px] h-[50px] md:h-[64px]'}>
                <label htmlFor="" className={'flex items-center '}>
                    <input
                        type="radio"
                        className={'w-[16px] h-[16px] md:w-[18px] md:h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}
                    />
                    <span className={'label'}>
                        <div className={'cursor-pointer h-[50px] md:h-16]'}>
                          <div className={'flex items-center h-full'}>
                            <img src={ViettelPayment} className={'h-6 w-6 md:h-8 md:w-8 mr-2 md:mr-3'} alt="" />
                            <span className={'text-xs md:text-sm text-[rgb(56,56,61)]'}>
                              Viettel Money
                            </span>
                          </div>
                        </div>
                    </span>
                </label>
            </div>
            <BankPromotion />
        </div>
    );
};

export default PaymentMethod;