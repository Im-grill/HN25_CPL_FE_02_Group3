import React, {useContext, useState} from 'react';
import Logo from '../../../assets/tiki-logo.png';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faUser} from '@fortawesome/free-solid-svg-icons';
import {UserContext} from '../../context/UserContext.tsx';
import TikiImage from "../../../assets/tiki-image.png";

const Header = () => {
    const userStore = useContext(UserContext)
    const [isShowProfile, setIsShowProfile] = useState<boolean>(false);
    const [isShowMainMenu, setIsShowMainMenu] = useState<boolean>(false);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

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

    const logout = () => {
        // Clear UserContext
        userStore?.setUser(undefined);
        // Clear localStorage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        navigate("/login")

    }
    return (
        <header className='bg-white shadow-md relative'>
            <nav className='navbar w-4/5 m-auto flex justify-between items-center'>
                <button type="button" title='Toggle Sidebar' className='md:hidden' onClick={toggleMainMenu}>
                    <FontAwesomeIcon icon={faBars} className='text-2xl'/>
                </button>
                <Link to='/' className='flex gap-4 items-center'>
                    <img src={Logo} alt="TikiLogo" className='w-14'/>
                </Link>
                <div
                    className={`md:flex justify-center items-center *:block *:p-5 *:hover:bg-[#33adff] *:hover:text-white ${isShowMainMenu ? 'block absolute top-full left-0 w-full bg-slate-50 *:border-b *:border-slate-200' : 'hidden'}`}>
                    <NavLink to="/admin"
                             className={({isActive}) => `${isActive ? "bg-[#33adff] text-white" : ""}`}>Dashboard</NavLink>
                </div>
                <div className="profile-menu relative" onClick={toggleProfile} aria-hidden="true">
                    <div>
                        <button onClick={() => setIsModalOpen(true)}
                                className="flex items-center text-gray-600 hover:text-blue-500 text-xs">
                            <FontAwesomeIcon icon={faUser} className="h-5 w-5 mr-1"/>
                            Tài khoản
                        </button>
                    </div>
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                            <div className="bg-white rounded-lg shadow-lg w-[800px] flex relative"
                                 style={{bottom: '100px'}}>
                                {/*Button "<" */}
                                <button
                                    className="absolute top-4 left-4 text-gray-500 hover:text-black text-xl"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    &nbsp;&lt;&nbsp;
                                </button>
                                <div className="w-1/2 p-6">
                                    <br/>
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
                                    <button
                                        className={`w-full ${isLogin ? 'bg-red-500' : 'bg-blue-500'} text-white py-2 rounded`}>
                                        {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                                    </button>
                                    <div className="flex justify-between text-sm mt-2">
                                        {isLogin ? (
                                            <div className="flex flex-col space-y-2">
                                                <a href="#" className="text-blue-500">Quên mật khẩu?</a>
                                                <div className="flex items-center space-x-1">
                                                    <span className="text-gray-700 font-light">Chưa có tài khoản?</span>
                                                    <button onClick={() => setIsLogin(false)}
                                                            className="text-blue-500">Tạo tài khoản
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <button onClick={() => setIsLogin(true)} className="text-blue-500">Đã có tài
                                                khoản? Đăng nhập</button>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="w-1/2 bg-blue-50 flex flex-col items-center justify-center p-4 text-center relative">
                                    <img src={TikiImage} alt="Tiki" className="h-52 mb-2"/>
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
                </div>
            </nav>
        </header>
    )
}

export default Header;