import { AxiosResponse } from "axios";
import { IOrder } from "../interfaces";
import instance from "./api.service";

export const getOrders = async (): Promise<IOrder[]> => {
    return instance.get("orders")
}

export const getOrderById = async (id: number): Promise<IOrder> => {
    return instance.get("orders/" + id)
}

export const createOrder = async (data: IOrder) => {
    return instance.post("orders", data)
}

// Update
export const updateOrder = async (id: number, data: IOrder) => {
    return instance.put("orders/" + id, data)
}

// Delete
export const deleteOrder = async (id: number) => {
    return instance.delete("orders" + `/${id}`)
}