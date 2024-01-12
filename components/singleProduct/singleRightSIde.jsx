import { IoMdBrush } from "react-icons/io";
import { IoResizeOutline } from "react-icons/io5";
import { BsFiles } from "react-icons/bs";
import RelatedPost from "../blog/singlePage/RelatedPost";
import Comment from "../comments/Comment";
import CommentList from "../comments/CommentList";

const SingleRightSide = ({ data }) => {

  const commentPorops={src_id:data._id,typeOfModel:"product"}
  return (
    <div className="col-span-2">
      {/* ----right section---- */}
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5 ">
          <div className="flex justify-start items-center bg-white rounded-lg shadow-light p-5">
            <IoMdBrush size={30} className="text-purple-600 m-5" />
            <div className="*:p-1">
              <h4 className="text-lg font-semibold ">فرمت فایل</h4>
              <p className="text-sm ">PSD</p>
            </div>
          </div>
          <div className="flex justify-start items-center bg-white rounded-lg shadow-light p-5">
            <IoResizeOutline size={30} className="text-purple-600 m-5" />
            <div className="*:p-1">
              <h4 className="text-lg font-semibold ">ایعاد فایل</h4>
              <p className="text-sm ">1920*720 px</p>
            </div>
          </div>
          <div className="flex justify-start items-center bg-white rounded-lg shadow-light p-5">
            <BsFiles size={30} className="text-purple-600 m-5" />
            <div className="*:p-1">
              <h4 className="text-lg font-semibold ">حجم فایل</h4>
              <p className="text-sm "> 10 مگابایت</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-light p-5 border-gray-700">
          <h1 className="text-2xl  border-gray-200 pb-6 ">توضیخات</h1>

          <div className="leading-9 text-zinc-700 font-light font-dana text-xl">
         
            <p className="font-Vazirmatn" dangerouslySetInnerHTML={{ __html: data.body }}></p>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-light px-5 pb-3 border-gray-700">
           <RelatedPost relatedPostData={data.relatedProducts} model="product"/>
          </div>
      </div>
      <Comment commentPorops={commentPorops}/>
          <CommentList commentPorops={commentPorops}/>
      {/* ----left section----- */}
      <div></div>
    </div>
  );
};

export default SingleRightSide;
