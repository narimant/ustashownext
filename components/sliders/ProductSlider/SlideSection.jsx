import FavoriteElement from "@/components/element/favorite/FavoriteElement";


import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";


const SlideSection = ({data:{ _id,title, price, image, categories,slug },userFavoriteProduct}) => {
  


  return (
    <div className="w-full  shadow-light rounded-lg overflow-hidden flex flex-col justify-between bg-white  min-h-[450px] dark:bg-slate-700">
      <Link href={`/shop/${slug}`}><Image
        src={image}
        width={300}
        height={260}
        alt={title}
        className="w-full"
      />
      </Link>
      <div className="p-2">
        {categories && categories.map((item, index) => (
          <Link
            href={`/shop?categories=${item.slug}`}
            key={index}
            className="bg-purple-100 text-purple-600 m-1 py-1 px-2 text-xs rounded-md transition-all duration-500 ease-in-out hover:bg-purple-600 hover:text-purple-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div>
      <Link href={`/shop/${slug}`}><h2 className="text-lg p-3"> {title}</h2></Link>
      <div className="flex justify-between items-center p-3">
        <div className="flex justify-start gap-4">
          <button>
            <CiSearch className="h-5 w-5" />
          </button>

        <FavoriteElement productId={_id} favoriteList={userFavoriteProduct}/>
       
        </div>
        <div className="flex justify-end items-center gap-3">
          <Link    href={`/shop/${slug}`}>
            <SlBasket className="h-5 w-5" />
          </Link>
          <p>{price} تومان</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SlideSection;
