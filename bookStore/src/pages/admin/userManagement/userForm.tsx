import { useForm, SubmitHandler } from 'react-hook-form';
import AlertContext from '../../../shared/context/AlertContext';
import { useContext, useEffect, useState } from 'react';
import { getUsers } from '../../../api/user.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import IUser from '../../../interfaces/UserInterface';


type UserFormProps = {
  onGetUsers: (filteredUsers?: IUser[]) => void
}

const UserForm = ({ onGetUsers }: UserFormProps) => {
  const alert = useContext(AlertContext)
  console.log(alert);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedTerm, setDebouncedTerm] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);

  const getListUsers = async () => {
    try {
      const data = await getUsers()
      setUsers(data);
      return (data);
    } catch (error) {
      console.error("Error fetching users:", error);
      alert?.error("Failed to load users.", 3);
      return [];
    }

  }

  useEffect(() => {
    getListUsers();
  }, []);

  //debounce function to delay search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);


  // Effect to handle search or reset when debounced term changes
  useEffect(() => {
    if (debouncedTerm === '') {
      // Gọi lại API để lấy danh sách đầy đủ
      getListUsers().then((fullUsers) => {
        onGetUsers(fullUsers);
      });
    } else {
      searchForUsers(debouncedTerm);
    }
  }, [debouncedTerm]);

  const searchForUsers = async (term: string) => {
    try {
      // Chỉ lọc nếu users không rỗng
      if (!users.length) {
        onGetUsers([]); // Gửi mảng rỗng nếu chưa có dữ liệu
        return;
      }
      //filter user on search term
      const filteredUsers = term ? users.filter((user: IUser) =>
        (user.email?.toLowerCase()?.includes(term.toLowerCase()) || user.fullname?.toLowerCase()?.includes(term.toLowerCase())) ?? false)
        : users;

      //update parent component with filtered result
      onGetUsers(filteredUsers);

      //show message if no results
      if (term && filteredUsers.length === 0) {
        alert?.error("Cannot find such email", 3);
      }
    } catch (error) {
      console.error("Error searching users:", error);
      alert?.error("Encounter error while searching. Please try again later.", 3);
    }
  }

  //handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return <div className="">
    <div className=" flex gap-1 mb-3 relative">
      <input
        value={searchTerm}
        type="text"
        onChange={handleInputChange}
        className="w-1/3 rounded-lg border-[#c2c2c2] border-1 px-5 py-1.5 text-sm shadow-xs"
        placeholder="Search"
      />
      {/* <button
          title="search"
          onClick={() => searchForUsers(searchTerm)} 
          className="inline-block rounded-lg bg-blue-500 px-5 py-1.5 text-sm font-medium text-white hover:bg-blue-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff' }} />
        </button> */}
    </div>
  </div>
}

export default UserForm
