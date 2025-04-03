import freeShip from '../../../assets/Order-logo/img.png'
import logoTiki from '../../../assets/order-logo/img_1.png'
import nowLogo from '../../../assets/order-logo/img_2.png'
import arrowLogo from '../../../assets/order-logo/img_3.png'
import packageLogo from '../../../assets/order-logo/img_4.png'
import infoLogo from '../../../assets/order-logo/img_5.png'
import bookLogo from '../../../assets/order-logo/img_6.png'
import couponLogo from '../../../assets/order-logo/img_7.png'
import arrowRightLogo from '../../../assets/order-logo/img_8.png'
import paymentLogo from '../../../assets/order-logo/img_9.png'
import ViettelPayment from '../../../assets/order-logo/img_10.png'
import counponBankPayLogo from '../../../assets/order-logo/img_11.png'
import shinhanBankLogo from '../../../assets/order-logo/img_12.png'
import couponBG from '../../../assets/order-logo/img_13.png'
import freeShipLogo from '../../../assets/order-logo/img_14.png'
import infoLogo1 from '../../../assets/order-logo/img_15.png'
import arrowRightBlueLogo from '../../../assets/order-logo/img_16.png'

const Order = () => {
    return (
        <>
            <div className={'relative z-[999]'}>
                <a href="/" className={'text-[#0b74e5] no-underline'}>
                    <div
                        className={'text-[14px] font-semibold leading-[150%] pl-1 text-[#00AB56] flex flex-row items-center justify-center p-[12px_16px] gap-1 bg-[#EFFFF4]'}>
                        Freeship đơn từ 45k, giảm nhiều hơn cùng
                        <img src={freeShip} alt="" className={'w-[79px] h-[16px] opacity-100'}/>
                    </div>
                </a>
            </div>
            <header className={'bg-white'}>
                <div className={'flex flex-1 items-center h-[100px] w-[1270px] px-[15px] mx-auto'}>
                    <a href="/">
                        <img src={logoTiki} alt="" className={'w-18 h-18'}/>
                    </a>
                    <span className={'w-[1px] h-[32px] bg-[#1A94FF] mx-4 block'}></span>
                    <span className={'font-normal text-[24px] leading-[32px] text-[#1AA7FF]'}>Thanh toán</span>
                </div>
            </header>
            <main className={'bg-[#F5F5FA]'}>
                <div className={'flex flex-wrap min-h-[calc(100vh-260px)] pt-5 pb-20 w-[1270px] px-[15px] mx-auto'}>
                    {/*left*/}
                    <div className={'w-[900px] mr-5'}>
                        <div className="rounded relative p-3 mb-4 bg-white">
                            <h3 className={'mb-4 text-[rgb(56,56,61)] font-bold text-lg leading-6 m-0'}> Chọn hình thức
                                giao hàng</h3>
                            <div className="relative w-[497px] pb-4 mb-4">
                                <div
                                    className="shipping-method-list bg-[rgb(240,248,255)] border border-[rgb(194,225,255)] rounded-[10px] p-4 grid gap-y-3">
                                    <div>
                                        <label htmlFor="" className={'flex items-center'}>
                                            <input type="radio"
                                                   className={'w-[18px] h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}/>
                                            <span className={'text-sm leading-5 text-[rgb(56,56,61)] items-center'}>
                                                <div className={'cursor-pointer py-1'}>
                                                    <div className={'flex items-center py-0.5'}>
                                                        <img src={nowLogo} className={'mr-1 object-contain w-8 h-4'}
                                                             alt=""/>
                                                        <span>Giao siêu tốc 2h</span>
                                                        <span
                                                            className={'text-[13px] leading-5 font-medium inline-flex items-center text-[rgb(0,171,86)] px-1 bg-white ml-1 rounded'}>-25k</span>
                                                    </div>
                                                </div>
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="" className={'flex items-center'}>
                                            <input type="radio"
                                                   className={'w-[18px] h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}/>
                                            <span className={'text-sm leading-5 text-[rgb(56,56,61)] items-center'}>
                                                <div className={'cursor-pointer py-1'}>
                                                    <div className={'flex items-center py-0.5'}>
                                                        <span>Giao tiết kiệm</span>
                                                        <span
                                                            className={'text-[13px] leading-5 font-medium inline-flex items-center text-[rgb(0,171,86)] px-1 bg-white ml-1 rounded'}>-16k</span>
                                                    </div>
                                                </div>
                                            </span>
                                        </label>
                                    </div>

                                </div>
                                <img src={arrowLogo} alt=""
                                     className={'z-1 absolute w-[32px] h-[12px] left-1/2 bottom-4.5 transform translate-x-[-50%] translate-y-full'}/>
                            </div>
                            <div className="gap-5">
                                <div
                                    className=" rounded-[12px] border border-[rgb(221,221,227)] mt-5 p-[20px_16px_16px] relative">
                                    <div
                                        className="flex items-center text-sm leading-5 text-[rgb(7,148,73)] px-1 bg-white absolute top-0 left-3 transform -translate-y-1/2">
                                        <div className="flex items-center mr-1">
                                            <img src={packageLogo} className={'w-6 h-6'} alt=""/>
                                            <span>Gói: Giao siêu tốc 2h, trước 18h hôm nay</span>
                                        </div>
                                    </div>
                                    <div className={'left-content'}>
                                        <div className={'mt-4 w-[482px] flex justify-between'}>
                                            <div className={'flex items-center'}>
                                                <img src={nowLogo} alt="" className={'w-8 h-4 mr-1 object-contain'}/>
                                                <span className={'text-xs leading-4 uppercase'}>Giao siêu tốc 2h</span>
                                            </div>
                                            <div className={'text-sm leading-5 flex items-center'}>
                                                <span
                                                    className={'text-[rgb(128,128,137)] line-through mr-2 font-medium text-xs'}>25.000 đ</span>
                                                <span className={'text-[rgb(0,171,86)] font-medium'}>MIỄN PHÍ</span>
                                                <img className={'w-[14px] h-[14px] cursor-pointer ml-0.5'}
                                                     src={infoLogo} alt=""/>
                                            </div>
                                        </div>
                                        <div className={'package-item-list'}>
                                            <div className={'flex py-3 items-center'}>
                                                <div className={'mr-2 flex-shrink-0 max-h-12'}>
                                                    <img src={bookLogo} alt="" className={'w-12 h-12'}/>
                                                </div>
                                                <div className={'text-sm leading-5 text-[rgb(128,128,137)] flex-1'}>
                                                    <div className={'mb-1 pr-5'}>
                                                        <span>Chat GPT Thực Chiến</span>
                                                    </div>
                                                    <div className={'flex mb-1 pr-4 justify-between w-[440px]'}>
                                                        <span>SL: x1</span>
                                                        <div>
                                                            <div
                                                                className="text-[rgb(255,66,78)] flex gap-4 items-center font-medium">
                                                                <span
                                                                    className={'original-price text-[rgb(128,128,137)] line-through text-xs font-normal leading-[18px]'}>169.000 ₫</span>
                                                                <span>110.000 ₫</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=""></div>
                            </div>
                            <div className={'mt-4'}>
                                <div
                                    className="seller-coupons-heading flex flex-nowrap items-center cursor-pointer pt-2 border-t border-[#EBEBF0] text-sm leading-[21px] ">
                                    <img src={couponLogo} className={'mr-2 w-5 h-4'} alt=""/>
                                    <span>Thêm mã khuyến mãi của Shop</span>
                                    <img src={arrowRightLogo} className={'w-5 h-5'} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-4 mb-4 bg-white rounded-md">
                            <h3 className={'mb-4 flex items-baseline text-[#38383D] font-bold text-[18px] leading-[24px] m-0'}>Chọn
                                hình thức thanh toán</h3>
                            <div className={'w-[868px] h-[64px]'}>
                                <label htmlFor="" className={'flex items-center '}>
                                    <input type="radio"
                                           className={'w-[18px] h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}/>
                                    <span className={'label'}>
                                        <div className={'cursor-pointer h-16]'}>
                                            <div className={'flex items-center h-full'}>
                                                <img src={paymentLogo} className={'h-8 w-8 mr-3'} alt=""/>
                                                <span
                                                    className={'text-sm text-[rgb(56,56,61)]'}>Thanh toán tiền mặt</span>
                                            </div>
                                        </div>
                                    </span>
                                </label>
                            </div>
                            <div className={'w-[868px] h-[64px]'}>
                                <label htmlFor="" className={'flex items-center '}>
                                    <input type="radio"
                                           className={'w-[18px] h-[18px] border border-[rgb(196,196,207)] rounded-full mr-2 relative z-1 text-[rgb(120,120,120)] flex-shrink-0 cursor-pointer'}/>
                                    <span className={'label'}>
                                        <div className={'cursor-pointer h-16]'}>
                                            <div className={'flex items-center h-full'}>
                                                <img src={ViettelPayment} className={'h-8 w-8 mr-3'} alt=""/>
                                                <span className={'text-sm text-[rgb(56,56,61)]'}>Viettel Money</span>
                                            </div>
                                        </div>
                                    </span>
                                </label>
                            </div>
                            <div className="ml-[21px]">
                                <div className="p-4 bg-[#F5F5FA] w-[733px]">
                                    <div
                                        className="text-[13px] font-medium leading-[1.54] text-[#0D5CB6] flex items-center mb-2">
                                        <img src={counponBankPayLogo} className={'h-5 w-5 mr-1.5'} alt=""/>
                                        <span>Ưu đãi thanh toán thẻ</span>
                                    </div>
                                    <div className="grid grid-cols-3 grid-rows-1 gap-2">
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
                                            <div className="mb-0.5 flex justify-between items-end">
                                                <div
                                                    className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                                                    Freeship
                                                </div>
                                                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt=""/>

                                            </div>
                                            <div className={'flex justify-between items-end'}>
                                                <div>
                                                    <div
                                                        className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>Thẻ
                                                        Shinhan Platinum
                                                    </div>
                                                    <div
                                                        className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">Không
                                                        giới hạn
                                                    </div>
                                                </div>
                                                <img src={infoLogo} className={'w-5 h-5 self-start'} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*right*/}
                    <div className="flex-1 overflow-hidden">
                        <div className={'relative p-4 text-sm leading-5 mb-3 rounded-md bg-white'}>
                            <div className="block-header flex items-center justify-between mb-3">
                                <h3 className={'text-[rgb(128,128,137)] text-base'}>Giao tới</h3>
                                <a href="/" className={'text-[#0b74e5]'}>Thay đổi</a>
                            </div>
                            <div className="customer-info flex items-center mb-0.5 font-semibold text-[rgb(56,56,61)]">
                                <p>Vũ Anh Tú</p>
                                <i className={'="block w-[1px] h-[20px] bg-[#EBEBF0] mx-2'}></i>
                                <p>0123456789</p>
                            </div>
                            <div className="address text-[rgb(128,128,137)] font-normal ">
                                <span
                                    className={' text-[rgb(252,130,10)] bg-[rgb(255,245,235)] font-medium text-[12px] leading-[16px] px-[6px] rounded-full mr-[4px] h-[18px] inline-flex items-center'}>Văn phòng</span>
                                <span>số 17 Duy Tân, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội</span>
                            </div>
                        </div>
                        <div className="rounded-md mb-3 relative p-4 bg-white">
                            <div className="flex items-center justify-between leading-5 mb-4">
                                <div className="text-[rgb(36,36,36)] font-medium text-[13px]">Tiki Khuyến Mãi</div>
                                <div className="flex items-center text-[rgb(120,120,120)] text-[13px]">
                                    Có thể chọn 2
                                    <img src={infoLogo} className={'w-[18px] h-[18px] ml-1 flex items-center'} alt=""/>
                                </div>
                            </div>
                            <div className="mb-4 grid gap-3">
                                <div className="relative">
                                    <div className="max-w-full relative flex w-[286px] z-[2]">
                                        <div className="relative w-full h-[60px]">
                                            <img src={couponBG} alt=""/>
                                            <div className={'top-0 left-0 absolute w-full h-full flex'}>
                                                <div
                                                    className="min-w-[60px] w-[60px] h-[60px] p-[8px] flex flex-col items-center justify-center self-center">
                                                    <div className={'relative w-11 h-11'}>
                                                        <div className="w-full pb-[calc(100%) relative]">
                                                            <img src={freeShipLogo} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex flex-row items-center p-[8px_12px_8px_8px] w-[calc(100%-60px)]">
                                                    <h4 className={'text-[13px] leading-[20px] max-h-[20px] mr-[4px]'}>Giảm
                                                        10K</h4>
                                                    <div className="flex items-center flex-shrink-0 ml-auto">
                                                        <button
                                                            className={'ml-[-8px] bg-transparent outline-none border-none p-[8px] cursor-pointer leading-0'}>
                                                            <img src={infoLogo1} className={'w-4 h-4'} alt=""/>
                                                        </button>
                                                        <button
                                                            className={'font-medium cursor-pointer text-center rounded-[4px] text-white bg-[#017fff] border-none  p-[2px_12px]'}>
                                                            Bỏ Chọn
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center text-[rgb(10,104,255)]">
                                <img src={couponLogo} className={'h-4 w-5 mr-2'} alt=""/>
                                <span className={'mr-2 text-sm'}>Chọn hoặc nhập mã khác</span>
                                <img src={arrowRightBlueLogo} className={'h-3 w-2'} alt=""/>
                            </div>
                        </div>
                        <div className="bg-white rounded-md">
                            <div className="p-4 leading-5 border-b border-[#ebebf0]">
                                <div className={'mb-1'}>
                                    <h3 className={'font-medium text-[rgb(56,56,61)]'}>Đơn hàng</h3>
                                </div>
                                <div className="flex items-center">
                                    <p className={'text-[rgb(128,128,137)] m-0 mr-[4px]'}>1 sản phẩm.</p>
                                    <p className={'text-[rgb(11,116,229)] font-normal'}>Xem thông tin</p>
                                    <svg
                                        className="sub-title-link__arrow transform rotate-[90deg] transition-all duration-500"
                                        width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M9.96967 8.46967C10.2626 8.17678 10.7374 8.17678 11.0303 8.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 9.67678 8.76256 9.96967 8.46967Z"
                                              fill="#0B74E5"></path>
                                    </svg>
                                </div>

                            </div>
                            <div className="p-[8px_16px] grid gap-[8px] text-[14px] leading-[21px]">
                                <div className="flex justify-between gap-x-[8px]">
                                    <span className={'text-[rgb(128,128,137)]'}>Tổng tiền hàng</span>
                                    <span>169.000đ</span>
                                </div>
                                <div className="flex justify-between gap-x-[8px]">
                                    <span className={'text-[rgb(128,128,137)]'}>Phí vận chuyển</span>
                                    <span>25.000đ</span>
                                </div>
                                <div className="flex justify-between gap-x-[8px]">
                                    <span className={'text-[rgb(128,128,137)]'}>Giảm giá trực tếp</span>
                                    <span className={'text-[rgb(0,171,86)]'}>-59.000đ</span>
                                </div>
                                <div className="flex justify-between gap-x-[8px]">
                                    <div className="flex items-center">
                                        <span className={'text-[rgb(128,128,137)]'}>Giảm giá vận chuyển</span>
                                        <img src={infoLogo} className={'w-[14px] h-[14px]'} alt=""/>
                                    </div>
                                    <span className={'text-[rgb(0,171,86)]'}>-25.000đ</span>
                                </div>
                            </div>
                            <div className="h-[1px] bg-[#ebebf0]"></div>
                            <div className={'p-[8px_16px] flex gap-x-2 justify-between'}>
                                <span className={'font-medium text-sm'}>Tổng tiền thanh toán</span>
                                <div className={'flex flex-col items-end'}>
                                    <span className={'text-[rgb(255,66,78)] font-semibold text-[20px] leading-[30px]'}>110.000 ₫</span>
                                    <span className={'text-[rgb(0,171,86)]'}>Tiết kiệm 84.000 ₫</span>
                                </div>
                            </div>
                            <div className={'flex justify-between pt-0 pr-[8px] pb-[16px] pl-[8px]'}>
                                <span className={'text-right text-xs text-[rgb(128,128,137)]'}>(Giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và các chi phí phát sinh khác)</span>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    className={'m-[0px_16px_16px] text-white bg-[#ff424e] border-none font-normal h-[40px] w-full items-center rounded-md cursor-pointer'}>Đặt
                                    hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={'bg-[#ebebf0] text-[11px] leading-[16px] pt-[40px] pb-[50px]'}>
                <div className={'w-[1270px] px-[15px] mx-auto'}>
                    <p className="mb-1 text-[rgb(128,128,137)]">Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều
                        kiện Giao dịch chung:</p>
                    <p className="terms">
                        <a className={'pr-3'} href="/">Quy chế hoạt động</a>
                        <i className={'border border-[#dddde3]'}></i>
                        <a className={'px-[12px]'} href="/">Chính sách giải quyết khiếu nại</a>
                        <i></i>
                        <a className={'px-[12px]'} href="/">Chính sách bảo hành</a>
                        <i className={'border border-[#dddde3]'}></i>
                        <a className={'px-[12px]'} href="/">Chính sách bảo mật thanh toán</a>
                        <i className={'border border-[#dddde3]'}></i>
                        <a className={'px-[12px]'} href="/">Chính sách bảo mật thông tin cá nhân</a>
                    </p>
                    <p className={'mt-[18px] w-full ml-0 mb-0 text-[#808089]'}>
                        © 2019 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn
                    </p>
                </div>
            </footer>
        </>

    )
}
export default Order;