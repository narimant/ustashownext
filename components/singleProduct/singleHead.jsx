import { SlBasket } from "react-icons/sl";
import Image from "next/image";
const SingleHead = ({data}) => {
    return (
        <div className="container w-full">
        {/* -------------head section----------- */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold  pb-6 ">
             {data.title}
              </h1>
              <p className="text-lg font-light leading-10">
             {data.shortDesc}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <button className="py-4 px-6 rounded-lg shadow-light text-white bg-purple-500 flex justify-start gap-3 items-center text-lg font-dana">
                <SlBasket className="" />
                خرید این محصول
              </button>
              <span className="font-dana text-lg">{data.price} هزار تومان</span>
            </div>
          </div>
          <div>
            <Image
              src={data.image}
              width={600}
              height={400}
              alt={data.imageAlt}
              className="w-full rounded-lg overflow-hidden "
            />
          </div>
        </div>
      </div>
    );
};

export default SingleHead;