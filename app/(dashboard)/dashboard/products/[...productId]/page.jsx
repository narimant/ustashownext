
import EditProductForm from '@/components/dashboard/product/EditProductForm';
import { cookies } from 'next/headers';
import React from 'react';
const getData=async (id)=>{
    const cook=cookies();
    const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-product-by-id/${id}`,{headers:{auth:cook.get('auth').value}},{"cache":"no-store"});
    const data=await result.json();

    return data;

  }

const EditProduct = async({params: { productId }}) => {
   
    const data=await getData(productId);

    return (
        <EditProductForm  data={data}/>
  
    );
};

export default EditProduct;