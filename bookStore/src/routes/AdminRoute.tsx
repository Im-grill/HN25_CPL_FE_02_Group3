import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const token = localStorage.getItem('accessToken');
    const role = localStorage.getItem('role');

    if (!token || role !== 'admin') {
        return <Navigate to="/customer/homepage" replace />;
    }

    return <Outlet />;
};

export default AdminRoute;