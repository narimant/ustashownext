import ProductSlider from "@/components/sliders/ProductSlider";
import GraphicCat from "@/components/graphic-cat";
import MainSlider from "@/components/sliders/mainSlider";
import MiddleBanner from "@/components/middle-banner";

import GraphicSlider from "@/components/sliders/graphic-slider";
import ArticleSlider from "@/components/sliders/article-slider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main>
        <div className="my-8">
          <MainSlider />
        </div>

        <ProductSlider title="اپلکیشن ها" />

        <MiddleBanner />

        <ProductSlider title="کتاب ها" />
        <GraphicCat />

        <GraphicSlider title="فایل های گرافیکی" />

        <ArticleSlider title="آخرین مقالات" />
      </main>
    </>
  );
}
