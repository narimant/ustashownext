
import EditCategoryForm from '@/components/dashboard/category/EditCategoryForm';

import React from 'react';
const getData=async (id)=>{
    const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-one-category/${id}`,{"cache":"no-cache"});
    const data=await result.json();
    return data;

  }

const EditCategory = async({params: { categoryId }}) => {
   
    const data=await getData(categoryId);

    return (
        <EditCategoryForm  data={data}/>
    );
};

export default EditCategory;