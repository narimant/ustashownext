import React from 'react';
import Box from './Box';
const getData=async()=>{
    const result=await fetch('https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-active-category');
    const data=await  result.json();
    return data;
}
const GraphicCat =async () => {
    const data=await getData();
    console.log(data);
    return (
        <div className='container mx-auto grid grid-cols-4 gap-8'>
            {
                data.map((item,index)=>(
                    <Box key={index} title={item.title} paragraf={item.shortDesc} linkHref={item.slug} imageUrl={item.image}/>
                ))
            }
          

        </div>
    );
};

export default GraphicCat;