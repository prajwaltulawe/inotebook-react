import React, { useContext} from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
const context = useContext(noteContext);
const { deleteNote } = context;
const {note, updateNote} = props;
return (
<div>
    <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h5 className="card-title">{note.title}</h5>
                <h6 className="card-title">/{note.tag}</h6>
            </div>
            <p className="card-text">{note.description}</p>
            <i className="fas fa-regular fa-pen-to-square" onClick={()=> {updateNote(note)}}></i>
            <i className="fas fa-regular fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
        </div>
    </div>
</div>
)
}

export default NoteItem