import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IBook } from '../../../interfaces/BookInterfaces';
import bookCover from '../../../assets/book-cover.png';

interface ProductCardProps {
    product: IBook;
}

function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/customer/productdetail/${product.id}`);
    };

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}
                    size={14}
                />
            );
        }
        return stars;
    };

    return (
        <div
            className="relative flex flex-col w-40 border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition cursor-pointer"
            onClick={handleCardClick}
        >
            <div className="h-40 bg-gray-100">
                <img
                    src={product.images?.[0]?.base_url || bookCover}
                    alt={product.name || 'Book cover'}
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="p-2">
                <h3 className="text-xs font-normal line-clamp-2 h-8 mb-1">{product.name || 'Tên sách'}</h3>
                <div className="flex mb-1">
                    {renderStars(product.rating_average || 0)}
                </div>
                <div className="flex items-center">
                    <span className="text-red-500 font-medium text-sm">
                        {product.current_seller.price?.toLocaleString('vi-VN')}₫
                    </span>
                    {product.original_price && (
                        <span className="ml-1 text-xs text-gray-400 line-through">
                            {product.original_price.toLocaleString('vi-VN')}₫
                        </span>
                    )}
                </div>
                {product.current_seller.price && product.original_price && (
                    <span className="text-xs text-gray-500">
                        -{Math.round(((product.original_price - product.current_seller.price) / product.original_price) * 100)}%
                    </span>
                )}
            </div>
        </div>
    );
}

export default ProductCard;