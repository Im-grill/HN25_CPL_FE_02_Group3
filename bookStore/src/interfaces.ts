
export interface ICategory {
    id?: number,
    name: string,
    createdAt: string,
  }
  
  export interface IUser {
    id?: number,
    email: string,
    password?: string
  }
  

  export interface IBook {
    id: number;
    name: string;
    original_price: number;
  }
  
  export interface IOrder {
    id?: number;
    created_at?: string;
    users: {
      id: number;
      email?: string;
    };
    books: {
      id: number;
      name?: string;
      original_price?: number;
    };
  }