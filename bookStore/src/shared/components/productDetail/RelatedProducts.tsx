import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IBook } from '../../../interfaces/BookInterfaces';
import ProductCard from './productCard';

interface RelatedProductsProps {
    allBooks: IBook[];
    book: IBook;
    scroll: (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement | null>) => void;
}

function RelatedProducts({ allBooks, book, scroll }: RelatedProductsProps) {
    const relatedProductsRef = useRef<HTMLDivElement>(null);

    return (
        <div className="bg-white rounded-md shadow-sm p-4 mt-4 relative">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Sản phẩm tương tự</h2>
            </div>
            <div className="relative">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                    onClick={() => scroll('left', relatedProductsRef)}
                >
                    <FaChevronLeft size={12} />
                </button>
                <div
                    ref={relatedProductsRef}
                    className="flex space-x-2 overflow-hidden scroll-smooth px-8"
                >
                    {allBooks
                        .filter(b => b.id !== book.id)
                        .map((product) => (
                            <div key={product.id} className="min-w-[160px] flex-shrink-0">
                                <ProductCard product={product} />
                            </div>
                        ))}
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                    onClick={() => scroll('right', relatedProductsRef)}
                >
                    <FaChevronRight size={12} />
                </button>
            </div>
        </div>
    );
}

export default RelatedProducts;