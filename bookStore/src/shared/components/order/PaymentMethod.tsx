import React from 'react';
import paymentLogo from '../../../assets/order-logo/img_9.png';
import ViettelPayment from '../../../assets/order-logo/img_10.png';
import BankPromotion from "./BankPromotion.tsx";

const PaymentMethod: React.FC = () => {
    return (
        <div className="relative p-4 mb-4 bg-white rounded-md">
            <h3 className={'mb-4 flex items-baseline text-[#38383D] font-bold text-[18px] leading-[24px] m-0'}>
                Chọn hình thức thanh toán
            </h3>
            <div className={'w-[868px] h-[64px]'}>
                <label htmlFor="" className={'flex items-center '}>
                    <input
                        type="radio"
                        className={'w-[18px] h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}
                    />
                    <span className={'label'}>
            <div className={'cursor-pointer h-16]'}>
              <div className={'flex items-center h-full'}>
                <img src={paymentLogo} className={'h-8 w-8 mr-3'} alt="" />
                <span className={'text-sm text-[rgb(56,56,61)]'}>
                  Thanh toán tiền mặt
                </span>
              </div>
            </div>
          </span>
                </label>
            </div>
            <div className={'w-[868px] h-[64px]'}>
                <label htmlFor="" className={'flex items-center '}>
                    <input
                        type="radio"
                        className={'w-[18px] h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}
                    />
                    <span className={'label'}>
            <div className={'cursor-pointer h-16]'}>
              <div className={'flex items-center h-full'}>
                <img src={ViettelPayment} className={'h-8 w-8 mr-3'} alt="" />
                <span className={'text-sm text-[rgb(56,56,61)]'}>
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