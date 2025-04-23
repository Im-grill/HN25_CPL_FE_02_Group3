import returnBadge from "../../assets/return-badge.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IUser from "../../interfaces/UserInterface";
import { IOrder } from "../../interfaces";
import { getUsers } from "../../api/user.service";
import { getOrderById } from "../../api/order.service";


const OrderDetailItem = () => {
    const { orderId } = useParams();
    const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        email: "",
    });
    const [user, setUser] = useState<IUser>();

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
    }, [isLoggedIn]);

    useEffect(() => {
        const fetchUserByEmail = async () => {
            try {
                if (!userInfo.email) {
                    console.log("No email available to fetch user.");
                    return;
                }
                const allUsers = await getUsers();
                const foundUser = allUsers.find(user => user.email === userInfo.email);
                if (foundUser) {
                    setUser(foundUser);
                } else {
                    console.log("User not found with email:", userInfo.email);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        //chỉ fetch khi đã đăng nhập và có email
        if (isLoggedIn && userInfo.email) {
            fetchUserByEmail();
        };
    }, [isLoggedIn, userInfo.email]);

    //lấy dữ liệu từ order
    useEffect(() => {
        const fetchOrderDetail = async () => {
            try {
                if (!orderId) return;
                setLoading(true);
                const orderIdNumber = parseInt(orderId);
                if (isNaN(orderIdNumber)) {
                    setLoading(false);
                    return;
                }

                //gọi order theo id
                const orderDetail = await getOrderById(orderIdNumber);

                //kiểm tra đúng đơn hàng của người dùng đang đăng nhập
                if (orderDetail && orderDetail.users.id === user?.id) {
                    setCurrentOrder(orderDetail);
                    console.log("Found order detail:", orderDetail);
                } else {
                    console.log("Order either not found nor unauthorized");
                }
            } catch (error) {
                console.error("Error fetching orders: ", error);
                setCurrentOrder(null);
            } finally {
                setLoading(false);
                console.log(loading);
            }
        };
        //chỉ fetch khi đã đăng nhập và có email
        if (isLoggedIn && userInfo.email) {
            fetchOrderDetail();
            console.log(user);

        };
    }, [isLoggedIn, userInfo.email, orderId, loading])

    // VND format
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);

    };

    useEffect(() => {
        console.log(currentOrder)
    }, [])

    return (
        <>
            {currentOrder ? (
                <tr className="border-b-1 border-[#c2c2c2]">
                    <td className="productDetail whitespace-wrap px-4 py-5 text-gray-700">
                        <div className="imgDetailCtn flex gap-2.5 max-[767px]:flex-col">
                            <img src={currentOrder?.books?.images?.[0]?.base_url} alt="productImage"
                                className="w-16 h-16 object-cover rounded" />
                            <div className="detailCtn">
                                <div className="text-[15px]">{currentOrder.books.name}</div>
                                <div className="text-[11px] mt-2.5">
                                    <span>Cung cấp bởi </span>
                                    <Link to="" className="cursor-pointer text-blue-500 ">
                                        {currentOrder.books.current_seller ? currentOrder.books.current_seller.name : "No seller found"}
                                    </Link>
                                </div>
                                <img src={returnBadge} alt="returnBadge" className="h-5 mt-2.5" />
                                <div className="sku mt-2.5 text-sm">Sku: {currentOrder.books.current_seller ? currentOrder.books.current_seller.sku : "N/A"}</div>
                                <button type="button"
                                    className="bg-white border-1 rounded-[4px] px-4 py-1.5 mt-2.5 cursor-pointer hover:bg-gray-100 text-blue-500 text-sm">Chat
                                    với nhà bán
                                </button>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-wrap px-4 py-5 text-gray-700 text-[15px] align-top ">{formatPrice(currentOrder.books.original_price)}</td>
                    <td className="whitespace-wrap px-4 py-5 text-gray-700 text-[15px] align-top ">{currentOrder.quantity}</td>
                    <td className="whitespace-wrap px-4 py-5 text-gray-700 text-[15px] align-top ">{formatPrice(currentOrder.books.original_price -
                        (currentOrder.books.current_seller.price ? currentOrder.books.current_seller.price : currentOrder.books.original_price))}
                    </td>
                    <td className="whitespace-wrap px-4 py-5 text-gray-700 text-[15px] align-top flex justify-end ">{formatPrice(currentOrder.total_price)}</td>
                </tr>
            ) : (
                <tr>
                    <td colSpan={5} className="whitespace-wrap px-4 py-5 text-gray-700 text-center">
                        Không có đơn hàng nào
                    </td>
                </tr>
            )}
        </>
    )
}
export default OrderDetailItem;