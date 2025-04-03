import freeShip from '../../../assets/Order-logo/img.png'
import logoTiki from '../../../assets/order-logo/img_1.png'
import nowLogo from '../../../assets/order-logo/img_2.png'
import arrowLogo from '../../../assets/order-logo/img_3.png'
import packageLogo from '../../../assets/order-logo/img_4.png'
import infoLogo from '../../../assets/order-logo/img_5.png'
import bookLogo from '../../../assets/order-logo/img_6.png'

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
                        <div className="rounded relative p-4 mb-4 bg-white">
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
                            <div className="grid gap-5">
                                <div
                                    className="w-full rounded-[12px] border border-[rgb(221,221,227)] mt-5 p-[20px_16px_16px] relative flex z-0">
                                    <div
                                        className="flex items-center text-sm leading-5 text-[rgb(7,148,73)] px-1 bg-white absolute top-0 left-3 transform -translate-y-1/2">
                                        <div className="flex items-center mr-1">
                                            <img src={packageLogo} className={'w-6 h-6'} alt=""/>
                                            <span>Gói: Giao siêu tốc 2h, trước 18h hôm nay</span>
                                        </div>
                                    </div>
                                    <div className={'left-content mr-[46px] max-w-[428px]'}>
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
                                        <div className={'package-item-full'}>
                                            <div className={'flex py-3 items-center'}>
                                                <div className={'mr-2 flex-shrink-0 max-h-12'}>
                                                    <img src={bookLogo} alt="" className={'w-12 h-12'}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
export default Order;