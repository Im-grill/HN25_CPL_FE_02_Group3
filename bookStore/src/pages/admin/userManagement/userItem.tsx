import React from "react";
import { IUser } from "../../../interfaces/UserInterface.ts";
import { deleteUser } from "../../../api/user.service.ts";

type UserItemProps = {
  user: IUser,
  onGetUsers: () => {},
  onUpdateUser?: () => void,
}

const UserItem = ({ user, onGetUsers, onUpdateUser }: UserItemProps) => {
  const onDeleteUser = async (id?: number) => {
    if (id) {
      await deleteUser(id)
      onGetUsers()
    }
  }

  return <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.id}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.fullname}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.createdAt}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center items-center gap-3 ">  
      <button onClick={onUpdateUser}
        className="group relative text-sm text-black font-medium border-1 border-[#c2c2c2] focus:ring-3 rounded-md bg-white px-12 py-3  transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 cursor-pointer">
          Edit
      </button>
      <button
        onClick={() => onDeleteUser(user.id)}
        className="group relative text-sm font-medium text-white focus:ring-3 rounded-md bg-red-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 cursor-pointer">
          Delete
      </button>
    </td>
  </tr>
}

export default UserItem;
