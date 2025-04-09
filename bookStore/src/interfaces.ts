
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
  books: {
    name: string;
    original_price: number;
  };
  quantity: number;
  total_price: number;
  status: string;
}
  