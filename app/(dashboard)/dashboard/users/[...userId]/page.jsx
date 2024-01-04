
import EditUserForm from '@/components/dashboard/users/EditUserForm';
import React from 'react';
const getData=async (id)=>{
    const result=await fetch(`http://localhost:27017/api/get-user/${id}`,{"cache":"no-store"});
    const data=await result.json();
    return data;

  }

const EditPost = async({params: { userId }}) => {
   
    const data=await getData(userId);
  console.log(data);
    return (
   
        <EditUserForm  data={data}/>
    );
};

export default EditPost;