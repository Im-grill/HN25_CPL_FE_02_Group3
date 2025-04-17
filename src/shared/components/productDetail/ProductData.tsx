import { IBook } from '../../../interfaces/BookInterfaces';

interface ProductDetailsProps {
    book: IBook;
}

function ProductData({ book }: ProductDetailsProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <table className="w-full text-sm">
                <thead>
                    <tr className="font-medium mb-3">
                        <th className="py-1 text-left">Thông tin chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {book.specifications?.map((spec, index) =>
                        spec.attributes.map((attr, attrIndex) => (
                            <tr key={`${index}-${attrIndex}`} className="border-b border-gray-200">
                                <td className="py-1 text-gray-500">{attr.name}</td>
                                <td className="py-1">{attr.value}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ProductData;