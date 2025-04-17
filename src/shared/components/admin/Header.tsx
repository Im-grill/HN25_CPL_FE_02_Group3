import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../../assets/tiki-logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/UserContext.tsx';
import TikiImage from "../../../assets/tiki-image.png";
import IUser from '../../../interfaces/UserInterface.ts';
import { login as loginService, register as registerService } from "../../../api/auth.service.ts";

const Header = () => {
    const userStore = useContext(UserContext);
    const [isShowProfile, setIsShowProfile] = useState<boolean>(false);
    const [isShowMainMenu, setIsShowMainMenu] = useState<boolean>(false);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [fullNameInput, setFullNameInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInFullName, setLoggedInFullName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const storedFullName = localStorage.getItem('loggedInFullName');
        if (token && storedFullName) {
            setIsLoggedIn(true);
            setLoggedInFullName(storedFullName);
        }
    }, []);

    const toggleProfile = () => {
        setIsShowProfile(!isShowProfile);
    };

    const toggleMainMenu = () => {
        setIsShowMainMenu(!isShowMainMenu);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value);
    };

    const handleFullNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullNameInput(e.target.value);
    };

    const handleLogin = async () => {
        setErrorMessage('');
        try {
            const userData: IUser = {
                email: emailInput,
                password: password,
            };
            const response = await loginService(userData);
            console.log('Đăng nhập thành công:', response);
            localStorage.setItem('accessToken', response.accessToken);
            if (response.user?.email && response.user?.fullname) {
                setLoggedInFullName(response.user.fullname);
                localStorage.setItem('loggedInFullName', response.user.fullname);
                localStorage.setItem('loggedInEmail', response.user.email);
                localStorage.setItem('userId', response.user.id);
            }
            setIsLoggedIn(true);
            setIsModalOpen(false);
        } catch (error: any) {
            console.error('Lỗi đăng nhập:', error);
            setErrorMessage(error?.response?.data?.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.');
            setIsLoggedIn(false);
            setLoggedInFullName('');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('loggedInFullName');
        }
    };

    const handleRegister = async () => {
        setErrorMessage('');
        try {
            const userData: IUser = {
                email: emailInput,
                password: password,
                fullname: fullNameInput,
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
        if (isLogin) {
            handleLogin();
        } else {
            handleRegister();
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setLoggedInFullName('');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('loggedInFullName');
    };

    return (
        <header className='bg-white shadow-md relative'>
            <nav className='navbar w-4/5 m-auto flex justify-between items-center'>
                <button type="button" title='Toggle Sidebar' className='md:hidden' onClick={toggleMainMenu}>
                    <FontAwesomeIcon icon={faBars} className='text-2xl' />
                </button>
                <Link to='/admin' className='flex gap-4 items-center'>
                    <img src={Logo} alt="TikiLogo" className='w-14' />
                </Link>
                <div
                    className={`md:flex justify-center items-center *:block *:p-5 *:hover:bg-[#33adff] *:hover:text-white ${isShowMainMenu ? 'block absolute top-full left-0 w-full bg-slate-50 *:border-b *:border-slate-200' : 'hidden'}`}>
                    <NavLink to="/admin"
                        className={({ isActive }) => `${isActive ? "bg-[#33adff] text-white" : ""}`}>Dashboard</NavLink>
                </div>
                <div className="profile-menu relative" onClick={toggleProfile} aria-hidden="true">
                    <div>
                        <div className="flex items-center text-gray-600 text-xs">
                            <FontAwesomeIcon icon={faUser} className="h-5 w-5 mr-1" />
                            {loggedInFullName}
                            <button onClick={handleLogout}
                                className="ml-2 text-blue-500 hover:underline text-sm">Đăng xuất
                            </button>
                        </div>
                    </div>
                    {isModalOpen && (
                        <div
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-lg w-[800px] flex relative"
                                style={{ bottom: '100px' }}>
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
                                    <form onSubmit={handleSubmit}>
                                        <div className="border-b-2 mb-4 border-gray-300">
                                            <input
                                                type="email"
                                                placeholder="abc@email.com"
                                                className="w-full py-2 border-none outline-none bg-transparent"
                                                value={emailInput}
                                                onChange={handleEmailInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="relative border-b-2 mb-4 border-gray-300">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Mật khẩu"
                                                className="w-full py-2 border-none outline-none bg-transparent pr-24"
                                                value={password}
                                                onChange={handlePasswordChange}
                                                required
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
                                                    className="w-full py-2 border-none outline-none bg-transparent"
                                                    value={fullNameInput}
                                                    onChange={handleFullNameInputChange}
                                                />
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
                                                <button onClick={() => setIsLogin(false)} className="text-blue-500">Chưa có tài khoản? Đăng ký</button>
                                            </div>
                                        ) : (
                                            <button onClick={() => setIsLogin(true)} className="text-blue-500">Đã có tài
                                                khoản? Đăng nhập</button>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="w-1/2 bg-blue-50 flex flex-col items-center justify-center p-4 text-center relative">
                                    <img src={TikiImage} alt="Tiki" className="h-52 mb-2" />
                                    <p className="text-blue-500 font-semibold">Mua sắm tại Tiki</p>
                                    <p className="text-blue-500 text-sm">Siêu ưu đãi mỗi ngày</p>
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
                </div>
            </nav>
        </header>
    );
}

export default Header;