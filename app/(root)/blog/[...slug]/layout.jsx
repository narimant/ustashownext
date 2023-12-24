import BreadCrumb from "@/components/breadCrumb";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
const SinglePageBlogLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="w-full">
        {" "}
        <BreadCrumb />
      </div>
      <div className="container grid grid-cols-3 gap-5">
        {/* -------------main side----------- */}
        <div className="col-span-2">{children}</div>

        {/*--------- sidebar--------- */}
        <div className="col-span-1 ">
          {/* -------sidebar search--------- */}
          <div className="bg-white p-5  rounded-lg shadow-light">
            <form>
              <div className="relative">
                <input
                  type="text"
                  className="w-full font-dana font-light bg-gray-100 rounded-lg p-5 outline-none text-zinc-600"
                  placeholder="جست و جو در وبلاگ ..."
                />
                <IoIosSearch className="absolute top-5 left-5" size={25} />
              </div>
            </form>
          </div>

          {/*-------sidebar related post----------  */}
          <div className="bg-white p-5  rounded-lg shadow-light mt-5">
            <h3 className="text-xl font-semibold pb-4 pt-4">پربازدیدترین مطالب</h3>
            <div>
              <ul className=" *:border-dashed *:p-4 *:border-gray-500 *:border-b-slate-500 *:border-b last:*:border-none *:font-light">
                <li className="  hover:text-purple-600">
                  <Link href="#">
                    طراحی سایت با پایتون
                    </Link>
                </li>
                <li className="  hover:text-purple-600">
                  <Link href="#">
                    حلقه ها در پایتون
                    </Link>
                </li>
              </ul>
            </div>
          </div>




          
        </div>
      </div>
    </div>
  );
};

export default SinglePageBlogLayout;
