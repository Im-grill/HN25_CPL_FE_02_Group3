import { } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelSearchTopSeller = () => {
    const [products, setProducts] = useState([
        {
            "createdAt": "2036-01-30T08:57:48.674Z",
            "name": "Soap",
            "image": "https://loremflickr.com/640/480/technics",
            "originalPrice": "828.00",
            "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
            "id": "1",
            "link": ""
        },
        {
            "createdAt": "2000-02-14T19:12:48.313Z",
            "name": "Computer",
            "image": "https://loremflickr.com/640/480/technics",
            "originalPrice": "469.00",
            "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
            "id": "2",
            "link": ""
        },
    ]);
    return (
        <>
            <div className="relSearchCtn rounded-md mb-3 text-xl pb-4 pt-2 pl-4 bg-white w-full" >
                <span>Tìm Kiếm Liên Quan</span>
            </div>
            <div className="topSellerCtn w-full bg-white">
                <p className="text-xl pl-4 my-3">Top Bán Chạy Sản Phẩm Nhà Sách Tiki</p>
                <div className="listProducts pl-8">
                    <ul>
                        {products.map((product, index) => (
                            <li key={product.id}>
                                <div className="catCtn flex items-center">
                                    <span className="font-mono">{index + 1}.</span>
                                    <div className="flex justify-between pr-4 pl-1 w-full ">
                                        <Link to={product.link} className=" text-blue-400">{product.name}</Link>
                                        <span>{product.originalPrice}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default RelSearchTopSeller;