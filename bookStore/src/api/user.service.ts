import IUser from "../interfaces/UserInterface";
import instance from "./api.service";


//Get
export const getUsers = async (): Promise<IUser[]> => {
    return instance.get("users")
}
//GetById
export const getUserById = async (id: number): Promise<IUser> => {
    return instance.get("users/" + id)
}

//Create
export const createUser = async (data: IUser) => {
    return instance.post("users", data)
}

// Update
export const updateUser = async (id: number, data: IUser) => {
    return instance.patch("users/" + id, data)
}

// Delete
export const deleteUser = async (id: number) => {
    return instance.delete("users" + `/${id}`)
}