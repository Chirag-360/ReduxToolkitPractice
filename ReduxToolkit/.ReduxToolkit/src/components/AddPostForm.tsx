import React, {useState} from 'react'
import { postAdd } from '../features/postSlice'
import { useDispatch } from 'react-redux'
import "./AddPostForm.css"

export const AddPostForm = () => {

    const [title, setTitle] = useState<string>()
    const [content, setContent] = useState<string>()
    const dispatch = useDispatch();


    const saveData = () =>{
  if(title && content) {
    dispatch(
        postAdd(title, content)
    
    )
    setTitle("")
    setContent("")
  }
// return(<>
//     </>)
    };

  return (
    
    <section>
        <h1>Add POST</h1>
            <form action="">
                <fieldset>
                    <legend>Post Data</legend>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} id='title' name='title' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}} />
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" value={content} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => {setContent(e.target.value)}} ></textarea>
                <button type='button' id='saveButton' onClick={saveData}>Save Data</button>
                </fieldset>
            </form>
        
    </section>
  )
} 
