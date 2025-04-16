import { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { getBook } from '../../api/book.service'
import { IBook } from '../../interfaces/BookInterfaces'
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import AlertContext from '../context/AlertContext';
import { useContext } from 'react';
interface FilterOptions {
  top_deal: boolean;
  freeship: boolean,
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

  const [searchParams] = useSearchParams();
   const alert = useContext(AlertContext)
  const searchQuery = searchParams.get('search')?.trim().toLowerCase() || '';
  // useEffect(() => {
  //   const res = filteredData.filter((items) => items.name?.trim().toLowerCase().includes(searchQuery.trim().toLowerCase()))
  //   setFilteredData(res)
  // }, [searchQuery, filteredData]);

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
    if (filters.freeship) {
      result = result.filter(book => book.freeship === true);
    }

    // Lọc theo rating (từ 4 sao)
    if (filters.rating) {
      result = result.filter(book => book.rating_average >= 4);
    }
    if (searchQuery) {
      result = result.filter(book => 
        book.name?.toLowerCase().includes(searchQuery))
        if(searchQuery=="")
        {
          alert?.error("Not Found",3)
          result =[...data]
        }
     
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
  }, [filters, data,searchParams]);
  return (
    <>
      <div className='flex flex-wrap gap-2   mt-4 ml-2 '>


        {filteredData.map((book, index) =>
          <div key={index} className="md:w-[calc(25%-8px)] w-[calc(50%-8px)]">
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