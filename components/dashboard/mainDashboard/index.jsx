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
        <div className='container mx-auto'>
           <DashboardCtrl   setContentChanger={setContentChanger}/> 
           <div>{details}</div>
        </div>
    );
};

export default MainDashboard;