import React, { useEffect, useState } from 'react';
import TikiLogo from '../../assets/logo/tiki-logo.png';
import TikiImage from '../../assets/tiki-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo30Days from '../../assets/logo/img.png'
import ArrowRight from '../../assets/logo/img_1.png'
import { faArrowLeft, faBars, faBox, faCheckCircle, faHome, faMoneyBillTransfer, faSearch, faShoppingCart, faTags, faTruck, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { ILogin, IRegister} from '../../interfaces/UserInterface';
import { login as loginService, register as registerService } from '../../api/auth.service';
import { useModal } from '../context/ModalContext.tsx';
import SidebarMobile from './SideBarMobile.tsx';

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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

        // Kiểm tra kích thước màn hình khi resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/?search=${searchTerm}`);
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const handleLogin = async () => {
        setErrorMessage('');
        try {
            const userData: ILogin = {
                email: emailInput,
                password: password,
            };
            const response = await loginService(userData);
            localStorage.setItem('accessToken', response.accessToken);
            if (response) {
                localStorage.setItem('loggedInEmail', response.user.email);
                localStorage.setItem('userId', response.user.id.toString());
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
            const userData: IRegister = {
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
        navigate('/');
    };

    // handle open sidebar in responsive
    const openSidebar = () => {
        setIsSidebarOpen(true);
        console.log('sidebar opened');
        
    };

    // Mobile Header Component
    const MobileHeader = () => (
        <header className=" top-0 w-full">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-3 bg-[rgb(27,168,255)] text-white">
                <div className="flex items-center space-x-4">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 text-white" />
                    </Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FontAwesomeIcon icon={faBars} className="h-5 w-5 text-white" />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-3 bg-white rounded-md flex items-center px-3 py-2">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Bạn đang tìm kiếm gì"
                        className="bg-transparent border-none outline-none flex-1 text-gray-700 placeholder-gray-400 text-sm"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchSubmit(e);
                            }
                        }}
                    />
                </div>

                {/* Cart with notification */}
                <Link to="/userprofile/orders" className="relative">
                    <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 text-white" />
                    <span
                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                        0
                    </span>
                </Link>
            </div>

            {/* 30 Ngày Cam Kết Banner */}
            <div className={' p-3 pb-0'}>
                <div
                    className={'flex overflow-y-auto overflow-x-hidden p-2 text-sm leading-6 rounded-lg justify-center bg-[rgb(255,232,128)]'}>
                    <a href="">
                        <span className={'flex items-center'}>
                            <img src={Logo30Days} alt="" className={'w-[90px] h-6 opacity-100'} />
                            <span className={'align-middle text-sm leading-6 pl-1 text-[#27272A]'}>
                                <strong>đổi ý miễn phí trả hàng</strong>
                            </span>
                            <img src={ArrowRight} alt="" className={'ml-2 w-[7px] h-[11px]'} />
                        </span>
                    </a>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
                    <Link to="/" className="block text-gray-700 hover:text-blue-500">Trang chủ</Link>
                    <button title="openSide" type="button" className="sidebar-responsive block text-gray-700 hover:text-blue-500" 
                    onClick={openSidebar}>Danh mục</button>
                    {isLoggedIn ? (
                        <div className="flex flex-col space-y-1">
                            <div className="text-grey-700">{loggedInFullName}</div>
                            {role === 'admin' && (
                                <Link to="/admin" className="text-blue-500 hover:underline">Quản trị</Link>
                            )}
                            <button onClick={handleLogout} className="text-blue-500 hover:underline text-left">Đăng
                                xuất
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => setIsModalOpen(true)} className="text-gray-700 hover:text-blue-500">Tài
                            khoản </button>
                    )}
                </div>
            )}
            <SidebarMobile isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 ">
                    <div className="bg-white rounded-lg shadow-lg w-[800px] flex relative" style={{ bottom: '100px' }}>
                        <button className="absolute top-4 left-4 text-gray-500 hover:text-black text-xl"
                            onClick={() => setIsModalOpen(false)}>
                            &nbsp;&lt;&nbsp;
                        </button>

                        <div className="w-1/2 p-6">
                            <br />
                            <h2 className="text-xl font-semibold mb-2">{isLogin ? 'Đăng nhập bằng email' : 'Tạo tài khoản'}</h2>
                            <p className="text-sm mb-4">{isLogin ? 'Nhập email và mật khẩu tài khoản Tiki' : 'Đăng ký tài khoản để mua sắm'}</p>
                            <form onSubmit={handleSubmit}>
                                <div className="border-b-2 mb-4 border-gray-300">
                                    <input type="email" placeholder="abc@email.com"
                                        className="w-full py-2 border-none outline-none bg-transparent"
                                        value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required />
                                </div>
                                <div className="relative border-b-2 mb-4 border-gray-300">
                                    <input type={showPassword ? 'text' : 'password'} placeholder="Mật khẩu"
                                        className="w-full py-2 border-none outline-none bg-transparent pr-24"
                                        value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <button type="button"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer text-sm"
                                        onClick={toggleShowPassword}>
                                        {showPassword ? 'Ẩn' : 'Hiện'}
                                    </button>
                                </div>
                                {!isLogin && (
                                    <div className="border-b-2 mb-4 border-gray-300">
                                        <input type="text" placeholder="Họ và tên"
                                            className="w-full py-2 border-none outline-none bg-transparent"
                                            value={fullNameInput}
                                            onChange={(e) => setFullNameInput(e.target.value)} />
                                    </div>
                                )}
                                {errorMessage && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}
                                <button type="submit"
                                    className={`w-full ${isLogin ? 'bg-red-500' : 'bg-blue-500'} text-white py-2 rounded`}>
                                    {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                                </button>
                            </form>
                            <div className="flex justify-between text-sm mt-2">
                                {isLogin ? (
                                    <div className="flex flex-col space-y-2">
                                        <a href="#" className="text-blue-500">Quên mật khẩu?</a>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-gray-700 font-light">Chưa có tài khoản?</span>
                                            <button onClick={() => setIsLogin(false)} className="text-blue-500">Tạo tài
                                                khoản
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <button onClick={() => setIsLogin(true)} className="text-blue-500">Đã có tài khoản?
                                        Đăng nhập</button>
                                )}
                            </div>
                        </div>

                        <div
                            className="w-1/2 bg-blue-50 flex flex-col items-center justify-center p-4 text-center relative">
                            <img src={TikiImage} alt="Tiki" className="h-52 mb-2" />
                            <p className="text-blue-500 font-semibold">Mua sắm tại Tiki</p>
                            <p className="text-blue-500 text-sm">Siêu ưu đãi mỗi ngày</p>
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                                onClick={() => setIsModalOpen(false)}>
                                &#x2715;
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );

    // Return Mobile or Desktop Header based on screen size
    if (isMobile) {
        return <MobileHeader />;
    }
    // Original Desktop Header
    return (
        <header className="bg-white sticky top-0 z-50 shadow-md w-screen">
            <div className="bg-green-100 py-1 text-xs text-green-700 text-center font-bold">
                Freeship từ đơn 45k, giảm nhiều hơn cùng <span className="italic"><span
                    className="text-blue-700">FREESHIP</span> XTRA</span>
            </div>

            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    {/* Burger button */}
                    <button
                        className="md:hidden text-gray-600 mr-3"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        title='a'
                    >
                        <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                    </button>

                    {/* Logo */}
                    <Link to="/" className="flex flex-col items-center">
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
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchSubmit(e);
                            }
                        }}
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
                    <Link to="/" className="text-gray-700 hover:text-blue-500">
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
                    <Link to="/userprofile/orders"
                        className="relative flex items-center text-gray-600 hover:text-blue-500">
                        <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
                        <span
                            className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs px-[6px]">
                            0
                        </span>
                    </Link>
                </div>

                {/* Shopping cart button mobile */}
                <Link to="/userprofile/orders"
                    className="relative flex md:hidden items-center text-gray-600 hover:text-blue-500 ml-3">
                    <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
                    <span
                        className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs px-[6px]">
                        0
                    </span>
                </Link>
            </div>
            {/* List */}
            <div className="bg-gray-50 border-b border-gray-200 py-2 text-sm overflow-x-auto whitespace-nowrap">
                <div className="container mx-auto px-4 flex items-center space-x-4">
                    <Link to="/" className="hover:text-blue-500">Điện gia dụng</Link>
                    <Link to="/" className="hover:text-blue-500">Xe cộ</Link>
                    <Link to="/" className="hover:text-blue-500">Mẹ & Bé</Link>
                    <Link to="/" className="hover:text-blue-500">Khỏe đẹp</Link>
                    <Link to="/" className="hover:text-blue-500">Nhà cửa</Link>
                    <Link to="/" className="hover:text-blue-500">Sách</Link>
                    <Link to="/" className="hover:text-blue-500">Thể thao</Link>
                    <Link to="/" className="hover:text-blue-500">Harry Potter</Link>
                    <Link to="/" className="hover:text-blue-500">Lịch treo tường 2024</Link>
                    <Link to="/" className="hover:text-blue-500">Nguyễn Nhật Ánh</Link>
                </div>
            </div>

            {/* Cam kết */}
            <div className="bg-blue-50 py-2 text-xs text-gray-700 overflow-x-auto whitespace-nowrap">
                <div className="container mx-auto px-4 flex items-center space-x-6">
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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 ">
                    <div className="bg-white rounded-lg shadow-lg w-[800px] flex relative" style={{ bottom: '100px' }}>
                        <button className="absolute top-4 left-4 text-gray-500 hover:text-black text-xl"
                            onClick={() => setIsModalOpen(false)}>
                            &nbsp;&lt;&nbsp;
                        </button>

                        <div className="w-1/2 p-6">
                            <br />
                            <h2 className="text-xl font-semibold mb-2">{isLogin ? 'Đăng nhập bằng email' : 'Tạo tài khoản'}</h2>
                            <p className="text-sm mb-4">{isLogin ? 'Nhập email và mật khẩu tài khoản Tiki' : 'Đăng ký tài khoản để mua sắm'}</p>
                            <form onSubmit={handleSubmit}>
                                <div className="border-b-2 mb-4 border-gray-300">
                                    <input type="email" placeholder="abc@email.com"
                                        className="w-full py-2 border-none outline-none bg-transparent"
                                        value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required />
                                </div>
                                <div className="relative border-b-2 mb-4 border-gray-300">
                                    <input type={showPassword ? 'text' : 'password'} placeholder="Mật khẩu"
                                        className="w-full py-2 border-none outline-none bg-transparent pr-24"
                                        value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <button type="button"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer text-sm"
                                        onClick={toggleShowPassword}>
                                        {showPassword ? 'Ẩn' : 'Hiện'}
                                    </button>
                                </div>
                                {!isLogin && (
                                    <div className="border-b-2 mb-4 border-gray-300">
                                        <input type="text" placeholder="Họ và tên"
                                            className="w-full py-2 border-none outline-none bg-transparent"
                                            value={fullNameInput}
                                            onChange={(e) => setFullNameInput(e.target.value)} />
                                    </div>
                                )}
                                {errorMessage && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}
                                <button type="submit"
                                    className={`w-full ${isLogin ? 'bg-red-500' : 'bg-blue-500'} text-white py-2 rounded`}>
                                    {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                                </button>
                            </form>
                            <div className="flex justify-between text-sm mt-2">
                                {isLogin ? (
                                    <div className="flex flex-col space-y-2">
                                        <a href="#" className="text-blue-500">Quên mật khẩu?</a>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-gray-700 font-light">Chưa có tài khoản?</span>
                                            <button onClick={() => setIsLogin(false)} className="text-blue-500">Tạo tài
                                                khoản
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <button onClick={() => setIsLogin(true)} className="text-blue-500">Đã có tài khoản?
                                        Đăng nhập</button>
                                )}
                            </div>
                        </div>

                        <div
                            className="w-1/2 bg-blue-50 flex flex-col items-center justify-center p-4 text-center relative">
                            <img src={TikiImage} alt="Tiki" className="h-52 mb-2" />
                            <p className="text-blue-500 font-semibold">Mua sắm tại Tiki</p>
                            <p className="text-blue-500 text-sm">Siêu ưu đãi mỗi ngày</p>
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                                onClick={() => setIsModalOpen(false)}>
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