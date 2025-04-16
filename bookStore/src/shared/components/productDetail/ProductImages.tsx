import { FaAngleRight } from 'react-icons/fa';
import { IBook } from '../../../interfaces/BookInterfaces';
import tikiheader from '../../../assets/tiki-head.png';

interface ProductImagesProps {
    book: IBook;
    currentImage: string;
    setCurrentImage: (image: string) => void;
}

function ProductImages({ book, currentImage, setCurrentImage }: ProductImagesProps) {
    return (
        <div className="md:col-span-3 order-1 md:order-none">
            <div className="bg-white rounded-lg shadow-md">
                <div className="p-4 md:p-6">
                    <img
                        src={currentImage}
                        alt={book.name || 'Book cover'}
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="border-b border-gray-200 p-4">
                    <div className="grid grid-cols-5 gap-2">
                        <div
                            className="rounded-md overflow-hidden cursor-pointer border border-gray-200 hover:border-blue-500"
                            onClick={() => setCurrentImage(book?.images?.[0]?.medium_url || book.images?.[0]?.base_url || '')}
                        >
                            <img
                                src={book?.images?.[0]?.medium_url || book.images?.[0]?.base_url || ''}
                                alt="Thumbnail 1"
                                className="w-full h-auto"
                            />
                        </div>
                        <div
                            className="rounded-md overflow-hidden cursor-pointer border border-gray-200 hover:border-blue-500"
                            onClick={() => setCurrentImage(book?.images?.[1]?.large_url || book.images?.[0]?.base_url || '')}
                        >
                            <img
                                src={book?.images?.[1]?.large_url || book.images?.[0]?.base_url || ''}
                                alt="Thumbnail 2"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-4 text-sm ml-6">
                    <span><img src={tikiheader} alt="icon-left" width={24} height={24} /></span>
                    <div className="ml-2">
                        <span className="text-gray-500">Xem thêm </span>
                        Tóm tắt nội dung sách
                    </div>
                    <div className="text-right ml-auto mr-3">
                        <img src="https://salt.tikicdn.com/ts/ta/5c/76/e2/25aa7773e0480b23252d8f1c95a03d05.png" alt="icon-right" width="24" height="24" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductImages;