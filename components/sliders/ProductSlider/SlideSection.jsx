import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
const SlideSection = ({data:{ title, price, image, categories,slug }}) => {
  return (
    <div className="w-full min-h-52 shadow-light rounded-lg overflow-hidden flex flex-col justify-between">
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
            href={`/category/${item.slug}`}
            key={item._id}
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
