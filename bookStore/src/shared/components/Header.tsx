import React, { useState } from 'react';
import TikiLogo from '../../assets/logo/tiki-logo.png';
import TikiImage from '../../assets/tiki-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Tìm kiếm:', searchTerm);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <header className="bg-white sticky top-0 z-50 shadow-md">
            {/* Freeship */}
            <div className="bg-green-100 py-1 text-xs text-green-700 text-center font-bold ">
           Freeship từ đơn 45k, giảm nhiều hơn cùng <span className="italic"><span className="text-blue-700">FREESHIP</span> XTRA</span>
            </div>

            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/customer/homepage" className="flex flex-col items-center">
                    <img src={TikiLogo} alt="Tiki Logo" className="h-8" />
                    <span className="mt-1 text-sm font-semibold text-blue-500">Tốt & Nhanh</span>
                </Link>
                <div className="flex items-center bg-gray-100 rounded-md p-1 flex-grow ml-4 mr-2">
                    <FontAwesomeIcon icon={faSearch} className="mr-1 text-gray-400" />
                    <input
                        type="text"
                        placeholder="100% Hàng Thật"
                        className="bg-transparent border-none outline-none flex-1 text-sm text-gray-700 placeholder-gray-400"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button
                        type="submit"
                        className="hover:bg-amber-50 text-blue-500 rounded-md px-3 py-1 text-sm font-semibold"
                        onClick={handleSearchSubmit}
                    >
                        Tìm kiếm
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/customer/homepage" className="flex items-center text-gray-600 hover:text-blue-500 text-xs">
                        <FontAwesomeIcon icon={faHome} className="h-5 w-5 mr-1" />
                        Trang chủ
                    </Link>
                    <button onClick={() => setIsModalOpen(true)} className="flex items-center text-gray-600 hover:text-blue-500 text-xs">
                        <FontAwesomeIcon icon={faUser} className="h-5 w-5 mr-1" />
                        Tài khoản
                    </button>
                    <Link to="/customer/userprofile" className="relative flex items-center text-gray-600 hover:text-blue-500 text-xs">
                        <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 mr-1 text-blue-500" />
                        <span className="absolute top-[-15px] right-[-8px] bg-red-500 text-white rounded-full text-xs px-[6px]">
                            0
                        </span>
                    </Link>
                </div>
            </div>

            {/* Login & Register Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-[800px] flex relative" style={{ bottom: '100px' }}>
                        {/*Button "<" */}
                        <button
                            className="absolute top-4 left-4 text-gray-500 hover:text-black text-xl"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &nbsp;&lt;&nbsp;
                        </button>
                        <div className="w-1/2 p-6">
                            <br />
                            <h2 className="text-xl font-semibold mb-2">{isLogin ? 'Đăng nhập bằng email' : 'Tạo tài khoản'}</h2>
                            <p className="text-sm mb-4">{isLogin ? 'Nhập email và mật khẩu tài khoản Tiki' : 'Đăng ký tài khoản để mua sắm'}</p>
                            <div className="border-b-2 mb-4 border-gray-300">
                                <input
                                    type="email"
                                    placeholder="abc@email.com"
                                    className="w-full py-2 border-none outline-none bg-transparent" /* Loại bỏ border và background */
                                />
                            </div>
                            <div className="relative border-b-2 mb-4 border-gray-300">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Mật khẩu"
                                    className="w-full py-2 border-none outline-none bg-transparent pr-24"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer text-sm"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? 'Ẩn' : 'Hiện'}
                                </button>
                            </div>
                            {!isLogin && (
                                <div className="border-b-2 mb-4 border-gray-300">
                                    <input
                                        type="text"
                                        placeholder="Họ và tên"
                                        className="w-full py-2 border-none outline-none bg-transparent" /* Loại bỏ border và background */
                                    />
                                </div>
                            )}
                            <button className={`w-full ${isLogin ? 'bg-red-500' : 'bg-blue-500'} text-white py-2 rounded`}>
                                {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                            </button>
                            <div className="flex justify-between text-sm mt-2">
                                {isLogin ? (
                                    <div className="flex flex-col space-y-2">
                                        <a href="#" className="text-blue-500">Quên mật khẩu?</a>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-gray-700 font-light">Chưa có tài khoản?</span>
                                            <button onClick={() => setIsLogin(false)} className="text-blue-500">Tạo tài khoản</button>
                                        </div>
                                    </div>
                                ) : (
                                    <button onClick={() => setIsLogin(true)} className="text-blue-500">Đã có tài khoản? Đăng nhập</button>
                                )}
                            </div>
                        </div>
                        <div className="w-1/2 bg-blue-50 flex flex-col items-center justify-center p-4 text-center relative">
                            <img src={TikiImage} alt="Tiki" className="h-52 mb-2" />
                            <p className="text-blue-500 font-semibold">Mua sắm tại Tiki</p>
                            <p className="text-blue-500 text-sm">Siêu ưu đãi mỗi ngày</p>

                            {/* Button "X" */}
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                                onClick={() => setIsModalOpen(false)}
                            >
                                &#x2715;
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;