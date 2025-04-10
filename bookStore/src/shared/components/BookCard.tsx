
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
      <span className='text-[10px] font-bold absolute top-2 right-2 z-1'>AD</span>
      {/* image */}
      <div className='relative h-[300px]  overflow-hidden'>

        <div className='absolute inset-0 flex items-center justify-center top-6'>

          <img
            src={props.images?.[0].base_url}
            alt=""
            className='max-h-full max-w-full object-fill '
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
       

        </div>


      </div>
      {/* price */}
      <div className='mt-2 ml-3 flex items-baseline'>
        <span className='text-[18px] text-[#FF424E] font-semibold'>{props.current_seller?.price.toLocaleString('vi-VN')}</span>
        <span className='text-[13.5px] text-[#FF424E] font-semibold self-start'>₫</span>
        {(((props.original_price - props.current_seller.price) / props.original_price) * 100) > 0 ? <span className='font-medium text-[14px] ml-1 self-center bg-black/5 rounded-xl p-1 '>-{`${(((props.original_price - props.current_seller.price) / props.original_price) * 100).toFixed(0)}`}%</span> : ""}

      </div>
      {/* author */}
      <div className='mt-2 ml-3 h-[30px]'>
        <span className='text-[14px] text-[#808089] font-normal'>{props.authors?.[0].name}</span>
      </div>
      {/* name book */}

      <div className='ml-3 mt-1 mr-5  '>
        <span>
          {props.name}
        </span>
      </div>
      {/* rating */}
      <div className='ml-3 mt-2 mr-5 h-[30px] flex items-center  '>
        {props.rating_average >= 4 && (
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className='text-yellow-500 size-2' />
            ))}
            <Divider orientation="vertical" variant="middle" flexItem className='pl-2' />
          </>
        )}

        {props.quantity_sold?.value ? <span className='text-[#808089] text-[14px] pl-2'>Đã bán {props.quantity_sold?.value}</span> : ""}

      </div>
      {/* time ship */}
      <div className='ml-3 mr-3 border-t-1 border-[#EBEBF0]  pt-2 pb-2 flex items-center'>
        {
          props.fastShip ?<>
          <img src='https://s3-alpha-sig.figma.com/img/9f63/2df5/52d4ff178b5e56072899664c52a61fe5?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L07qhIWxsoESr22Fhy-h3W3JlynDVcIz5s8Oz8Nkrf-2t8W2AX2WIF7iBCdurqcEoiXadvU902oF7u2--X38P61RecGX2d-UM-o7vHuEtLjQPB-gOHEVRQ0pyq5aMyzQDyhja~Eqcx7XD-Eie61PwF6ENOg91o2Vhuuqn0kRbo1J9yuPUP-pPoAF-42yUuV2Lw66GrooiHlmyTEDmIlOsy271YCcCvDP2-YcQuyfhus-NdfR7BwtVHAtMukisUOSsAw~O3O-t0L4et25PKRy~NouPFNTcUr9fg3y~C0Qy2nk8DJ~lsnKn45iheEGGM7W~a~BgZ806De4Gsg3HnjC0Q__'  className='h-4 w-8 mr-2' alt=''/> 
          <span className='text-[#808089] font-normal'>Giao siêu tốc 2h</span>
          </>: 
          <span className='text-[#808089] font-normal  '>Giao thứ 3, 01/04</span>
        }
       
      </div>
    </div>
  )
}