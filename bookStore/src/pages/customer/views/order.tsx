// index.tsx (main Order component)
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../../../shared/components/order/Header';
import ShippingMethod from '../../../shared/components/order/ShippingMethod';
import PaymentMethod from '../../../shared/components/order/PaymentMethod';
import AddressInfo from '../../../shared/components/order/AddressInfo';
import Promotions from '../../../shared/components/order/Promotions';
import OrderSummary from '../../../shared/components/order/OrderSummary';
import Footer from '../../../shared/components/order/Footer';
import {OrderData} from '../../../shared/components/order/types.ts';

const Order: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const orderData = location.state || {} as OrderData;
    const [error, setError] = useState('');
    const [loggedInEmail, setLoggedInEmail] = useState('');
    const [loggedInFullName, setLoggedInFullName] = useState('');

    useEffect(() => {
        const storedFullName = localStorage.getItem('loggedInFullName');
        const storedEmail = localStorage.getItem('loggedInEmail');
        if (storedFullName && storedEmail) {
            setLoggedInEmail(storedEmail);
            setLoggedInFullName(storedFullName);
        }
        console.log(orderData);
    }, [orderData]);

    // Calculate pricing
    const totalPrice = orderData.books?.current_seller?.price * orderData.quantity || 0; // Tổng tiền hàng (dùng giá đã giảm)
    const shippingFee = 25000; // Phí vận chuyển
    const shippingDiscount = 25000; // Giảm giá vận chuyển
    const discount = ((orderData.books?.original_price || 0) - (orderData.books?.current_seller?.price || 0)) * orderData.quantity; // Giảm giá trực tiếp
    const totalPayment = totalPrice + shippingFee - shippingDiscount; // Tổng thanh toán

    const handlePlaceOrder = async () => {
        if (!loggedInEmail) {
            setError('Bạn cần đăng nhập để đặt hàng!');
            console.log(loggedInEmail);
            navigate('/customer/homepage');
            return;
        }

        const orderPayload = {
            created_at: new Date().toISOString(),
            users: { email: loggedInEmail },
            books: orderData.books,
            quantity: orderData.quantity,
            total_price: totalPayment,
            status: 'pending',
        };

        try {
            console.log(orderPayload);
            await axios.post('http://localhost:8080/order', orderPayload);
            navigate('/customer/confirm', { state: { order: orderPayload } });
        } catch (err) {
            console.error('Lỗi khi đặt hàng:', err);
            setError(`Không thể đặt hàng:`);
        }
    };

    return (
        <>
            <Header />
            <main className={'bg-[#F5F5FA]'}>
                <div className={'flex flex-wrap min-h-[calc(100vh-260px)] pt-5 pb-20 w-full px-4 mx-auto md:w-[1270px] md:px-[15px] flex-col md:flex-row'}>
                    {/* Left section */}
                    <div className={'w-full mb-5 md:w-[900px] md:mr-5'}>
                        <ShippingMethod orderData={orderData} />
                        <PaymentMethod />
                    </div>

                    {/* Right section */}
                    <div className="w-full md:flex-1 md:overflow-hidden">
                        <AddressInfo fullName={loggedInFullName} />
                        <Promotions />
                        <OrderSummary
                            orderData={orderData}
                            totalPrice={totalPrice}
                            shippingFee={shippingFee}
                            shippingDiscount={shippingDiscount}
                            discount={discount}
                            totalPayment={totalPayment}
                            onPlaceOrder={handlePlaceOrder}
                            error={error}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Order;