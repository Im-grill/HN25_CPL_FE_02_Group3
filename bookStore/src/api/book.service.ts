import { IBook } from "../interfaces/BookInterfaces";
import instance from "./api.service";

export const getBook = async ():Promise<IBook[]> => {
  return instance.get("books")
}
export const addNewBook = async (data:IBook) => {
  return instance.post("books",data)
}
export const deleteBook = async (id:string) => {
  return instance.delete(`books/${id}`)
}
export const updateBook = async (id:string ,data?:IBook) => {
  return instance.patch(`books/${id}`,data)
}