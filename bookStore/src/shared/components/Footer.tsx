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
    return (
        <footer className={'mt-4 text-xs leading-4 font-normal text-[rgb(128,128,137)] bg-white'}>
            <div className={'py-4'}>
                <div className={'flex justify-between w-[1270px] px-[15px] mx-auto'}>
                    <div className={'w-[268px]'}>
                        <h4 className={'text-base leading-6 font-medium text-[rgb(56,56,61)] mb-3 mt-0'}>Hỗ trợ khách
                            hàng</h4>
                        <p className={"hotline mb-2"}>
                            Hotline:
                            <a href="/">1900-6035</a>
                            <span className={'block'}>(1000 đ/phút, 8-12h kể cả T7,CN)</span>
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
                    <div className={'w-[226px]'}>
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
                    <div className={'w-[226px]'}>
                        <h4 className={'text-base leading-6 font-medium text-[rgb(56,56,61)] mb-3 mt-0'}>
                            Hợp tác và liên kết
                        </h4>
                        <a className={'mb-2 block'} href="/">
                            Quy chế hoạt động Sàn GDTMĐT
                        </a>
                        <a className={'mb-2 block'} href="">
                            Bán hàng cùng Tiki
                        </a>
                        <h4 className={'text-base leading-6 font-medium text-[rgb(56,56,61)] mb-3 mt-6'}>Chứng nhận
                            bởi</h4>
                        <div className={'w-[226px] flex items-center flex-wrap gap-2'}>
                            <img className={'h-8'} src={certificatelogo1} alt=""/>
                            <img className={'h-8'} src={certificatelogo2} alt=""/>
                            <img className={'h-8'} src={certificatelogo3} alt=""/>
                        </div>
                    </div>
                    <div className={'w-[226px]'}>
                        <h4 className={'text-base leading-6 font-medium text-[rgb(56,56,61)] mb-3 mt-0'}>Phương thức
                            thanh toán</h4>
                        <p className={'text-xs leading-4 text-[rgb(128,128,137)] mb-3 mt-0'}>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo1} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo2} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo3} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo4} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo5} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo6} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo7} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo8} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo9} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo10} alt=""/></span>
                            <span><img className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} src={paymentlogo11} alt=""/></span>
                        </p>
                        <h4 className={'text-base leading-6 font-medium text-[rgb(56,56,61)] mb-3 mt-0'}>Dịch vụ giao hàng</h4>
                        <a href="/">
                            <img className={'ml-[-9px] mt-[-8px] w-[109px] h-[33px]'} src={tikilogo} alt=""/>
                        </a>
                    </div>
                    <div className={'w-[226px]'}>
                        <h4 className={'text-base leading-6 font-medium text-[rgb(56,56,61)] mb-3 mt-0'}>Kết nối với chúng tôi</h4>
                        <p>
                            <a className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} href="">
                                <img src={fblogo} alt=""/>
                            </a>
                            <a className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} href="">
                                <img src={ytblogo} alt=""/>
                            </a>
                            <a className={'inline-block mr-2 mb-2 align-middle w-8 h-8'} href="">
                                <img src={zllogo} alt=""/>
                            </a>
                        </p>
                        <h4 className={'text-base leading-6 font-medium text-[rgb(56,56,61)] mb-3 mt-6'}>Tải ứng dụng trên điện thoại</h4>
                        <div className={'flex gap-2 '}>
                            <img className={'w-20 h-20'} src={qrcodelogo} alt=""/>
                            <div className={'flex flex-col gap-2 justify-between items-center'}>
                                <a href="">
                                    <img className={'w-[122px]'} src={androidlogo} alt=""/>
                                </a>
                                <a href="">
                                    <img className={'w-[122px]'} src={ioslogo} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;