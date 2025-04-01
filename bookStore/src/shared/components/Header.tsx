import React, { useState } from 'react';
import TikiLogo from '../../assets/logo/tiki-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMoneyBillTransfer, faTruck, faBox, faTruckFast, faTags } from '@fortawesome/free-solid-svg-icons';

import { faSearch, faHome, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Tìm kiếm:', searchTerm);
    };

    return (
        <header className="bg-white sticky top-0 z-50 shadow-md">
            {/* Freeship */}
            <div className="bg-green-100 py-1 text-xs text-green-700 text-center font-bold">
                Freeship từ đơn 45k, giảm nhiều hơn cùng <span className="italic"><span className="text-blue-700">FREESHIP</span> XTRA</span>
            </div>

            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex flex-col items-center">
                    <img src={TikiLogo} alt="Tiki Logo" className="h-8" />
                    <span className="mt-1 text-sm font-semibold text-blue-500">Tốt & Nhanh</span>
                </Link>

                {/* Search */}
                <div className="flex items-center bg-gray-100 rounded-md p-1 flex-grow ml-4 mr-2">
                    <FontAwesomeIcon icon={faSearch} className="mr-1 text-gray-400" />
                    <input
                        type="text"
                        placeholder="100% Hàng Thật"
                        className="bg-transparent border-none outline-none flex-1 text-sm text-gray-700 placeholder-gray-400"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <div className="h-5 border-l border-gray-300 mx-2"></div>
                    <button
                        type="submit"
                        className="hover:bg-amber-50 text-blue-500 rounded-md px-3 py-1 text-sm font-semibold"
                        onClick={handleSearchSubmit}
                    >
                        Tìm kiếm
                    </button>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <Link to="/" className="flex items-center text-gray-600 hover:text-blue-500 text-xs">
                        <FontAwesomeIcon icon={faHome} className="h-5 w-5 mr-1" />
                        Trang chủ
                    </Link>
                    <Link to="/account" className="flex items-center text-gray-600 hover:text-blue-500 text-xs">
                        <FontAwesomeIcon icon={faUser} className="h-5 w-5 mr-1" />
                        Tài khoản
                    </Link>
                    <div className="h-5 border-l border-gray-300 mx-2"></div>
                    <Link to="/cart" className="relative flex items-center text-gray-600 hover:text-blue-500 text-xs">
                        <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 mr-1 text-blue-500" />
                        <span className="absolute top-[-15px] right-[-8px] bg-red-500 text-white rounded-full text-xs px-[6px]">
                            0
                        </span>
                    </Link>
                </div>
            </div>

            {/* List */}
            <div className="bg-gray-50 border-b border-gray-200 py-2 text-sm hidden md:block">
                <div className="container mx-auto px-4 overflow-x-auto whitespace-nowrap">
                    <Link to="/" className="mr-4 hover:text-blue-500">Điện gia dụng</Link>
                    <Link to="/" className="mr-4 hover:text-blue-500">Xe cộ</Link>
                    <Link to="/" className="mr-4 hover:text-blue-500">Mẹ & Bé</Link>
                    <Link to="/" className="mr-4 hover:text-blue-500">Khỏe đẹp</Link>
                    <Link to="/" className="mr-4 hover:text-blue-500">Nhà cửa</Link>
                    <Link to="sach" className="mr-4 hover:text-blue-500">Sách</Link>
                    <Link to="/" className="mr-4 hover:text-blue-500">Thể thao</Link>
                    <Link to="/" className="mr-4 hover:text-blue-500">Harry Potter</Link>
                    <Link to="/" className="mr-4 hover:text-blue-500">Lịch treo tường 2024</Link>
                    <Link to="/" className="mr-4 hover:text-blue-500">Nguyễn Nhật Ánh</Link>
                </div>
            </div>

            <div className="bg-blue-50 py-2 text-xs text-gray-700 hidden md:block">
                <div className="container mx-auto px-4 flex items-center justify-around">
                    <span className="font-bold text-blue-700">Cam kết</span>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-1 text-blue-500" />
                        100% hàng thật
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faTruckFast} className="w-4 h-4 mr-1 text-blue-500" />
                        Freeship mọi đơn
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faMoneyBillTransfer} className="w-4 h-4 mr-1 text-blue-500" />
                        Hoàn 200% nếu hàng giả
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faBox} className="w-4 h-4 mr-1 text-blue-500" />
                        30 ngày đổi trả
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faTruck} className="w-4 h-4 mr-1 text-blue-500" />
                        Giao nhanh 2h
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faTags} className="w-4 h-4 mr-1 text-blue-500" />
                        Giá siêu rẻ
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;