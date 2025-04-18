import { IOrder } from '../interfaces';
import instance from "./api.service";

export const getOrders = async (): Promise<IOrder[]> => {  
        return instance.get('/order');
};

export const getOrderById = async (id: number): Promise<IOrder> => {
        return instance.get(`/order/${id}`);
};

export const createOrder = async (order: IOrder): Promise<IOrder> => {
        return instance.post('/order', order);
};

export const updateOrder = async (id: number, order: Partial<IOrder>): Promise<IOrder> => {
        return instance.patch(`/order/${id}`, order);

};

export const deleteOrder = async (id: number): Promise<void> => {
        return instance.delete(`/order/${id}`);
};