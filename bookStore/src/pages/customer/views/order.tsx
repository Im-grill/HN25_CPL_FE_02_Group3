import freeShip from '../../../assets/Order-logo/img.png'
import logoTiki from '../../../assets/order-logo/img_1.png'

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
                    <div>
                        <h3> Chọn hình thức giao hàng</h3>

                    </div>
                </div>
            </main>
        </>

    )
}
export default Order;