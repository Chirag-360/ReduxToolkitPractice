import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit"

interface StateItem {
    id: string;
    title: string;
    content: string;
  }
    

const initialState:StateItem[] = [
    {
        id:"1",title:"randome",content:"something"
    },  {
        id:"2",title:"randome2",content:"something2"
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
            prepare:(title:string,content:string)=>{
              return {
                payload:{
                id:nanoid(),
                title,
                content,
                }
               
              }
            //   type:"post/postAd",
            }
        }
    }
})

export const selectAllPost = (state:any) => state.post;

export const {postAdd} = postSlice.actions

export default postSlice.reducer;