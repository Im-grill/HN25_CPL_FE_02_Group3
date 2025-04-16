import { IBook } from '../../../interfaces/BookInterfaces';
import { JSX } from 'react';

interface ProductInfoProps {
    book: IBook;
    renderStars: (rating: number) => JSX.Element[];
}

function ProductInfo({ book, renderStars }: ProductInfoProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Tác giả:</span>
                <span className="text-blue-500 ml-1">
                    {book.authors?.map(author => author.name).join(', ') || 'Chưa có thông tin'}
                </span>
            </div>

            <h1 className="text-xl font-medium mb-2">{book.name || 'Chat GPT Thực Chiến'}</h1>

            <div className="flex items-center mb-2">
                <div className="flex mr-2">
                    {renderStars(book.rating_average || 0)}
                </div>
                <span className="text-sm text-gray-500">{book.rating_average || 'Chưa có đánh giá'}</span>
            </div>

            <div className="flex items-baseline mb-4">
                <span className="text-2xl text-red-500 font-medium">
                    {book.current_seller.price?.toLocaleString('vi-VN')}₫
                </span>
                {book.original_price && (
                    <span className="ml-2 text-gray-500 line-through text-sm">
                        {book.original_price.toLocaleString('vi-VN')}₫
                    </span>
                )}
                {book.current_seller.price && book.original_price && (
                    <span className="ml-2 text-red-500 font-medium">
                        -{Math.round(((book.original_price - book.current_seller.price) / book.original_price) * 100)}%
                    </span>
                )}
            </div>
        </div>
    );
}

export default ProductInfo;