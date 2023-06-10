import React, { useContext} from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
const context = useContext(noteContext);
const { deleteNote } = context;

const {note} = props;
return (
<div>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fas fa-regular fa-pen-to-square" ></i>
            <i className="fas fa-regular fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
        </div>
    </div>
</div>
)
}

export default NoteItem