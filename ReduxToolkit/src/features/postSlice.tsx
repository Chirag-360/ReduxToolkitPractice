import { PayloadAction, createSlice, nanoid , createAsyncThunk } from "@reduxjs/toolkit"
import { useQuery } from "@tanstack/react-query";
import {sub} from "date-fns"
import axios from "axios";
const POST_URL =  "https://jsonplaceholder.typicode.com/posts";
// //TS Error = need to defined userId in this interface for future incoming data in userId
// interface StateItem {
//     id: string;
//     title: string;
//     content: string;
//     userId:string;
//     date:string;
//     reactions: {
//         thumpsUp:number,
//         wow:number,
//         heart:number,
//         rocket:number,
//         coffee:number,

//     }
//   }

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
                                                               
//     try{
//            const reponse = await axios.get(POST_URL)
//            {console.log(reponse.data,"repo")}
//            return [...reponse.data] ;
//         // return (reponse)
//     }
//     catch(err){
//         return err
//     }
// })

// export const { data:fetchPosts , isLoading} = useQuery(["posts/fetchPosts"], async () => {
//     try { 
//         const reponse = await axios.get(POST_URL) 
//         // console.log(reponse ,"repo")
//           return [...reponse.data] } 
//         catch(err){
//         return err
//     }

// }) 

// export const fetchPostss = async () => {
//     console.log("Fetching Posts");
//     const response = await axios.get(POST_URL);
//     const posts = response.data;
  
//     console.log("Posts: ", posts);
//     return [...response.data];
//     // return response;
//   };
    
//   console.log("Posts: ", fetchPostss,"fd");
  
//TS Error - need to pass userId for postlist to render other giver error
const initialState:any = {
    posts:[],
    // status:"idle", 
    // error: null
}

export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdd:{
            reducer(state,action){
            // state.posts.push(action.payload)
            const {payload} = action
            state.posts = [...state.posts,payload] 
            console.log(action.payload,"Data is recieved")
             },
            // prepare(title:string,content:string,userId:string){
            //     //   type:"post/postAd",
            //   return {
            //     payload:{
            //     id:nanoid(),
            //     title,
            //     content,
            //     userId,
            //     date: new Date().toISOString(),
            //     }
               
            //   }
            // }
      
        },
        reactionAdded:(state,action)=>{
            const {postId , reaction} = action.payload;
            const existingPost = state.posts.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
                // existingPost.reactions[]
            }
        },
        Addpost:(state,action)=>{
            const {payload} = action
            state.posts = [...state.posts,payload] 
            console.log("Data is recieved")
        }
      
    },
    // extraReducers(builder){
    //     builder
    //     .addCase(fetchPosts.pending, (state,action) => { 
    //         state.status = "loading"
    //     })
    //     .addCase(fetchPosts.fulfilled , (state,action) => {
    //         state.status = "succeeded"

    //         let min = 1;
    //         const loadedPosts = action.payload.map(post => {
    //             post.date = sub(new Date(), {minutes: min++}).toISOString();
    //             post.reactions = {
    //                 thumbsUp: 0,
    //                 wow: 0,
    //                 heart: 0,
    //                 rocket: 0,
    //                 coffee: 0,
    //             }
    //             return post;
    //         });
    //         state.posts = state.posts.concat(loadedPosts)
    //     })
    //     .addCase(fetchPosts.rejected, (state,action) => {
    //         state.status ="failed"
    //         state.error = action.error.message
    //     })
    // }
})

// export const selectAllPost = (state:any) => state.posts;
// console.log(initialState.posts.post,"ISposts")
// console.log(initialState,"initialState")
// export const getPostsStatus = (state:any) => state.status;
// console.log(initialState.status,"dsstatusgrgf")
// console.log(initialState,"dsstatusgrgf")
// export const getPostsError = (state:any) => state.error;
// console.log(initialState.error,"error")
export const selectAllPost = (state) => state.posts?.posts;
// console.log(initialState,"initialState")
// export const getPostsStatus = (state) => state.posts?.status;
// export const getPostsError = (state) => state.posts?.error;
export const {postAdd , reactionAdded} = postSlice.actions

export default postSlice.reducer;