import {useState} from "react";
import {Link} from "react-router-dom";
import "tailwindcss";

const Sidebar = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "English Books",
            subcategories: [
                {id: 101, name: "Art & Photography", link: "/books/art-photography"},
                {id: 102, name: "Biographies & Memories", link: "/books/biographies-memories"},
                {id: 103, name: "Business & Economics", link: "/books/business-economics"},
                {id: 104, name: "Children's Books", link: "/books/childrens-books"}
            ]
        },
        {
            id: 2,
            name: "Vietnamese Books",
            subcategories: [
                {id: 201, name: "Literature", link: "/books/literature"},
                {id: 202, name: "Education", link: "/books/education"},
                {id: 203, name: "Self-Help", link: "/books/self-help"}
            ]
        },
        {
            id: 3,
            name: "Manga & Comics",
            subcategories: [
                {id: 301, name: "Shonen", link: "/books/shonen"},
                {id: 302, name: "Shojo", link: "/books/shojo"},
                {id: 303, name: "Seinen", link: "/books/seinen"}
            ]
        },
        {
            id: 4,
            name: "Textbooks",
            subcategories: [
                {id: 401, name: "Science", link: "/books/science"},
                {id: 402, name: "Mathematics", link: "/books/mathematics"},
                {id: 403, name: "Computer Science", link: "/books/computer-science"}
            ]
        }
    ]);

    return (
        <aside className="flex flex-col rounded-md h-screen m-1.5 w-64 bg-[#c2c2c2]">
            <div className="sidebar-top border-b-1 border-[#c2c2c2] p-1.5">
                <span className="ml-2.5 font-semibold ">Khám phá theo danh mục</span>
            </div>
            <div className="flex flex-col justify-between ">
                <ul className="mt-3 space-y-1">
                    {categories.map((category) => (
                        <li key={category.id}>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="text-sm font-medium">{category.name}</span>

                                    <span className="something shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="arrow size-5"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <ul className="mt-2 space-y-1 px-4">
                                    {category.subcategories && category.subcategories.map((subcat) => (
                                        <li key={subcat.id}>
                                            <Link to={subcat.link}
                                                  className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700">
                                                {subcat.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}
export default Sidebar;