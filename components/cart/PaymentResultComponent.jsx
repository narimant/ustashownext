"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from "@/context/appContext";
const PaymentResultComponent = ({searchParams,cookieAuth}) => {
const router=useRouter();
const{ cartNumber, setCartNumber } = useAppContext();

useEffect(()=>{
  
if(searchParams.Status==="NOK"){
   toast.error(" پرداخت انجام نشد" , {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push("/cart")
}
else{

    const formData = {
        resnumber:searchParams.Authority,
      };
      axios.post("https://distracted-mcnulty-orq2ubkyw.liara.run/api/payment-result-cheack", formData, {
        headers:{auth: userCookie.value},
      }).then(data=>{
   
       
          toast.success("    پرداخت انجام شد " , {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setCartNumber(0);
          router.push("/myacount/files")
        
      }).catch(error=>console.log(error));
}
},[])

    return (
        <div>
            <p>
                به امید موفقیت بیشتر 
            </p>
        </div>
    );
};

export default PaymentResultComponent;