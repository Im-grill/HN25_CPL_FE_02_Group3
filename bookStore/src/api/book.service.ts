<<<<<<< HEAD
import { IBook } from "../interfaces/BookInterfaces";
=======
import { IBook } from "../interfaces.ts";
>>>>>>> 3c5df44a5dfe86d344dce69751b5aa2eeaf95148
import instance from "./api.service";

export const getBook = async ():Promise<IBook[]> => {
  return instance.get("books")
}