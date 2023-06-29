import { reactionAdded } from "../features/postSlice";
import { useDispatch } from "react-redux";
import "./ReactionButton.css"

export interface  reactionEmojiType {
   thumpsUp:string,
   wow:string,
   heart:string,
   rocket:string,
   coffee:string,
}
type ReactionEmoji = {
    [key: string]: any;
  }

const reactionEmoji:ReactionEmoji = { 
   thumpsUp:"👍 ",
   wow:"😯",
   heart:"🧡",
   rocket:"⏰",
   coffee:"🧋",
}

export interface Props {
    // post:{
    //    post:{ 
        content: string, 
         date : string,
         id: string, 
         reactions : {thumpsUp: string, wow: string, heart: string, rocket: string, coffee: string},
         title: string,
         userId : string
                 }
                //  }
                // }

export const ReactionButton = ({post}:Props) => {
    const dispatch  = useDispatch()
   
    const console2 = post.reactions
    // const post = props.post
    console.log(console2,"his")

    if (!post || !post.reactions) {
        return <div>Loading...</div>;
      }

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return(
            <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={()=>
                dispatch(reactionAdded({postId:post.id, reaction:name}))
            }
            >
                {emoji}{post.reactions[name]}                
                {/* {emoji}{post.}                 */}
            </button>
        )
    
        
         
        
    })
    // console.log(reactionButtions)
  return <div> {reactionButtons} </div>
  
}
