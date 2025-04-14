import { IBook } from "./interfaces/BookInterfaces";
import { IUser } from "./interfaces/UserInterface";

export interface ICategory {
    id?: number,
    name: string,
    createdAt: string,
  }
  
  
export interface IOrder {
  id?: number;
  created_at?: string;
  users: IUser;
  books:IBook
  quantity: number;
  total_price: number;
  status: string;
}
  