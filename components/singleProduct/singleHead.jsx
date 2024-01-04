
import Image from "next/image";
import AddToCartButton from "../element/addToCart/AddToCartButton";
import { cookies } from "next/headers";


const getUserData = async () => {
  const cookieStore = cookies();
  const value = cookieStore.get("auth");
  const result = await fetch("http://localhost:27017/api/get-user-data/", {
    cache: "no-store",
    headers: { auth: value },
  });
  const data = await result.json();

  return data;
};



const SingleHead =async ({data}) => {
  const userData=await getUserData();
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

              <AddToCartButton productId={data._id}  userCart={userData.cart}/>
             
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