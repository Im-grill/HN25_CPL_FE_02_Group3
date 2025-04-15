export interface Book {
    name: string;
    original_price: number;
    current_seller: {
        price: number;
    };
    images: {
        base_url: string;
    }[];
}

export interface User {
    id: number,
    fullname: string,
    email: string,
    address: string,
    phone: string,
}
export interface OrderData {
    books: Book;
    quantity: number;
    users: User;
}