import { IBook } from "../interfaces.ts";
import instance from "./api.service";

export const getBook = async ():Promise<IBook[]> => {
  return instance.get("books")
}