const DCBtn = ({ title ,content, setContentChanger}) => {
  return (
    <button onClick={()=>setContentChanger(content)} className="rounded-md w-32 flex justify-center items-center bg-orange-500 text-white transition-all duration-500 hover:bg-blue-500">
      {title}
    </button>
  );
};

export default DCBtn;
