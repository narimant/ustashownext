import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { IoMdBrush } from "react-icons/io";
import { IoResizeOutline } from "react-icons/io5";
import { BsFiles } from "react-icons/bs";
const SlideSection = ({ title, price, image, category }) => {
  return (
    <div className="w-full min-h-52 shadow-light rounded-lg overflow-hidden">
      <Image
        src={image}
        width={300}
        height={260}
        alt={title}
        className="w-full"
      />

      <h2 className="text-lg p-3"> {title}</h2>
      <div className="flex flex-col">
        <div className="p-4 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <IoMdBrush />
              <p>فرمت</p>
            </div>
            <p>PSD</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <IoResizeOutline />
              <p>ابعاد</p>
            </div>
            <p>720*1080 پیکسل</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <BsFiles />
              <p>حجم</p>
            </div>

            <p>10 مگ</p>
          </div>
        </div>
      
        <div className="flex justify-between items-center p-3">
          <div className="flex justify-start gap-4">
            <button>
              <CiSearch className="h-5 w-5" />
            </button>
            <button>
              <CiBookmark className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-end items-center gap-3">
            <button>
              <SlBasket className="h-5 w-5" />
            </button>
            <p>{price} تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideSection;
