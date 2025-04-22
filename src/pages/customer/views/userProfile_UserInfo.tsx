// import Breadcrumb from "../../../shared/components/Breadcrumb";
import { Link, } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight, faPen } from "@fortawesome/free-solid-svg-icons";
import IUser from "../../../interfaces/UserInterface";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { getUsers, updateUser } from "../../../api/user.service";
import UserSideBar from "../../../shared/components/UserSideBar";

type Inputs = {
    email: string,
    fullname: string,
    address: string,
    phone: string,
}

const UserInfo = () => {
    const [, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        email: "",
    });
    const [user, setUser] = useState<IUser>();
    const [emailStatus, setEmailStatus] = useState<{
        message: string;
        isValid: boolean;
        color: string;
    }>({message: '', isValid: true, color: ''});
    const {register, handleSubmit, formState: {isDirty}, reset, control} = useForm<Inputs>()

    // Function để kiểm tra đăng nhập và cập nhật thông tin người dùng
    const checkLoginAndUpdateInfo = useCallback(() => {
        // Đảm bảo dùng cùng một key để kiểm tra đăng nhập
        const token = localStorage.getItem('accessToken');
        const isUserLoggedIn = !!token;

        setIsLoggedIn(isUserLoggedIn);

        if (isUserLoggedIn) {
            // Lấy tất cả thông tin người dùng từ localStorage
            const storedFullName = localStorage.getItem('loggedInFullName') || "";
            const storedEmail = localStorage.getItem('loggedInEmail') || "";

            setUserInfo({
                fullName: storedFullName,
                email: storedEmail,
            });
        } else {
            // Reset thông tin người dùng khi đăng xuất
            setUserInfo({
                fullName: "",
                email: "",
            });
        }
    }, []);

    // Theo dõi trạng thái localStorage và đăng nhập
    useEffect(() => {
        checkLoginAndUpdateInfo();

        // Theo dõi sự thay đổi của localStorage (đăng nhập/đăng xuất)
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'accessToken' || event.key === 'loggedInEmail') {
                checkLoginAndUpdateInfo();
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [checkLoginAndUpdateInfo]);

    //fetch thông tin user từ email
    const fetchUserByEmail = useCallback(async () => {
        try {
            if (!userInfo.email) {
                console.log('No email available to fetch user.');
                return;
            }
            const allUsers = await getUsers();
            const foundUser = allUsers.find((user) => user.email === userInfo.email); //lọc user có trùng email với email đã lưu trong local
            if (foundUser) {
                setUser(foundUser);
                reset(foundUser);
            } else {
                console.log('User not found with email:', userInfo.email);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }, [userInfo.email, reset]);

    useEffect(() => {
        if (userInfo.email) {
            fetchUserByEmail();
        }
    }, [userInfo.email, fetchUserByEmail]);

    useEffect(() => {
        if (user) {
            reset(user);
        }
    }, [user, reset]);

    //kiểm tra giá trị email khi thay đổi
    const emailValue = useWatch({control, name: "email"});
    //kiểm tra email trùng lặp
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (!emailValue || emailValue === userInfo.email) {
                //không kiểm tra nếu trường rỗng / không thay đổi
                setEmailStatus({message: "", isValid: true, color: ""})
            }
            try {
                const allUsers = await getUsers();
                //kiểm tra nếu email trùng với email tồn tại trong hệ thống
                const isEmailTaken = allUsers.some((u) => u.email === emailValue && u.email !== userInfo.email);
                if (isEmailTaken) {
                    setEmailStatus({
                        message: "Email này đã được sử dụng.",
                        isValid: false,
                        color: "text-red-500",
                    });
                } else {
                    setEmailStatus({
                        message: "Email hợp lệ",
                        isValid: true,
                        color: "text-green-500",
                    });
                }
            } catch (error) {
                console.error("Error checking email:", error);
                setEmailStatus({
                    message: 'Lỗi khi kiểm tra email.',
                    isValid: false,
                    color: 'text-red-500',
                });
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [emailValue, userInfo.email]);

    //submit thông tin đã thay đổi
    const submitForm: SubmitHandler<Inputs> = async (data) => {
        if (!user || !user.id) {
            console.error("User ID is not available.");
            return;
        }
        console.log("Form data:", data);
        console.log("Current user data:", user);
        const {email, fullname, address, phone} = data;
        const updateData = {
            email, fullname, address, phone
        };
        try {
            await updateUser(user.id, updateData);
            if (email !== localStorage.getItem('loggedInEmail')) {
                //xóa thông tin đăng nhập trong localStorage
                localStorage.removeItem('accessToken');
                localStorage.removeItem('loggedInEmail');
                localStorage.removeItem('loggedInFullName');
                //cập nhật trạng thái đăng nhập
                setIsLoggedIn(false);
                setUserInfo({
                    fullName: "",
                    email: "",
                });
                setUser(undefined);
            } else {
                if (fullname !== localStorage.getItem('loggedInFullName')) {
                    localStorage.setItem('loggedInFullName', fullname);
                }
                if (userInfo.email) {
                    fetchUserByEmail();
                }
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    return (
        <main className=" bg-[#F5F5FA] mb-8">
            {/* breadcrumb */}
            <div className='mx-26 h-[40px] flex items-center gap-1 text-[#808089]'>
                {/* <Breadcrumb /> */}
                <Link to="/customer/homepage" className="">Trang chủ </Link>
                <FontAwesomeIcon icon={faChevronRight} className="" size="sm"/>
                <span> Thông tin tài khoản </span>
            </div>
            
            <div className="mainContent flex mx-26">
               <UserSideBar/>
                <section className="mainContentCtn md:w-[75%] w-full">
                    <div className="orderTitle text-xl my-3.5">
                        <span className="">Thông tin tài khoản </span>
                    </div>
                    <form className="userInfo bg-white rounded-lg p-4" 
                        onSubmit={handleSubmit(submitForm)}
                        >
                        <div className="row flex w-full max-[768px]:flex-col max-[768px]:gap-5">
                            <div className="personalInfo md:w-1/2 md:pr-4 w-full max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center">
                                <div className="mb-2 flex justify-center items-center">
                                    <span className="title text-[16px] ">Thông tin cá nhân</span>
                                </div>
                                <div className="infoCtn flex flex-col justify-center items-center mx-auto">
                                    <div className="imageCtn mt-2">
                                        <button type="button" title="avatar"
                                                className="image border-4 border-blue-200 rounded-full p-7 flex items-center justify-center relative cursor-pointer">
                                            <FontAwesomeIcon icon={faUser} style={{
                                                width: "50px",
                                                height: "50px",
                                                color: "#60A5FA",
                                            }}/>
                                            <div
                                                className="editBtnCtn bg-gray-800 rounded-full p-1 flex items-center border-none absolute -bottom-0.5 right-2">
                                                <FontAwesomeIcon icon={faPen} style={{
                                                    width: "10px",
                                                    height: "10px",
                                                    color: "white",
                                                }}/>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="infoDetail w-full flex flex-col items-center ">
                                        <label htmlFor="fullname" className="text-[14px] mt-5">Họ & Tên</label>
                                        <div className="relative mt-2">
                                            <input
                                                {...register("fullname", {required: false})}
                                                type="text"
                                                className="w-full rounded-lg border-gray-200 border-1 p-2 pe-12 text-sm shadow-xs"
                                                placeholder="Enter new name"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contactInfo flex-1">
                                <div className="mb-2 flex justify-center items-center">
                                    <span className="title text-[16px] ">Thông tin liên lạc</span>
                                </div>
                                <div className="infoCtn flex flex-col justify-center items-center mx-auto">
                                    <div className="infoDetail">
                                        <label htmlFor="address" className="text-[14px] mx-1">Địa chỉ</label>
                                        <div className="relative">
                                            <input
                                                {...register("address", {required: false})}
                                                type="text"
                                                className="w-full rounded-lg border-gray-200 border-1 p-2 pe-12 text-sm shadow-xs"
                                                placeholder="Enter new address"
                                            />
                                        </div>
                                    </div>
                                    <div className="infoDetail  items-center mt-2 justify-between">
                                        <label htmlFor="phone" className="text-[14px] mx-1">Số điện thoại</label>
                                        <div className="relative">
                                            <input
                                                {...register("phone", {required: false})}
                                                type="text"
                                                className="w-full rounded-lg border-gray-200 border-1 p-2 pe-12 text-sm shadow-xs"
                                                placeholder="Enter new phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="infoDetail  items-center mt-2 justify-between">
                                        <label htmlFor="email" className="text-[14px] mx-1">Địa chỉ email</label>

                                        <div className="relative">
                                            <input
                                                {...register("email", {required: true})}
                                                type="text"
                                                className="w-full rounded-lg border-gray-200 border-1 p-2 pe-12 text-sm shadow-xs"
                                                placeholder="Enter new email"
                                            />
                                            {emailStatus.message && (
                                                <p className={`text-sm mt-1 ${emailStatus.color}`}>
                                                    {emailStatus.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="submitBtnCtn flex items-center justify-center mt-7">
                            <button type="submit" className={`text-white rounded-lg py-2 px-4  ${isDirty && emailStatus.isValid ? "bg-blue-600 hover:bg-blue-700 cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`} disabled={!isDirty || !emailStatus.isValid}
                            >
                                Lưu thay đổi
                            </button>
                        </div>

                    </form>


                </section>
            </div>
        </main>
    );
}
export default UserInfo;