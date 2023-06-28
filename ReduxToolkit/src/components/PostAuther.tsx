import { selectAllUsers } from "../features/userSlice";
import { useSelector } from "react-redux";
import React from "react";

export interface Users  {
    userId:{

        id:string;
        name:string;
    
    }
    }

export interface user {

    id:string;
    name:string;
}
const PostAuther = (post) => {
  
    const userId = post.post.userId  
    // const userId = props.post.usedId
    // console.log(props.post.userId ,"dfsd")
    console.log(userId ,"props")
    console.log(post ,"dfsd")
    const users = useSelector(selectAllUsers)
    console.log(users   )
  
    const auther = users.find((user:user) => {return user.id === userId} )
    return(
<>
<span>{auther ?  auther.name : "Unknown Author"}</span>
</>
    );
}

export default PostAuther;