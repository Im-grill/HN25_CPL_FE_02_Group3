
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
export default function CustomerLayout() {
    return (
        <div className="h-screen  flex flex-col">
            <Header />
            <main className="flex-grow  bg-[#F5F5FA]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
