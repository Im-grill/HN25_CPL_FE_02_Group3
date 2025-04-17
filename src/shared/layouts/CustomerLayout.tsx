import Header from '../components/Header'
import Footer from '../components/Footer'
import {Outlet, useLocation} from 'react-router-dom'

const CustomerLayout = () => {
    const location = useLocation();
    const noHeaderFooterPaths = ['/order'];
    const shouldHideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);
    return (
        <div className="h-screen flex flex-col">
            {!shouldHideHeaderFooter && <Header />}
            <main className="flex-grow bg-[#F5F5FA]">
                <Outlet/>
            </main>
            {!shouldHideHeaderFooter && <Footer />}
        </div>
    )
}
export default CustomerLayout;
