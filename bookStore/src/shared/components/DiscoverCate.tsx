

export default function DiscoverCate() {

    const cate = [
        {
            image: "https://s3-alpha-sig.figma.com/img/f1d1/8807/b61078b979094a3de8b650370dabcf01?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCk2HopYRUPOzN5Pbj1crpjIsxqb5G9nhjOpWQWE2vKN2EmvVpVHGsBzaDoZUjf0gI7mTy6NuSKsneAvRDOJ7q0L3EDD7lI91NJsB~Xh3xyICLqraaSleZN1ajOEZqhkPWKZORm2JTo0DoqfnUaiLDgMvJskEo4OvhRt1egFoK-mpCQuMk38~2HwDjtUaJo0mcmTzPfjZ-RbQ97Ezr2WOEWOMdXWhsCKdA61g-D0md15czIlNQ1gyI4fJOdqn6wxcBSJ6HFmHS4vspIMtzWSuHz--2uc39eeOAOQAMMg~uaG2UJul8jkxnTqtwvM56MgcMwa7NFV-JID89D6eFDdDg__"
            , name: "English Books"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/f1d1/8807/b61078b979094a3de8b650370dabcf01?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCk2HopYRUPOzN5Pbj1crpjIsxqb5G9nhjOpWQWE2vKN2EmvVpVHGsBzaDoZUjf0gI7mTy6NuSKsneAvRDOJ7q0L3EDD7lI91NJsB~Xh3xyICLqraaSleZN1ajOEZqhkPWKZORm2JTo0DoqfnUaiLDgMvJskEo4OvhRt1egFoK-mpCQuMk38~2HwDjtUaJo0mcmTzPfjZ-RbQ97Ezr2WOEWOMdXWhsCKdA61g-D0md15czIlNQ1gyI4fJOdqn6wxcBSJ6HFmHS4vspIMtzWSuHz--2uc39eeOAOQAMMg~uaG2UJul8jkxnTqtwvM56MgcMwa7NFV-JID89D6eFDdDg__"
            , name: "English Books"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/f1d1/8807/b61078b979094a3de8b650370dabcf01?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCk2HopYRUPOzN5Pbj1crpjIsxqb5G9nhjOpWQWE2vKN2EmvVpVHGsBzaDoZUjf0gI7mTy6NuSKsneAvRDOJ7q0L3EDD7lI91NJsB~Xh3xyICLqraaSleZN1ajOEZqhkPWKZORm2JTo0DoqfnUaiLDgMvJskEo4OvhRt1egFoK-mpCQuMk38~2HwDjtUaJo0mcmTzPfjZ-RbQ97Ezr2WOEWOMdXWhsCKdA61g-D0md15czIlNQ1gyI4fJOdqn6wxcBSJ6HFmHS4vspIMtzWSuHz--2uc39eeOAOQAMMg~uaG2UJul8jkxnTqtwvM56MgcMwa7NFV-JID89D6eFDdDg__"
            , name: "English Books"
        }
    ]
    return (
        <div className='flex bg-white mt-[20px]   flex-col pb-2'>
            <span className='font-semibold  mt-3 ml-4 '>Khám phá theo danh mục</span>
            <div className="flex ml-[45px] mt-2.5 pb-4  gap-10">
                {cate.map((cat,index) => 
                    <div key={index} className="flex flex-col justify-center items-center pl-6 pr-6">
                        <img src={cat.image} className="h-[88px] w-[88px] rounded-[44px]" alt="error"/>
                      <span className="text-sm font-medium mt-2.5">{cat.name}</span>
                    </div>
                )}

            </div>
        </div>
    )
}
