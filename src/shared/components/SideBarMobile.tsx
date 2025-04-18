import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from '../../assets/arrow.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
}

const SidebarMobile = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
    
    const [openCategoryIds, setOpenCategoryIds] = useState<number[]>([]);
    const categories = [
        {
            id: 1,
            name: "English Books",
            link: "/books/english",
            subcategories: [
                { id: 101, name: "Art & Photography", link: "/books/art-photography" },
                { id: 102, name: "Biographies & Memories", link: "/books/biographies-memories" },
                { id: 103, name: "Business & Economics", link: "/books/business-economics" },
                { id: 104, name: "How-to - Self Help", link: "/books/how-to-self-helf" },
                { id: 105, name: "Dictionary", link: "/books/dictionary" },
                { id: 106, name: "Education - Teaching", link: "/books/education-teaching" },
                { id: 107, name: "Fiction - Literature", link: "/books/fiction-literature" },
                { id: 108, name: "Magazines", link: "/books/magazines" },
                { id: 109, name: "Medical Books", link: "/books/medical" },
                { id: 110, name: "Parenting & Relationship", link: "/books/parenting-relationship" },
                { id: 111, name: "Reference", link: "/books/reference" },
                { id: 112, name: "Science - Technology", link: "/books/science-technology" },
                { id: 113, name: "History, Politics & Social Sciences", link: "/books/history-politics-social" },
                { id: 114, name: "Travel & Holiday", link: "/books/travel-holiday" },
                { id: 115, name: "Cookbooks, Food & Wine", link: "/books/cook-book-food-wine" },
            ]
        },
        {
            id: 2,
            name: "Sách tiếng Việt",
            link: "/books/vietnamese",
            subcategories: [
                { id: 301, name: "Văn học - Thơ ca", link: "/books/literature-poetry" },
                { id: 302, name: "Giáo dục", link: "/books/education" },
                { id: 303, name: "Tạp chí", link: "/books/magazine" }
            ]
        },
        {
            id: 3,
            name: "Văn phòng phẩm",
            link: "/books/stationery",
            subcategories: [
                { id: 301, name: "Đồ dùng học sinh", link: "/books/student-school-supplies" },
                { id: 302, name: "Đồ dùng giáo viên", link: "/books/teaching-supplies" },
            ]
        },
        {
            id: 4,
            name: "Đồ lưu niệm",
            link: "/books/souvenir",
            subcategories: [
                { id: 401, name: "Đồ thủ công", link: "/books/hand-made" },
                { id: 402, name: "Quà tặng", link: "/books/gifts" },
            ]
        }
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    

    const toggleSubcategories = (categoryId: number) => {
        setOpenCategoryIds(prevOpenIds => {
            if (prevOpenIds.includes(categoryId)) {
                return prevOpenIds.filter(id => id !== categoryId);
            }
            else {
                return [...prevOpenIds, categoryId];
            }
        });
    };

    const isCategoryOpen = (categoryId: number) => {
        return openCategoryIds.includes(categoryId);
    };

    return (
        <div>
            <aside className={`shrink-0 flex flex-col rounded-md h-fit bg-white transition-all duration-300 ${isSidebarOpen ? 'fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto w-full h-full': 'hidden'}`}>
                {/* Burger button */}
                <button
                    title="menu"
                    type="button"
                    className={`text-gray-600 md:hidden p-1.5`}
                    onClick={toggleSidebar}
                >
                    <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                </button>
                {/* top sidebar*/}
                <div className="sidebar-top border-[#c2c2c2] px-2.5 py-3.5 flex justify-between items-center ">
                    <span className="font-semibold text-[14px]">Khám phá theo danh mục</span>
                </div>

                {/* menu content */}
                <div className="menuCtn flex flex-col">
                    <ul className="p-0">
                        {categories.map((category) => (
                            <li key={category.id} className="border-t-1 w-full border-[#c2c2c2] p-2">
                                <div className="catCtn flex justify-between items-center px-2 ">
                                    <Link to={category.link} 
                                    className="text-[13px] font-medium hover:text-blue-400 hover:underline " 
                                    onClick={() => setIsSidebarOpen(false)}>{category.name}</Link>
                                    <button type="button" onClick={() => toggleSubcategories(category.id)} className="p-1 hover:bg-gray-300 cursor-pointer rounded-md">
                                        <img src={arrow} alt="arrow" className={`size-7 transition-transform duration-200 
                                        ${isCategoryOpen(category.id) ? '' : 'rotate-180'}`} />
                                    </button>
                                </div>
                                <div className={`subCatCtn overflow-hidden transition-all duration-200 ${isCategoryOpen(category.id) ? 'h-full' : 'max-h-0'}`}>
                                    <ul className=" px-4">
                                        {category.subcategories.map((subcat) => (
                                            <li key={subcat.id}>
                                                <Link to={subcat.link} className="block rounded-lg px-4 py-1 text-[13px] hover:text-blue-400 hover:underline" onClick={() => setIsSidebarOpen(false)}>
                                                    {subcat.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>

    )
}
export default SidebarMobile;