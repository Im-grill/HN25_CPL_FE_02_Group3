import { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from 'react-router-dom'

const CustomerLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Sidebar />
        </div>
    )
}

export default CustomerLayout;