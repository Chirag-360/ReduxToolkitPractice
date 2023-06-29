import { reactionAdded } from "../features/postSlice";
import { useDispatch } from "react-redux";


export interface  reactionEmojiType {
   thumbsUp:string,
   wow:string,
   heart:string,
   rocket:string,
   coffee:string,
}

const reactionEmoji:reactionEmojiType = { 
   thumbsUp:"U+1F44D",
   wow:"U+1F632",
   heart:"U+2764",
   rocket:"U+1F680",
   coffee:"U+1F375",
}

// export interface Props {
//        post:{ content: string, 
//          date : string,
//          id: string, 
//          reactions : {thumpsUp: string, wow: string, heart: string, rocket: string, coffee: string},
//          title: string,
//          userId : string
//                  }
//                  }

export const ReactionButton = (props) => {
    const dispatch  = useDispatch()

    const post = props
    console.log(post,"hi")


    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return(
            <button
            key={name}
            type="button"
            // className="reactionButton"
            onClick={()=>
                dispatch(reactionAdded({postId:post.id, reaction:name}))
            }
            >
                {emoji}{post.reactions[name]}                
            </button>
        )
    
        
         
        
    })
    // console.log(reactionButtions)
  return <div> {reactionButtons} </div>
  
}
