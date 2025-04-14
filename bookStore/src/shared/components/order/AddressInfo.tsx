import React from 'react';

interface AddressInfoProps {
    fullName: string;
}

const AddressInfo: React.FC<AddressInfoProps> = ({ fullName }) => {
    return (
        <div className={'relative p-4 text-sm leading-5 mb-3 rounded-md bg-white'}>
            <div className="block-header flex items-center justify-between mb-3">
                <h3 className={'text-[rgb(128,128,137)] text-base'}>Giao tới</h3>
                <a href="/" className={'text-[#0b74e5]'}>Thay đổi</a>
            </div>
            <div className="customer-info flex items-center mb-0.5 font-semibold text-[rgb(56,56,61)]">
                <p>{fullName}</p>
                <i className={'="block w-[1px] h-[20px] bg-[#EBEBF0] mx-2'}></i>
                <p>0123456789</p>
            </div>
            <div className="address text-[rgb(128,128,137)] font-normal ">
        <span className={' text-[rgb(252,130,10)] bg-[rgb(255,245,235)] font-medium text-[12px] leading-[16px] px-[6px] rounded-full mr-[4px] h-[18px] inline-flex items-center'}>
          Văn phòng
        </span>
                <span>số 17 Duy Tân, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội</span>
            </div>
        </div>
    );
};

export default AddressInfo;