import {useEffect, useRef, useState} from 'react';
import {FaAngleRight, FaChevronLeft, FaChevronRight, FaMinus, FaPlus, FaStar} from 'react-icons/fa';
import {useNavigate, useParams} from 'react-router-dom';
import tikiLogo from '../../../assets/tiki-logo.png';
import bookCover from '../../../assets/book-cover.png';
import tikiheader from '../../../assets/tiki-head.png';
import official from '../../../assets/official.png';
import {getBook} from '../../../api/book.service';
import {IBook} from '../../../interfaces/BookInterfaces';


function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<IBook | null>(null);
    const [allBooks, setAllBooks] = useState<IBook[]>([]);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState('');
    // Gọi API để lấy dữ liệu sách
    useEffect(() => {
        const fetchBookDetail = async () => {
            try {
                const response = await getBook();
                setAllBooks(response);
                const bookData = response.find((b: IBook) => b.id === id);
                if (bookData) {
                    setBook(bookData);
                    setCurrentImage(bookData.images?.[0]?.base_url ?? '');
                } else {
                    console.error('Không tìm thấy sách với id:', id);
                }
            } catch (error) {
                console.error('Lỗi khi lấy chi tiết sách:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetail();
    }, [id]);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const relatedProductsRef = useRef<HTMLDivElement>(null);
    const topDealsRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right", ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            const { current } = ref;
            if (direction === "left") {
                current.scrollBy({ left: -300, behavior: "smooth" });
            } else {
                current.scrollBy({ left: 300, behavior: "smooth" });
            }
        }
    };

    // Render stars dựa trên rating_average từ API
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={i <= rating ? "text-yellow-400" : "text-gray-300"}
                    size={14}
                />
            );
        }
        return stars;
    };

    // Hàm render product card dựa trên dữ liệu từ IBook
    const renderProductCard = (product: IBook) => {
        return (
            <div key={product.id} className="relative flex flex-col w-40 border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition">
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
    };

    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!expanded);



    // Hiển thị khi đang loading
    if (loading) {
        return <div className="text-center py-10">Đang tải dữ liệu...</div>;
    }

    // Nếu không tìm thấy sách
    if (!book) {
        return <div className="text-center py-10">Không tìm thấy sản phẩm!</div>;
    }
    const handleBuyNow = () => {
        if (book) {
            const orderData = {
                // bookId: book.id,
                // bookName: book.name,
                // listPrice: book.list_price,
                // originalPrice: book.original_price,
                // discountedPrice: book.current_seller.price,
                quantity: quantity,
                // image: book.images?.[0]?.base_url || bookCover,
                // sellerName: book.current_seller?.name || 'Tiki Trading',
                books:book
            };
            // Chuyển hướng đến trang Order và truyền dữ liệu qua    state

             navigate('/customer/order', { state: orderData });
        }
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-2">
                <div className="flex text-xs text-gray-500 items-center">
                    <span>Trang chủ</span>
                    <FaAngleRight className="mx-1" size={10} />
                    <span>Nhà Sách Tiki</span>
                    <FaAngleRight className="mx-1" size={10} />
                    <span>Sách tiếng Việt</span>
                    <FaAngleRight className="mx-1" size={10} />
                    <span>Sách kinh tế</span>
                    <FaAngleRight className="mx-1" size={10} />
                    <span>Sách kỹ năng làm việc</span>
                    <FaAngleRight className="mx-1" size={10} />
                    <span className="text-black font-medium">{book.name}</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-2">
                <div className="grid grid-cols-12 gap-6 p-4">
                    {/* Product images */}
                    <div className="col-span-3">
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6">
                                <img
                                    src={currentImage} // Sử dụng currentImage trực tiếp
                                    alt={book.name || 'Book cover'}
                                    className="w-full"
                                />
                            </div>
                            <div className="border-b border-gray-200 p-4">
                                <div className="grid grid-cols-5 gap-2">
                                    {/* Thumbnail 1 - Sử dụng medium_url */}
                                    <div
                                        className="rounded-md overflow-hidden cursor-pointer border border-gray-200 hover:border-blue-500"
                                        onClick={() => setCurrentImage(book?.images?.[0]?.medium_url || book.images?.[0]?.base_url || '')}
                                    >
                                        <img
                                            src={book?.images?.[0]?.medium_url || book.images?.[0]?.base_url || ''}
                                            alt="Thumbnail 1"
                                            className="w-full"
                                        />
                                    </div>
                                    {/* Thumbnail 2 - Sử dụng large_url */}
                                    <div
                                        className="rounded-md overflow-hidden cursor-pointer border border-gray-200 hover:border-blue-500"
                                        onClick={() => setCurrentImage(book?.images?.[1]?.large_url || book.images?.[0]?.base_url || '')}
                                    >
                                        <img
                                            src={book?.images?.[1]?.large_url || book.images?.[0]?.base_url || ''}
                                            alt="Thumbnail 2"
                                            className="w-full"
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

                    {/* Product info */}
                    <div className="col-span-6 flex flex-col">
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

                        {/* Product details */}
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

                        {/* Product description */}
                        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
                            <h2 className="text-lg font-medium text-gray-800 mb-4">Mô tả sản phẩm</h2>
                            <div className={`relative overflow-hidden ${expanded ? 'h-auto' : 'h-64'}`}>
                                <p className="whitespace-pre-line leading-relaxed text-gray-700">
                                    {book.description || 'Chưa có mô tả sản phẩm'}
                                </p>
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

                        {/* Related products section */}
                        <div className="bg-white rounded-md shadow-sm p-4 mt-4 relative">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-medium">Sản phẩm tương tự</h2>
                            </div>
                            <div className="relative">
                                <button
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                                    onClick={() => scroll("left", relatedProductsRef)}
                                >
                                    <FaChevronLeft size={12} />
                                </button>
                                <div
                                    ref={relatedProductsRef}
                                    className="flex space-x-2 overflow-hidden scroll-smooth px-8"
                                >
                                    {allBooks
                                        .filter(b => b.id !== book.id) // Loại bỏ sách hiện tại
                                        .map((product) => (
                                            <div key={product.id} className="min-w-[160px] flex-shrink-0">
                                                {renderProductCard(product)}
                                            </div>
                                        ))}
                                </div>
                                <button
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                                    onClick={() => scroll("right", relatedProductsRef)}
                                >
                                    <FaChevronRight size={12} />
                                </button>
                            </div>
                        </div>

                        {/* Top deals section */}
                        <div className="bg-white rounded-md shadow-sm p-4 mt-4 relative">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-medium">Top Deals</h2>
                            </div>
                            <div className="relative">
                                <button
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                                    onClick={() => scroll("left", topDealsRef)}
                                >
                                    <FaChevronLeft size={12} />
                                </button>
                                <div
                                    ref={topDealsRef}
                                    className="flex space-x-2 overflow-hidden scroll-smooth px-8"
                                >
                                    {allBooks
                                        .sort((a, b) => (b.rating_average || 0) - (a.rating_average || 0)) // Sắp xếp theo đánh giá cao nhất
                                        .map((product) => (
                                            <div key={product.id} className="min-w-[160px] flex-shrink-0">
                                                {renderProductCard(product)}
                                            </div>
                                        ))}
                                </div>
                                <button
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                                    onClick={() => scroll("right", topDealsRef)}
                                >
                                    <FaChevronRight size={12} />
                                </button>
                            </div>
                        </div>

                        {/* Buying info section */}
                        <div className="bg-white rounded-md shadow-sm p-4 mt-4">
                            <h2 className="text-lg font-medium mb-4">An tâm mua sắm</h2>
                            <div className="space-y-3">
                                <div className="flex items-start border-b border-gray-200 pb-2">
                                    <img src="https://salt.tikicdn.com/ts/upload/c5/37/ee/76c708d43e377343e82baee8a0340297.png" alt="compensation-icon" height="20" width="20" />
                                    <div className="text-sm ml-2">Được đồng kiểm khi nhận hàng</div>
                                </div>
                                <div className="flex items-start border-b border-gray-200 pb-2">
                                    <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/ea/02/b4/b024e431ec433e6c85d4734aaf35bd65.png" height="20" width="20" />
                                    <div className="text-sm ml-2">Được hoàn tiền 200% nếu là hàng giả</div>
                                </div>
                                <div className="flex items-start border-b border-gray-200 pb-2">
                                    <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/d8/c7/a5/1cd5bd2f27f9bd74b2c340b8e27c4d82.png" height="20" width="20" />
                                    <div className="text-sm ml-2">Đổi trả miễn phí trong 30 ngày. Được đổi ý.
                                        <div className="underline font-bold">
                                            <a href="http://">Chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buy options */}
                    <div className="col-span-3">
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
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;