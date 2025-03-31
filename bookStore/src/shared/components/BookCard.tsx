import React from 'react'
import { IBook } from '../../interfaces'
type BookCardProps = {
props:IBook,
}
export default function BookCard( {props}:BookCardProps) {
  return (
    
    <div>
<img src={props.images?.[0].base_url} alt=''/>

    </div>
  )
}
