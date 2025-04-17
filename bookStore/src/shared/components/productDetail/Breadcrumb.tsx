import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { IBook } from '../../../interfaces/BookInterfaces';

interface BreadcrumbProps {
    book: IBook;
}

function Breadcrumb({ book }: BreadcrumbProps) {
    const breadcrumbItems = [
        { label: 'Trang chủ', path: '/' },
        { label: 'Customer', path: '/' },
        { label: 'Homepage', path: '/' },
    ];

    return (
        <div className="container mx-auto px-4 py-2">
            <div className="flex text-xs text-gray-500 items-center flex-wrap">
                {breadcrumbItems.map((item, index) => (
                    <div key={item.label} className="flex items-center">
                        <Link to={item.path} className="hover:text-blue-500">
                            {item.label}
                        </Link>
                        {index < breadcrumbItems.length - 1 || book.name ? (
                            <FaAngleRight className="mx-1" size={10} />
                        ) : null}
                    </div>
                ))}
                {book.name && (
                    <div className="flex items-center">
                        <Link
                            to={`/productdetail/${book.id}`}
                            className="text-black font-medium hover:text-blue-500"
                        >
                            {book.name}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Breadcrumb;