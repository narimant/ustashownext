"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbCategoryMinus } from "react-icons/tb";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { IoHomeOutline } from "react-icons/io5";
import { PiFlagBanner } from "react-icons/pi";
import { SlNote } from "react-icons/sl";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const DashboardSidebar = () => {


  const router = usePathname();

  return (
    <div className="flex flex-col sticky top-0 right-0 bottom-0">
      <h1 className="text-2xl font-bold text-center text-white h-14 border-b border-gray-600 leading-[56px]">
        <Link href="/">
          <span className="text-purple-600">Us</span>tashow
        </Link>
      </h1>

      <div className="flex flex-col text-white px-8 child:py-2 child:mt-2 py-5">
        <Link
          href="/dashboard"
          className={`flex justify-start items-center gap-4 px-5 text-lg rounded-lg ${
            router === "/dashboard" && "bg-purple-600"
          } `}
        >
          <IoHomeOutline />
          <span>خانه</span>
        </Link>
        <Link
          href="/dashboard/banners"
          className={`flex justify-start items-center gap-4 text-lg px-5 rounded-lg ${
            router.startsWith("/dashboard/banners") && "bg-purple-600"
          } `}
        >
          <PiFlagBanner />
          <span> بنرهای تبلیعاتی </span>
        </Link>

        <Link
          href="/dashboard/sliders"
          className={`flex justify-start items-center gap-4 text-lg px-5 rounded-lg ${
            router.startsWith("/dashboard/sliders") && "bg-purple-600"
          } `}
        >
         <TfiLayoutSliderAlt />
          <span> اسلایدر</span>
        </Link>
        <Link
          href="/dashboard/posts"
          className={`flex justify-start items-center gap-4 text-lg px-5 rounded-lg ${
            router.startsWith("/dashboard/posts") && "bg-purple-600"
          } `}
        >
          <SlNote />
          <span> پست ها</span>
        </Link>

        <Link
          href="/dashboard/category"
          className={`flex justify-start items-center gap-4 text-lg px-5 rounded-lg ${
            router.startsWith("/dashboard/category") && "bg-purple-600"
          } `}
        >
          <TbCategoryMinus />
          <span>  دسته بندی ها</span>
        </Link>


        <Link
          href="/dashboard/products"
          className={`flex justify-start items-center gap-4 text-lg px-5 rounded-lg ${
            router.startsWith("/dashboard/products") && "bg-purple-600"
          } `}
        >
          <MdProductionQuantityLimits />
          <span>    محصولات</span>
        </Link>
        
        <Link
          href="/dashboard/setting"
          className={`flex justify-start items-center gap-4 text-lg px-5 rounded-lg ${
            router.startsWith("/dashboard/setting") && "bg-purple-600"
          } `}
        >
          <IoSettingsOutline />
          <span>    تنظیمات</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
