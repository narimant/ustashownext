import BreadCrumb from "@/components/breadCrumb";


import { CiUser } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import ArticleSlider from "@/components/sliders/article-slider";
import Image from "next/image";
import Sidebar from "@/components/blog/singlePage/Sidebar";
import Comment from "@/components/comments/Comment";
import RelatedPost from "@/components/blog/singlePage/RelatedPost";
import Link from "next/link";
import CommentList from "@/components/comments/CommentList";
import NotFound from "../../not-found";


const getData=async ({params: { slug }})=>{

  const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-post/${slug}`,{cahce:"no-store"})
  const data=await result.json();
  return data;
}
const SignePageBlog =async (props) => {
  const content = `<b>Test<br> Content</b>`;
  const {_id,title,slug,image,imageAlt,shortDesc,body,tags,relatedPosts,comments,pageView,date,updatedAt}=await getData(props);
if(!_id){
  return(<NotFound />)
}
  const commentPorops={src_id:_id,typeOfModel:"post"}
  return (
    <div className="container mx-auto">
      <div className="w-full">
        <BreadCrumb refLink="blog" title={title}/>
      </div>
      <div className="container grid grid-cols-3 gap-5">
        {/* -------------main side----------- */}
        <div className="col-span-3 lg:col-span-2">
          <div className="bg-white dark:bg-slate-600 dark:text-white rounded-lg shadow-light p-5 border-gray-700">
            <h1 className="text-2xl border-b border-gray-200 pb-6 ">
           {title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-6 py-4">
              <div className="text-sm font-danaMedium text-zinc-700 dark:text-white flex justify-start items-center gap-1">
                <CiUser size={25} />
                <span className="font-dana font-normal">
                  نوشته از شقایق ستیه نیا
                </span>
              </div>
              <div className="text-sm font-danaMedium text-zinc-700 dark:text-white flex justify-start items-center gap-1">
                <CiCalendarDate size={25} />
                <span className="font-dana font-normal leading-10">
                  {date}
                </span>
              </div>
            </div>

            <div>
              
              <Image
                src={image}
                width={800}
                height={500}
                className="w-full "
                alt={imageAlt}
              />
             
            </div>
            <div className="leading-9 text-zinc-700 dark:text-white font-light font-dana text-xl">
            <div>
       
                <p className="font-Vazirmatn" dangerouslySetInnerHTML={{ __html: body }}></p>
       
             
               </div>
              <div>
                {tags.map((item,index)=>(<span key={index} className="text-sm text-blue-600 hover:text-purple-600 mx-1"><Link href="#"># {item}</Link></span>))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-600 rounded-lg shadow-light px-5 pb-3 border-gray-700">
           <RelatedPost relatedPostData={relatedPosts} model="post"/>
          </div>
          
          <Comment commentPorops={commentPorops}/>
          <CommentList commentPorops={commentPorops}/>
        </div>

        {/*--------- sidebar--------- */}
        <Sidebar />
      </div>
    </div>
  );
};

export default SignePageBlog;
