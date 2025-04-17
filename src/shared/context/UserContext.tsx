import React, {createContext, useState} from 'react'
import {IUser} from '../../interfaces/UserInterface.ts';

type UserContextType = {
    user?: IUser,
    setUser: (user?: IUser) => void
}
const defaultUser = JSON.parse(localStorage.getItem("user") || "{}") as IUser

export const UserContext = createContext<UserContextType | null>(null);

type UserProviderType = {
    children: React.ReactNode;
}

const UserProvider = ({children}: UserProviderType) => {
    const [user, setUser] = useState<IUser | undefined>(defaultUser)
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;