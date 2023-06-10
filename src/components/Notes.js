import React, {useContext, useEffect} from 'react'
import noteContext from "../context/notes/noteContext";
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export const Notes = () => {
    const context = useContext(noteContext);
    const {notes, getNotes } = context;
    useEffect(() => {
      getNotes()
    }, [])
    
  return (
    <>
    <AddNote></AddNote>
    <div className="container row">
    <h1>YOUR NOTES</h1>
    {
      notes.map((note) =>{
        return <NoteItem note={note} key={note._id}></NoteItem>
      })
    }
  </div>
    </>
  )
}

export default Notes;