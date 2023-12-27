
import CategoryMenu from '@/components/dashboard/category/CategoryMenu';



const BannerLayout = ({children}) => {
    return (
        <div>
            <div><CategoryMenu /></div>
            <div>
               
                {children}
               
            </div>
        </div>
    );
};

export default BannerLayout;