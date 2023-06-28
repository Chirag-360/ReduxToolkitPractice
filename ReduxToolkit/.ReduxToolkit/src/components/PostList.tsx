import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPost } from '../features/postSlice';
import "./PostList.css"
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
    }
    const posts = useSelector(selectAllPost)

    const RenderPost:JSX.Element[] = (posts || []).map((posts:Post ) => (<article className='post-box' key={posts.id}>
             <h3>{posts.title}</h3>
             <p>{posts.content}</p>
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