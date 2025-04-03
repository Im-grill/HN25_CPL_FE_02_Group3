import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { getBook } from '../../api/book.service'
import { IBook } from '../../interfaces'

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
    <div className='flex flex-wrap gap-2 w-full justify-between mt-4 '>

    
      {data.map((book,index) =>
       <div key={index} className="w-[calc(25%-8px)]">
        <BookCard key={book.id} props={book} />
        </div>
      )}
      </div>
    </>

  )
}
