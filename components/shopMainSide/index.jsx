import Link from "next/link";

import SlideSection from "../sliders/ProductSlider/SlideSection";
import toFormUrlEncoded from "@/utils/toUrlEncoded";

const getData = async (url) => {
  const toUrlEncoded = toFormUrlEncoded(url);
  const result = await fetch(
    `http://localhost:27017/api/search-products?${toUrlEncoded}`
  );
  const data = await result.json();
  return data;
};
const ShopMainSide = async ({ url }) => {
  const data = await getData(url);

  return (
    <div>
      {data.allProducts.length < 1 ? (
        <div>محصولی با این شرایط موجود نیست</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data.allProducts.map((product, index) => (
            <SlideSection key={index} data={product} />
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
