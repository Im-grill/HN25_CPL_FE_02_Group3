
export default function BookSeries() {
    const books = [
        {
            image: "https://s3-alpha-sig.figma.com/img/3baf/f054/9329b1d90b157988da41c763a18ef7b4?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xi7JJyz1aM~2hloVHpwvfWpdbR-dTqOldkJ85hwfYkjn5fC8wbOueLqS0rEzGO7xYcSMvHry~8T0SfRfd~dndKTfQ1Oodju0AucIiqtefCvB3PVGjjyz4kOyPK~2tewDYGkHxzeBgW71b69VZqn8IqWriWNxRVQ6Z~5WdU9AePSfvdkskFFn1vivhfpUPrdayxQAaXKtWdIh3-JyTJkuVpzsd1aj1oknxN1Yk2lTk9X62RK-PRwHisa~2jBu9vAf4iV91Q6g-Bk8Ekh30ZsNJMeWDUVxteokAQ9irAxseuSutZjSf2JHH-e~paosuJiwABopqIUNf0xF0BaDy3XhtQ__"
            , discount: "-32%"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/866f/816d/467787ac76bacbc88e295991f23a5400?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWUEmAqovBmZJGhJBd4kUk8ti9fY~DsPabIBCNMtk7uM4PfJVoIlX7iOhGkLdMDzf5nQuFGgGlhJsfJpp7n5OyEgGXbY2GBTUnWchr-ceOJdz8z3nG6RYYX7nxIPQzPFOrRmCM-REgHMo1FBIPMndX6JC2Eijs30RlBVw0wVdceUWWt7vcJX2dyj~2UgxEbD3wDjW1mrHZzjkPyrB0wINSX~34CGEEHQfA6NPKdRKn7yEm9pHOdl8T7oMfZSZepZN7VQRnJsflVpIPPFrR31B7xlS6PlTj~kWBbv7idDtI1AIZsZoQ8VgGcVRLm0AXEd16NaXAphWSFkUFdPRs1iAw__"
            , discount: "-32%"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/62b8/11f7/4c7c3a7f71eb3efadf9235b4832ab141?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ONZzu9Oh83BVqHZ8qBzENf2ULfjxSkXZzgk19oIWjhjuUfrlwLUGAXohRGvibBRW9lCLuVDPqrzjVO5rAZgppkTtgzVwPyz6mKRTg4ljjDOwmaDN2BHexaP5Eo3KjVO~ZWZVrSB~kzoFuWfdaar3sn7sboKE1hxO6DUY25jQZglye8TdJHKPS5HnwB~O3dB68kMsyLJqttbaHfbRCH~ympun6NVhlesE-f9Qyw~DHeY0dG6v9KIq0TF51ox-B9LGv2Sa6UER7yzYKwbLupFNxUyrgHCrcCaYQd8nOLiAYIqSxtscrd7oTu1To~BdRemSuqmTgpqj79qF0Kw~ehDByQ__"
            , discount: "-37%"
        }
    ]
    return (
        <div className='flex border flex-1'>
            {/* 1980 books */}
            <div className="relative w-[186px] h-[186px] overflow-hidden">
                {/* Ảnh nền */}
                <img
                    src="/assets/BookListBg.png"
                    alt="error"
                    className="w-full h-full object-cover blur-2xl absolute inset-0"
                />

                {/* Logo căn giữa */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/assets/Logo1980Book.png" alt="error" className="w-[123px] h-[123px]" />
                </div>
            </div>
            <div className='pt-4 pl-4'>
                <span className='text-[20px] font-medium'>Top Sach Ban Chay</span>
                <div className='flex border'>
                    <span className='text-[#808089] mr-1'>Tài trợ bởi </span>
                    <span className='font-medium mr-1'> 1980 Books Tại Tiki Trading</span>
                    <span className='text-[#808089] mr-1'>5/5 </span>
                    <img src='https://s3-alpha-sig.figma.com/img/efcf/dddf/5b5d24c589d7a52e154fc1e20fec684a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IuBMGAkxS2dCHqfVlSfHI41MESjolNHDct1qDYK-RPOE4QcjC635LGO1luaZJ-1yvO25cc4YBTN7a9ExasXcM62PuIja1RsH-rODzVlurh4qTa7ZDELWGbXnwgumhMSCMknAo2ZCq1spgiuKYB~rDKVkkFs~5dkRJjyDGjKPp~TAS74golf-yCkZjqv9jw7OZLD4UcAWHWMDYwswc-9S~Jp3LTCAxarAt~RZCPO8DBFhTWJvNxSys8I8raKxyPQLpVsevt8FFRY~CVe4R2b7GHHzRVtR7DNIc9dE~EdYjXQY0XFOrZC3FY68ztVxZ~M~CpcQXupEPNYpQOHSjDVLcw__'
                        alt='' className='size-5' />
                </div>
                {/* book */}
                <div className='flex mt-7'>
                    {books.map((book,index) =>
                        <div key={index} className='relative'>
                            <img className='size-16 border' src={book.image} />
                            <div className='flex absolute bottom-0 right-0 rounded-[8px] w-[35px] h-4 bg-red-500 items-center justify-center'>
                                <span className="text-white text-[10px] font-bold  ">{book.discount}</span>
                            </div>
                        </div>


                    )}
                </div>
            </div>





        </div>
    )
}
