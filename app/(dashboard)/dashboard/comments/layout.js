

import CommentMenu from '@/components/dashboard/comment/CommentMenu';
import PostMenu from '@/components/dashboard/post/PostMenu';
import React, { Suspense } from 'react';

const CommentLayout = ({children}) => {
    return (
        <div>
            <div>
                <CommentMenu />
            </div>
            <div>
               
                {children}
               
            </div>
        </div>
    );
};

export default CommentLayout;