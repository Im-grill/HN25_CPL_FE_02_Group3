import { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { getBook } from '../../api/book.service'
import { IBook } from '../../interfaces/BookInterfaces'
import { Link } from 'react-router-dom';

export default function BookList() {
  const [data, setData] = useState<IBook[]>([])

  const getBookData = async () => {
    const res = await getBook();
    setData(res)
  }

  useEffect(() => {
    getBookData();
  }, [])

  return (
    <>
      <div className='flex flex-wrap gap-2  justify-between mt-4 '>


        {data.map((book, index) =>
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