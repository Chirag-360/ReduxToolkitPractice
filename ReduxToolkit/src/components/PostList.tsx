import React,{useCallback, useState} from 'react'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
import postSlice, { 
  selectAllPost , getPostsError , getPostsStatus , 
  fetchPostss, 
  postAdd } from '../features/postSlice';
// import { fetchPosts } from '../ReactQuery-fetchers/fetchPosts';
import "./PostList.css"
import { PostEecerpt } from './PostEecerpt';
import { fetchPosts } from '../ReactQuery-fetchers/fetchPosts';
// import { useQuery } from '@tanstack/react-query';
// import { axios } from 'axios';


const PostList = () => {
 
  // const [send , setSend] = useState(true)
  const run = fetchPosts()
  
 console.log("this is the data")

 const data = useCallback ( () => {
   const post = useSelector(selectAllPost) 
   console.log(post,"dadada")

},
  [run]
 )
  // if(!data == false){
    // const post = useSelector(selectAllPost) 
    // console.log("runnning") 
  // } 
  // if(send){
  //   setSend(true)
  //   const post = useSelector(selectAllPost) 
  //   setSend(false)
  // } else {}
  // console.log(data,"data")
  // const POST_URL =  "https://jsonplaceholder.typicode.com/posts";
  
  // console.log(fetchPosts)
  // const dispatch = useDispatch()

  // const { isError, isSuccess, isLoading, data:fetchPosts, error } = useQuery(
  //   ["products"],
  //   fetchPostss,
  //   // { staleTime: 3000 }
  // );
  // let content ;
  // if (isLoading) {
  //   console.log("Loading...");
    // dispatch()
  //   return content = <p  style={{color:"red"}}>"Loading..."</p>
  // }

  // if (isError) {
  //   console.log("Error: ", error);
  //   return <div>Error...</div>;
  // }

  // if(isSuccess) {

  
    //  dispatch(postAdd(fetchPosts))
//  const post = useSelector(selectAllPost) 
//     if( 0) {
//       content = <p>"Data is loading still"</p>
//     }else {
 
// async() => {

// }


    //  let content; 
    //  if(true){

      //  let posts = useSelector(selectAllPost)
      //  console.log(posts,"posts get")
    //   //  content = posts.map(post => <PostEecerpt key={post.id} post={post}/>)
        // content = <p  style={{color:"red"}}>"data is recieved"</p>
    //  } 
//     }

    
    // console.log(fetchPosts,"data is sended")
    
    // return <div>{fetchPosts}</div>
  // }
// function fetchPosts() {
// return useQuery(["posts"], async () => {
//   try {
//     const response = await axios.get(POST_URL);
//     dispatch(response)
//     console.log(response)
//     return response.data;
//   } catch (err) {
//     throw new Error(err);
//   }
// });
// }


   
    // let content = posts.map(post => <PostEecerpt key={post.id} post={post}/>)

    // let postStatus = useSelector(getPostsStatus)
    // let error = useSelector(getPostsError)

    // useEffect(()=>{
    //     if(postStatus === "idle"){
    //      dispatch(fetchPosts() as any)
    //      console.log(fetchPosts(),"dataaa")
    //       }
    // },[postStatus, dispatch]) 

    
    // interface RootState {
    //     posts: {
    //       id: string;
    //       title: string;
    //       content: string;
    //     }[];
    //   }

  

    // interface Post {
    //   id: string;
    //   title: string;
    //   content: string;
    //   userId:string;
    //   reactions : {thumpsUp: string, wow: string, heart: string, rocket: string, coffee: string},
    //   date:any
    // }
    // console.log(posts,"postlist")

    // const orderPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    // const RenderPost:JSX.Element[] = (posts || []).map((posts:Post ) => ())

    // let content ;
    // if(isLoading) {
    //    content = <p  style={{color:"red"}}>"Loading..."</p>
    // } else if(isSuccess) {
    //   let posts = useSelector(selectAllPost)
    // //  content = posts.map(post => <PostEecerpt key={post.id} post={post}/>)
    // content = <p  style={{color:"red"}}>"Wow..."</p>
    // console.log("OWOWO")
    // } else if (isError) {
    //    content = <p style={{color:"red"}}>"error"</p>
       
    // }
  return (
    <>  
    <h1 className='post-heading'>Posts</h1>
    <div className='main-box'>
      {/* {content} */}
      </div>
    </>
  )

}

export default PostList