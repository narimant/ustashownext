import ProductSlider from "@/components/sliders/ProductSlider";
import GraphicCat from "@/components/graphic-cat";
import MainSlider from "@/components/sliders/mainSlider";
import MiddleBanner from "@/components/middle-banner";

import GraphicSlider from "@/components/sliders/graphic-slider";
import ArticleSlider from "@/components/sliders/article-slider";

const getData=async ()=>{
  const result=await fetch('http://localhost:27017/api/get-home-products',{'cache':'no-store'});
  const data= await result.json();
  return data;
}
export default async function Home() {
  const data=await getData();

  return (
    <>
      <main>
        <div className="my-8">
          <MainSlider />
        </div>

        <ProductSlider title="اپلکیشن ها" data={data.appProducts} itemType="app"/>

        <MiddleBanner />

        <ProductSlider title="کتاب ها" data={data.bookProducts} itemType="book"/>
        <GraphicCat />

        <GraphicSlider title="فایل های گرافیکی" data={data.grProducts} itemType="gr"/>

        <ArticleSlider title="آخرین مقالات" />
      </main>
    </>
  );
}
