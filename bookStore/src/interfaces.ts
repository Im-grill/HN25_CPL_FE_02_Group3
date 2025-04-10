import { IBook } from "./interfaces/BookInterfaces";

export interface ICategory {
    id?: number,
    name: string,
    createdAt: string,
  }
  
  
export interface IOrder {
  id?: number;
  created_at?: string;
  users: {
    email: string;
  };
  books:IBook
  quantity: number;
  total_price: number;
  status: string;
}
  