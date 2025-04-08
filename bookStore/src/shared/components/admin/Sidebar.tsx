import { faAngleDoubleLeft, faAngleDoubleRight, faCheckCircle, faBox, faUser, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: 'Book Management', icon: faBox, link: '/admin/book/list' },
        { id: 2, name: 'Category Management', icon: faCheckCircle, link: '/admin/category' },
        { id: 3, name: 'User Management', icon: faUser, link: '/admin/user' },
        { id: 4, name: 'Order Management', icon: faList, link: '/admin/order' },
    ]);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 765) {
                setIsExpanded(false);
            } else {
                setIsExpanded(true);
            }
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <aside className={`flex flex-col bg-white border-t-1 border-r-1 border-[#c2c2c2] h-[calc(100vh-64px)] ${isExpanded ? "w-64" : "w-12"}`}>
            <div className="sidebar-menu flex-grow">
                {menuItems.map((item: any) => (
                    <Link key={item.id} to={item.link} className="border-b border-slate-100 flex items-center hover:bg-[#33adff] hover:text-white">
                        <FontAwesomeIcon icon={item.icon} className="p-4 min-w-4" />
                        <span className={`${isExpanded ? "block" : "hidden"}`}>{item.name}</span>
                    </Link>
                ))}
            </div>
            <div className="sidebar-bottom flex justify-end">
                <button type="button" onClick={toggleSidebar} className="whitespace-nowrap  items-center" title="Toggle Sidebar">
                    <FontAwesomeIcon icon={isExpanded ? faAngleDoubleLeft : faAngleDoubleRight} className="p-4 min-w-4" />
                </button>
            </div>
        </aside>
    )
}
export default Sidebar;