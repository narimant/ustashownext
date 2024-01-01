import SingleHead from "@/components/singleProduct/singleHead";
import SingleRightSide from "@/components/singleProduct/singleRightSIde";
import SingleLeftSide from "@/components/singleProduct/singleLeftSide";
import BreadCrumb from "@/components/breadCrumb";
import Link from "next/link";

const getData = async (slug) => {
  const result = await fetch(
    `https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-product/${slug}`,
    { cache: "no-store" }
  );
  const data = await result.json();
  return data;
};

const SignePageShop = async ({ params: { slug } }) => {
  const data = await getData(slug);

  return (
    <>
      {data.published === true ? (
        <>
          <div className="w-full">
            <BreadCrumb title={data.title} refLink="shop" />
          </div>
          <SingleHead data={data} />

          <div className="w-full grid grid-cols-3 mt-8 gap-5">
            <SingleRightSide data={data} />

            <SingleLeftSide />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center text-xl">
          <div className="flex flex-col gap-10 py-10 text-center">
           <span> این قسمت هنوز منتشر نشده است</span>
            <Link href="/" className="text-3xl text-blue-500">بازگشت به خانه</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SignePageShop;
