
import ShopMainSide from "@/components/shopMainSide";
import ShopSide from "@/components/shopSide";


const Shop = ({ searchParams }) => {

  return (
    <div className="flex flex-col container mx-auto  ">
      <div className="flex justify-center items-center">
        <div className="text-3xl py-14">
          فروشگاه
          <div className="bg-purple-600 h-1 rounded-xl mt-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5 w-full h-auto">
        <div className=" col-span-1">
         <ShopSide url={searchParams}/>
        </div>

        <div className="col-span-4">
          <ShopMainSide url={searchParams} />
        </div>
        
      </div>
      
    </div>
  );
};

export default Shop;
