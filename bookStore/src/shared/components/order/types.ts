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
export interface OrderData {
    books: Book;
    quantity: number;
}