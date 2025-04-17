import React from 'react';
import freeShip from '../../../assets/Order-logo/img.png';
import logoTiki from '../../../assets/order-logo/img_1.png';

const Header: React.FC = () => {
    return (
        <>
            <div className={'relative z-[999] w-full overflow-hidden'}>
                <a href="/" className={'text-[#0b74e5] no-underline'}>
                    <div className={'text-xs font-semibold leading-[150%] pl-1 text-[#00AB56] flex flex-row items-center justify-center p-[8px_12px] md:text-[14px] md:p-[12px_16px] gap-1 bg-[#EFFFF4]'}>
                        Freeship đơn từ 45k, giảm nhiều hơn cùng
                        <img src={freeShip} alt="" className={'w-[60px] h-[14px] md:w-[79px] md:h-[16px] opacity-100'} />
                    </div>
                </a>
            </div>
            <header className={'bg-white w-full'}>
                <div className={'flex flex-1 items-center h-[70px] md:h-[100px] w-full px-4 mx-auto md:w-full md:max-w-[1270px] md:px-[15px]'}>
                    <a href="/customer/homepage">
                        <img src={logoTiki} alt="" className={'w-14 h-14 md:w-18 md:h-18'} />
                    </a>
                    <span className={'w-[1px] h-[24px] md:h-[32px] bg-[#1A94FF] mx-2 md:mx-4 block'}></span>
                    <span className={'font-normal text-lg md:text-[24px] leading-[24px] md:leading-[32px] text-[#1AA7FF]'}>Thanh toán</span>
                </div>
            </header>
        </>
    );
};

export default Header;