import Breadcrumb from "../../../shared/components/Breadcrumb";
import avatar from "../../../assets/avatar.png"
import iconOrder from "../../../assets/icon_profile.png"
import iconUser from "../../../assets/icon_user.png";
import iconBell from "../../../assets/icon_bell.png";
import shipLogo from "../../../assets/now.png";
import returnBadge from "../../../assets/return-badge.png";
import {Link} from "react-router-dom";
import {useState} from "react";


const UserProfile = () => {

    const [products, setProducts] = useState([
        {
            "createdAt": "2025-02-27T07:45:08.910Z",
            "name": "Combo 4 cuốn: ChatGPT + ChatGPT thực chiến + AI 5.0 + AI Công cụ nâng cao hiệu suất",
            "image": "https://loremflickr.com/640/480/technics",
            "originalPrice": 549000,
            "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            "id": "36",
            "sku": "7572869544871"
        },
    ])

    // Tính tổng giá sản phẩm
    const calOriginalTotal = () => {
        return products.reduce((total, product) => {
            // Giả sử mỗi sản phẩm có giá (originalPrice) và số lượng (quantity)
            return total + product.originalPrice;
        }, 0);
    };

    // Giả sử các giá trị phí vận chuyển và giảm giá
    const shippingFee = 30000; // VND
    const shippingDiscount = 15000; // VND

    // Tính tổng cộng
    const calculateTotal = () => {
        const orgTotal = calOriginalTotal();
        return orgTotal + shippingFee - shippingDiscount;
    };

    // Định dạng giá tiền theo VND
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };
    return (
        <main className=" bg-[#F5F5FA]">
            {/* breadcrumb */}
            <div className='mx-26 h-[53px] flex items-center'>
                <Breadcrumb/>
            </div>

            <div className="mainContent flex mx-26">
                <aside className="sideSection w-[24%] mr-6">
                    <div className="avatarUsername flex items-center gap-[12px] mb-2">
                        <div className="avtCtn">
                            <img alt="avatar" src={avatar} className="rounded-full"/>
                        </div>
                        <div className="username flex flex-col">
                            <span className="text-sm">Tài khoản của</span>
                            <span className="text-lg">username here</span>
                        </div>
                    </div>
                    <button type="button"
                            className="button cursor-pointer hover:bg-gray-200 py-2.5 flex items-center gap-[22px] px-7 w-full ">
                        <img alt="iconOrder" src={iconUser}/>
                        <span className="text-sm text-gray-600">Thông tin tài khoản</span>
                    </button>
                    <button type="button"
                            className="button cursor-pointer hover:bg-gray-200 py-2.5 flex items-center gap-[22px] px-7 w-full ">
                        <img alt="iconOrder" src={iconBell}/>
                        <span className="text-sm text-gray-600">Thông báo của tôi</span>
                    </button>
                    <button type="button"
                            className="button cursor-pointer hover:bg-gray-200 py-2.5 flex items-center gap-[22px] px-7 w-full">
                        <img alt="iconOrder" src={iconOrder} className="w-[18px] [h-20]"/>
                        <span className="text-sm text-gray-600">Quản lí đơn hàng</span>
                    </button>
                </aside>
                <section className="mainContentCtn  w-[75%]">
                    <div className="orderTitle text-lg mt-7">
                        <span className="">Chi tiết đơn hàng #861977987 - </span>
                        <span className="status font-medium"> Đang xử lý</span>
                    </div>
                    <div className="orderDate flex justify-end mb-3 text-sm">
                        <span>Ngày đặt hàng: 10:47 28/03/2025</span>
                    </div>

                    <div className="shipDetail flex justify-between gap-4  mb-4 items-stretch">
                        {/* Địa chỉ người nhận */}
                        <div className="title flex flex-col flex-1">
                            <div className="text-sm mb-3 text-gray-800">
                                ĐỊA CHỈ NGƯỜI NHẬN
                            </div>
                            <div className="detail bg-white p-2.5 h-full">
                                <div className="font-medium text-sm mb-1 mt-1.5">USERNAME GOES HERE</div>
                                <div className="text-sm mb-1 mt-1.5">
                                    <span>Địa chỉ: </span>
                                    <span>số 17 Duy Tân, phường Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội, Việt Nam</span>
                                </div>
                                <div className="text-sm mt-1.5">
                                    <span>Số điện thoại: </span>
                                    <span>0942438693</span>
                                </div>
                            </div>
                        </div>

                        {/* Hình thức giao hàng */}
                        <div className="title flex flex-col flex-1">
                            <div className="text-sm mb-3 text-gray-800">
                                HÌNH THỨC GIAO HÀNG
                            </div>
                            <div className="detail bg-white p-2.5 h-full">
                                <div className="text-sm mb-1 mt-1.5 flex items-center gap-1">
                                    <img alt="shipLogo" src={shipLogo}/>
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
                            <div className="text-sm mb-3 text-gray-800">
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
                        <table className="min-w-full  divide-gray-200 bg-white rounded-md ">
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
                            {products.map((product) => (
                                <tr key={product.id} className="border-b-1 border-[#c2c2c2]">
                                    <td className="productDetail whitespace-wrap  px-4 py-5 text-gray-700">
                                        <div className="flex gap-2.5">
                                            <img src={product.image} alt="productImage"
                                                 className="w-16 h-16 object-cover rounded"/>
                                            <div className="detailCtn">
                                                <div className="text-[15px]">{product.name}</div>
                                                <div className="text-[11px] mt-2.5">
                                                    <span>Cung cấp bởi </span>
                                                    <Link to="" className="cursor-pointer text-blue-500 ">
                                                        Tiki Trading
                                                    </Link>
                                                </div>
                                                <img src={returnBadge} alt="returnBadge" className="h-5 mt-2.5"/>
                                                <div className="sku mt-2.5 text-sm">Sku: {product.sku}</div>
                                                <button type="button"
                                                        className="bg-white border-1 rounded-[4px] px-4 py-1.5 mt-2.5 cursor-pointer hover:bg-gray-100 text-blue-500 text-sm">Chat
                                                    với nhà bán
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-wrap px-4 py-5 text-gray-700 text-[15px] align-top ">{product.originalPrice}</td>
                                    <td className="whitespace-wrap px-4 py-5 text-gray-700 text-[15px] align-top ">quantity
                                        goes here
                                    </td>
                                    <td className="whitespace-wrap px-4 py-5 text-gray-700 text-[15px] align-top ">discount
                                        goes here
                                    </td>
                                    <td className="whitespace-wrap px-4 py-5 text-gray-700 text-[15px] align-top flex justify-end ">{formatPrice(0)}</td>
                                </tr>
                            ))}
                            </tbody>
                            <tfoot className="text-sm">
                            <tr className="sumPrice">
                                <td colSpan={4} className="text-right pt-8 px-5 pb-1.5">
                                    <span>Tạm tính</span>
                                </td>
                                <td className="text-right pt-8 px-5 pb-1.5">{formatPrice(calOriginalTotal())}</td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="text-right py-1.5 px-5 ">
                                    <span>Phí vận chuyển</span>
                                </td>
                                <td className="text-right py-1.5 px-5">price goes here</td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="text-right py-1.5 px-5 ">
                                    <span>Giảm giá vận chuyển</span>
                                </td>
                                <td className="text-right py-1.5 px-5">price goes here</td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="text-right pt-1.5 px-5 pb-1.5">
                                    <span>Tổng cộng</span>
                                </td>
                                <td className="text-right pt-1.5 px-5 pb-1.5 text-lg text-red-600">{formatPrice(calculateTotal())}</td>
                            </tr>
                            <tr>
                                <td colSpan={5} className="text-right px-5 pb-8">
                                    <button type="button"
                                            className="bg-yellow-400 rounded-[4px] px-3 py-1.5  cursor-pointer hover:bg-yellow-500">Hủy
                                        đơn hàng
                                    </button>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="navSection flex items-center mt-4 mb-8 text-sm gap-2.5">
                        <Link to="" className="text-blue-600">&lt;&lt; Quay lại đơn hàng của tôi</Link>
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
export default UserProfile;