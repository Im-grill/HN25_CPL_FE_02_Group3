import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { getBook } from '../../api/book.service'
import { IBook } from '../../interfaces'

export default function BookList() {
  const [data, setData] = useState<IBook[]>([])

  const getBookData = async () => {
    const res = await getBook();
    setData(res)
    res.map((bok) => console.log(bok.images?.[0]?.base_url))
  }

  useEffect(() => {
    getBookData();
  }, [])

  return (
    <>
      {data.map((book) =>
        <BookCard key={book.id} props={book} />
      )}
    </>

  )
}
