import { } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow from '../../assets/arrow.png'

const Sidebar = () => {
    const [openCategoryIds, setOpenCategoryIds] = useState([]);
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "English Books",
            link: "/books/english",
            subcategories: [
                { id: 101, name: "Art & Photography", link: "/books/art-photography" },
                { id: 102, name: "Biographies & Memories", link: "/books/biographies-memories" },
                { id: 103, name: "Business & Economics", link: "/books/business-economics" },
                { id: 104, name: "Children's Books", link: "/books/childrens-books" }
            ]
        },
        {
            id: 2,
            name: "Vietnamese Books",
            link: "/books/vietnamese",
            subcategories: [
                { id: 201, name: "Literature", link: "/books/literature" },
                { id: 202, name: "Education", link: "/books/education" },
                { id: 203, name: "Self-Help", link: "/books/self-help" }
            ]
        },
        {
            id: 3,
            name: "Manga & Comics",
            link: "/books/manga-comics",
            subcategories: [
                { id: 301, name: "Shonen", link: "/books/shonen" },
                { id: 302, name: "Shojo", link: "/books/shojo" },
                { id: 303, name: "Seinen", link: "/books/seinen" }
            ]
        },
        {
            id: 4,
            name: "Textbooks",
            link: "/books/textbook",
            subcategories: [
                { id: 401, name: "Science", link: "/books/science" },
                { id: 402, name: "Mathematics", link: "/books/mathematics" },
                { id: 403, name: "Computer Science", link: "/books/computer-science" }
            ]
        }
    ]);

const toggleSubcategories = (categoryId) => {
        setOpenCategoryIds(prevOpenIds => {
            if (prevOpenIds.includes(categoryId)) {
                return prevOpenIds.filter(id => id !== categoryId);
            } 
            else {
                return [...prevOpenIds, categoryId];
            }
        });
    };

    const isCategoryOpen = (categoryId) => {
        return openCategoryIds.includes(categoryId);
    };

    return (
        <aside className="flex flex-col rounded-md h-screen m-1.5 w-64  bg-white" >
            <div className="sidebar-top border-b-1 border-[#c2c2c2] p-1.5">
                <span className="ml-2.5 font-semibold ">Khám phá theo danh mục</span>
            </div>
            <div className="menuCtn flex flex-col">
                <ul>
                    {categories.map((category) => (
                        <li key={category.id} className="border-b-1 border-[#c2c2c2] p-2">
                            <div className="catCtn flex justify-between items-center px-2 ">
                                <Link to={category.link} className="text-sm hover:text-blue-400 hover:underline ">{category.name}</Link>
                                <button type="button" onClick={() => toggleSubcategories(category.id)} className="p-1 hover:bg-gray-300 cursor-pointer rounded-md">
                                    <img  src={arrow} alt="arrow" className={`size-7 transition-transform duration-200 
                                        ${isCategoryOpen(category.id) ? '' : 'rotate-180'}`} />
                                </button>
                            </div>
                            <div className={`subCatCtn overflow-hidden transition-all duration-200 ${isCategoryOpen(category.id) ? 'max-h-96' : 'max-h-0'}`}>
                                <ul className=" px-4">
                                    {category.subcategories.map((subcat) => (
                                        <li key={subcat.id}>
                                            <Link to={subcat.link} className="block rounded-lg px-4 py-1 text-sm hover:text-blue-400 hover:underline ">
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
    )
}
export default Sidebar;