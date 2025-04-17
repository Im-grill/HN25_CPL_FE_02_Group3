import { } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../interfaces/BookInterfaces";
import { getBook } from "../../api/book.service";

const RelSearchTopSeller = () => {
    const [books, setBooks] = useState<IBook[]>([])
    const getBookData =async ()=>{
        const res =await getBook();
        if(res){
            res.sort((a,b)=>b.quantity_sold?.value - a.quantity_sold?.value)
            const top10Books = res.slice(0,10);
            setBooks(top10Books)
        }
    }
    useEffect(()=>{
        getBookData()
    },[])
    return (
        <>
            <div className="relSearchCtn rounded-md mb-3 text-xl pb-4 pt-2 pl-4 bg-white w-full xl:block hidden" >
                <span>Tìm Kiếm Liên Quan</span>
            </div>
            <div className="topSellerCtn w-full bg-white xl:block hidden">
                <p className="text-xl pl-4 my-3">Top Bán Chạy Sản Phẩm Nhà Sách Tiki</p>
                <div className="listProducts pl-8">
                    <ul>
                        {books.map((product, index) => (
                            <li key={product.id}>
                                <div className="catCtn flex items-center mb-2">
                                    <span className="font-mono">{index + 1}.</span>
                                    <div className="flex justify-between pr-4 pl-1 w-full ">
                                        <Link to="#" className=" text-blue-400">{product.name}</Link>
                                        <div className="items-baseline flex">
                                        <span className="font-normal">{product.current_seller.price.toLocaleString('vi-VN')}</span>
                                        <span className="text-[10.5px] self-start font-normal">₫</span>
                                        </div>
                                      
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