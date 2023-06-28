import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit"

//TS Error = need to defined userId in this interface for future incoming data in userId
interface StateItem {
    id: string;
    title: string;
    content: string;
    userId:string;
  }
    
//TS Error - need to pass userId for postlist to render other giver error
const initialState:StateItem[] = [
    {
        id:"1",title:"randome",content:"something" , userId:""
    },  {
        id:"2",title:"randome2",content:"something2", userId:""
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
                }
               
              }
            }
        }
    }
})

export const selectAllPost = (state:any) => state.post;

export const {postAdd} = postSlice.actions

export default postSlice.reducer;