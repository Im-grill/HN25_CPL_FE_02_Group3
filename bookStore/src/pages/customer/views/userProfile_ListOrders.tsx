import Breadcrumb from "../../../shared/components/Breadcrumb";
import returnBadge from "../../../assets/return-badge.png";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getOrders } from "../../../api/order.service";
import { IOrder } from "../../../interfaces";
import { getUsers } from "../../../api/user.service";
import IUser from "../../../interfaces/UserInterface";
import UserSideBar from "../../../shared/components/UserSideBar";


const UserProfileListOrder = () => {

    const [userOrders, setUserOrders] = useState<IOrder[] | null>(null);
    const [loggedUser, setLoggedUser] = useState<IUser | null>(null);
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
        };

        // Kiểm tra ngay khi component mount
        checkLoginAndUpdateInfo();

        // Thiết lập interval để kiểm tra mỗi 1 giây
        const intervalId = setInterval(checkLoginAndUpdateInfo, 1000);

        // Cleanup khi component unmount
        return () => clearInterval(intervalId);
    }, []);

    // phục vụ mục đích lấy id người dùng từ email 
    const fetchUserByEmail = useCallback(async () => {
        try {
            if (!userInfo.email) {
                console.log('No email available to fetch user.');
                return;
            }
            console.log('Fetching user with email:', userInfo.email);
            const allUsers = await getUsers();
            const foundUser = allUsers.find((user) => user.email === userInfo.email); //lọc user có trùng email với email đã lưu trong local
            if (foundUser) {
                console.log('Found user:', foundUser); // Debug
                setLoggedUser(foundUser);
            } else {
                console.log('User not found with email:', userInfo.email);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }, [userInfo.email]);

    useEffect(()=>{
        if(isLoggedIn && userInfo.email){
            fetchUserByEmail(); 
        }
    },[isLoggedIn, userInfo.email, fetchUserByEmail]);

    //lấy dữ liệu từ order
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Lấy thông tin người dùng từ loggedUser
                if (!loggedUser?.id) {
                    console.log('No logged user ID available.');
                    return;
                }
                console.log('Fetching orders for user ID:', loggedUser.id);
                const allOrders = await getOrders();
                //lọc email trùng với email đã đăng nhập
                const userOrders = allOrders.filter(order => order.users.id === loggedUser.id);

                if (userOrders.length > 0) {
                    setUserOrders(userOrders)
                    console.log("No orders found for user:", loggedUser.id);
                }
            } catch (error) {
                console.error("Error fetching orders: ", error);
            }
        };

        /// Chỉ fetch khi đã đăng nhập và có loggedUser
        if (isLoggedIn && loggedUser?.id) {
            fetchOrders();
        }   
    }, [isLoggedIn, loggedUser?.id])

    // VND format
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    //date format
    const formatDate = (dateString: string | undefined) => {
        if (!dateString || dateString === undefined) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
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
            <div className="mainContent flex mx-4 md:mx-26 ">
                <UserSideBar/>
                <section className="mainContentCtn md:w-[75%] w-full max-[767px]:flex-1">
                    <div className="orderTitle text-xl my-3.5">
                        <span className="">Đơn hàng của tôi </span>
                    </div>
                    {userOrders && userOrders.length > 0 ? (
                        <div className="ordersList">
                            <table className="min-w-full  divide-gray-200 bg-white rounded-md ">
                                <thead className="ltr:text-left rtl:text-right border-b-1 border-[#c2c2c2]">
                                    <tr>
                                        <th className="whitespace-wrap font-normal px-3.5 py-1  text-gray-500">Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody className=" divide-gray-200 border-t-1 border-[#c2c2c2]">
                                    {userOrders?.map((order) => (
                                        <tr key={order.id} className="border-b-1 border-[#c2c2c2]">
                                            <td className="productDetail whitespace-wrap  px-4 py-5 text-gray-700">
                                                <div className="flex gap-2.5">
                                                    <div className="detailCtn">
                                                        <Link to={`../userprofile/order/${order.id}`} className="text-[15px] hover:text-blue-600 hover:underline">Đơn hàng số: #{order.id}</Link>
                                                        <div className="text-[14px] flex flex-col mt-2.5 mx-2">
                                                            <span className="">Trạng thái:                                                                <span className={`text-sm font-semibold 
                                                                    ${order.status === "ongoing" ? "text-blue-500"
                                                                    : order.status === "completed" ? "text-green-500"
                                                                        : order.status === "pending" ? "text-yellow-500"
                                                                            : order.status === "canceled" ? "text-red-500" : "text-gray-500"}`}>
                                                                {order.status}
                                                            </span>
                                                            </span>
                                                            <span>Ngày tạo đơn: {formatDate(order.created_at)}</span>
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
                        <span className="whitespace-wrap px-4 py-5 text-gray-700 text-center">
                            Không có đơn hàng nào
                        </span>
                    )
                    }
                </section>
            </div>
        </main>
    );
}
export default UserProfileListOrder;