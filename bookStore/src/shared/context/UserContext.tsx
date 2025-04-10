import { createContext, useState, ReactNode } from 'react';
import { IUser } from '../../interfaces';

// Định nghĩa kiểu cho UserContext
type UserContextType = {
  user?: IUser;
  setUser: (user?: IUser) => void;
};

// Lấy user mặc định từ localStorage, nếu không có thì để undefined
const defaultUser = JSON.parse(localStorage.getItem('user') || '{}') as IUser;

export const UserContext = createContext<UserContextType | null>(null);

type UserProviderType = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState<IUser | undefined>(defaultUser);

  // Hàm cập nhật user và lưu vào localStorage
  const updateUser = (newUser?: IUser) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
    }
  };

  return (
      <UserContext.Provider value={{ user, setUser: updateUser }}>
        {children}
      </UserContext.Provider>
  );
};

export default UserProvider;