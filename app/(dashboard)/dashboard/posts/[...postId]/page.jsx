import EditPostForm from '@/components/dashboard/post/EditPostForm';
import { cookies } from 'next/headers';
import React from 'react';
const getData=async (id)=>{
    const cook=cookies();
    const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-post-by-id/${id}`,{headers:{auth:cook.get('auth').value}},{"cache":"no-store"});
    const data=await result.json();
    return data;

  }

const EditPost = async({params: { postId }}) => {
   
    const data=await getData(postId);
  
    return (
        <EditPostForm  data={data}/>
    );
};

export default EditPost;