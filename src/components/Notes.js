import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  
  const ref = useRef(null);
  const refClose = useRef(null);
  
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  };

  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: "default"})
  const handleClick = (e) =>{
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    console.log("updating", note)
  }

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
      <AddNote></AddNote>
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
        Launch demo modal
      </button>
    
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {" "}
                Edit Note{" "}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="" method="post">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea className="form-control" id="edescription" name='edescription' value={note.edescription} rows="3"
                    onChange={onChange}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container row">
        <h1>YOUR NOTES</h1>
        {notes.map((note) => {
        return (
        <NoteItem note={note} key={note._id} updateNote={updateNote}></NoteItem>
        );
        })}
      </div>
    </>
  );
};

export default Notes;
