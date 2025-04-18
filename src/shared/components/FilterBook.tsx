import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FilterOptions } from '../../interfaces/BookInterfaces';



interface FilterBookProps {
    onFilterChange: (filters: FilterOptions) => void;
}
export default function FilterBook({ onFilterChange }: FilterBookProps) {
    const [sortButton, setSortButton] = useState<string>("all")
    const [checkboxes, setCheckboxes] = React.useState({
        top_deal: false,
        freeship: false,
        rating: false,
        fastShip: false,
        sortBy: "all"
    });
    const [sortBy, setSortBy] = React.useState('all');
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckboxes = {
            ...checkboxes,
            [event.target.name]: event.target.checked,
        };
        setCheckboxes(newCheckboxes);
        // Gửi dữ liệu lọc lên component cha
        onFilterChange({
            ...newCheckboxes,
            sortBy,
        });
    };
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
        // Gửi dữ liệu sắp xếp lên component cha
        onFilterChange({
            ...checkboxes,
            sortBy: e.target.value,
        });
    };
    const sortBook = (i: string) => {

        setSortBy(i)
        setSortButton(i)
        onFilterChange({
            ...checkboxes,
            sortBy: i,
        });
    }
    const filterBook = (name: string) => {
        if (name == "fast_ship") {

            const newCheckboxes = {
                ...checkboxes,
                fastShip: !checkboxes.fastShip,
            };
            setCheckboxes(newCheckboxes);
            onFilterChange({
                ...newCheckboxes,
                sortBy,
            });
        }
        if (name == "top_deal") {

            const newCheckboxes = {
                ...checkboxes,
                top_deal: !checkboxes.top_deal,
            };
            setCheckboxes(newCheckboxes);
            onFilterChange({
                ...newCheckboxes,
                sortBy,
            });
        }
        if (name == "freeship") {

            const newCheckboxes = {
                ...checkboxes,
                freeship: !checkboxes.freeship,
            };
            setCheckboxes(newCheckboxes);
            onFilterChange({
                ...newCheckboxes,
                sortBy,
            });
        }




    }
    return (
        <div className='flex bg-white md:mt-[34px] w-screen flex-col mt-2 '>
            <span className='font-semibold  mt-3 hidden md:inline '>Tất cả sản phẩm</span>
            {/* range book for mobile */}
            <div className='border-1 md:hidden flex justify-between p-2  border-b border-[#F2F2F2]'>
                <button type="button" onClick={() => sortBook("all")} >
                    <span className={`${sortButton == "all" ? 'text-blue-500' : 'text-black'}`}>Phổ biến</span>
                </button>
                <button type="button" onClick={() => sortBook("popular")}>
                    <span className={`${sortButton == "popular" ? 'text-blue-500' : 'text-black'}`}>Bán chạy</span>
                </button>
                <button type="button" onClick={() => sortBook("new")}>
                    <span className={`${sortButton == "new" ? 'text-blue-500' : 'text-black'}`}>Hàng mới</span>
                </button>
                <button type="button" className='flex items-center' onClick={() => sortBook("asc")}>
                    <span className={`${sortButton == "asc" ? 'text-blue-500' : 'text-black'}`}>  Giá</span>

                    <img src="/assets/up-and-down-arrow.png" alt="loi" className='size-5' />
                </button>

            </div>
            {/* filter for mobile */}
            <div className='p-2 flex  md:hidden w-full'>
                <div className='flex justify-center items-center gap-2'>
                    <img src="/assets/filter.png" alt="" className='w-[16.5px] h-[17.25px]' />
                    <span className='text-sm'>Lọc</span>
                    <Divider orientation="vertical" flexItem />
                </div>
                <div className='flex justify-between pl-2 w-full '>
                    <button  className={`cursor-pointer ${checkboxes.fastShip ? 'bg-[#bcbcc4]' : 'bg-[#F5F5FA]'} p-2 items-center rounded-[100px]`}
                        onClick={() => filterBook("fast_ship")}
                    >
                        <img className='h-[17px] w-[34px] mr-2.5 ' src='https://s3-alpha-sig.figma.com/img/9f63/2df5/52d4ff178b5e56072899664c52a61fe5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Nu1b-foWKNYD~a0rsOZFyJmprSlYBp81prQPQuPYuYNCszilUfG7bgc4B2ZIgvgqWxo0~hbZKf1CfC6N3Y4pejv~wsfGGC8IxPGgsdTtMNJYiytufPyjsSOopMdjWhwF2uYCo0LdCVLdUWZMoy~yj3l5hAsQxNYjEEg70B1Bmt3dT-eA~L7t7g-T1EoZ9TexjjV8WIpK0UvOPLSHIVtbiTTnDbaIswQeZ4Jr~WcJf2QhXhJ-fN3OQM7MATfI5r4pM4CZ8DByrPl5AMXsorbw1gbbG41xFx2AuOii54zjNpfSrcofgprELgw-Y-scOZEErGYxgWbIb0Vjh09FY38O2g__' alt='' />
                    </button>
                    <button className={`cursor-pointer ${checkboxes.top_deal ? 'bg-[#bcbcc4]' : 'bg-[#F5F5FA]'} p-2 items-center rounded-[100px]`}
                        onClick={() => filterBook("top_deal")}>
                        <img className='h-[17px] w-[80px] mr-2.5' src='https://s3-alpha-sig.figma.com/img/36cf/1903/e557cf4874d27a0688c1fc46316f6ae3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fgoAD~tJKTKD1QYFFiGQtObl3qzVSilNHGK7iWOzoXQ3RH8MQy1AkqmP7QW8-~Pctham~tKNJTUF-~77QTDQbZy0-AkTUFV-XJqvDtBHhOi1A0qcPC5PgulZeVR0tgDR3IVMvwrsIecOkxhZ7g~9QLmSVgWaI~qkLV2Iz8KrjM~Afi3sQRhpKUgdYRzS4ea9zmRu5ET2syk~8SrCVfMmjNLE~ro0Sv2boS7~f96YB4Jjmx-D-8G79CcOHf7tH~W1UW7cqX~C-TGEPbyxwOJDqV8J5Z4d2BBOP-s9YU8XNp63Yh8nBnJJjGYXuH3zb6t0u3Jg1wTA-q6n8NCBzWkgdw__' alt='' />
                    </button>
                    <button className={`cursor-pointer ${checkboxes.freeship ? 'bg-[#bcbcc4]' : 'bg-[#F5F5FA]'} p-2 items-center rounded-[100px]`}
                        onClick={() => filterBook("freeship")}>
                        <img className='h-[17px] w-[80px] mr-2.5' src='https://s3-alpha-sig.figma.com/img/49fc/1fce/3bf50b925712ddf852409cc7a3915980?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rePVYzPEdC42JHrLskQyvBbSE4OOQzNalmddAe4HJAUOnCN7p8oGhEPnIA0POEvlZZHpCzo2YIBcB-0ufMTDwAOKbs7huNulgNb92~~njDiUo6~XbqrA3xM1BilpiR8xMcoOnNoQNu~HaAG5aaZVmSLVLa3Pcspdc~ZRofK5REF1etS~B1alWX8k92eU7yQ8nIbpB2erf5qFd48uNdqY1rmVuTqj7~uEWWCZUtIpRnD612MX~h0HqAG8nAkMb8tciirXWc~yzzx3JQxg6xOah~Cy~c0QzlseIj1JpTw7cVa2WThj90RgoBcaSlY4u2O5hpwL31Xg7zL0disFZXiueQ__' alt='' />
                    </button>
                </div>


            </div>
            <FormGroup>
                <div className='  gap-6 pb-10 pt-10 pl-4 hidden xl:flex'>
                    <FormControlLabel control={
                        <Checkbox name="fastShip" checked={checkboxes.fastShip}
                            onChange={handleCheckboxChange} />} label={
                                <div className='flex justify-between items-center'>
                                    <img className='h-[17px] w-[34px] mr-2.5' src='https://s3-alpha-sig.figma.com/img/9f63/2df5/52d4ff178b5e56072899664c52a61fe5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Nu1b-foWKNYD~a0rsOZFyJmprSlYBp81prQPQuPYuYNCszilUfG7bgc4B2ZIgvgqWxo0~hbZKf1CfC6N3Y4pejv~wsfGGC8IxPGgsdTtMNJYiytufPyjsSOopMdjWhwF2uYCo0LdCVLdUWZMoy~yj3l5hAsQxNYjEEg70B1Bmt3dT-eA~L7t7g-T1EoZ9TexjjV8WIpK0UvOPLSHIVtbiTTnDbaIswQeZ4Jr~WcJf2QhXhJ-fN3OQM7MATfI5r4pM4CZ8DByrPl5AMXsorbw1gbbG41xFx2AuOii54zjNpfSrcofgprELgw-Y-scOZEErGYxgWbIb0Vjh09FY38O2g__' alt='' />
                                    <span className='font-normal'>Giao siêu tốc 2H</span>
                                </div>
                            } />

                    <Divider orientation="vertical" variant="middle" flexItem />
                    <FormControlLabel control={<Checkbox name="top_deal" checked={checkboxes.top_deal}
                        onChange={handleCheckboxChange} />} label={
                            <div className='flex justify-between items-center '>
                                <img className='h-[17px] w-[80px] mr-2.5' src='https://s3-alpha-sig.figma.com/img/36cf/1903/e557cf4874d27a0688c1fc46316f6ae3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fgoAD~tJKTKD1QYFFiGQtObl3qzVSilNHGK7iWOzoXQ3RH8MQy1AkqmP7QW8-~Pctham~tKNJTUF-~77QTDQbZy0-AkTUFV-XJqvDtBHhOi1A0qcPC5PgulZeVR0tgDR3IVMvwrsIecOkxhZ7g~9QLmSVgWaI~qkLV2Iz8KrjM~Afi3sQRhpKUgdYRzS4ea9zmRu5ET2syk~8SrCVfMmjNLE~ro0Sv2boS7~f96YB4Jjmx-D-8G79CcOHf7tH~W1UW7cqX~C-TGEPbyxwOJDqV8J5Z4d2BBOP-s9YU8XNp63Yh8nBnJJjGYXuH3zb6t0u3Jg1wTA-q6n8NCBzWkgdw__' alt='' />
                                <span className='font-normal'>Siêu rẻ</span>
                            </div>
                        } />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <FormControlLabel control={<Checkbox name="freeship" checked={checkboxes.freeship}
                        onChange={handleCheckboxChange} />} label={
                            <div className='flex justify-between items-center '>

                                <span className='font-normal'><img className='h-[17px] w-[80px] mr-2.5' src='https://s3-alpha-sig.figma.com/img/49fc/1fce/3bf50b925712ddf852409cc7a3915980?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rePVYzPEdC42JHrLskQyvBbSE4OOQzNalmddAe4HJAUOnCN7p8oGhEPnIA0POEvlZZHpCzo2YIBcB-0ufMTDwAOKbs7huNulgNb92~~njDiUo6~XbqrA3xM1BilpiR8xMcoOnNoQNu~HaAG5aaZVmSLVLa3Pcspdc~ZRofK5REF1etS~B1alWX8k92eU7yQ8nIbpB2erf5qFd48uNdqY1rmVuTqj7~uEWWCZUtIpRnD612MX~h0HqAG8nAkMb8tciirXWc~yzzx3JQxg6xOah~Cy~c0QzlseIj1JpTw7cVa2WThj90RgoBcaSlY4u2O5hpwL31Xg7zL0disFZXiueQ__' alt='' /></span>
                            </div>
                        } />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <FormControlLabel control={<Checkbox name="rating" checked={checkboxes.rating}
                        onChange={handleCheckboxChange} />} label={
                            <div className='flex justify-between items-center text-center gap-1'>
                                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                <FontAwesomeIcon icon={faStar} className='text-[#dddde3]' />

                                <span className=' ml-2'>từ 4 sao</span>
                            </div>
                        } />
                </div>
            </FormGroup>
            {/* range book */}
            <div className='mt-2  flex-row  items-center gap-2 mb-3 xl:flex hidden pl-4 '>
                <span>Sắp xếp</span>
                <select
                    name="Headline"
                    id="Headline"
                    onChange={handleSortChange}
                    value={sortBy}
                    className="mt-0.5 pt-2 pb-2 rounded-2xl border-gray-300 border-1 shadow-sm sm:text-sm text-center"
                >
                    <option value="all">Sort</option>
                    <option value="asc">Gia thap den cao</option>
                    <option value="desc">Gia cao den thap</option>
                </select>
            </div>

        </div>
    )
}
