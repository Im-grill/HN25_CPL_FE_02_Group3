import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../../../shared/components/order/header';
import LeftSection from '../../../shared/components/order/LeftSection';
import RightSection from '../../../shared/components/order/RightSection.tsx';
import Footer from '../../../shared/components/order/Footer.tsx';

const Order: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderData = location.state || {};
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
    }, []);

    const totalPrice = orderData.books.current_seller.price * orderData.quantity;
    const shippingFee = 25000;
    const shippingDiscount = 25000;
    const discount = (orderData.books.original_price - orderData.books.current_seller.price) * orderData.quantity;
    const totalPayment = totalPrice + shippingFee - shippingDiscount;

    const handlePlaceOrder = async () => {
        if (!loggedInEmail) {
            setError('Bạn cần đăng nhập để đặt hàng!');
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
            await axios.post('http://localhost:8080/order', orderPayload);
            navigate('/customer/confirm', { state: { order: orderPayload } });
        } catch (err) {
            console.error('Lỗi khi đặt hàng:', err);
            setError('Không thể đặt hàng');
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {error && (
                <div className="max-w-6xl mx-auto px-4 py-2 text-error text-center">{error}</div>
            )}
            <main className="flex-grow bg-gray-100 py-5">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-5">
                    <LeftSection orderData={orderData} />
                    <RightSection
                        orderData={orderData}
                        loggedInFullName={loggedInFullName}
                        totalPrice={totalPrice}
                        shippingFee={shippingFee}
                        shippingDiscount={shippingDiscount}
                        discount={discount}
                        totalPayment={totalPayment}
                        handlePlaceOrder={handlePlaceOrder}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Order;