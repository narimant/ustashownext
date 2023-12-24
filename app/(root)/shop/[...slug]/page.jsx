import SingleHead from "@/components/singleProduct/singleHead";
import SingleRightSide from "@/components/singleProduct/singleRightSIde";
import SingleLeftSide from "@/components/singleProduct/singleLeftSide";
import BreadCrumb from "@/components/breadCrumb";

const SignePageBlog = () => {
  return (
 <>
<div className="w-full">
        <BreadCrumb />
      </div>
      <SingleHead />

      <div className="w-full grid grid-cols-3 mt-8 gap-5">
        <SingleRightSide />

        <SingleLeftSide />
      </div>
       
   
   
    </>

 
  );
};

export default SignePageBlog;
