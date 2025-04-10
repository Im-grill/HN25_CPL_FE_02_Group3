

export default function DiscoverCate() {

    const cate = [
        {
            image: "https://s3-alpha-sig.figma.com/img/f1d1/8807/b61078b979094a3de8b650370dabcf01?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCk2HopYRUPOzN5Pbj1crpjIsxqb5G9nhjOpWQWE2vKN2EmvVpVHGsBzaDoZUjf0gI7mTy6NuSKsneAvRDOJ7q0L3EDD7lI91NJsB~Xh3xyICLqraaSleZN1ajOEZqhkPWKZORm2JTo0DoqfnUaiLDgMvJskEo4OvhRt1egFoK-mpCQuMk38~2HwDjtUaJo0mcmTzPfjZ-RbQ97Ezr2WOEWOMdXWhsCKdA61g-D0md15czIlNQ1gyI4fJOdqn6wxcBSJ6HFmHS4vspIMtzWSuHz--2uc39eeOAOQAMMg~uaG2UJul8jkxnTqtwvM56MgcMwa7NFV-JID89D6eFDdDg__"
            , name: "English Books"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/47c7/e8d9/0942c94bbedde19a72a76586a3cf73ec?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IAJs0jx1npoH01bkW4OoDppV9Fqa--Fvp349WzgeytZdfW38IwdBjj5~ED8K2SynQ2c85Y3DZrXNw4rZKCFYOC4fWjCZkB1A9NqZvfwR45GuFNCgRinqWXpl1GBaE4IlF9EPxeplNiCUwaHHCwOYlYmxUpzw28A8P2rHt4KTp2qKp-o3-3DVLc~E1HjsAWw29TVsXky2vZkXfzG4EK6gYY3YDe2IVQpC0AbjRI9rTOgbH5NO51UNeRgnjS3pAqaH1xIfTX8L5DzhoFr2edlFoWJa61VsmkDjbAGl5jWxtdpZ~WrsnYWstBGWfALPWj5fhjvjs9-zDzeW4dI3lEQw7A__"
            , name: "Sách tiếng Việt"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/7955/b082/a2efe02b61c378c4eeded7270f9cace5?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sqru3SG5YiAXzX2MzHZKZYvx4dNQHC5nPZ~f0EOZIixGSZt7wSq3A3w6Td9HEfAJqHrhCW5sIFfcKj~7uVn4hkdG-DPvX3WBVgGYxSd0rbrl7Xvl1mM20mOm0Hh6OZ~B5qsY0JSZkpzib1IUr9XyQVJ~GFrzs~8SSJ6kmdi94lpokK28E83PmtoFibguiVZkDrDSZzNGe5JEdR6dK8JwCkfc-nCXs2-PjTa-mAOTQrsQUOWkHL2R4f9LhhNMYx4weHpiDed87XePZap1Q61MIp4c5ZBFz~pcr8yOv5INI6HvuRdp0t2e6r~RwlHBK1w4sKLvGXNUGySGKD9cHn4jkw__"
            , name: "Văn phòng phẩm"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/cfc0/2577/2135b072f5bf45d287293567c1120a24?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r-7SQsE287n9Or3-WvRRpiPDi-cXrumWaPlvDPWivheIzOPQafNyznQESrHUC1gqzbgFjF9SamAC-XfYk3lDuDRJjmELdkekmvYMPwcq4XzUM7WOe5GsVo0853X1Wc4H5Jw3HMHhMV5gr9b~53-t9TSkKOr4lpXiuk0FXYkbOXDR4Bh1F9cAljvRuvYTrcq-nPYrjUKMV7WeBZm4FI8gKACr6sy1HrWhqS0x0rn5CsQmb2-HWGNavxevUTPInjnVBAll02chHhTCsAW~IgiuMLYLWBV-62o6n8qIGWzTodqjpyciuLINVjrYZthzW-CvXSlb82oUC8Hr6Yo3PBF9FA__"
            , name: "Quà lưu niệm"
        }
    ]
    return (
        <div className='flex bg-white mt-[20px]   flex-col pb-2 cursor-pointer'>
            <span className='font-semibold  mt-3 ml-4 '>Khám phá theo danh mục</span>
            <div className="flex ml-[45px] mt-2.5 pb-4  gap-10">
                {cate.map((cat,index) => 
                    <div key={index} className="flex flex-col justify-center items-center pl-6 pr-6">
                        <img src={cat.image} className="h-[88px] w-[88px] rounded-[44px] hover:scale-[110%] duration-500" alt="error"/>
                      <span className="text-sm font-medium mt-2.5">{cat.name}</span>
                    </div>
                )}

            </div>
        </div>
    )
}