import React, { Children } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useContext } from "react";
import AlertContext from '../shared/context/AlertContext';
type props ={
   
    children:React.ReactNode

}
const ProtectedRoute = ({children}:props) => {
    const token = localStorage.getItem('accessToken');
    const role = localStorage.getItem('role');
    const alert = useContext(AlertContext)
    if(!token){
        alert?.error("You must login first", 3)
        return <Navigate to="/customer/homepage" replace />;
    }
  
    return children;
}

export default ProtectedRoute;