
import EditSliderForm from '@/components/dashboard/sliders/EditSliderForm';
import React from 'react';
const getData=async (id)=>{
    const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-one-slider/${id}`,{"cache":"no-store"});
    const data=await result.json();
    return data;

  }

const EditSlider = async({params: { sliderId }}) => {
   
    const data=await getData(sliderId);

    return (
        <EditSliderForm  data={data}/>
    );
};

export default EditSlider;