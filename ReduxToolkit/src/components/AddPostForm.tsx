import React, {useId, useState} from 'react'
import { postAdd } from '../features/postSlice'
import { useDispatch , useSelector} from 'react-redux'
import "./AddPostForm.css"
import { selectAllUsers } from '../features/userSlice'

export const AddPostForm = () => {

    const [title, setTitle] = useState<string>()
    const [content, setContent] = useState<string>()
    const [userId, setUserId] = useState<string>()
    const dispatch = useDispatch();
    // const selector = useSelector();

    const users = useSelector(selectAllUsers)


    const saveData = () =>{
      if(title && content) {
        dispatch(
        postAdd(title, content , userId)
    
    )
    setTitle("")
    setContent("")
    // setUserId("")
  }

    };
  
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId) 
interface Users {
      id:string,
      name:string
    }
    const userOptions = users.map((item:Users)=>( <option value={item.id} key={item.id}>{item.name}</option>))

  return (
    
    <section>
        <h1>Add POST</h1>
            <form action="">
                <fieldset>
                    <legend>Post Data</legend>

                <label htmlFor="title">Title</label>

                <input type="text" value={title} id='title' name='title' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}} />

                <label htmlFor="auther">Auther</label>
                  <select name="auther" id="auther" value={userId} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>(setUserId(e.target.value))}>
                    
                <option value="" hidden >Select Any</option>
                  {userOptions.length === 0 ? <option disabled>No Options Avaliable</option> : userOptions} 
                  </select>

                <label htmlFor="content">Content</label>

                <textarea name="content" id="content" value={content} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => {setContent(e.target.value)}} ></textarea>

                <button disabled={!canSave} type='button' id='saveButton' onClick={saveData}>Save Data</button>

                </fieldset>
            </form>
        
    </section>
  )
}
