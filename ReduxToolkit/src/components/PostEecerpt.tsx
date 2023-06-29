import React from 'react'

import PostAuther from './PostAuther';
import { TimeAgo } from './TimeAgo';
import { ReactionButton } from './ReactionButton';  

export const PostEecerpt = ({post}) => {
  return (
    <article className='post-box' >
    <h3>{post.title}</h3>
    <p>{post.body.substring(0,100)}</p>
    <p><PostAuther post={post}/>
   <TimeAgo timeStamp={post.date}/>

    </p>
    <ReactionButton post={post}/>  

</article>
  )
}
