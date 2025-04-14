import React from 'react';

interface AddressInfoProps {
    fullName: string;
}

const AddressInfo: React.FC<AddressInfoProps> = ({ fullName }) => {
    return (
        <div className={'relative p-3 md:p-4 text-xs md:text-sm leading-5 mb-3 rounded-md bg-white'}>
            <div className="block-header flex items-center justify-between mb-2 md:mb-3">
                <h3 className={'text-[rgb(128,128,137)] text-sm md:text-base'}>Giao tới</h3>
                <a href="/" className={'text-[#0b74e5]'}>Thay đổi</a>
            </div>
            <div className="customer-info flex items-center mb-0.5 font-semibold text-[rgb(56,56,61)] flex-wrap md:flex-nowrap">
                <p className="w-full md:w-auto">{fullName}</p>
                <i className={'hidden md:block w-[1px] h-[20px] bg-[#EBEBF0] mx-2'}></i>
                <p className="w-full md:w-auto">0123456789</p>
            </div>
            <div className="address text-[rgb(128,128,137)] font-normal flex flex-wrap items-start md:items-center">
                <span className={'text-[rgb(252,130,10)] bg-[rgb(255,245,235)] font-medium text-[10px] md:text-[12px] leading-[16px] px-[6px] rounded-full mr-[4px] h-[18px] inline-flex items-center mb-1 md:mb-0'}>
                  Văn phòng
                </span>
                <span className="text-xs md:text-sm">số 17 Duy Tân, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội</span>
            </div>
        </div>
    );
};

export default AddressInfo;