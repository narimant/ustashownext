
import Image from "next/image";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
const MainSideHead = () => {
    return (
        <div className='w-full bg-white border-r  border-gray-200 drop-shadow-md h-14 flex justify-between items-center px-5'>
                <div>

                </div>

                <div className="flex justify-between items-center gap-5">
                <button className="  p-2 rounded-full hover:bg-gray-200">< IoIosNotificationsOutline className="w-6 h-6 " /></button>
               
                <button className=" bg-gray-100 p-2 rounded-full hover:bg-gray-200"><IoMoonOutline className="w-6 h-6 " /></button>
                <Image src="/images/dashboard/user/client_img.png" width={40}  height={40} className="rounded-full" priority={true} alt="user image"/>

                </div>
        </div>
    );
};

export default MainSideHead;