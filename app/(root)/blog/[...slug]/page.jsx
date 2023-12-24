import ArticleSlider from "@/components/sliders/article-slider";
import Image from "next/image";
import React from "react";
import { CiUser } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

const SignePageBlog = () => {
  return (
 <>
    <div className="bg-white rounded-lg shadow-light p-5 border-gray-700">
      <h1 className="text-2xl border-b border-gray-200 pb-6 ">
        طراحی سایت با پایتون
      </h1>
      <div className="flex flex-wrap items-center gap-3 mb-6 py-4">
        <div className="text-sm font-danaMedium text-zinc-700 dark:text-white flex justify-start items-center gap-1">
          <CiUser size={25} />
          <span className="font-dana font-normal">نوشته از شقایق ستیه نیا</span>
        </div>
        <div className="text-sm font-danaMedium text-zinc-700 dark:text-white flex justify-start items-center gap-1">
          <CiCalendarDate size={25} />
          <span className="font-dana font-normal leading-10">1402/09/29</span>
        </div>
      </div>

      <div>
        <Image
          src="/images/blog/01.jpg"
          width={800}
          height={500}
          className="w-full "
          alt="image alt"
        />
      </div>
      <div className="leading-9 text-zinc-700 font-light font-dana text-xl">
        <p >
      
        
          این مراحل رو می‌تونی دنبال کنی: نصب Python: اول باید Python رو روی
          کامپیوترت نصب کنی. برای دانلود و نصب Python می‌تونی از وبسایت رسمی
          پایتون استفاده کنی. انتخاب فریمورک وب: برای طراحی سایت با پایتون،
          می‌تونی از چارچوب‌هایی مثل Django، Flask و Pyramid استفاده کنی. این
          چارچوب‌ها ابزارها و منابع زیادی برای ساخت سایت‌های پویا و حرفه‌ای
          ارائه می‌کنن. برای شروع، میتونی از Django استفاده کنی چون فریمورک
          پیشرفته و کاملیه. نصب و راه‌اندازی فریمورک: بعد از انتخاب چارچوب، باید
          اون رو روی سیستمت نصب کنی. هر فریمورکی راهنمایی نصب مجزایی داره که
          می‌تونی ازش استفاده کنی. معمولاً این چارچوب‌ها مستندات جامعی دارن که
          تو رو در مراحل نصب و شروع به کار راهنمایی می‌کنن. برای دسترسی به
          داکیومنت Django میتونی اینجا کلیک کنی. آموزش و مطالعه: برای یادگیری
          استفاده از فریمورک وب انتخابیت، می‌تونی به مستندات رسمی، آموزش‌های
          آنلاین و منابع آموزشی مربوطه مراجعه کنی. این منابع بهت کمک می‌کنن تا
          با قابلیت‌ها، ساختار و روش‌های استفاده از فریمورک آشنا بشی. شروع به
          توسعه: بعد از آشنایی با چارچوب وب، می‌تونی شروع به توسعه و طراحی سایتت
          کنی. این شامل طراحی صفحات HTML و CSS، پیاده‌سازی قسمت‌های پویا با
          استفاده از پایتون، اتصال به پایگاه داده و ساخت فرم‌ها و عملکردهای دیگه
          است. چطور می تونم یادگیری جنگو رو حرفه ای شروع کنم؟ طراحی سایت با
          پایتون یک مسیر هیجان انگیزه که می‌تونه به تو خیلی چیزها رو آموزش بده و
          در ایجاد یک سایت پویا بهت کمک کنه. بعد از مطالعه، وقتشه که دست به کار
          شی و سایتت رو شروع کنی. اما یک نکته مهم اینه که از ابتدا نگران نباشی.
          طراحی سایت با پایتون یک فرایند یادگیریه و همیشه می‌تونی به منابع
          آموزشی و جامعه برنامه‌نویسان پایتون مراجعه کنی تا کمک بگیری. پس شجاع
          باش و به ماجراجوییت در دنیای برنامه نویسی با پایتون ادامه بده. اگر قصد
          یادگیری فریمورک جنگو بصورت رو به‌صورت حرفه ای داری قطعا در این مسیر
          نیاز به مدرسی داری که در این زمینه تجربه زیادی داره و همینطور آموزشی
          که کیفیت بالا داشته باشه؛ میتونی با شرکت در دوره آموزش جنگو زیر نظر یک
          مدرس با تجربه و همچنین پشتیبانی تمام وقت جنگو رو بصورت حرفه ای یاد
          بگیری. اما این همه چیز نیست!! 40درصد این دوره رایگانه و میتونی کیفیت
          دوره رو تو این مدت ببینی تا تصمیممت رو قاطعانه تر بگیری. چی بهتر از
          این؟ پس فرصت رو غنیمت بشمر و همین الان یادگیریت رو شروع کن.
        </p>
      </div>
    </div>

        <div className="bg-white rounded-lg shadow-light px-5 pb-3 border-gray-700">
        <ArticleSlider title="مطالب مرتبط"/>
        </div>

        <div className="bg-white rounded-lg shadow-light p-5 border-gray-700 mt-5">
            <h3 className="w-full text-xl font-medium"><span>نظرات</span></h3>
        </div>
       
   
   
    </>

 
  );
};

export default SignePageBlog;
