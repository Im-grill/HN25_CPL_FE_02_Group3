import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IBook } from '../../../interfaces/BookInterfaces';
import ProductCard from './ProductCard';

interface TopDealsProps {
    allBooks: IBook[];
    scroll: (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement | null>) => void;
}

function TopDeals({ allBooks, scroll }: TopDealsProps) {
    const topDealsRef = useRef<HTMLDivElement>(null);

    return (
        <div className="bg-white rounded-md shadow-sm p-4 mt-4 relative">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Top Deals</h2>
            </div>
            <div className="relative">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                    onClick={() => scroll('left', topDealsRef)}
                >
                    <FaChevronLeft size={12} />
                </button>
                <div
                    ref={topDealsRef}
                    className="flex space-x-2 overflow-hidden scroll-smooth px-8"
                >
                    {allBooks
                        .sort((a, b) => (b.rating_average || 0) - (a.rating_average || 0))
                        .map((product) => (
                            <div key={product.id} className="min-w-[160px] flex-shrink-0">
                                <ProductCard product={product} />
                            </div>
                        ))}
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                    onClick={() => scroll('right', topDealsRef)}
                >
                    <FaChevronRight size={12} />
                </button>
            </div>
        </div>
    );
}

export default TopDeals;