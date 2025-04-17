import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../../../shared/components/order/Header.tsx';
import ShippingMethod from '../../../shared/components/order/ShippingMethod';
import PaymentMethod from '../../../shared/components/order/PaymentMethod';
import AddressInfo from '../../../shared/components/order/AddressInfo';
import Promotions from '../../../shared/components/order/Promotions';
import OrderSummary from '../../../shared/components/order/OrderSummary';
import Footer from '../../../shared/components/order/Footer';
import {OrderData} from '../../../shared/components/order/types.ts';
import {getUsers} from '../../../api/user.service';
import IUser from '../../../interfaces/UserInterface';

const Order: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderData = location.state || {} as OrderData;
    const [error, setError] = useState('');
    const [loggedInEmail, setLoggedInEmail] = useState('');
    const [loggedInFullName, setLoggedInFullName] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userPhone, setUserPhone] = useState('');

    useEffect(() => {
        const storedFullName = localStorage.getItem('loggedInFullName');
        const storedEmail = localStorage.getItem('loggedInEmail');
        if (storedFullName && storedEmail) {
            setLoggedInEmail(storedEmail);
            setLoggedInFullName(storedFullName);

            // Fetch user details to get address and phone
            fetchUserDetails(storedEmail);
        }
        console.log(orderData);
    }, [orderData]);

    // Function to fetch user details
    const fetchUserDetails = async (email: string) => {
        try {
            const allUsers = await getUsers();
            const foundUser = allUsers.find((user: IUser) => user.email === email);
            if (foundUser) {
                setUserAddress(foundUser.address || '');
                setUserPhone(foundUser.phone || '');

                // Also set user in order data if needed
                if (!orderData.users) {
                    orderData.users = foundUser;
                }
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    // Calculate pricing
    const totalPrice = orderData.books?.current_seller?.price * orderData.quantity || 0; // Tổng tiền hàng (dùng giá đã giảm)
    const shippingFee = 25000; // Phí vận chuyển
    const shippingDiscount = 25000; // Giảm giá vận chuyển
    const discount = ((orderData.books?.original_price || 0) - (orderData.books?.current_seller?.price || 0)) * orderData.quantity; // Giảm giá trực tiếp
    const totalPayment = totalPrice + shippingFee - shippingDiscount; // Tổng thanh toán

    const handlePlaceOrder = async () => {
        if (!loggedInEmail) {
            setError('Bạn cần đăng nhập để đặt hàng!');
            navigate('/');
            return;
        }

        const orderPayload = {
            created_at: new Date().toISOString(),
            users: orderData.users,
            books: orderData.books,
            quantity: orderData.quantity,
            total_price: totalPayment,
            status: 'pending',
        };

        try {
           
            await axios.post('http://localhost:8080/order', orderPayload);
             navigate('/confirm', {state: {order: orderPayload}});
        } catch (err) {
            console.error('Lỗi khi đặt hàng:', err);
            setError(`Không thể đặt hàng:`);
        }
    };

    return (
        <>
            <Header/>
            <main className={'bg-[#F5F5FA]'}>
                <div
                    className={'flex flex-wrap min-h-[calc(100vh-260px)] pt-5 pb-20 w-full px-4 mx-auto md:w-[1270px] md:px-[15px] flex-col md:flex-row'}>
                    {/* Left section */}
                    <div className={'w-full mb-5 md:w-[900px] md:mr-5'}>
                        <ShippingMethod orderData={orderData}/>
                        <PaymentMethod/>
                    </div>

                    {/* Right section */}
                    <div className="w-full md:flex-1 md:overflow-hidden">
                        <AddressInfo
                            fullName={loggedInFullName}
                            address={userAddress}
                            phone={userPhone}
                        />
                        <Promotions/>
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
            <Footer/>
        </>
    );
};

export default Order;