import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //   GET NOTES
  const getNotes = async () => {
    const getNotesResponse = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = await getNotesResponse.json();
    setNotes(json);
  };

  //   ADD NOTE
  const addNote = async (title, description, tag) => {
    const addResponse = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await addResponse.json();
    setNotes(notes.concat(note));

  };

  // DELETE NOTE
  const deleteNote = async (noteId) => {
    const deleteNoteResponse = await fetch(
      `${host}/api/notes/deleteNote/${noteId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      }
    );

    const newNotes = notes.filter((note) => {
      return note._id !== noteId;
    });
    setNotes(newNotes);
  };

  // EDIT NOTE
  const editNote = async (id, title, description, tag) => {
    const editResponse = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }} >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
