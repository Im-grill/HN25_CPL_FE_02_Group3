import { useEffect, useState } from 'react';
import Logo from '../../../assets/tiki-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [isShowProfile, setIsShowProfile] = useState<boolean>(false);
    const [isShowMainMenu, setIsShowMainMenu] = useState<boolean>(false);
    const [, setIsLoggedIn] = useState(false);
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
                            <Link to='/' className='flex gap-4 items-center'>
                                <button onClick={handleLogout}
                                    className="ml-2 text-blue-500 hover:underline text-sm">Đăng xuất
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;