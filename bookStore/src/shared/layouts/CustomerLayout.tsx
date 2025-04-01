
import Header from '../components/Header'

import { Outlet } from 'react-router-dom'
export default function CustomerLayout() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    )
}
