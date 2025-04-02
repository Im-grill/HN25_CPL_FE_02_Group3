import { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer.tsx";

const CustomerLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Sidebar />
            <Footer/>
        </div>
    )
}

export default CustomerLayout;