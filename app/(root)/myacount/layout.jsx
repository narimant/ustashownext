import React from 'react';
import MyAcountSidebar from '@/components/myAcount/MyAcountSidebar';
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
const getData = async (value) => {
 
    const result = await fetch("http://localhost:27017/api/get-user-data/", {
      cache: "no-store",
      headers: { auth: value },
    });
    const data = await result.json();
  
    if(data.router)
    {
      redirect('/login')
    }

    return data;
  };
const Layout = async ({children}) => {

    const cookieStore = cookies();
    const auth_cookie = cookieStore.get("auth");
   
      const data = await getData(auth_cookie?.value);
    return (
        <div className='grid grid-cols-5 container mx-auto bg-white my-5 shadow-light rounded-lg p-5'>
          
            <div className='col-span-1 p-5'>
            <MyAcountSidebar />
            </div>
            <div className='col-span-4 bg-gray-100 rounded-3xl p-5' >
                    {children}
            </div>
        </div>
    );
};

export default Layout;