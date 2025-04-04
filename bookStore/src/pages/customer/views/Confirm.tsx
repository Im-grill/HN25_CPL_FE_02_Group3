import { Link } from 'react-router-dom';

export default function Confirm() {
    return (
        <div className='flex justify-center  mt-6 mb-10 '>
            <div className="w-[742px]   ">
                <div className='bg-gradient-to-r from-[#0BBEE5] to-[#3856F3] w-full h-[112px] relative rounded-tr-lg rounded-tl-lg '>
                    <img src="/assets/confetti.svg.png " alt="" className="" />
                    <div className="absolute top-[40%] left-[50%] transform -translate-x-[50%] ">
                        <span className='font-medium text-2xl text-white block '>Yay, đặt hàng thành công!</span>
                        <span className='font-medium text-[18px] text-white '>Chuẩn bị tiền mặt 110.000 ₫</span>
                    </div>
                    <img src="/assets/icon.png" alt="" className="size-[150px] absolute top-10 left-10" />
                </div>
                <div className="bg-white  w-full rounded-br-lg rounded-bl-lg pb-50 ">
                    <div className="ml-[30%] flex justify-between p-5 border-b-[#EBEBF0] border-b mr-5">
                        <span className="font-normal text-sm text-[#808089]">Phương thức thanh toán</span>
                        <span className="text-[#38383D] font-normal text-sm">Thanh toán tiền mặt</span>
                    </div>
                    <div className="ml-[30%] flex justify-between p-5 pt-2 mr-5">
                        <span className="font-normal text-sm text-[#808089]">Tổng cộng</span>
                        <span className="text-[#38383D] font-normal text-lg">110.000 ₫</span>
                    </div>
                    <div className="ml-[30%] text-center mr-5 ">
                        <Link to="/customer/homepage">
                            <button type="button" className="border-[#0B74E5] border-1 w-full p-3 rounded-sm cursor-pointer hover:underline decoration-[#0B74E5]">
                                <span className="text-[#0B74E5] ">Quay về trang chủ</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* tt don hang */}
            <div className="w-[318px]  h-fit bg-white ml-5 pb-5 rounded-lg">
                <div className=" flex justify-between border-b-1 border-[#EBEBF0] p-3">
                    <span className="text-sm text-[#38383D] font-bold">
                        Mã đơn hàng: 861977987
                    </span>
                    <a href="#" className="text-[#0B74E5] text-sm font-medium">Xem đơn hàng</a>
                </div>
                {/* time giao hang */}
                <div>
                    <span className="text-sm p-3 text-[#38383D] font-normal">Giao thứ 6, trước 13h, 28/03</span>
                </div>
                {/* thong tin detail sach */}
                <div className="flex items-center mt-2 p-3">
                    <img src="https://s3-alpha-sig.figma.com/img/a537/15f3/c0c30196f4e6e29db52b15ccd96b5f88?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NhnGSdqanArML1F8V1tyutsns-983OWnZEWvaMyOlkDLVbBEGtx~Ik5NxCdS31ExD-YaKWDD~k9ZPyj1~IGPU3jllble8jASZpzAbRNcf3tgefzM0vSWoQ2chDQOkWFz7SUSBPCRuQJICSUwj795qzYoeaX9RqKdzqQmr8~ItgQOKlCe3z9jZtFHW3UqtdJYrRv0tG~aBivb96WqLcCqQKrpx3GJlVJ8fzBE6no0YIchNs3qBVi5lzfzdDyx64SCDfTsZ5bGKO-awGCxpaeoenRUkf9Ak8eaNARjvFMWJFOTa-j6ehfQ0BC2rWbiwyFlVPIRea6bJYCGvzEsV8Nn8A__"
                        alt=""
                        className="size-[50px]" />
                    <span className="text-sm font-normal text-[#808089]">Chat GPT Thực Chiến</span>
                </div>
            </div>
        </div>

    )
}
