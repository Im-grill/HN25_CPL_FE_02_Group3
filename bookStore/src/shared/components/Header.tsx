import React, { useEffect, useState } from 'react';
import TikiLogo from '../../assets/logo/tiki-logo.png';
import TikiImage from '../../assets/tiki-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { IUser } from '../../interfaces/UserInterface';
import { login as loginService, register as registerService } from '../../api/auth.service';
import { useModal } from '../../shared/context/ModalContext';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { isModalOpen, setIsModalOpen } = useModal();
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [fullNameInput, setFullNameInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInFullName, setLoggedInFullName] = useState('');
    const [role, setRole] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const storedFullName = localStorage.getItem('loggedInFullName');
        const storedRole = localStorage.getItem('role');

        if (token && storedFullName && storedRole) {
            setIsLoggedIn(true);
            setLoggedInFullName(storedFullName);
            setRole(storedRole);
        } else {
            setIsLoggedIn(false);
            setLoggedInFullName('');
            setRole('');
            localStorage.clear();
        }
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/customer/homepage?search=${searchTerm}`);
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const handleLogin = async () => {
        setErrorMessage('');
        try {
            const userData: IUser = {
                email: emailInput,
                password: password,
            };
            const response = await loginService(userData);
            localStorage.setItem('accessToken', response.accessToken);
            if (response) {
                localStorage.setItem('loggedInEmail', response.user.email);
                localStorage.setItem('userId', response.user.id);
                setLoggedInFullName(response.user.fullname);
                localStorage.setItem('role', response.user.role);
                localStorage.setItem('loggedInFullName', response.user.fullname);
                setRole(response.user.role);

                if (response.user.role === 'admin') {
                    navigate('/admin');
                }
            }

            setIsLoggedIn(true);
            setIsModalOpen(false);
        } catch (error: any) {
            console.error('Lỗi đăng nhập:', error);
            setErrorMessage(error?.response?.data?.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.');
            setIsLoggedIn(false);
            setLoggedInFullName('');
            setRole('');
            localStorage.clear();
        }
    };

    const handleRegister = async () => {
        setErrorMessage('');
        try {
            const userData: IUser = {
                fullname: fullNameInput,
                email: emailInput,
                password: password,
                role: 'customer',
            };
            const response = await registerService(userData);
            console.log('Đăng ký thành công:', response);
            setIsLogin(true);
        } catch (error: any) {
            console.error('Lỗi đăng ký:', error);
            setErrorMessage(error?.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        isLogin ? handleLogin() : handleRegister();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setLoggedInFullName('');
        setRole('');
        localStorage.clear();
        navigate('/customer/homepage');
    };

    return (
        <header className="bg-white sticky top-0 z-50 shadow-md">
            <div className="bg-green-100 py-1 text-xs text-green-700 text-center font-bold">
                Freeship từ đơn 45k, giảm nhiều hơn cùng <span className="italic"><span className="text-blue-700">FREESHIP</span> XTRA</span>
            </div>

            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    {/* Burger button */}
                    <button
                        className="md:hidden text-gray-600 mr-3"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                    </button>

                    {/* Logo */}
                    <Link to="/customer/homepage" className="flex flex-col items-center">
                        <img src={TikiLogo} alt="Tiki Logo" className="h-8" />
                        <span className="mt-1 text-sm font-semibold text-blue-500">Tốt & Nhanh</span>
                    </Link>
                </div>

                {/* Search bar */}
                <div className="flex items-center bg-gray-100 rounded-md p-1 flex-grow mx-4">
                    <FontAwesomeIcon icon={faSearch} className="mr-1 text-gray-400" />
                    <input
                        type="text"
                        placeholder="100% Hàng Thật"
                        className="bg-transparent border-none outline-none flex-1 text-sm text-gray-700 placeholder-gray-400"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button
                        onClick={handleSearchSubmit}
                        className="hover:bg-amber-50 text-blue-500 rounded-md px-3 py-1 text-sm font-semibold"
                    >
                        Tìm kiếm
                    </button>
                </div>

                {/* Menu desktop */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/customer/homepage" className="text-gray-700 hover:text-blue-500">
                    <FontAwesomeIcon icon={faHome} className="h-5 w-5 mr-1" />
                    Trang chủ</Link>

                    {isLoggedIn ? (
                        <div className="flex items-center space-x-2">
                            <span className="text-grey-700">  {loggedInFullName}</span>
                            {role === 'admin' && (
                                <Link to="/admin" className="text-blue-500 hover:underline">Quản trị</Link>
                            )}
                            <button onClick={handleLogout} className="text-blue-500 hover:underline">Đăng xuất</button>
                        </div>
                    ) : (
                        <button onClick={() => setIsModalOpen(true)} className="text-gray-700 hover:text-blue-500">
                            <FontAwesomeIcon icon={faUser} className="h-5 w-5 mr-1" />
                            Tài khoản</button>
                    )}

                    {/* Shopping Cart */}
                    <Link to="/customer/userprofile/orders" className="relative flex items-center text-gray-600 hover:text-blue-500">
                        <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
                        <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs px-[6px]">
                            0
                        </span>
                    </Link>
                </div>

                {/* Shopping cart button mobile */}
                <Link to="/customer/userprofile/orders" className="relative flex md:hidden items-center text-gray-600 hover:text-blue-500 ml-3">
                    <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
                    <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs px-[6px]">
                        0
                    </span>
                </Link>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
                    <Link to="/customer/homepage" className="block text-gray-700 hover:text-blue-500">Trang chủ</Link>

                    {isLoggedIn ? (
                        <div className="flex flex-col space-y-1">
                            <div className="text-grey-700">{loggedInFullName}</div>
                            {role === 'admin' && (
                                <Link to="/admin" className="text-blue-500 hover:underline">Quản trị</Link>
                            )}
                            <button onClick={handleLogout} className="text-blue-500 hover:underline text-left">Đăng xuất</button>
                        </div>
                    ) : (
                        <button onClick={() => setIsModalOpen(true)} className="text-gray-700 hover:text-blue-500">Tài khoản</button>
                    )}
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-[800px] flex relative" style={{ bottom: '100px' }}>
                        <button className="absolute top-4 left-4 text-gray-500 hover:text-black text-xl" onClick={() => setIsModalOpen(false)}>
                            &nbsp;&lt;&nbsp;
                        </button>

                        <div className="w-1/2 p-6">
                            <br />
                            <h2 className="text-xl font-semibold mb-2">{isLogin ? 'Đăng nhập bằng email' : 'Tạo tài khoản'}</h2>
                            <p className="text-sm mb-4">{isLogin ? 'Nhập email và mật khẩu tài khoản Tiki' : 'Đăng ký tài khoản để mua sắm'}</p>
                            <form onSubmit={handleSubmit}>
                                <div className="border-b-2 mb-4 border-gray-300">
                                    <input type="email" placeholder="abc@email.com" className="w-full py-2 border-none outline-none bg-transparent" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required />
                                </div>
                                <div className="relative border-b-2 mb-4 border-gray-300">
                                    <input type={showPassword ? 'text' : 'password'} placeholder="Mật khẩu" className="w-full py-2 border-none outline-none bg-transparent pr-24" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer text-sm" onClick={toggleShowPassword}>
                                        {showPassword ? 'Ẩn' : 'Hiện'}
                                    </button>
                                </div>
                                {!isLogin && (
                                    <div className="border-b-2 mb-4 border-gray-300">
                                        <input type="text" placeholder="Họ và tên" className="w-full py-2 border-none outline-none bg-transparent" value={fullNameInput} onChange={(e) => setFullNameInput(e.target.value)} />
                                    </div>
                                )}
                                {errorMessage && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}
                                <button type="submit" className={`w-full ${isLogin ? 'bg-red-500' : 'bg-blue-500'} text-white py-2 rounded`}>
                                    {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                                </button>
                            </form>
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
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl" onClick={() => setIsModalOpen(false)}>
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
