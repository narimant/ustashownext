import toFormUrlEncoded from "@/utils/toUrlEncoded";
import Link from "next/link";
import BlogSlider from "../blogSlider";
import Warning from "@/components/alerts/Warning";


const getData = async (url) => {
  const toUrlEncoded = toFormUrlEncoded(url);
  const result = await fetch(
    `https://distracted-mcnulty-orq2ubkyw.liara.run/api/search-posts?${toUrlEncoded}`
  );
  const data = await result.json();
  return data;
};
const BlogMainSide = async ({ url }) => {
  const data = await getData(url);

  return (
    <div className="mt-5">
      {data.allPosts.length < 1 ? (
       <Warning title="پستی برای نمایش وجود ندارد " callBacklink="/blog"/>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {data.allPosts.map((product, index) => (
            <BlogSlider key={index} data={product} />
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
                href={`/blog?${urlTOPageinate}`}
                className={`py-1 px-3 bg-purple-600 rounded-full text-white ${
                  url.pn == item && `bg-gray-600`
                }`}
              >
                {item}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default BlogMainSide;
