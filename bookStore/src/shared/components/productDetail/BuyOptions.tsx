import { FaMinus, FaPlus } from 'react-icons/fa';
import { IBook } from '../../../interfaces/BookInterfaces';
import tikiLogo from '../../../assets/tiki-logo.png';
import official from '../../../assets/official.png';

interface BuyOptionsProps {
    book: IBook;
    quantity: number;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
    handleBuyNow: () => void;
}

function BuyOptions({ book, quantity, increaseQuantity, decreaseQuantity, handleBuyNow }: BuyOptionsProps) {
    return (
        <div className="md:col-span-3 order-2 md:order-none">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-3">
                    <img src={tikiLogo} alt="Tiki Logo" className="w-10 h-10 mr-2" />
                    <div>
                        <div className="font-medium">{book.current_seller?.name || 'Tiki Trading'}</div>
                        <img src={official} alt="" />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="text-sm mb-2">Số Lượng</div>
                    <div className="flex items-center">
                        <button
                            onClick={decreaseQuantity}
                            className="border border-gray-300 px-2 py-1 rounded-l"
                        >
                            <FaMinus size={12} />
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            readOnly
                            className="border-t border-b border-gray-300 w-10 text-center py-1"
                        />
                        <button
                            onClick={increaseQuantity}
                            className="border border-gray-300 px-2 py-1 rounded-r"
                        >
                            <FaPlus size={12} />
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="text-sm mb-2">Tạm tính</div>
                    <div className="text-xl text-red-500 font-medium">
                        {((book.current_seller.price ?? 0) * quantity).toLocaleString('vi-VN')}₫
                    </div>
                </div>
                <button
                    onClick={handleBuyNow}
                    className="w-full bg-red-500 text-white py-2 rounded-md mb-2"
                >
                    Mua ngay
                </button>
                <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-md mb-2">
                    Thêm vào giỏ
                </button>
                <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-md">
                    Mua trước trả sau
                </button>
            </div>
        </div>
    );
}

export default BuyOptions;