import AnswerForm from '@/components/dashboard/comment/Answer';
import React from 'react';

const Answer = ({params:{answerId}}) => {
   
    return (
        <div>
            <AnswerForm id={answerId}/>
        </div>
    );
};

export default Answer;