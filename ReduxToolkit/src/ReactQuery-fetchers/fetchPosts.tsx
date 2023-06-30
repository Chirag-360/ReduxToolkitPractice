import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import axios from "axios";
import { postAdd } from "../features/postSlice";

export const fetchPosts = () => {
    const POSTS_BASE_URL = "https://jsonplaceholder.typicode.com/posts"
    const dispatch = useDispatch();

    const { isError, isSuccess, isLoading, data:fetchPosts } = useQuery(["posts/fetch"], async () => {
    
        try{
            // console.log("Fetching Posts");
            const response = await axios.get(POSTS_BASE_URL)
            // const posts = response.data;
            // console.log("Posts: ", posts);
            return [...response.data];
            
        }catch (err) {
            return err
        }
        })
        if(isLoading) {
            console.log("loading")
        } else if (isSuccess) {
             dispatch(postAdd(fetchPosts))
        }
        if(isError) {
            console.log("error")
        }
  return isSuccess ;
}

