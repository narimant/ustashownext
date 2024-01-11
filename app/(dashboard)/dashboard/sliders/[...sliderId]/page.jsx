
import EditSliderForm from '@/components/dashboard/sliders/EditSliderForm';
import { cookies } from 'next/headers';
import React from 'react';
const getData=async (id)=>{
    const cook=cookies();

    const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-one-slider/${id}`,{headers:{auth:cook.get('auth').value}},{"cache":"no-store"});
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