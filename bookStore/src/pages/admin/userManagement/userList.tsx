import { useContext, useEffect, useState } from 'react'
import { IUser } from '../../../interfaces/UserInterface.ts';
import { getUsers } from '../../../api/user.service.ts';
import AlertContext from '../../../shared/context/AlertContext.tsx';
import UserItem from './userItem.tsx';
import UserModal from './userModal.tsx';



const UserList = () => {
  // State of component - Noi luu tru du lieu trong component
  const [users, setUsers] = useState<IUser[]>([]);
  const [updateUserId, setUpdateUserId] = useState<number | null>()
  const alert = useContext(AlertContext);

  const getListUsers = async () => {
    const data = await getUsers()
    setUsers(data);
  }

  const updateUser = (id?: number) => {
    if (id) {
        setUpdateUserId(id)
    }
  }

  const closeModal = () => {
    setUpdateUserId(null);
    alert?.success("Cập nhật category thành công")
    getListUsers()
  }

  useEffect(() => {
    getListUsers();
  }, [])

  return (
    <section className='relative'>
      <h1 className="text-3xl">User List</h1>
      
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.map((user) => <UserItem onUpdateUser={() => updateUser(user.id)} onGetUsers={getListUsers} user={user} />)}
          </tbody>
        </table>
      </div>
      {updateUserId && <UserModal id={updateUserId} onClose={closeModal} />}
    </section>
  )
}
export default UserList;
