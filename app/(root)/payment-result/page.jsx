import PaymentResultComponent from "@/components/cart/PaymentResultComponent";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";


const PaymentResult = ({searchParams}) => {
    const cook=cookies();
    const auth=cook.get('auth');
if(!auth.name){
    redirect('/login')
}

    return (
        <div>
         <PaymentResultComponent searchParams={searchParams} cookieAuth={auth}/>
        </div>
    );
};

export default PaymentResult;