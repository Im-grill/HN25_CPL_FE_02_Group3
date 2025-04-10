import { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { getBook } from '../../api/book.service'
import { IBook } from '../../interfaces/BookInterfaces'
import { Link } from 'react-router-dom';
interface FilterOptions {
  top_deal: boolean;
  freeship: boolean ,
  rating: boolean,
  fastShip: boolean
  sortBy: string;
}
interface BookListProps {
  filters: FilterOptions; 
}
export default function BookList({ filters }: BookListProps) {
  const [data, setData] = useState<IBook[]>([])
  const [filteredData, setFilteredData] = useState<IBook[]>([]);
  const getBookData = async () => {
    const res = await getBook();
    setData(res)
  }

  useEffect(() => {
    getBookData();
  }, [])
  useEffect(() => {
    if (data.length === 0) return;

    let result = [...data];

    // Lọc theo delivery (giao siêu tốc)
    if (filters.fastShip) {
      result = result.filter(book => book.fastShip === true);
    }

    // Lọc theo discount (siêu rẻ)
    if (filters.top_deal) {
      result = result.filter(book => book.top_deal === true);
    }

    // Lọc theo rating (từ 4 sao)
    if (filters.rating) {
      result = result.filter(book => book.rating_average >= 4);
    }

    // Sắp xếp
    switch (filters.sortBy) {
      case 'asc':
        result.sort((a, b) => a.current_seller.price - b.current_seller.price);
        break;
      case 'desc':
        result.sort((a, b) => b.current_seller.price - a.current_seller.price);
        break;
   
      default:
  
        break;
    }

    setFilteredData(result);
  }, [filters, data]);
  return (
    <>
      <div className='flex flex-wrap gap-2   mt-4 '>


        {filteredData.map((book, index) =>
          <div key={index} className="w-[calc(25%-8px)]">
            {/* <Link to={`/customer/productdetail/${book.id}`} key={book.id}></Link> */}
            <Link to={`/customer/productdetail/${book.id}`} >
              <BookCard props={book} />
            </Link>
          </div>
        )}
      </div>
    </>

  )
}