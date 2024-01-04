

const InputElement = ({ label, id, inputType = "text" ,state,setState ,direction='rtl'}) => {
  return (
    <div className="py-5 child:py-5">
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
      {inputType === "text" && (
        <input 
        required={true}
            value={state}
            onChange={(e)=>setState(e.target.value)}
          type={inputType}
          className={`bg-gray-100 rounded-lg w-full outline-none py-3 px-3 ${direction} `}
          id={id}
        />
      )}

      {inputType === "textarea" && (
        <textarea
        value={state}
            onChange={(e)=>setState(e.target.value)}
          id={id}
          rows="5"
          cols="33"
          className={`bg-gray-100 rounded-lg w-full outline-none py-3 px-3 ${direction} `}
        ></textarea>
      )}

        
       

    </div>
  );
};

export default InputElement;
