import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import MostViewPost from "./MostViewPost";
const Sidebar = () => {
    return (
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

        {/*-------sidebar Most Viewd post----------  */}
      
<MostViewPost />



        
      </div>
    );
};

export default Sidebar;