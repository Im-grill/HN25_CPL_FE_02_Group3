import Breadcrumb from "./Breadcrumb";
import avatar from "../../assets/avatar.png"
import iconOrder from "../../assets/icon_profile.png"
import iconUser from "../../assets/icon_user.png";
import iconBell from "../../assets/icon_bell.png";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { divide } from "lodash";

const UserSideBar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        email: "",
    });

    // Function để kiểm tra đăng nhập và cập nhật thông tin người dùng
    const checkLoginAndUpdateInfo = useCallback(() => {
        // Đảm bảo dùng cùng một key để kiểm tra đăng nhập
        const token = localStorage.getItem('accessToken');
        const isUserLoggedIn = !!token;

        setIsLoggedIn(isUserLoggedIn);

        if (isUserLoggedIn) {
            // Lấy tất cả thông tin người dùng từ localStorage
            const storedFullName = localStorage.getItem('loggedInFullName') || "";
            const storedEmail = localStorage.getItem('loggedInEmail') || "";

            setUserInfo({
                fullName: storedFullName,
                email: storedEmail,
            });
        } else {
            // Reset thông tin người dùng khi đăng xuất
            setUserInfo({
                fullName: "",
                email: "",
            });
        }
    }, []);

    // Theo dõi trạng thái localStorage và đăng nhập
    useEffect(() => {
        checkLoginAndUpdateInfo();

        // Theo dõi sự thay đổi của localStorage (đăng nhập/đăng xuất)
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'accessToken' || event.key === 'loggedInEmail') {
                checkLoginAndUpdateInfo();
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [checkLoginAndUpdateInfo]);


    //bật tắt sidebar (responsive)
    const toggleSidebar = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    
    // Hàm hỗ trợ để đóng sidebar và điều hướng
    const handleNavigate = (path: string) => {
        setIsMenuOpen(false);
            navigate(path); 
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMenuOpen(false);
            }
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {/* Burger button */}
            <button
                title="menu"
                type="button"
                className={`rounded-md text-gray-600 p-1.5 mt-3.5 mr-3 md:hidden bg-white`}
                onClick={toggleSidebar}
            >
                <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
            </button>
            <aside className={`sflex flex-col transition-all duration-300 ${isMenuOpen ? "max-[770px]:bg-white fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto w-full h-full md:w-64 md:h-fit md:static md:mr-6" : " hidden md:flex md:w-64 md:h-fit md:mr-6"
                }`}>
                <div className="closeBtn my-3.5">
                    {/* Close sidebar button */}
                    <button
                        title="close"
                        type="button"
                        className={` rounded-md text-gray-600 pl-4 md:hidden bg-white `}
                        onClick={toggleSidebar}
                    >
                        <FontAwesomeIcon icon={faBars} size="2xl" />
                    </button>
                </div>

                <div className={`avatarUsername md:gap-[12px] gap-6 flex items-center md:mb-2 md:border-none border-b-1 border-t-1 border-[#c2c2c2] max-[770px]:py-3.5 max-[770px]:pl-4`}>
                    <div className="avtCtn">
                        <img alt="avatar" src={avatar} className="rounded-full" />
                    </div>
                    <div className="username flex flex-col">
                        <span className="md:text-sm text-lg">Tài khoản của</span>
                        <span className="md:text-lg text-2xl">{userInfo.fullName}</span>
                    </div>
                </div>
                <div className={`responsive-list-btn ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
                    <button type="button"
                        className="button cursor-pointer hover:bg-gray-200 py-2.5 flex items-center gap-[22px] px-7 w-full md:border-none border-b-1 border-[#c2c2c2] max-[770px]:pb-3.5"
                        onClick={() => handleNavigate("../userprofile/info")}>
                        <img alt="iconOrder" src={iconUser} className="max-[770px]:h-[30px] max-[770px]:w-[30px]" />
                        <span className="md:text-sm text-gray-600 text-lg">Thông tin tài khoản</span>
                    </button>
                    <button type="button"
                        className="button cursor-pointer hover:bg-gray-200 py-2.5 flex items-center gap-[22px] px-7 w-full md:border-none border-b-1 border-[#c2c2c2] max-[770px]:pb-3.5">
                        <img alt="iconBell" src={iconBell} className="max-[770px]:h-[30px] max-[770px]:w-[30px]" />
                        <span className="md:text-sm text-gray-600 text-lg">Thông báo của tôi</span>
                    </button>
                    <button type="button"
                        className="button cursor-pointer hover:bg-gray-200 py-2.5 flex items-center gap-[22px] px-7 w-full md:border-none border-b-1 border-[#c2c2c2] max-[770px]:pb-3.5"
                        onClick={() => handleNavigate("../userprofile/orders")}>
                        <img alt="iconOrder" src={iconOrder} className="w-[18px] h-[20px] max-[770px]:h-[30px] max-[770px]:w-[30px]" />
                        <span className="md:text-sm text-gray-600 text-lg">Quản lí đơn hàng</span>
                    </button>
                </div>

            </aside>
        </div>

    );
}
export default UserSideBar;