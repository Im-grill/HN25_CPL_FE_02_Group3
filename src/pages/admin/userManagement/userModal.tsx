import {useEffect, useState } from "react";
import { getUserById, updateUser } from "../../../api/user.service.ts";
import IUser from "../../../interfaces/UserInterface";
import { useForm, SubmitHandler } from 'react-hook-form'

type UserModalProps = {
  onClose: () => void,
  id: number
}

type Inputs = {
  email: string,
  fullname:string,
  address: string,
  phone:string,
  createdAt: string
}

const UserModal = ({ onClose, id }: UserModalProps) => {
  const [user, setUser] = useState<IUser>()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()

  const submitForm: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    console.log("Form data:", data);
    console.log("Current user data:", user);
    const {email, fullname, address, phone, createdAt} =  data;
    const updateData = {
      email, fullname, address, phone, createdAt
    };
    console.log("Data being sent to API:", updateData);
    await updateUser(id, updateData)
    onClose()
  }

  const fetchUserById = async () => {
    const data = await getUserById(id)
    console.log("User data from API:", data);
    setUser(data)
  }

  useEffect(() => {
    fetchUserById()
  }, [])

  useEffect(() => {
    reset(user)
  }, [user])

  return <div className="bg-gray-300/70 top-0 h-full w-full absolute flex justify-center items-center">
    <div className="w-1/2 relative rounded-lg border border-gray-200 shadow-lg opacity-100 bg-white p-4">
      <button onClick={onClose}
        className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1">
        <span className="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <form onSubmit={handleSubmit(submitForm)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <h1 className="text-xl">User Update</h1>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>

          <div className="relative">
            <input
              {...register("email", { required: false, disabled:true })}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="Enter new email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="fullname" className="sr-only">Name</label>

          <div className="relative">
            <input
              {...register("fullname", { required: false })}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="Enter new name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="address" className="sr-only">Address</label>

          <div className="relative">
            <input
              {...register("address", { required: false })}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="Enter new address"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">Phone</label>

          <div className="relative">
            <input
              {...register("phone", { required: false })}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="Enter new phone"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Date</label>

          <div className="relative">
            <input
              {...register("createdAt", { required: false })}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="Created at"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Thêm mới
          </button>
        </div>
      </form>
    </div>
  </div>
}

export default UserModal;
