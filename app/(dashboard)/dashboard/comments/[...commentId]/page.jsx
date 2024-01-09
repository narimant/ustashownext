import EditCommentForm from '@/components/dashboard/comment/EditCommentForm';


const getData=async (id)=>{
    const result=await fetch(`http://localhost:27017/api/get-comment/${id}`,{cache:"no-store"});
    const data=await result.json();
    console.log(data);
    return data;

  }

const EditPost = async({params: { commentId }}) => {

    const data=await getData(commentId);

    return (
        <EditCommentForm  data={data}/>
    );
};

export default EditPost;