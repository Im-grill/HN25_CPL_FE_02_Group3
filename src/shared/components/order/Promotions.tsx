import React from 'react';
import couponLogo from '../../../assets/Order-logo/img_7.png';
import arrowRightBlueLogo from '../../../assets/Order-logo/img_16.png';
import freeShipLogo from '../../../assets/Order-logo/img_14.png';
import infoLogo from '../../../assets/Order-logo/img_5.png';
import infoLogo1 from '../../../assets/Order-logo/img_15.png';

const Promotions: React.FC = () => {
    return (
        <div className="rounded-md mb-3 relative p-[16px] bg-white w-full">
            {/* Header */}
            <div className="flex items-center justify-between leading-5 mb-[16px]">
                <div className="text-[rgb(36,36,36)] font-medium text-[13px]">
                    Tiki Khuyến Mãi
                </div>
                <div className="flex items-center text-[rgb(120,120,120)] text-[13px]">
                    Có thể chọn 2
                    <img
                        src={infoLogo}
                        className="w-[18px] h-[18px] ml-1 flex items-center"
                        alt=""
                    />
                </div>
            </div>

            {/* Coupon Container - SVG tràn hết container */}
            <div className="mb-[16px] w-full">
                <div className="relative w-full">
                    {/* Container */}
                    <div className="w-full overflow-hidden">
                        <div className="relative h-[50px] sm:h-[55px] md:h-[60px] w-full">
                            {/* SVG Coupon Background - Tràn hết container */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 60" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <g fill="none" fillRule="evenodd">
                                    <g stroke="#017FFF">
                                        <g>
                                            <g>
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path fill="#E5F2FF"
                                                                  d="M 278 0.5 c 2.071 0 3.946 0.84 5.303 2.197 c 1.358 1.357 2.197 3.232 2.197 5.303 h 0 v 44 c 0 2.071 -0.84 3.946 -2.197 5.303 c -1.357 1.358 -3.232 2.197 -5.303 2.197 h 0 H 64.973 c -0.116 -1.043 -0.587 -1.978 -1.291 -2.682 c -0.814 -0.814 -1.94 -1.318 -3.182 -1.318 c -1.243 0 -2.368 0.504 -3.182 1.318 c -0.704 0.704 -1.175 1.64 -1.29 2.682 h 0 h -48.028 c -2.071 0 -3.946 -0.84 -5.303 -2.197 c -1.358 -1.357 -2.197 -3.232 -2.197 -5.303 h 0 V 8 c 0 -2.071 0.84 -3.946 2.197 -5.303 c 1.357 -1.358 3.232 -2.197 5.303 -2.197 h 48.027 c 0.116 1.043 0.587 1.978 1.291 2.682 c 0.814 0.814 1.94 1.318 3.182 1.318 c 1.243 0 2.368 -0.504 3.182 -1.318 c 0.704 -0.704 1.175 -1.64 1.29 -2.682 H 64.972 z"
                                                                  transform="translate(-1024 -2912) translate(80 2252) translate(0 460) translate(464) translate(480) translate(0 200)"></path>
                                                            <g strokeDasharray="2 4" strokeLinecap="square">
                                                                <path d="M0.5 0L0.5 48"
                                                                      transform="translate(-1024 -2912) translate(80 2252) translate(0 460) translate(464) translate(480) translate(0 200) translate(60 8)"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                            {/* Coupon Contents - Responsive */}
                            <div className="top-0 left-0 absolute w-full h-full flex">
                                {/* Icon Section - Responsive */}
                                <div className="min-w-[40px] w-[40px] sm:min-w-[45px] sm:w-[45px] md:min-w-[60px] md:w-[60px] h-full p-[4px] sm:p-[5px] md:p-[8px] flex items-center justify-center">
                                    <div className="w-[32px] h-[32px] sm:w-[35px] sm:h-[35px] md:w-[44px] md:h-[44px] relative">
                                        <img
                                            src={freeShipLogo}
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content Section - Responsive */}
                                <div className="flex flex-grow items-center justify-between p-[4px_6px_4px_4px] sm:p-[5px_7px_5px_5px] md:p-[8px_12px_8px_8px] w-[calc(100%-40px)] sm:w-[calc(100%-45px)] md:w-[calc(100%-60px)]">
                                    {/* Tiêu đề - Responsive */}
                                    <h4 className="text-[11px] sm:text-[12px] md:text-[13px] leading-[16px] sm:leading-[18px] md:leading-[20px] max-h-[32px] sm:max-h-[36px] md:max-h-[20px] mr-[4px] overflow-hidden text-ellipsis">
                                        Giảm 10K
                                    </h4>
                                    {/* Phần nút - Responsive */}
                                    <div className="flex items-center flex-shrink-0">
                                        <button
                                            type="button"
                                            title="Thông tin"
                                            className="ml-[-4px] sm:ml-[-5px] md:ml-[-8px] bg-transparent outline-none border-none p-[4px] sm:p-[5px] md:p-[8px] cursor-pointer"
                                        >
                                            <img src={infoLogo1} className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px]" alt="" />
                                        </button>
                                        <button
                                            className="font-medium cursor-pointer text-center rounded-[4px] text-white bg-[#017fff] border-none p-[1px_6px] sm:p-[1px_7px] md:p-[2px_12px] text-[10px] sm:text-[11px] md:text-[13px] whitespace-nowrap"
                                        >
                                            Bỏ Chọn
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer - Responsive */}
            <div className="flex items-center text-[rgb(10,104,255)]">
                <img src={couponLogo} className="h-[14px] w-[18px] md:h-[16px] md:w-[20px] mr-[6px] md:mr-[8px]" alt="" />
                <span className="mr-[6px] md:mr-[8px] text-[12px] md:text-[13px]">Chọn hoặc nhập mã khác</span>
                <img src={arrowRightBlueLogo} className="h-[10px] w-[7px] md:h-[12px] md:w-[8px]" alt="" />
            </div>
        </div>
    );
};

export default Promotions;