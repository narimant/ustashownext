import ProductSlider from "@/components/sliders/ProductSlider";
import GraphicCat from "@/components/graphic-cat";
import MainSlider from "@/components/sliders/mainSlider";
import MiddleBanner from "@/components/middle-banner";

import GraphicSlider from "@/components/sliders/graphic-slider";
import ArticleSlider from "@/components/sliders/article-slider";

const getData=async ()=>{
  const result=await fetch('https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-home-products',{'cache':'no-store'});
  const data= await result.json();
  return data;
}
export default async function Home() {
  const data=await getData();

  return (
    <>
      <main className="px-3">
        <div className="my-8">
          <MainSlider />
        </div>

        <ProductSlider title="اپلکیشن ها" data={data.appProducts} itemType="app" link="/shop?type=app"/>

        <MiddleBanner />

        <ProductSlider title="کتاب ها" data={data.bookProducts} itemType="book" link="/shop?type=book"/>
        <GraphicCat />


        <ProductSlider title="فایل های گرافیکی" data={data.grProducts} itemType="gr" link="/shop?type=gr"/>

        {/* <GraphicSlider title="فایل های گرافیکی" data={data.grProducts} itemType="gr" link="/shop?type=gr"/> */}

        <ArticleSlider title="آخرین مقالات" />
      </main>
    </>
  );
}
