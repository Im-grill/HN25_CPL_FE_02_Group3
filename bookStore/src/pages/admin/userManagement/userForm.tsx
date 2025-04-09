import { useForm, SubmitHandler } from 'react-hook-form';
import { createCategory } from '../../../api/category.service';
import AlertContext from '../../../shared/context/AlertContext';
import { useContext, useEffect, useState } from 'react';
import { createUser, getUsers } from '../../../api/user.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '../../../interfaces/UserInterface.ts';


type Inputs = {
  searchKey: string;
}

type UserFormProps = {
  onGetUsers: (filteredUsers?:IUser[]) => void
}

const UserForm = ({ onGetUsers}: UserFormProps) => {
  const alert = useContext(AlertContext)
  console.log(alert);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedTerm, setDebouncedTerm] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);

  const getListUsers = async () => {
    const data = await getUsers()
    setUsers(data);
  }

  useEffect(() => {
    getListUsers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //debounce function to delay search
  useEffect(()=>{
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  //effect to search when debounced term changes
  useEffect(()=>{
    if(debouncedTerm !== undefined){
      searchForUsers(debouncedTerm);
    }
  },[debouncedTerm]);

  const searchForUsers = async (term:string)=>{
    try{
      //get all users
      const allUsers = await getUsers();
      //filter user on search term
      const filteredUsers = term ? allUsers.filter((user:IUser) => user.email.toLowerCase().includes(term.toLowerCase())) : allUsers;

      //update parent component with filtered result
      onGetUsers(filteredUsers);
      
      //show message if no results
      if(term && filteredUsers.length === 0){
        alert?.error("Cannot find such email", 3);
      }
    }catch(error){
      console.error("Error searching users:", error);
      alert?.error("Encounter error while searching. Please try again later.", 3);
    }
  }

  //submit form handler
  const submitForm: SubmitHandler<Inputs> = async(data)=>{
    const{searchKey} = data;
    setSearchTerm(searchKey);
  };

  //handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchTerm(e.target.value)
  }

  return <div className="">
    <form onSubmit={handleSubmit(submitForm)} className=" flex gap-1 mb-3">
        <div className="relative">
          <input
            // {...register("name", { required: true })}
            {...register("searchKey", { required: true })}
            type="text"
            className="w-full rounded-lg border-[#c2c2c2] border-1 px-5 py-1.5 text-sm shadow-xs"
            placeholder="Search"
          />
        </div>

      <div className="flex items-center justify-between">
        <button
          title="search"
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-1.5 text-sm font-medium text-white hover:bg-blue-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"#fff"}}/>
        </button>
      </div>
    </form>
  </div>
}

export default UserForm
