import shipLogo from "../../../assets/now.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getOrderById } from "../../../api/order.service";
import { IOrder } from "../../../interfaces";
import instance from "../../../api/api.service";
import IUser from "../../../interfaces/UserInterface";
import { getUsers } from "../../../api/user.service";
import UserSideBar from "../../../shared/components/UserSideBar";
import OrderDetailItem from "../../../shared/components/OrderDetailItem";

const UserProfileOrderDetails = () => {
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
        // Theo dõi localStorage khi thay đổi ở tab khác
        const handleStorageChange = (event: StorageEvent) => {
            if (['accessToken', 'loggedInEmail', 'loggedInFullName'].includes(event.key || '')) {
                checkLoginAndUpdateInfo();
            }
        };
        window.addEventListener('storage', handleStorageChange);
        // Cleanup khi component unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
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
                if (orderDetail && orderDetail.users.email === userInfo.email) {
                    setCurrentOrder(orderDetail);
                    console.log("Found order detail:", orderDetail);
                } else {
                    console.log("Order either not found nor unauthorized");
                    console.log("Order email:", orderDetail?.users?.email, "User email:", userInfo.email);
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

    const patchOrderStatus = async (id: number, status: string) => {
        try {
            return await instance.patch('/order/' + id, { status });
        } catch (error) {
            console.error(`Error patching order ${id}:`, error);
            throw error;
        }
    };

    const handleCancelOrder = async () => {
        if (!currentOrder || !currentOrder.id) return;
        //cập nhật trạng thái order
        try {
            await patchOrderStatus(currentOrder.id, "canceled");
            //cập nhật về state
            setCurrentOrder({
                ...currentOrder,
                status: "canceled",

            });

            alert("Hủy thành công đơn hàng.");
        } catch (error) {
            console.log("Error canceling order:", error);
            alert("Có lỗi xảy ra khi hủy đơn hàng. Vui lòng thử lại sau!");
        }
    }

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
        <main className=" bg-[#F5F5FA]">
            {/* breadcrumb */}
            <div className='mx-26 h-[40px] flex items-center gap-1 text-[14px] text-[#808089]'>
                {/* <Breadcrumb /> */}
                <Link to="/customer/homepage" className="">Trang chủ </Link>
                <FontAwesomeIcon icon={faChevronRight} className="" size="sm" />
                <span> Đơn hàng của tôi </span>
            </div>
            <div className="mainContent flex mx-26">
                <UserSideBar />
                <section className="mainContentCtn md:w-[75%] w-full max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center ">
                    <div className="orderTitle text-lg mt-7">
                        <span className="">Chi tiết đơn hàng #{currentOrder?.id} - </span>
                        <span className="status font-medium"> {currentOrder?.status}</span>
                    </div>
                    <div className="orderDate flex md:justify-end mb-3 text-sm">
                        <span>Ngày đặt hàng: {formatDate(currentOrder?.created_at)}</span>
                    </div>
                    <div className="shipDetail flex justify-between gap-4 mb-4 items-stretch max-[767px]:flex-col">
                        {/* Địa chỉ người nhận */}
                        <div className="title flex flex-col flex-1">
                            <div className="text-sm md:mb-3 mb-1 text-gray-800">
                                ĐỊA CHỈ NGƯỜI NHẬN
                            </div>
                            <div className="detail bg-white p-2.5 h-full">
                                <div className="font-medium text-sm mb-1 mt-1.5">{userInfo.fullName.toUpperCase()}</div>
                                <div className="text-sm mb-1 mt-1.5">
                                    <span>Địa chỉ: </span>
                                    <span>{user?.address}</span>
                                </div>
                                <div className="text-sm mt-1.5">
                                    <span>Số điện thoại: </span>
                                    <span>{user?.phone}</span>
                                </div>
                            </div>
                        </div>
                        {/* Hình thức giao hàng */}
                        <div className="title flex flex-col flex-1">
                            <div className="text-sm md:mb-3 mb-1 text-gray-800">
                                HÌNH THỨC GIAO HÀNG
                            </div>
                            <div className="detail bg-white p-2.5 h-full">
                                <div className="text-sm mb-1 mt-1.5 flex items-center gap-1">
                                    <img alt="shipLogo" src={shipLogo} />
                                    <span>Giao Siêu Tốc</span>
                                </div>
                                <div className="text-sm mb-1 mt-1.5">Giao thứ 6, trước 13h, 28/03</div>
                                <div className="text-sm">
                                    Được giao bởi TikiNOW Smart Logistics (giao từ Hà Nội)
                                </div>
                                <div className="text-sm mt-1.5">
                                    Miễn phí vận chuyển
                                </div>
                            </div>
                        </div>

                        {/* Hình thức thanh toán */}
                        <div className="title flex flex-col flex-1">
                            <div className="text-sm md:mb-3 mb-1 text-gray-800">
                                HÌNH THỨC THANH TOÁN
                            </div>
                            <div className="detail bg-white p-2.5 h-full">
                                <div className="text-sm mb-1 mt-1.5">
                                    Thanh toán tiền mặt khi nhận hàng
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="orderDetail ">
                        <table className="md:min-w-full w-fit divide-gray-200 bg-white rounded-md ">
                            <thead className="ltr:text-left rtl:text-right border-b-1 border-[#c2c2c2]">
                                <tr>
                                    <th className="whitespace-wrap font-normal px-3.5 py-5  text-gray-500">Sản phẩm</th>
                                    <th className="whitespace-wrap font-normal px-3.5 py-5  text-gray-500">Giá</th>
                                    <th className="whitespace-wrap font-normal px-3.5 py-5  text-gray-500">Số lượng</th>
                                    <th className="whitespace-wrap font-normal px-3.5 py-5  text-gray-500">Giảm giá</th>
                                    <th className="whitespace-wrap font-normal px-3.5 py-5  text-gray-500 flex justify-end">Tạm
                                        tính
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" divide-gray-200">
                                <OrderDetailItem />
                            </tbody>
                            <tfoot className="text-sm">
                                <tr className="sumPrice">
                                    <td colSpan={4} className="text-right pt-8 px-5 pb-1.5">
                                        <span>Tạm tính</span>
                                    </td>
                                    <td className="text-right pt-8 px-5 pb-1.5">{currentOrder ? formatPrice(currentOrder.total_price) : "N/A"}</td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="text-right py-1.5 px-5 ">
                                        <span>Phí vận chuyển</span>
                                    </td>
                                    <td className="text-right py-1.5 px-5">{currentOrder?.books?.fastShip ? "Miễn phí" : formatPrice(25000)}</td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="text-right py-1.5 px-5 ">
                                        <span>Giảm giá vận chuyển</span>
                                    </td>
                                    <td className="text-right py-1.5 px-5">{currentOrder?.books?.freeship ? formatPrice(0) : formatPrice(-25000)}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="text-right pt-1.5 px-5 pb-1.5">
                                        <span>Tổng cộng</span>
                                    </td>
                                    <td className="text-right pt-1.5 px-5 pb-1.5 text-lg text-red-600">{currentOrder ? formatPrice(currentOrder.total_price) : "N/A"}</td>
                                </tr>
                                <tr>
                                    <td colSpan={5} className="text-right px-5 pb-8 max-[767px]:text-center">
                                        {/*hiển thị nút khi đơn hàng chưa bị hủy */}
                                        {currentOrder?.status !== "canceled" && currentOrder?.status !== "completed" && (
                                            <button type="button"
                                                className="bg-yellow-400 rounded-[4px] px-3 py-1.5 cursor-pointer hover:bg-yellow-500 max-[767px]:h-11" onClick={handleCancelOrder}>Hủy
                                                đơn hàng
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="navSection flex items-center mt-4 mb-8 text-sm gap-2.5">
                        <Link to="../userprofile/orders" className="text-blue-600">&lt;&lt; Quay lại đơn hàng của tôi</Link>
                        <button type="button"
                            className="bg-yellow-400 rounded-md px-5 py-2 font-bold cursor-pointer hover:bg-yellow-500">Theo
                            dõi đơn hàng
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default UserProfileOrderDetails;