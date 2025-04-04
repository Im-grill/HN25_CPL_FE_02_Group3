import { useRef, useState } from 'react';
import { FaStar, FaAngleRight, FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa';
import tikiLogo from '../../../assets/tiki-logo.png';
import bookCover from '../../../assets/book-cover.png';
import tikiheader from '../../../assets/tiki-head.png';
import official from '../../../assets/official.png';
import { Link } from 'react-router-dom';


function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
 
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

    // Sample related products data
    const relatedProducts = [
        {
            id: 1,
            title: "Mục Tiêu",
            price: "141.980₫",
            originalPrice: "170.000₫",
            discount: "16%",
            rating: 5,
            imageUrl: "https://via.placeholder.com/150x200",
        },
        {
            id: 2,
            title: "AI - Công Cụ Năng Cao Hiệu Suất",
            price: "110.000₫",
            originalPrice: "150.000₫",
            discount: "27%",
            rating: 4.5,
            imageUrl: "https://via.placeholder.com/150x200",
            isAd: true,
        },
        {
            id: 3,
            title: "Combo 2 Cuốn Building A Second Brain",
            price: "215.400₫",
            originalPrice: "260.000₫",
            discount: "17%",
            rating: 4.8,
            imageUrl: "https://via.placeholder.com/150x200",
        },
        {
            id: 4,
            title: "Chat GPT - Ứng Dụng Trí Tuệ Nhân",
            price: "113.162₫",
            originalPrice: "150.000₫",
            discount: "25%",
            rating: 4.7,
            imageUrl: "https://via.placeholder.com/150x200",
            isAd: true,
        },
    ];

    const topDeals = [
        {
            id: 1,
            title: "AI - Công Cụ Năng Cao Hiệu Suất",
            price: "110.000₫",
            rating: 4.5,
            imageUrl: "https://via.placeholder.com/150x200",
        },
        {
            id: 2,
            title: "Storytelling With Data - Kể Chuyện Bằng Dữ Liệu",
            price: "232.800₫",
            rating: 4.8,
            imageUrl: "https://via.placeholder.com/150x200",
        },
        {
            id: 3,
            title: "AI 5.0 - MẢNH HỒN, ĐẾ HỆN, NGƯỜI MÁY",
            price: "138.442₫",
            rating: 4.6,
            imageUrl: "https://via.placeholder.com/150x200",
        },
        {
            id: 4,
            title: "Inbound Selling - Thay Đổi Phương Thức Bán Hàng",
            price: "111.000₫",
            rating: 4.4,
            imageUrl: "https://via.placeholder.com/150x200",
        },
    ];


    // Render stars based on rating
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

    // Render product card
    interface Product {
        id: number;
        title: string;
        price: string;
        originalPrice?: string;
        discount?: string;
        rating: number;
        imageUrl: string;
        isAd?: boolean;
    }

    const renderProductCard = (product: Product) => {
        return (
            <div key={product.id} className="relative flex flex-col w-40 border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition">
                {product.isAd && (
                    <div className="absolute top-0 right-0 bg-gray-200 text-xs px-1 z-10">
                        AD
                    </div>
                )}
                <div className="h-40 bg-gray-100">
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="h-full w-full object-contain"
                    />
                </div>
                <div className="p-2">
                    <h3 className="text-xs font-normal line-clamp-2 h-8 mb-1">{product.title}</h3>
                    <div className="flex mb-1">
                        {renderStars(product.rating)}
                    </div>
                    <div className="flex items-center">
                        <span className="text-red-500 font-medium text-sm">{product.price}</span>
                        {product.originalPrice && (
                            <span className="ml-1 text-xs text-gray-400 line-through">{product.originalPrice}</span>
                        )}
                    </div>
                    {product.discount && (
                        <span className="text-xs text-gray-500">-{product.discount}</span>
                    )}
                </div>
            </div>
        );
    };

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const [currentImage, setCurrentImage] = useState(bookCover);

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
                    <span className="text-black font-medium">Chat GPT Thực Chiến</span>
                </div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 py-2">
                <div className="grid grid-cols-12 gap-6 p-4">
                    {/* Product images */}
                    <div className="col-span-3">
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6">
                                <img src={currentImage} alt="Chat GPT Thực Chiến" className="w-full" />
                            </div>
                            <div className="border-b border-gray-200 p-4">
                                <div className="grid grid-cols-5 gap-2">
                                    <div
                                        className="border border-blue-500 rounded-md overflow-hidden cursor-pointer"
                                        onClick={() => setCurrentImage(bookCover)}
                                    >
                                        <img src={bookCover} alt="Thumbnail 1" className="w-full" />
                                    </div>
                                    <div
                                        className="border border-gray-200 rounded-md overflow-hidden cursor-pointer"
                                        onClick={() => setCurrentImage(tikiLogo)}
                                    >
                                        <img src={tikiLogo} alt="Thumbnail 2" className="w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mt-4 text-sm ml-6">
                                <span className=""><img src={tikiheader} alt="icon-left" width={24} height={24} /></span>
                                <div className="ml-2">
                                    <span className="text-gray-500">Xem thêm </span>
                                    Tóm tắt nội dung sách
                                </div>
                                <div className="text-right ml-auto mr-3">
                                    <img src="https://salt.tikicdn.com/ts/ta/5c/76/e2/25aa7773e0480b23252d8f1c95a03d05.png" alt="icon-right" width="24" height="24"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product info - Fixed the vertical alignment by adding a flex flex-col class */}
                    <div className="col-span-6 flex flex-col">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>Tác giả:</span>
                                <span className="text-blue-500 ml-1">Đoàn Dương, Phan Tuấn Bảo, Lý Thế Minh</span>
                            </div>

                            <h1 className="text-xl font-medium mb-2">Chat GPT Thực Chiến</h1>

                            <div className="flex items-center mb-2">
                                <div className="flex mr-2">
                                    {renderStars(4.7)}
                                </div>
                                <span className="text-sm text-gray-500">4.7</span>
                            </div>

                            <div className="flex items-baseline mb-4">
                                <span className="text-2xl text-red-500 font-medium">110.000₫</span>
                                <span className="ml-2 text-gray-500 line-through text-sm">169.000₫</span>
                                <span className="ml-2 text-red-500 font-medium">-35%</span>
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
                                    <tr className="border-b border-gray-200">
                                        <td className="py-1 text-gray-500">Bookcare</td>
                                        <td className="py-1">Có</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-1 text-gray-500">Công ty phát hành</td>
                                        <td className="py-1">1980 Books</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-1 text-gray-500">Ngày xuất bản</td>
                                        <td className="py-1">2024-07-01 00:00:00</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-1 text-gray-500">Kích thước</td>
                                        <td className="py-1">13 × 20.5 cm</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-1 text-gray-500">Dịch Giả</td>
                                        <td className="py-1">Huyền Trang</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-1 text-gray-500">Loại bìa</td>
                                        <td className="py-1">Bìa mềm</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-1 text-gray-500">Số trang</td>
                                        <td className="py-1">263</td>
                                    </tr>
                                    <tr >
                                        <td className="py-1 text-gray-500">Nhà xuất bản</td>
                                        <td className="py-1">Nhà Xuất Bản Dân Trí</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Product description */}
                        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
                            <h2 className="text-lg font-medium text-gray-800 mb-4">Mô tả sản phẩm</h2>

                            <div className={`relative overflow-hidden ${expanded ? 'h-auto' : 'h-64'}`}>
                                <p className="whitespace-pre-line leading-relaxed text-gray-700">
                                    Mèo méo meo - Bí mật giao tiếp từ cái vẫy đuôi đến tiếng grừ grừ
                                    Tặng: Thẻ đeo mica cá nhân hóa & Bộ sticker mèo dễ thương

                                    <span className="font-medium block mt-4 mb-2 text-gray-800">Giới thiệu sách</span>

                                    Quyển sách "Kitty Language: An Illustrated Guide to Understanding Your Cat" - quyển sách "đọc vị" loài mèo đình đám trong hội con sen toàn thế giới nay đã chính thức có phiên bản Việt hóa với tên: "Mèo méo meo - Bí mật giao tiếp từ cái vẫy đuôi đến tiếng grừ grừ". Quyển sách nhận được 4.6 sao trên sàn Amazon và trở thành quyển cẩm nang đặc biệt giúp "sen" kết nối với "quàng thượng" theo một cách vừa khoa học, vừa gần gũi. Những hình minh họa đáng yêu từ tác giả Lili Chin sẽ giúp bạn thấu hiểu "ngôn ngữ" của boss yêu qua mọi bộ phận cơ thể: mặt, mắt, tai, râu và đuôi; và cả cách thay đổi tư thế hay hướng và tốc độ di chuyển.
                                    Để chào đón "hội sen Việt Nam", Saigon Books còn dành tặng bộ quà tặng đặc biệt: Thẻ đeo mica dành cho boss yêu cùng Decal Sticker cute của nhà Vitamin Mèo.

                                    Quyển sách được chắp bút và minh họa bởi Lili Chin - nghệ sĩ minh họa nổi tiếng và là "con sen" chính hiệu. Cô đã hợp tác với nhiều tổ chức uy tín như Fear Free Pets, RSPCA, Hiệp hội tư vấn hành vi động vật quốc tế và International Cat Care. Cô cũng là tác giả của quyển sách "Doggie Language" đình đám.

                                    {/* Content trimmed for brevity - include the rest of the content in the actual implementation */}
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
                                    {relatedProducts.map((product, index) => (
                                        <div key={index} className="min-w-[160px] flex-shrink-0">
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
                                    {topDeals.map((product, index) => (
                                        <div key={index} className="min-w-[160px] flex-shrink-0">
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
                                    <div className="font-medium">Tiki Trading</div>
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
                                        type="text"
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
                                <div className="text-xl text-red-500 font-medium">110.000₫</div>
                            </div>

                            <Link to="/customer/order">
                                <button className="w-full bg-red-500 text-white py-2 rounded-md mb-2">
                                    Mua ngay
                                </button>
                            </Link>
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