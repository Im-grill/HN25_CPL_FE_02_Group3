import React from 'react';
import logoTiki from '../../../assets/order-logo/img_1.png';
import freeShip from '../../../assets/Order-logo/img.png';

const Header: React.FC = () => {
    return (
        <>
            <div className="bg-green-100 text-center py-3 text-sm font-semibold text-success flex items-center justify-center gap-2">
                Freeship đơn từ 45k, giảm nhiều hơn cùng
                <img src={freeShip} alt="Freeship" className="w-20 h-4" loading="lazy" />
            </div>
            <header className="bg-white py-4">
                <div className="max-w-6xl mx-auto px-4 flex items-center flex-col sm:flex-row gap-4">
                    <a href="/customer/homepage">
                        <img src={logoTiki} alt="Tiki Logo" className="w-16 h-16 sm:w-18 sm:h-18" loading="lazy" />
                    </a>
                    <span className="hidden sm:block w-px h-8 bg-blue-500 mx-4"></span>
                    <span className="text-xl sm:text-2xl text-blue-500">Thanh toán</span>
                </div>
            </header>
        </>
    );
};

export default React.memo(Header);