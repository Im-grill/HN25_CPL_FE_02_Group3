import { useEffect, useState } from 'react';
import { FaAngleRight, FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { getBook } from '../../../api/book.service';
import { IBook } from '../../../interfaces/BookInterfaces';
import IUser from '../../../interfaces/UserInterface';
import { getUsers } from '../../../api/user.service';
import ProductImages from '../../../shared/components/productDetail/ProductImages';
import ProductInfo from '../../../shared/components/productDetail/ProductInfo';
import ProductData from '../../../shared/components/productDetail/ProductData';
import ProductDescription from '../../../shared/components/productDetail/ProductDescription';
import RelatedProducts from '../../../shared/components/productDetail/RelatedProducts';
import TopDeals from '../../../shared/components/productDetail/TopDeals';
import BuyingInfo from '../../../shared/components/productDetail/BuyingInfo';
import BuyOptions from '../../../shared/components/productDetail/BuyOptions';

type UserData = Omit<IUser, 'password'>;

function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<IBook | null>(null);
    const [loggedUser, setLoggedUser] = useState<UserData | null>(null);
    const [allBooks, setAllBooks] = useState<IBook[]>([]);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState('');
    const storedEmail = localStorage.getItem('loggedInEmail');

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

    // Gọi API để lấy dữ liệu người dùng
    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                if (!storedEmail) {
                    console.log('No email available to fetch user.');
                    return;
                }
                console.log('Fetching user with email:', storedEmail);
                const allUsers = await getUsers();
                const foundUser = allUsers.find((user) => user.email === storedEmail);
                if (foundUser) {
                    const userData: UserData = {
                        id: foundUser.id,
                        fullname: foundUser.fullname,
                        email: foundUser.email,
                        address: foundUser.address,
                        phone: foundUser.phone,
                        createdAt: foundUser.createdAt,
                    };
                    setLoggedUser(userData);
                } else {
                    console.log('User not found with email:', storedEmail);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUserDetail();
    }, [storedEmail]);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            const { current } = ref;
            if (direction === 'left') {
                current.scrollBy({ left: -300, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }
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

    const handleBuyNow = () => {
        if (book) {
            const orderData = {
                quantity: quantity,
                books: book,
                users: loggedUser,
            };
            navigate('/customer/order', { state: orderData });
        }
    };

    if (loading) {
        return <div className="text-center py-10">Đang tải dữ liệu...</div>;
    }

    if (!book) {
        return <div className="text-center py-10">Không tìm thấy sản phẩm!</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-2">
                <div className="flex text-xs text-gray-500 items-center flex-wrap">
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
                <div className="flex flex-col md:grid md:grid-cols-12 gap-6 p-4">
                    <ProductImages book={book} currentImage={currentImage} setCurrentImage={setCurrentImage} />
                    <div className="md:col-span-6 flex flex-col order-3 md:order-none">
                        <ProductInfo book={book} renderStars={renderStars} />
                        <ProductData book={book} />
                        <ProductDescription description={book.description || 'Chưa có mô tả sản phẩm'} />
                        <RelatedProducts allBooks={allBooks} book={book} scroll={scroll} />
                        <TopDeals allBooks={allBooks} scroll={scroll} />
                        <BuyingInfo />
                    </div>
                    <BuyOptions
                        book={book}
                        quantity={quantity}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        handleBuyNow={handleBuyNow}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;