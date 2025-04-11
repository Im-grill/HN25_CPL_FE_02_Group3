import Breadcrumb from "../../../shared/components/Breadcrumb";
import avatar from "../../../assets/avatar.png"
import iconOrder from "../../../assets/icon_profile.png"
import iconUser from "../../../assets/icon_user.png";
import iconBell from "../../../assets/icon_bell.png";
import shipLogo from "../../../assets/now.png";
import returnBadge from "../../../assets/return-badge.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getOrders } from "../../../api/order.service";
import { IOrder } from "../../../interfaces";


const UserProfileListOrder = () => {

    const [userOrders, setUserOrders] = useState<IOrder[] | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        email: "",
    });

    // Đồng bộ trạng thái đăng nhập khi component mount và khi localStorage thay đổi
    useEffect(() => {
        // Function để kiểm tra đăng nhập và cập nhật thông tin người dùng
        const checkLoginAndUpdateInfo = () => {
            // Đảm bảo dùng cùng một key để kiểm tra đăng nhập
            const token = localStorage.getItem('accessToken');
            const isUserLoggedIn = !!token;

            setIsLoggedIn(isUserLoggedIn);

            if (isUserLoggedIn) {
                // Lấy tất cả thông tin người dùng từ localStorage
                const storedFullName = localStorage.getItem('loggedInFullName') || "";
                const storedEmail = localStorage.getItem('loggedInEmail') || "";
                const storedPhone = localStorage.getItem('loggedInPhone') || "";

                setUserInfo({
                    fullName: storedFullName,
                    email: storedEmail,
                    // phone: storedPhone,
                });
            } else {
                // Reset thông tin người dùng khi đăng xuất
                setUserInfo({
                    fullName: "",
                    email: "",
                    // phone: "",
                });
            }
        };

        // Kiểm tra ngay khi component mount
        checkLoginAndUpdateInfo();

        // Thiết lập interval để kiểm tra mỗi 1 giây
        const intervalId = setInterval(checkLoginAndUpdateInfo, 1000);

        // Cleanup khi component unmount
        return () => clearInterval(intervalId);
    }, [isLoggedIn]);


    //lấy dữ liệu từ order
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const allOrders = await getOrders();
                //lọc email trùng với email đã đăng nhập
                const userOrders = allOrders.filter(order => order.users.email === userInfo.email);

                if (userOrders.length > 0) {
                    setUserOrders(userOrders)
                    console.log("Found orders", userOrders[0]);
                }
            } catch (error) {
                console.error("Error fetching orders: ", error);
            }
        };

        //chỉ fetch khi đã đăng nhập và có email
        if (isLoggedIn && userInfo.email) {
            fetchOrders();
        };
    }, [isLoggedIn, userInfo.email])

    // VND format
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };
    return (
        <main className=" bg-[#F5F5FA] mb-8">
            {/* breadcrumb */}
            <div className='mx-26 h-[40px] flex items-center gap-1 text-[#808089]'>
                {/* <Breadcrumb /> */}
                <Link to="/customer/homepage" className="">Trang chủ </Link>
                <FontAwesomeIcon icon={faChevronRight} className="" size="sm" />
                <span> Đơn hàng của tôi </span>
            </div>

            <div className="mainContent flex mx-26">
                <aside className="sideSection w-[24%] mr-6">
                    <div className="avatarUsername flex items-center gap-[12px] mb-2">
                        <div className="avtCtn">
                            <img alt="avatar" src={avatar} className="rounded-full" />
                        </div>
                        <div className="username flex flex-col">
                            <span className="text-sm">Tài khoản của</span>
                            <span className="text-lg">{userInfo.fullName}</span>
                        </div>
                    </div>
                    <button type="button"
                        className="button cursor-pointer hover:bg-gray-200 py-2.5 flex items-center gap-[22px] px-7 w-full ">
                        <img alt="iconOrder" src={iconUser} />
                        <span className="text-sm text-gray-600">Thông tin tài khoản</span>
                    </button>
                    <button type="button"
                        className="button cursor-pointer hover:bg-gray-200 py-2.5 flex items-center gap-[22px] px-7 w-full ">
                        <img alt="iconOrder" src={iconBell} />
                        <span className="text-sm text-gray-600">Thông báo của tôi</span>
                    </button>
                    <button type="button"
                        className="button cursor-pointer hover:bg-gray-200 py-2.5 flex items-center gap-[22px] px-7 w-full">
                        <img alt="iconOrder" src={iconOrder} className="w-[18px] [h-20]" />
                        <span className="text-sm text-gray-600">Quản lí đơn hàng</span>
                    </button>
                </aside>
                <section className="mainContentCtn  w-[75%]">
                    <div className="orderTitle text-xl my-3.5">
                        <span className="">Đơn hàng của tôi </span>
                    </div>

                    <div className="shipDetail flex justify-between text-[15px] mb-4 items-stretch">
                        {/* Địa chỉ người nhận */}
                        <div className="title flex flex-col flex-1">
                            <button type="button" className="detail bg-white h-full py-2 cursor-pointer hover:border-b-2 hover:border-blue-700">
                                Tất cả đơn
                            </button>
                        </div>
                        <div className="title flex flex-col flex-1">
                            <button type="button" className="detail bg-white h-full py-2 cursor-pointer hover:border-b-2 hover:border-blue-700">
                                Chờ thanh toán
                            </button>
                        </div>
                        <div className="title flex flex-col flex-1">
                            <button type="button" className="detail bg-white h-full py-2 cursor-pointer hover:border-b-2 hover:border-blue-700">
                                Đang xử lí
                            </button>
                        </div>
                        <div className="title flex flex-col flex-1">
                            <button type="button" className="detail bg-white h-full py-2 cursor-pointer hover:border-b-2 hover:border-blue-700">
                                Đã thanh toán
                            </button>
                        </div>
                        <div className="title flex flex-col flex-1">
                            <button type="button" className="detail bg-white h-full py-2 cursor-pointer hover:border-b-2 hover:border-blue-700">
                                Đã giao
                            </button>
                        </div>
                        <div className="title flex flex-col flex-1">
                            <button type="button" className="detail bg-white h-full py-2 cursor-pointer hover:border-b-2 hover:border-blue-700">
                                Đã hủy
                            </button>
                        </div>

                    </div>

                    {userOrders && userOrders.length > 0 ? (
                        <div className="ordersList">
                            <table className="min-w-full  divide-gray-200 bg-white rounded-md ">
                                <thead className="ltr:text-left rtl:text-right border-b-1 border-[#c2c2c2]">
                                    <tr>
                                        <th className="whitespace-wrap font-normal px-3.5 py-1  text-gray-500">Sản phẩm</th>
                                    </tr>
                                </thead>

                                <tbody className=" divide-gray-200 border-t-1 border-[#c2c2c2]">
                                    {userOrders?.map((order) => (
                                        <tr key={order.id} className="border-b-1 border-[#c2c2c2]">
                                            <td className="productDetail whitespace-wrap  px-4 py-5 text-gray-700">
                                                <div className="flex gap-2.5">
                                                    <img src={order?.books?.images?.[0].base_url} alt="productImage"
                                                        className="w-16 h-16 object-cover rounded" />
                                                    <div className="detailCtn">
                                                        <Link to="../userprofile" className="text-[15px]">{order.books.name}</Link>
                                                        <div className="text-[11px] mt-2.5">
                                                            <span>Cung cấp bởi </span>
                                                            <Link to="" className="cursor-pointer text-blue-500 ">
                                                                {order.books.current_seller.name ? order.books.current_seller.name : "No seller found."}
                                                            </Link>
                                                        </div>
                                                        <img src={returnBadge} alt="returnBadge" className="h-5 mt-2.5" />
                                                        <div className="sku mt-2.5 text-sm"></div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td colSpan={2} className="whitespace-wrap px-4 py-5 text-gray-700 text-[15px] align-top flex justify-end ">
                                                {formatPrice(order.total_price) ? formatPrice(order.total_price) : "N/A"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <tr>
                            <td colSpan={5} className="whitespace-wrap px-4 py-5 text-gray-700 text-center">
                                Không có đơn hàng nào
                            </td>
                        </tr>
                    )
                    }
                </section>
            </div>
        </main>
    );
}
export default UserProfileListOrder;