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
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.createdAt}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      <button onClick={onUpdateUser}
        className="group relative inline-block focus:ring-3 focus:outline-hidden">
        <span
          className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
        ></span>
        <span
          className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
        >
          Edit
        </span>
      </button>
      <button
        onClick={() => onDeleteUser(user.id)}
        className="group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
      >
        <span className="absolute inset-0 border border-red-600"></span>
        <span
          className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
        >
          Delete
        </span>
      </button>
    </td>
  </tr>
}

export default UserItem;
