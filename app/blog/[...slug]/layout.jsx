import BreadCrumb from '@/components/breadCrumb';
import { IoIosSearch } from "react-icons/io";
const SinglePageBlogLayout = ({children}) => {
    return (
        <div className='container mx-auto'>
            <div className='w-full'> <BreadCrumb /></div>
            <div className='container grid grid-cols-3 gap-5'>
                <div className='col-span-2'>{children}</div>
                <div className='col-span-1 '>
                    <div className='bg-white p-5  rounded-lg shadow-light'>
                        <form>
                            <div className='relative'>
                            <input type='text' className='w-full font-dana font-light bg-gray-100 rounded-lg p-5 outline-none text-zinc-600'  placeholder='جست و جو در وبلاگ ...' />
                            <IoIosSearch  className='absolute top-5 left-5' size={25}/>
                            </div>
                          

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePageBlogLayout;