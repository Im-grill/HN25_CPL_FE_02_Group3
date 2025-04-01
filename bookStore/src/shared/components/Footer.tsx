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
                            <span>(1000 đ/phút, 8-12h kể cả T7,CN)</span>
                        </p>
                        <h4 className={'text-base leading-6 font-medium text-[rgb(56,56,61)] mb-3 mt-6'}>Tải ứng dụng
                            trên điện thoại</h4>
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
            <div className="h-px w-[1240px] bg-gray-200 mx-auto"></div>
            <div className={'py-4 bg-white'}>
                <div className={'w-[1270px] px-[15px] mx-auto'}>
                    <p className={'text-[16px] leading-6 font-medium text-[#38383d] mb-3 mt-0'}>Công ty TNHH TI KI</p>
                    <p className={'block mb-2 text-[#808089]'}>Tòa nhà số 52 đường Út Tịch, Phường 4, Quận Tân Bình,
                        Thành
                        phố Hồ Chí Minh</p>
                    <p className={'block mb-2 text-[#808089]'}> Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở
                        Kế
                        Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
                    </p>
                    <p className={'block mb-0 text-[#808089]'}>
                        Hotline:
                        <a className={'text-[#0b74e5] no-underline'} href=""> 1900 6035</a>
                    </p>
                </div>
            </div>
            <div className="h-px w-[1240px] bg-gray-200 mx-auto"></div>
            <div className={'w-[1270px] px-[15px] mx-auto'}>
                <div className="pt-4">
                    <div className={'text-[16px] leading-6 font-medium text-[#38383d] mb-3 mt-0'}>
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
                            <a href="/" className={'text-[#808089]'}>hukan</a>
                            &nbsp;/&nbsp;
                            <a href="/" className={'text-[#808089]'}>vichy</a>
                            &nbsp;/&nbsp;
                            <a href="/" className={'text-[#808089]'}>fila</a>
                            &nbsp;/&nbsp;
                            <a href="/" className={'text-[#808089]'}>tsubaki</a>
                            &nbsp;/&nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;