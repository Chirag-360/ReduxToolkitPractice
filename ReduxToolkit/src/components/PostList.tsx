import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { selectAllPost , getPostsError , getPostsStatus , fetchPosts} from '../features/postSlice';
import "./PostList.css"
import { PostEecerpt } from './PostEecerpt';
const PostList = () => {
 

    const dispatch = useDispatch()
    let posts = useSelector(selectAllPost)
    let postStatus = useSelector(getPostsStatus)
    let error = useSelector(getPostsError)

    useEffect(()=>{
        if(postStatus === "idle"){
         dispatch(fetchPosts() as any)
         console.log(fetchPosts(),"dataaa")
          }
    },[postStatus, dispatch]) 

    
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
      reactions : {thumpsUp: string, wow: string, heart: string, rocket: string, coffee: string},
      date:any
    }
    // console.log(posts,"postlist")

    // const orderPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    // const RenderPost:JSX.Element[] = (posts || []).map((posts:Post ) => ())

    let content ;
    if(postStatus === "loading"){
       content = <p  style={{color:"red"}}>"Loading..."</p>
    } else if(postStatus === "succeeded") {
       content = posts.map(post => <PostEecerpt key={post.id} post={post}/>)
    } else if (postStatus === "failed") {
       content = <p style={{color:"red"}}>"error"</p>
    }
  return (
    <>  
    <h1 className='post-heading'>Posts</h1>
    <div className='main-box'>
      {content}
      </div>
    </>
  )

}

export default PostList