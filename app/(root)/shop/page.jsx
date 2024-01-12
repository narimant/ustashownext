
import ShopMainSide from "@/components/shopMainSide";
import ShopSide from "@/components/shopSide";
import MobileFilter from "@/components/shopSide/MobileFilter";


const Shop = ({ searchParams }) => {
  
  return (
    <>
    
    <div className="flex flex-col container mx-auto  ">
      <div className="flex justify-center items-center flex-col">
        <div className="text-3xl py-14">
          فروشگاه
          <div className="bg-purple-600 h-1 rounded-xl mt-2"></div>

         
        </div>
        <div className="text-lg mb-10 ">
          <span></span>
            {
              searchParams.keyword && (
                <p>
               <span>فیلتر برای جست و جوی  : </span>
                  {searchParams.keyword}
                </p>
              ) 
            }
          </div>
      </div>
      <div className="grid grid-cols-5 gap-5 w-full h-auto">
<div className="col-span-5 lg:hidden">
<MobileFilter searchParams={searchParams}/>
</div>
      


        <div className="hidden lg:block lg:col-span-1">
         <ShopSide url={searchParams}/>
        </div>

        <div className="col-span-5 lg:col-span-4">
          <ShopMainSide url={searchParams} />
        </div>
        
      </div>
      
    </div>

  
    </>
   
  );
};

export default Shop;
