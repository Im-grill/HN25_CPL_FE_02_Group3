import { useState, useEffect } from 'react';
import certificatelogo1 from '../../assets/footer-logo/certificate/img.png'
import certificatelogo2 from '../../assets/footer-logo/certificate/img_1.png'
import certificatelogo3 from '../../assets/footer-logo/certificate/img_2.png'
import paymentlogo1 from '../../assets/footer-logo/payment-logo/img.png'
import paymentlogo2 from '../../assets/footer-logo/payment-logo/img_1.png'
import paymentlogo3 from '../../assets/footer-logo/payment-logo/img_2.png'
import paymentlogo4 from '../../assets/footer-logo/payment-logo/img_3.png'
import paymentlogo5 from '../../assets/footer-logo/payment-logo/img_4.png'
import paymentlogo6 from '../../assets/footer-logo/payment-logo/img_5.png'
import paymentlogo7 from '../../assets/footer-logo/payment-logo/img_6.png'
import paymentlogo8 from '../../assets/footer-logo/payment-logo/img_7.png'
import paymentlogo9 from '../../assets/footer-logo/payment-logo/img_8.png'
import paymentlogo10 from '../../assets/footer-logo/payment-logo/img_9.png'
import paymentlogo11 from '../../assets/footer-logo/payment-logo/img_10.png'
import tikilogo from '../../assets/footer-logo/tiki-logo-footer/img.png'
import fblogo from '../../assets/footer-logo/social-logo/img.png'
import ytblogo from '../../assets/footer-logo/social-logo/img_1.png'
import zllogo from '../../assets/footer-logo/social-logo/img_2.png'
import qrcodelogo from '../../assets/footer-logo/download-logo/img.png'
import androidlogo from '../../assets/footer-logo/download-logo/img_1.png'
import ioslogo from '../../assets/footer-logo/download-logo/img_2.png'

