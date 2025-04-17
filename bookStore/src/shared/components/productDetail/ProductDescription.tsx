import { useState } from 'react';

interface ProductDescriptionProps {
    description: string;
}

function ProductDescription({ description }: ProductDescriptionProps) {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!expanded);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Mô tả sản phẩm</h2>
            <div className={`relative overflow-hidden ${expanded ? 'h-auto' : 'h-64'}`}>
                <div
                    className="product-description whitespace-pre-line leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: description || 'Chưa có mô tả sản phẩm' }}
                />
                {!expanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
                )}
            </div>
            <div className="flex justify-center mt-2">
                <button
                    onClick={toggleExpand}
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium focus:outline-none"
                >
                    {expanded ? 'Thu gọn' : 'Xem thêm'}
                </button>
            </div>
        </div>
    );
}

export default ProductDescription;