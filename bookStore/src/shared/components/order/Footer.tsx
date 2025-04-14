import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-10 text-xs text-gray-500 text-center">
            <div className="max-w-6xl mx-auto px-4">
                <p className="mb-2">
                    Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều kiện Giao dịch chung:
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    {[
                        'Quy chế hoạt động',
                        'Chính sách giải quyết khiếu nại',
                        'Chính sách bảo hành',
                        'Chính sách bảo mật thanh toán',
                        'Chính sách bảo mật thông tin cá nhân',
                    ].map((link, index) => (
                        <React.Fragment key={link}>
                            <a href="/" className="hover:text-primary">
                                {link}
                            </a>
                            {index < 4 && <i className="hidden sm:block w-px h-4 bg-gray-300"></i>}
                        </React.Fragment>
                    ))}
                </div>
                <p className="mt-4">© 2019 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn</p>
            </div>
        </footer>
    );
};

export default React.memo(Footer);