const Footer = () => {
    // State để kiểm tra nếu đang ở phiên bản mobile/tablet
    const [isMobileView, setIsMobileView] = useState(false);

    // Kiểm tra kích thước màn hình khi component mount và khi resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileView(window.innerWidth < 1024); // Xem là mobile/tablet nếu nhỏ hơn 1024px
        };

        // Kiểm tra lần đầu
        checkScreenSize();

        // Thêm event listener để kiểm tra khi resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener khi unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Nếu đang ở mobile/tablet view, trả về null (ẩn footer)
    if (isMobileView) {
        return null;
    }

    return (
        <footer className={'mt-4 text-xs leading-4 font-normal text-[#808089] bg-white'}>
            <div className={'py-4'}>
                <div className={'flex justify-between w-full max-w-[1270px] px-[15px] mx-auto flex-wrap lg:flex-nowrap'}>
                    <div className={'w-full lg:w-[268px] mb-6 lg:mb-0'}>
                        <h4 className={'text-base leading-6 font-medium text-[#38383D] mb-3 mt-0'}>Hỗ trợ khách
                            hàng</h4>
                        <p className={"mb-2"}>
                            Hotline:
                            <a href="/"> 1900-6035</a>
                            <span className={'block'}>(1000 đ/phút, 8-12h kể cả T7, CN)</span>
                        </p>
                        <a className={'mb-2 block'} href={"/"}>Các câu hỏi thường gặp</a>
                        <a className={'mb-2 block'} href={"/"}>Gửi yêu cầu hỗ trợ</a>
                        <a className={'mb-2 block'} href={"/"}>Hướng dẫn đặt hàng</a>
                        <a className={'mb-2 block'} href={"/"}>Phương thức vận chuyển</a>
                        <a className={'mb-2 block'} href={"/"}>Chính sách kiểm hàng</a>
                        <a className={'mb-2 block'} href={"/"}>Chính sách đổi trả</a>
                        <a className={'mb-2 block'} href={"/"}>Hướng dẫn trả góp</a>
                        <a className={'mb-2 block'} href={"/"}>Chính sách hàng nhập khẩu</a>
                        <a className={'mb-2 block'} href={"/"}>Hỗ trợ khách hàng: hotro@tiki.vn</a>
                        <a className={'mb-2 block'} href={"/"}>Báo lỗi bảo mật: security@tiki.vn</a>
                    </div>
                    <div className={'w-full lg:w-[226px] mb-6 lg:mb-0'}>
                        <h4 className={'text-base leading-6 font-medium text-[rgb(56,56,61)] mb-3 mt-0'}>Về Tiki</h4>
                        <a className={'mb-2 block'} href={"/"}> Giới thiệu Tiki
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Tiki Blog
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Tuyển dụng
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Chính sách bảo mật thanh toán
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Chính sách bảo mật thông tin cá nhân
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Chính sách giải quyết khiếu nại
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Điều khoản sử dụng
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Giới thiệu Tiki Xu
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Tiếp thị liên kết cùng Tiki
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Bán hàng doanh nghiệp
                        </a>
                        <a className={'mb-2 block'} href={"/"}> Điều kiện vận chuyển
                        </a>
                    </div>
                    <div className={'w-full lg:w-[226px] mb-6 lg:mb-0'}>
                        <h4 className={'text-base leading-6 font-medium text-[#38383D] mb-3 mt-0'}>
                            Hợp tác và liên kết
                        </h4>
                        <a className={'mb-2 block'} href="/">
                            Quy chế hoạt động Sàn GDTMĐT
                        </a>
                        <a className={'mb-2 block'} href="/">
                            Bán hàng cùng Tiki
                        </a>
                        <h4 className={'text-base leading-6 font-medium text-[#38383D] mb-3 mt-6'}>Chứng nhận
                            bởi</h4>
                        <div className={'flex items-center flex-wrap gap-2'}>
                            <img className={'h-8'} src={certificatelogo1} alt=""/>
                            <img className={'h-8'} src={certificatelogo2} alt=""/>
                            <img className={'h-8'} src={certificatelogo3} alt=""/>
                        </div>
                    </div>
                    <div className={'w-full lg:w-[226px] mb-6 lg:mb-0'}>
                        <h4 className={'text-base leading-6 font-medium text-[#38383D] mb-3 mt-0'}>Phương thức
                            thanh toán</h4>
                        <p className={'mb-3'}>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo1}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo2}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo3}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo4}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo5}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo6}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo7}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo8}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo9}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo10}
                                       alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo11}
                                       alt=""/></span>
                        </p>
                        <h4 className={'text-base leading-6 font-medium text-[#38383D] mb-3 mt-0'}>Dịch vụ giao
                            hàng</h4>
                        <a href="/">
                            <img className={'w-auto h-8'} src={tikilogo} alt="TIKI NOW"/>
                        </a>
                    </div>
                    <div className={'w-full lg:w-[226px] mb-6 lg:mb-0'}>
                        <h4 className={'text-base leading-6 font-medium text-[#38383D] mb-3 mt-0'}>Kết nối với
                            chúng tôi</h4>
                        <p>
                            <a className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} href="/">
                                <img src={fblogo} alt="Facebook"/>
                            </a>
                            <a className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} href="/">
                                <img src={ytblogo} alt="Youtube"/>
                            </a>
                            <a className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} href="/">
                                <img src={zllogo} alt="Zalo"/>
                            </a>
                        </p>
                        <h4 className={'text-base leading-6 font-medium text-[#38383D] mb-3 mt-6'}>Tải ứng dụng
                            trên điện thoại</h4>
                        <div className={'flex gap-2'}>
                            <img className={'w-20 h-20'} src={qrcodelogo} alt="QR Code"/>
                            <div className={'flex flex-col gap-2 justify-between'}>
                                <a href="/">
                                    <img className={'w-full'} src={androidlogo} alt="Android App"/>
                                </a>
                                <a href="/">
                                    <img className={'w-full'} src={ioslogo} alt="iOS App"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-px w-full max-w-[1240px] bg-gray-200 mx-auto"></div>
            <div className={'py-4 bg-white'}>
                <div className={'w-full max-w-[1270px] px-[15px] mx-auto'}>
                    <p className={'text-base leading-6 font-medium text-[#38383D] mb-3 mt-0'}>Công ty TNHH TI KI</p>
                    <p className={'block mb-2 text-[#808089]'}>Tòa nhà số 52 đường Út Tịch, Phường 4, Quận Tân Bình,
                        Thành phố Hồ Chí Minh</p>
                    <p className={'block mb-2 text-[#808089]'}> Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở
                        Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
                    </p>
                    <p className={'block mb-0 text-[#808089]'}>
                        Hotline:
                        <a className={'text-[#0B74E5] no-underline'} href="/"> 1900 6035</a>
                    </p>
                </div>
            </div>
            <div className="h-px w-full max-w-[1240px] bg-gray-200 mx-auto"></div>
            <div className={'w-full max-w-[1270px] px-[15px] mx-auto pt-4 pb-4'}>
                <div className={'text-base leading-6 font-medium text-[#38383D] mb-3 mt-0'}>
                    Thương Hiệu Nổi Bật
                </div>
                <div className={'mb-4'}>
                    <p className={'inline-flex flex-wrap'}>
                        <a href="/" className={'text-[#808089]'}>vascara</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>dior</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>esteelauder</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>th truemilk</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>barbie</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>owen</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>ensure</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>durex</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>bioderma</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>elly</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>milo</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>skechers</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>aldo</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>triumph</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>nutifood</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>kindle</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>nerman</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>wacom</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>anessa</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>yoosee</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>olay</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>similac</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>comfort</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>bitas</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>shiseido</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>langfarm</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>hukan</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>vichy</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>fila</a>
                        &nbsp;/&nbsp;
                        <a href="/" className={'text-[#808089]'}>tsubaki</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;