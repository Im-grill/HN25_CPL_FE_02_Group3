import React from 'react';
import couponLogo from '../../../assets/order-logo/img_7.png';
import arrowRightBlueLogo from '../../../assets/order-logo/img_16.png';
import couponBG from '../../../assets/order-logo/img_13.png';
import freeShipLogo from '../../../assets/order-logo/img_14.png';
import infoLogo from '../../../assets/order-logo/img_5.png';
import infoLogo1 from '../../../assets/order-logo/img_15.png';

const Promotions: React.FC = () => {
    return (
        <div className="rounded-md mb-3 relative p-4 bg-white">
            <div className="flex items-center justify-between leading-5 mb-4">
                <div className="text-[rgb(36,36,36)] font-medium text-[13px]">
                    Tiki Khuyến Mãi
                </div>
                <div className="flex items-center text-[rgb(120,120,120)] text-[13px]">
                    Có thể chọn 2
                    <img
                        src={infoLogo}
                        className={'w-[18px] h-[18px] ml-1 flex items-center'}
                        alt=""
                    />
                </div>
            </div>
            <div className="mb-4 grid gap-3">
                <div className="relative">
                    <div className="max-w-full relative flex w-[286px] z-[2]">
                        <div className="relative w-full h-[60px]">
                            <img src={couponBG} alt="" />
                            <div className={'top-0 left-0 absolute w-full h-full flex'}>
                                <div className="min-w-[60px] w-[60px] h-[60px] p-[8px] flex flex-col items-center justify-center self-center">
                                    <div className={'relative w-11 h-11'}>
                                        <div className="w-full pb-[calc(100%) relative]">
                                            <img src={freeShipLogo} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center p-[8px_12px_8px_8px] w-[calc(100%-60px)]">
                                    <h4 className={'text-[13px] leading-[20px] max-h-[20px] mr-[4px]'}>
                                        Giảm 10K
                                    </h4>
                                    <div className="flex items-center flex-shrink-0 ml-auto">
                                        <button
                                            type="button"
                                            title="."
                                            className={'ml-[-8px] bg-transparent outline-none border-none p-[8px] cursor-pointer leading-0'}
                                        >
                                            <img src={infoLogo1} className={'w-4 h-4'} alt="" />
                                        </button>
                                        <button className={'font-medium cursor-pointer text-center rounded-[4px] text-white bg-[#017fff] border-none  p-[2px_12px]'}>
                                            Bỏ Chọn
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center text-[rgb(10,104,255)]">
                <img src={couponLogo} className={'h-4 w-5 mr-2'} alt="" />
                <span className={'mr-2 text-sm'}>Chọn hoặc nhập mã khác</span>
                <img src={arrowRightBlueLogo} className={'h-3 w-2'} alt="" />
            </div>
        </div>
    );
};

export default Promotions;