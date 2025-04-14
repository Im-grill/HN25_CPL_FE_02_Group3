import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className={'bg-[#ebebf0] text-[10px] md:text-[11px] leading-[16px] pt-[30px] md:pt-[40px] pb-[40px] md:pb-[50px]'}>
            <div className={'w-full px-4 mx-auto md:w-[1270px] md:px-[15px]'}>
                <p className="mb-1 text-[rgb(128,128,137)]">
                    Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều kiện Giao dịch chung:
                </p>
                <p className="terms flex flex-wrap">
                    <a className={'pr-3 mb-1'} href="/">
                        Quy chế hoạt động
                    </a>
                    <i className={'border border-[#dddde3] hidden md:inline-block'}></i>
                    <a className={'pr-3 md:px-[12px] mb-1'} href="/">
                        Chính sách giải quyết khiếu nại
                    </a>
                    <i className={'border border-[#dddde3] hidden md:inline-block'}></i>
                    <a className={'pr-3 md:px-[12px] mb-1'} href="/">
                        Chính sách bảo hành
                    </a>
                    <i className={'border border-[#dddde3] hidden md:inline-block'}></i>
                    <a className={'pr-3 md:px-[12px] mb-1'} href="/">
                        Chính sách bảo mật thanh toán
                    </a>
                    <i className={'border border-[#dddde3] hidden md:inline-block'}></i>
                    <a className={'pr-3 md:px-[12px] mb-1'} href="/">
                        Chính sách bảo mật thông tin cá nhân
                    </a>
                </p>
                <p className={'mt-[14px] md:mt-[18px] w-full ml-0 mb-0 text-[#808089]'}>
                    © 2019 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn
                </p>
            </div>
        </footer>
    );
};

export default Footer;