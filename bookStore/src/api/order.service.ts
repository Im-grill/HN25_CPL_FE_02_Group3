import axios from 'axios';
import { IOrder } from '../interfaces';

const API_URL = 'http://localhost:8080/orders';

export const getOrders = async (): Promise<IOrder[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

export const getOrderById = async (id: number): Promise<IOrder> => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching order ${id}:`, error);
        throw error;
    }
};

export const createOrder = async (order: IOrder): Promise<IOrder> => {
    try {
        const response = await axios.post(API_URL, order);
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export const updateOrder = async (id: number, order: Partial<IOrder>): Promise<IOrder> => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, order);
        return response.data;
    } catch (error) {
        console.error(`Error updating order ${id}:`, error);
        throw error;
    }
};

export const deleteOrder = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error(`Error deleting order ${id}:`, error);
        throw error;
    }
};