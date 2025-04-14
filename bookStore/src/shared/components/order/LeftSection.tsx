import React from 'react';
import nowLogo from '../../../assets/order-logo/img_2.png';
import arrowLogo from '../../../assets/order-logo/img_3.png';
import packageLogo from '../../../assets/order-logo/img_4.png';
import infoLogo from '../../../assets/order-logo/img_5.png';
import couponLogo from '../../../assets/order-logo/img_7.png';
import arrowRightLogo from '../../../assets/order-logo/img_8.png';
import paymentLogo from '../../../assets/order-logo/img_9.png';
import ViettelPayment from '../../../assets/order-logo/img_10.png';
import counponBankPayLogo from '../../../assets/order-logo/img_11.png';
import shinhanBankLogo from '../../../assets/order-logo/img_12.png';

interface LeftSectionProps {
    orderData: any;
}

const LeftSection: React.FC<LeftSectionProps> = ({ orderData }) => {
    return (
        <div className="w-full md:w-[900px]">
            {/* Shipping Method */}
            <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Chọn hình thức giao hàng</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 grid gap-3">
                <label className="flex items-center">
                    <input type="radio" name="shipping" className="mr-2" />
                    <div className="flex items-center">
                        <img src={nowLogo} alt="Now Logo" className="w-8 h-4 mr-1" loading="lazy" />
                        <span>Giao siêu tốc 2h</span>
                        <span className="text-xs font-medium text-success bg-white ml-1 px-1 rounded">-25k</span>
                    </div>
                </label>
                <label className="flex items-center">
                    <input type="radio" name="shipping" className="mr-2" />
                    <div className="flex items-center">
                        <span>Giao tiết kiệm</span>
                        <span className="text-xs font-medium text-success bg-white ml-1 px-1 rounded">-16k</span>
                    </div>
                </label>
            </div>
            <img src={arrowLogo} alt="Arrow" className="absolute w-8 h-3 left-1/2 -bottom-2 transform -translate-x-1/2" loading="lazy" />
        </div>

    {/* Package Details */}
    <div className="relative rounded-lg border border-gray-200 mt-5 p-4">
        <div className="flex items-center text-sm text-green-600 bg-white absolute -top-3 left-3 px-1">
            <img src={packageLogo} alt="Package" className="w-6 h-6" loading="lazy" />
            <span>Gói: Giao siêu tốc 2h, trước 18h hôm nay</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={nowLogo} alt="Now Logo" className="w-8 h-4 mr-1" loading="lazy" />
                <span className="text-xs uppercase">Giao siêu tốc 2h</span>
            </div>
            <div className="flex items-center text-sm">
                <span className="text-gray-500 line-through mr-2 text-xs">25.000 đ</span>
                <span className="text-success font-medium">MIỄN PHÍ</span>
                <img src={infoLogo} alt="Info" className="w-3 h-3 ml-1" loading="lazy" />
            </div>
        </div>
        <div className="flex py-3 items-center">
            <img src={orderData.books.images[0].base_url} alt="Book" className="w-12 h-12 mr-2" loading="lazy" />
            <div className="text-sm text-gray-500 flex-1">
                <div className="mb-1">{orderData.books.name}</div>
                <div className="flex justify-between">
                    <span>SL: {orderData.quantity}</span>
                    <div className="text-error font-medium flex gap-2">
                <span className="text-gray-500 line-through text-xs">
                  {(orderData.books.original_price * orderData.quantity).toLocaleString('vi-VN')}
                </span>
                        <span>{(orderData.books.current_seller.price * orderData.quantity).toLocaleString('vi-VN')} ₫</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Seller Coupons */}
    <div className="flex items-center cursor-pointer pt-2 border-t border-gray-200 text-sm">
        <img src={couponLogo} alt="Coupon" className="w-5 h-4 mr-2" loading="lazy" />
        <span>Thêm mã khuyến mãi của Shop</span>
        <img src={arrowRightLogo} alt="Arrow Right" className="w-5 h-5" loading="lazy" />
    </div>

    {/* Payment Method */}
    <div className="bg-white rounded-lg p-4 mt-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Chọn hình thức thanh toán</h3>
        <div className="grid gap-4">
            <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                <div className="flex items-center">
                    <img src={paymentLogo} alt="Cash" className="w-8 h-8 mr-3" loading="lazy" />
                    <span>Thanh toán tiền mặt</span>
                </div>
            </label>
            <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                <div className="flex items-center">
                    <img src={ViettelPayment} alt="Viettel" className="w-8 h-8 mr-3" loading="lazy" />
                    <span>Viettel Money</span>
                </div>
            </label>
        </div>
        <div className="ml-5 mt-4 p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center text-sm text-blue-600 mb-2">
                <img src={counponBankPayLogo} alt="Bank Coupon" className="w-5 h-5 mr-1.5" loading="lazy" />
                <span>Ưu đãi thanh toán thẻ</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {[...Array(12)].map((_, index) => (
                    <div key={index} className="bg-white rounded-lg p-2.5 shadow-sm cursor-pointer">
                        <div className="flex justify-between items-end mb-1">
                            <div className="text-base font-medium text-blue-600 truncate">Freeship</div>
                            <img src={shinhanBankLogo} alt="Shinhan" className="w-18 h-8" loading="lazy" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-xs text-gray-500 mb-1">Thẻ Shinhan Platinum</div>
                                <div className="text-orange-500 italic text-xs">Không giới hạn</div>
                            </div>
                            <img src={infoLogo} alt="Info" className="w-5 h-5" loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
);
};

export default React.memo(LeftSection);