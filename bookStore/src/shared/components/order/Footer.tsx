import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className={'bg-[#ebebf0] text-[11px] leading-[16px] pt-[40px] pb-[50px]'}>
            <div className={'w-[1270px] px-[15px] mx-auto'}>
                <p className="mb-1 text-[rgb(128,128,137)]">
                    Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều kiện Giao dịch chung:
                </p>
                <p className="terms">
                    <a className={'pr-3'} href="/">
                        Quy chế hoạt động
                    </a>
                    <i className={'border border-[#dddde3]'}></i>
                    <a className={'px-[12px]'} href="/">
                        Chính sách giải quyết khiếu nại
                    </a>
                    <i></i>
                    <a className={'px-[12px]'} href="/">
                        Chính sách bảo hành
                    </a>
                    <i className={'border border-[#dddde3]'}></i>
                    <a className={'px-[12px]'} href="/">
                        Chính sách bảo mật thanh toán
                    </a>
                    <i className={'border border-[#dddde3]'}></i>
                    <a className={'px-[12px]'} href="/">
                        Chính sách bảo mật thông tin cá nhân
                    </a>
                </p>
                <p className={'mt-[18px] w-full ml-0 mb-0 text-[#808089]'}>
                    © 2019 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn
                </p>
            </div>
        </footer>
    );
};

export default Footer;