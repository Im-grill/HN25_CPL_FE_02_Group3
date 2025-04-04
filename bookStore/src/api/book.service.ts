import { IBook } from "../interfaces/BookInterfaces";
import instance from "./api.service";

export const getBook = async ():Promise<IBook[]> => {
  return instance.get("books")
}