import Header from "../components/admin/Header.tsx";
import Sidebar from "../components/admin/Sidebar.tsx";
import {Outlet} from 'react-router-dom';
// import AlertContext from "../context/AlertContext.tsx";
// import { isEmpty } from 'lodash';
const AdminLayout = () => {
    // const alert = useContext(AlertContext)
    // const navigate = useNavigate()

    return (
        <div className="h-screen flex flex-col">
            <Header/>
            <main className="flex-grow flex">
                <Sidebar/>
                <div className="content flex-grow p-4">
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}

export default AdminLayout;
