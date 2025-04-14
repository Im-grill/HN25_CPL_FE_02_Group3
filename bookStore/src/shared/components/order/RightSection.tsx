import React from 'react';
import couponLogo from '../../../assets/order-logo/img_7.png';
import infoLogo from '../../../assets/order-logo/img_5.png';
import couponBG from '../../../assets/order-logo/img_13.png';
import freeShipLogo from '../../../assets/order-logo/img_14.png';
import infoLogo1 from '../../../assets/order-logo/img_15.png';
import arrowRightBlueLogo from '../../../assets/order-logo/img_16.png';

interface RightSectionProps {
    orderData: any;
    loggedInFullName: string;
    totalPrice: number;
    shippingFee: number;
    shippingDiscount: number;
    discount: number;
    totalPayment: number;
    handlePlaceOrder: () => void;
}

const RightSection: React.FC<RightSectionProps> = ({
                                                       orderData,
                                                       loggedInFullName,
                                                       shippingFee,
                                                       shippingDiscount,
                                                       discount,
                                                       totalPayment,
                                                       handlePlaceOrder,
                                                   }) => {
    return (
        <div className="w-full">
            {/* Customer Info */}
            <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-base text-gray-500">Giao tới</h3>
                    <a href="/" className="text-primary">Thay đổi</a>
                </div>
                <div className="flex items-center mb-1 font-semibold text-gray-800">
                    <p>{loggedInFullName}</p>
                    <i className="w-px h-5 bg-gray-200 mx-2"></i>
                    <p>0123456789</p>
                </div>
                <div className="text-gray-500 text-sm">
                    <span className="text-orange-500 bg-orange-100 font-medium text-xs px-2 rounded-full mr-1">Văn phòng</span>
                    <span>số 17 Duy Tân, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội</span>
                </div>
            </div>

            {/* Coupons */}
            <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-medium text-gray-800">Tiki Khuyến Mãi</div>
                    <div className="flex items-center text-xs text-gray-500">
                        Có thể chọn 2
                        <img src={infoLogo} alt="Info" className="w-4 h-4 ml-1" loading="lazy" />
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative w-full h-16">
                        <img src={couponBG} alt="Coupon BG" className="absolute w-full h-full" loading="lazy" />
                        <div className="absolute w-full h-full flex">
                            <div className="w-16 p-2 flex items-center justify-center">
                                <img src={freeShipLogo} alt="Free Ship" className="w-11 h-11" loading="lazy" />
                            </div>
                            <div className="flex items-center p-2 flex-1">
                                <h4 className="text-sm mr-2">Giảm 10K</h4>
                                <div className="flex items-center ml-auto">
                                    <button className="p-2">
                                        <img src={infoLogo1} alt="Info" className="w-4 h-4" loading="lazy" />
                                    </button>
                                    <button className="text-sm text-white bg-blue-600 rounded px-3 py-1">Bỏ Chọn</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center text-blue-600">
                    <img src={couponLogo} alt="Coupon" className="w-5 h-4 mr-2" loading="lazy" />
                    <span className="text-sm mr-2">Chọn hoặc nhập mã khác</span>
                    <img src={arrowRightBlueLogo} alt="Arrow" className="w-2 h-3" loading="lazy" />
                </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg">
                <div className="p-4 border-b border-gray-200">
                    <h3 className="text-base font-medium text-gray-800">Đơn hàng</h3>
                    <div className="flex items-center text-sm">
                        <p className="text-gray-500 mr-1">{orderData.quantity} sản phẩm.</p>
                        <p className="text-primary">Xem thông tin</p>
                    </div>
                </div>
                <div className="p-4 grid gap-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Tổng tiền hàng</span>
                        <span>{(orderData.books.original_price * orderData.quantity).toLocaleString('vi-VN')}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Phí vận chuyển</span>
                        <span>{shippingFee.toLocaleString('vi-VN')}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Giảm giá trực tiếp</span>
                        <span className="text-success">-{discount.toLocaleString('vi-VN')}</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <span className="text-gray-500">Giảm giá vận chuyển</span>
                            <img src={infoLogo} alt="Info" className="w-3 h-3 ml-1" loading="lazy" />
                        </div>
                        <span className="text-success">-{shippingDiscount.toLocaleString('vi-VN')}</span>
                    </div>
                </div>
                <div className="p-4 flex justify-between">
                    <span className="font-medium text-sm">Tổng tiền thanh toán</span>
                    <div className="text-right">
                        <div className="text-error font-semibold text-xl">{totalPayment.toLocaleString('vi-VN')}</div>
                        <div className="text-success text-sm">
                            Tiết kiệm {(discount + shippingDiscount).toLocaleString('vi-VN')}
                        </div>
                    </div>
                </div>
                <div className="px-4 pb-4 text-xs text-gray-500 text-right">
                    (Giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và các chi phí phát sinh khác)
                </div>
                <div className="p-4">
                    <button
                        onClick={handlePlaceOrder}
                        className="w-full bg-error text-white py-2 rounded-lg text-base font-medium hover:bg-red-600"
                    >
                        Đặt hàng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(RightSection);