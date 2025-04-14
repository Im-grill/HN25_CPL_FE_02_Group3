import React from 'react';
import counponBankPayLogo from '../../../assets/order-logo/img_11.png';
import shinhanBankLogo from '../../../assets/order-logo/img_12.png';
import infoLogo from '../../../assets/order-logo/img_5.png';

const BankPromotion: React.FC = () => {
    // Function to render a single bank card
    const renderBankCard = () => (
        <div className={'bg-white rounded-md h-[87px] shadow-md p-2.5 relative cursor-pointer'}>
            <div className="mb-0.5 flex justify-between items-end">
                <div className="text-[17px] font-medium leading-[1.41] text-[#0D5CB6] overflow-hidden max-w-[130px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                    Freeship
                </div>
                <img src={shinhanBankLogo} className={'w-[72px] h-[30px]'} alt="" />
            </div>
            <div className={'flex justify-between items-end'}>
                <div>
                    <div className={'text-[11px] leading-[1.45] text-[#787878] overflow-hidden mb-[5px] webkit-box webkit-line-clamp-1 webkit-box-orient-vertical'}>
                        Thẻ Shinhan Platinum
                    </div>
                    <div className="text-[#FD820A] italic text-[11px] leading-[1.45] overflow-hidden webkit-box webkit-line-clamp-1 webkit-box-orient-vertical">
                        Không giới hạn
                    </div>
                </div>
                <img src={infoLogo} className={'w-5 h-5 self-start'} alt="" />
            </div>
        </div>
    );

    return (
        <div className="ml-[21px]">
            <div className="p-4 bg-[#F5F5FA] w-[733px]">
                <div className="text-[13px] font-medium leading-[1.54] text-[#0D5CB6] flex items-center mb-2">
                    <img src={counponBankPayLogo} className={'h-5 w-5 mr-1.5'} alt="" />
                    <span>Ưu đãi thanh toán thẻ</span>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-2">
                    {Array(12).fill(null).map((_, index) => (
                        <React.Fragment key={index}>
                            {renderBankCard()}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BankPromotion;