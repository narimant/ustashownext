import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import "../globals.css";
import { CiBookmark } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";


export const metadata = {
  title: " پنل کاربری ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100 w-screen h-screen grid grid-cols-6">


        <div className="col-span-1  border-l bg-white px-5 ">
          <h1 className="text-gray-700 h-14 border-b border-gray-200 text-center  ">
            <Link
              href="/"
              className=" flex justify-start items-center gap-3 py-3 px-4 text-3xl font-semibold"
            >
              <IoIosArrowForward />
              <span>
                <span className="text-purple-600">او</span>ستاشو
              </span>
            </Link>
          </h1>

          <div >
            <ul  className="mt-8 ">
              <li>
                <Link href="#" className=" py-3 flex justify-start items-center gap-2 bg-purple-600 rounded-lg px-3 text-white">
                <CiBookmark size={20}/>
                 <span> علاقه مندی ها</span>
                  </Link>
              </li>
              <li>
                <Link href="#" className=" py-3 flex justify-start items-center gap-2  rounded-lg px-3 mt-3">
                <RxExit  size={20}/>
                 <span> خروج</span>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-5 ">
          <div className="bg-white h-14 drop-shadow-sm flex justify-between items-center px-5">
            <div>
            <h2 className="leading-[56px]  text-lg">نریمان تاتاری عزیز ; خوش اومدی</h2>
            </div>
            
            <div>
            <button className=" bg-gray-100 p-3 rounded-full hover:bg-gray-200"><IoMoonOutline className="w-6 h-6 " /></button>
            </div>
          </div>
          <div className="p-10">
          {children}
          </div>
       
          </div>
      </body>
    </html>
  );
}
