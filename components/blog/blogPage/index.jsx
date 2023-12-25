import Image from "next/image";
import Link from "next/link";


const BlogPostBox = ({post:{title,slug,image,imageAlt,shortDesc,pageView,updatedAt}}) => {
    console.log(title);
    return (
        <div className="w-full bg-white shadow-light rounded-lg overflow-hidden flex flex-col justify-between">
           <Link href={`blog/${slug}`}> <Image  src={image} width={500} height={400} alt={imageAlt}/></Link>
            <div className="p-5">
                <Link href={`blog/${slug}`}><h2 className="line-clamp-1 font-semibold text-lg py-2" title={title}>{title}</h2></Link>
                <p className="line-clamp-3">{shortDesc}</p>
                <div className="flex justify-between items-center py-1 mt-2">
                    <span>{updatedAt}</span>
                    <span>{pageView}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogPostBox;