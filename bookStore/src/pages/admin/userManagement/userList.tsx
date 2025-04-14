import { useContext, useEffect, useState } from 'react'
import IUser from '../../../interfaces/UserInterface.ts';
import { getUsers } from '../../../api/user.service.ts';
import AlertContext from '../../../shared/context/AlertContext.tsx';
import UserItem from './userItem.tsx';
import UserModal from './userModal.tsx';
import UserForm from './userForm.tsx';
import Pagination from './Pagination.tsx';


const UserList = () => {
  // State of component - Noi luu tru du lieu trong component
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [updateUserId, setUpdateUserId] = useState<number | null>()
  const alert = useContext(AlertContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getListUsers = async (filtered?: IUser[]) => {
    setIsLoading(true);
    try {
      if (filtered) {
        //if filtered users are provided, use them
        setFilteredUsers(filtered);
        setUsers(filtered);
        setCurrentPage(1);
        setTotalPages(Math.ceil(filtered.length / itemsPerPage));
      } else {
        //otherwise fetch all users
        const data = await getUsers();
        setUsers(data);
        setFilteredUsers(data);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      }
    } catch (error) {
      alert?.error("Cannot find users list.");
      console.error("Error fetching users: ", error)
    } finally {
      setIsLoading(false);
    }
  };
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredUsers.slice(startIndex, endIndex);
  };

  const updateUser = (id?: number) => {
    if (id) {
      setUpdateUserId(id)
    }
  }

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page
    setTotalPages(Math.ceil(filteredUsers.length / newItemsPerPage));
  };
  const closeModal = () => {
    setUpdateUserId(null);
    alert?.success("Cập nhật danh sách người dùng thành công")
    getListUsers()
  }

  useEffect(() => {
    getListUsers();
  }, [])


  // Recalculate total pages when itemsPerPage changes
  useEffect(() => {
    setTotalPages(Math.ceil(filteredUsers.length / itemsPerPage));
  }, [filteredUsers, itemsPerPage]);

  return (
    <section className='relative mt-10'>
      <h1 className="text-3xl mb-5">User List</h1>
      <UserForm onGetUsers={getListUsers} />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Full Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Address</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Phone</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
              <th className=" px-4 py-2 font-medium text-gray-900 text-center w-1/3">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {getCurrentPageData().map((user) => <UserItem key={user.id} onUpdateUser={() => updateUser(user.id)} onGetUsers={getListUsers} user={user} />)}
          </tbody>
        </table>
      </div>
      {isLoading ? (
        <div className="text-sm text-gray-500 text-center py-4">Loading users...</div>
      ) : filteredUsers.length > 0 ? (
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <div className="text-center py-4 text-gray-500">No users found</div>
      )}
      {updateUserId && <UserModal id={updateUserId} onClose={closeModal} />}
    </section>
  )
}
export default UserList;
