import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { postAdd, selectAllPost } from "../features/postSlice";
// import { useState } from "react";
export const fetchPosts = () => {
    const POSTS_BASE_URL = "https://jsonplaceholder.typicode.com/posts"
    const dispatch = useDispatch();

    // const [postsData , setPostsData] = useState()
    const { isError, isSuccess, isLoading, data } = useQuery(["posts/fetch"], async () => {
    
        try{
            const response = await axios.get(POSTS_BASE_URL)

            return [...response.data];
        }catch (err) {
            return err
        }
        })
        if(isLoading) {
            console.log("loading")
        } else if (isSuccess) {
             dispatch(postAdd(data))
             console.log("send Post to Reducer")
            
            //  const datas = useSelector(selectAllPost)
            //  setPostsData(datas) 
        }
        if(isError) {
            console.log("error")
        }
  return isSuccess ;
}

