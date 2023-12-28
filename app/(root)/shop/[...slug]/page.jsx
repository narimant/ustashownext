import SingleHead from "@/components/singleProduct/singleHead";
import SingleRightSide from "@/components/singleProduct/singleRightSIde";
import SingleLeftSide from "@/components/singleProduct/singleLeftSide";
import BreadCrumb from "@/components/breadCrumb";

const getData=async (slug)=>{
  const result=await fetch(`http://localhost:27017/api/get-product/${slug}`,{'cache':"no-store"});
  const data=await result.json();
  return data;
}


const SignePageShop = async ({params:{slug}}) => {
const data=await getData(slug)

  return (
 <>
<div className="w-full">
        <BreadCrumb title={data.title} refLink="shop" />
      </div>
      <SingleHead  data={data}/>

      <div className="w-full grid grid-cols-3 mt-8 gap-5">
        <SingleRightSide  data={data}/>

        <SingleLeftSide />
      </div>
       
   
   
    </>

 
  );
};

export default SignePageShop;
