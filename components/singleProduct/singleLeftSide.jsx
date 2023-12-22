import Link from "next/link";

const SingleLeftSide = () => {
    return (
        <div className="col-span-1"> 
        <div className="bg-white p-5  rounded-lg shadow-light ">
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
    );
};

export default SingleLeftSide;