import React from 'react';
import { Navigate } from 'react-router-dom';
import { useModal } from '../shared/context/ModalContext';

type props = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: props) => {
  const token = localStorage.getItem('accessToken');
  const { setIsModalOpen } = useModal();

  if (!token) {
    setIsModalOpen(true);
    return <Navigate to="/customer/homepage" replace />;
  }

  return children;
}

export default ProtectedRoute;
