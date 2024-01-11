import EditCommentForm from '@/components/dashboard/comment/EditCommentForm';


const getData=async (id)=>{
    const result=await fetch(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-comment/${id}`,{cache:"no-store"});
    const data=await result.json();
   
    return data;

  }

const EditPost = async({params: { commentId }}) => {

    const data=await getData(commentId);

    return (
        <EditCommentForm  data={data}/>
    );
};

export default EditPost;