// App.jsx
import React, { useState } from 'react';
import { FaStar, FaCheck,  FaAngleRight, FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa';
import './App.css';
import tikiLogo from './assets/tiki-logo.png';
import bookCover from './assets/book-cover.png';
import tikiheader from './assets/tiki-head.png';
import official from './assets/official.png';


function App() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
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
  const renderStars = (rating) => {
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
  const renderProductCard = (product) => {
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
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-md shadow-sm">
          <div className="grid grid-cols-12 gap-6 p-4">
            {/* Product images */}
            <div className="col-span-3">
              <div className="border border-gray-200 rounded-md mb-2">
                <img src={bookCover} alt="Chat GPT Thực Chiến" className="w-full" />
              </div>
              <div className="grid grid-cols-5 gap-2">
                <div className="border border-blue-500 rounded-md overflow-hidden">
                  <img src={bookCover} alt="Thumbnail 1" className="w-full" />
                </div>
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <img src={bookCover} alt="Thumbnail 2" className="w-full" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <span className=""><img src={tikiheader} alt="icon-left" width={24} height={24}/></span>
                <div className="ml-2">
                  <span className=" text-gray-500">Xem thêm </span>
                  Tóm tắt nội dung sách
                </div>         
              </div>
            </div>

            {/* Product info */}
            <div className="col-span-6">
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

              {/* Product details */}
              <div className="bg-gray-50 rounded-md p-4 mb-4">
                <h3 className="font-medium mb-3">Thông tin chi tiết</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-1 text-gray-500">Bookcare</td>
                      <td className="py-1">Có</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">Công ty phát hành</td>
                      <td className="py-1">1980 Books</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">Ngày xuất bản</td>
                      <td className="py-1">2024-07-01 00:00:00</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">Kích thước</td>
                      <td className="py-1">13 × 20.5 cm</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">Dịch Giả</td>
                      <td className="py-1">Huyền Trang</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">Loại bìa</td>
                      <td className="py-1">Bìa mềm</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">Số trang</td>
                      <td className="py-1">263</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">Nhà xuất bản</td>
                      <td className="py-1">Nhà Xuất Bản Dân Trí</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Product description */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Mô tả sản phẩm</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>Trong thời đại hiện nay, tất cả những ai không muốn bị tụt hậu đều cần học về các công cụ AI, đặc biệt là biết cách sử dụng công cụ AI trong thực tế. Nếu nắm vững các kỹ thuật đơn giản quản các công cụ AI, bạn có thể nhận được sự hỗ trợ đắc lực những công việc của mình.</p>
                  <p>Một trong những AI thông minh nhất hiện nay là gọi tên Chat GPT. Kế từ khi ra mắt, Chat GPT luôn được nhìn nhận là một trí tuệ nhân tạo (AI) thông minh nhất thế giới.</p>
                  <p>Bất kỳ ai ở lĩnh vự sử dụng ChatGPT đều có thể cảm nhận được hiệu quả và nhanh sự diệu "telling other con người" của trí tuệ nhân tạo đều điều hiểu và đều cảm nhận được</p>
                </div>
                <div className="text-center mt-4">
                  <button className="text-blue-500 text-sm">Xem thêm</button>
                </div>
              </div>
            </div>

            {/* Buy options */}
            <div className="col-span-3">
              <div className="border border-gray-200 rounded-md p-4 mb-4">
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

                <button className="w-full bg-red-500 text-white py-2 rounded-md mb-2">
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

      {/* Related products section */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-md shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Sản phẩm tương tự</h2>
            <div className="flex space-x-2">
              <button className="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                <FaChevronLeft size={12} />
              </button>
              <button className="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {relatedProducts.map(product => renderProductCard(product))}
          </div>
        </div>
      </div>

      {/* Top deals section */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-md shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Top Deals</h2>
            <div className="flex space-x-2">
              <button className="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                <FaChevronLeft size={12} />
              </button>
              <button className="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {topDeals.map(product => renderProductCard(product))}
          </div>
        </div>
      </div>

      {/* Buying info section */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-md shadow-sm p-4 mb-4">
          <h2 className="text-lg font-medium mb-4">An tâm mua sắm</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <FaCheck className="text-blue-500 mt-1 mr-2" size={14} />
              <div className="text-sm">Được đồng kiểm khi nhận hàng</div>
            </div>
            <div className="flex items-start">
              <FaCheck className="text-blue-500 mt-1 mr-2" size={14} />
              <div className="text-sm">Được hoàn tiền 200% nếu là hàng giả</div>
            </div>
            <div className="flex items-start">
              <FaCheck className="text-blue-500 mt-1 mr-2" size={14} />
              <div className="text-sm">
                Đổi trả miễn phí trong 30 ngày. Được đổi ý.
                <div className="text-blue-500">Chi tiết</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;