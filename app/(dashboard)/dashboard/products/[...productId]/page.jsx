
import EditProductForm from '@/components/dashboard/product/EditProductForm';
import React from 'react';
const getData=async (id)=>{
    const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-product-by-id/${id}`,{"cache":"no-store"});
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