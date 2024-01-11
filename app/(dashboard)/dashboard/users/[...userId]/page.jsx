
import EditUserForm from '@/components/dashboard/users/EditUserForm';
import React from 'react';
const getData=async (id)=>{
    const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-user/${id}`,{"cache":"no-store"});
    const data=await result.json();
    return data;

  }

const EditPost = async({params: { userId }}) => {
   
    const data=await getData(userId);
 
    return (
   
        <EditUserForm  data={data}/>
    );
};

export default EditPost;