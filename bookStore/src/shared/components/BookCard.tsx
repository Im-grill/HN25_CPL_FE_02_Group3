import { IBook } from '../../interfaces/BookInterfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Divider from '@mui/material/Divider';
type BookCardProps = {
    props: IBook,
}
export default function BookCard({ props }: BookCardProps) {
    return (

        <div className='relative z-0  rounded-2xl bg-white shadow-black/20 hover:shadow-xl cursor-pointer flex flex-col justify-between  h-full ' >
            <div className='bg-white/20'>
                <span className='text-[10px] font-bold absolute top-2 right-2 z-1 bg-white/90  '>AD</span>
            </div>

            {/* image */}
            <div className='relative  h-[181px] md:h-[276px]  overflow-hidden mt-2'>

                <div className='absolute inset-0 flex items-center justify-center h-full '>

                    <img
                        src={props.images?.[0]?.base_url}
                        alt=""
                        className='md:h-[276px] md:w-full object-fill absolute  h-[181px]'
                    />

                    {props.auth && props.freeship && props.top_deal && <img
                        src="/assets/Top_Free_Verify.png"
                        alt="Verified"
                        className='absolute bottom-0 left-0 '
                    />}
                    {props.auth && !props.freeship && !props.top_deal && <img
                        src="/assets/Verify.png"
                        alt="Verified"
                        className='absolute bottom-0 left-0 '
                    />}
                    {props.auth && !props.freeship && props.top_deal && <img
                        src="/assets/Top_Verify.png"
                        alt="Verified"
                        className='absolute bottom-0 left-0 '
                    />}
                    {props.auth && props.freeship && !props.top_deal && <img
                        src="/assets/Free_Verify.png"
                        alt="Verified"
                        className='absolute bottom-0 left-0 '
                    />}


                </div>


            </div>
            {/* price */}
            <div className='mt-2 ml-3  items-baseline hidden md:flex'>
                {props.current_seller?.price !== undefined && (
                    <>
                        <span className='text-[18px] text-[#FF424E] font-semibold'>{props.current_seller.price.toLocaleString('vi-VN')}</span>
                        <span className='text-[13.5px] text-[#FF424E] font-semibold self-start'>₫</span>
                        {props.original_price !== undefined && props.current_seller.price !== undefined &&
                        (((props.original_price - props.current_seller.price) / props.original_price) * 100) > 0 ?
                            <span className='font-medium text-[14px] ml-1 self-center bg-black/5 rounded-xl p-1 '>-{`${(((props.original_price - props.current_seller.price) / props.original_price) * 100).toFixed(0)}`}%</span> : ""}
                    </>
                )}
            </div>
            {/* author */}
            <div className='mt-2 ml-3 h-[30px] hidden md:flex'>
                <span className='text-[14px] text-[#808089] font-normal'>{props.authors?.[0]?.name}</span>
            </div>
            {/* name book */}

            <div className='ml-3 mt-1 mr-5  max-h-[200px]'>
        <span>
          {props.name}
        </span>
                {/* rating */}
                <div className=' mr-5 h-[30px] flex items-center  '>
                    {props.rating_average >= 3 && (
                        <>
                            {Array.from({ length: 5 }).map((_, i) => (
                                Math.round(props.rating_average) > i ?
                                    <FontAwesomeIcon key={i} icon={faStar} className='text-yellow-500 size-2' /> :
                                    <FontAwesomeIcon key={i} icon={faStar} className='text-[#DDDDE3] size-2' />
                            ))}
                            <Divider orientation="vertical" variant="middle" flexItem className='pl-2 hidden md:flex' />
                        </>
                    )}

                    {props.quantity_sold?.value ? <span className='text-[#808089] text-[14px] pl-2 hidden md:inline'>Đã bán {props.quantity_sold.value}</span> : ""}

                </div>
                {/* gia tien mobile */}
                <div className='mt-2   md:hidden flex flex-col'>
                    {props.current_seller?.price !== undefined && (
                        <>
                            <div className='items-baseline flex'>
                                <span className='text-[18px] text-[#FF424E] font-semibold'>{props.current_seller.price.toLocaleString('vi-VN')}</span>
                                <span className='text-[13.5px] text-[#FF424E] font-semibold self-start'>₫</span>
                            </div>

                            <div className='flex items-center'>
                                {props.original_price !== undefined && (((props.original_price - props.current_seller.price) / props.original_price) * 100) > 0 ?
                                    <span className='font-medium text-[14px]   bg-black/5 rounded-xl p-1 '>-{`${(((props.original_price - props.current_seller.price) / props.original_price) * 100).toFixed(0)}`}%</span> : ""}
                                {props.original_price !== undefined && (((props.original_price - props.current_seller.price) / props.original_price) * 100) > 0 ?
                                    <div className='items-baseline flex ml-2 '>
                                        <span className='font-medium text-[10px] text-[#808089] line-through'>{props.original_price.toLocaleString("vi-VN")}</span>
                                        <span className='text-[7.5px] text-[#808089] font-semibold self-start '>₫</span>
                                    </div> : ""}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* time ship */}
            <div className='ml-3 mr-3 border-t-1 border-[#EBEBF0]  pt-2 pb-2 flex items-center mt-5'>
                {
                    props.fastShip ? <>
                            <img src='https://s3-alpha-sig.figma.com/img/9f63/2df5/52d4ff178b5e56072899664c52a61fe5?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L07qhIWxsoESr22Fhy-h3W3JlynDVcIz5s8Oz8Nkrf-2t8W2AX2WIF7iBCdurqcEoiXadvU902oF7u2--X38P61RecGX2d-UM-o7vHuEtLjQPB-gOHEVRQ0pyq5aMyzQDyhja~Eqcx7XD-Eie61PwF6ENOg91o2Vhuuqn0kRbo1J9yuPUP-pPoAF-42yUuV2Lw66GrooiHlmyTEDmIlOsy271YCcCvDP2-YcQuyfhus-NdfR7BwtVHAtMukisUOSsAw~O3O-t0L4et25PKRy~NouPFNTcUr9fg3y~C0Qy2nk8DJ~lsnKn45iheEGGM7W~a~BgZ806De4Gsg3HnjC0Q__' className='h-4 w-8 mr-2' alt='' />
                            <span className='text-[#808089] font-normal'>Giao siêu tốc 2h</span>
                        </> :
                        <span className='text-[#808089] font-normal  '>Giao thứ 3, 01/04</span>
                }

            </div>
        </div>
    )
}