import EditBannerForm from '@/components/dashboard/forms/middleBanerForms/editBanner';
import React from 'react';

const getData=async (id)=>{
  const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-middle-baners/${id}`);
  const data=await result.json();
  return data;
}

const EditBanner = async({params: { editId }}) => {
const data=await getData(editId);

    return (

       <EditBannerForm data={data}/>
    );
};

export default EditBanner;