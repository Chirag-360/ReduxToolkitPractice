import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPost } from '../features/postSlice';
import "./PostList.css"
import PostAuther from './PostAuther';
import { TimeAgo } from './TimeAgo';
import { ReactionButton } from './ReactionButton';
const PostList = () => {

    // interface RootState {
    //     posts: {
    //       id: string;
    //       title: string;
    //       content: string;
    //     }[];
    //   }

    interface Post {
      id: string;
      title: string;
      content: string;
      userId:string;
      date:any
    }
    const posts = useSelector(selectAllPost)

    const orderPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const RenderPost:JSX.Element[] = (posts || []).map((posts:Post ) => (<article className='post-box' key={posts.userId}>
             <h3>{posts.title}</h3>
             <p>{posts.content}</p>
             <p><PostAuther post={posts}/>
            <TimeAgo timeStamp={posts.date}/>

             </p>
             <ReactionButton post={posts}/>  

    </article>))
  return (
    <>  
    <h1 className='post-heading'>Posts</h1>
    <div className='main-box'>
 
      {RenderPost}
      </div>
    </>
  )

}

export default PostList