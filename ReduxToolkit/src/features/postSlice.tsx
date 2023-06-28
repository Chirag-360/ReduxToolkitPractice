import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit"
import {sub} from "date-fns"
//TS Error = need to defined userId in this interface for future incoming data in userId
interface StateItem {
    id: string;
    title: string;
    content: string;
    userId:string;
    date:string;
  }
    
//TS Error - need to pass userId for postlist to render other giver error
const initialState:StateItem[] = [
    {
        id:"1",
        title:"randome",
        content:"something",
        userId:"",
        date:sub(new Date(), {minutes : 10}).toISOString()
    },  {
        id:"2",
        title:"randome2",
        content:"something2", 
        userId:"",
        date:sub(new Date(), {minutes : 5}).toISOString()

    }
]

export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        postAdd:{
            reducer:(state,action)=>{
            state.push(action.payload)
             },
            prepare:(title:string,content:string,userId:string)=>{
                //   type:"post/postAd",
              return {
                payload:{
                id:nanoid(),
                title,
                content,
                userId,
                date: new Date().toISOString(),
                }
               
              }
            }
        }
    }
})

export const selectAllPost = (state:any) => state.post;

export const {postAdd} = postSlice.actions

export default postSlice.reducer;