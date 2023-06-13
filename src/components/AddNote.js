import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  
  const [note, setNote] = useState({title: "", description: "", tag: "default"})
  const handleClick = (e) =>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag)
    setNote({title: "", description: "", tag: "default"});
  }

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }
  return (
    <div>
        <h1>ADD NOTES</h1>
        <form action="" method="post">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea className="form-control" id="description" name='description' rows="3" value={note.description} onChange={onChange}></textarea>
            <button type='submit' disabled={note.title.length<5 || note.description.length<5} className='btn btn-primary mt-2' onClick={handleClick}> Add Note</button>
          </div>
        </form>
    </div>
  )
}

export default AddNote