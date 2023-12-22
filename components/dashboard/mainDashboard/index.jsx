"use client"
import DashboardCtrl from '@/components/dashboard/dashboard-ctrl';
import MiddleBanner from '@/components/middle-banner';
import { useEffect, useState } from 'react';
import SlidersAll from '../forms/sliderForms';
import MiddleBannerAll from '../forms/middleBanerForms';


const MainDashboard = () => {
    const [contentChanger,setContentChanger]=useState("midBan");
   const [details,setDetails]=useState(<MiddleBannerAll />);
   useEffect(()=>{
   
    if(contentChanger==="midBan"){
        setDetails(<MiddleBannerAll />)
     }else if(contentChanger==="sliders"){
        setDetails(<SlidersAll />)
     }
   },[contentChanger])

    return (
        <div className='w-full grid grid-cols-6'>
            <div className='col-span-1'>
            <DashboardCtrl   setContentChanger={setContentChanger} /> 
            </div>
          
           <div className='col-span-5'>
            {details}
            </div>
        </div>
    );
};

export default MainDashboard;