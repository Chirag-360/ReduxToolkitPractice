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
   thumpsUp:"👍",
   wow:"😯",
   heart:"🧡",
   rocket:"⏰",
   coffee:"🧋",
}

export interface Props {
    // post:{
       post:{ 
        content: string, 
         date : string,
         id: string, 
         reactions : reactionEmojiType,
         title: string,
         userId : string
                 }
                 }
                // }

export const ReactionButton = (props:Props) => {
    const dispatch  = useDispatch()
   
    const post = props.post
    // const post = props.post
    console.log(post,"hi,there")

    if (!post || !post.reactions) {
        return <div>Loading...</div>;
      }

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji] ) => {
        // const reactionKey = `${name}-${index+3}`;
        return(
            <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={()=>
                dispatch(reactionAdded({postId:post.id, reaction:name}))
            }
            >
                {emoji}
                {post.reactions[name]}   
                {console.log(emoji,"emoji")}{console.log(post,"post")}                
            </button>
        )
    
        
         
        
    })
    // console.log(reactionButtions)
  return <div> {reactionButtons} </div>
  
}
