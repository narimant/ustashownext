import Link from "next/link";
import { cookies } from "next/headers";
import SlideSection from "./SlideSection";
import { MdArrowBackIos } from "react-icons/md";

const getData = async (value) => {
  const result = await fetch("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-user-data/", {
    cache: "no-store",
    headers: { auth: value },
  });

  const data = await result.json();

  return data;
};
const ProductSlider = async ({ title, data, link }) => {
  const cookieStore = cookies();
  const auth_cookie = cookieStore.get("auth");
  
  const userData = await getData(auth_cookie?.value);


  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-between text-xl py-8">
        <h1 className="font-semibold">{title}</h1>
        <Link
          href={link}
          className="flex justify-between items-center gap-4 hover:text-purple-600 text-base"
        >
          <span>بیشتر</span>
          <MdArrowBackIos />
        </Link>
      </div>

      <div className="grid grid-flow-col auto-cols-[minmax(300px,_2fr)] overflow-x-scroll gap-4">
        {data.map((item, index) => (
          <SlideSection key={index} data={item} userFavoriteProduct={userData.favoriteProducts}/>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
