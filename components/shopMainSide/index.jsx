import Link from "next/link";

import toFormUrlEncoded from "@/utils/toUrlEncoded";
import SlideSectionShop from "../sliders/ProductSlider/SlideSectionShop";
import { cookies } from "next/headers";

const getData = async (url) => {
  const toUrlEncoded = toFormUrlEncoded(url);
  const result = await fetch(
    `http://localhost:27017/api/search-products?${toUrlEncoded}`
  );
  const data = await result.json();
  return data;
};


const getUserFavorite = async (value) => {
  const result = await fetch("http://localhost:27017/api/get-user-data/", {
    cache: "no-store",
    headers: { auth: value },
  });
  const data = await result.json();
console.log(data);
  return data;
};
const ShopMainSide = async ({ url }) => {
  const data = await getData(url);
  const cookieStore = cookies();
  const auth_cookie = cookieStore.get("auth");

  const userData = await getUserFavorite(auth_cookie?.value);

  return (
    <div>
      {data.allProducts.length < 1 ? (
        <div>محصولی با این شرایط موجود نیست</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data.allProducts.map((product, index) => (
            <SlideSectionShop key={index} data={product}  userFavoriteProduct={userData.favoriteProducts}/>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-2 py-2 mt-5">
        {data.btns.length > 0 &&
          data.btns.map((item, index) => {
            url.pn = ++item;
            let urlTOPageinate = toFormUrlEncoded(url);

            return (
              <Link
                key={index}
                href={`/shop?${urlTOPageinate}`}
                className={`py-1 px-3 bg-purple-600 rounded-full text-white ${url.pn==item && `bg-gray-600`}`}
              >
                {item}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ShopMainSide;
