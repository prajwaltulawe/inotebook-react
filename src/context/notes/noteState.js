import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

    //   GET NOTES
    const getNotes = async () => {
        const editResponse = await fetch(`${host}/api/notes/fetchAllNotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3YjhhN2EyN2MxMmVjYzc1MmFjYmFhIn0sImlhdCI6MTY4NTgxNzk3OH0.e9OvrGhCRC-I9ca5oeO_HEFUNoT5bFmLbJIH1F-hENY",
          },
        });
        const json = await editResponse.json();
        setNotes(json);
      };
    
  //   ADD NOTE
  const addNote = async (title, description, tag) => {
    const editResponse = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3YjhhN2EyN2MxMmVjYzc1MmFjYmFhIn0sImlhdCI6MTY4NTgxNzk3OH0.e9OvrGhCRC-I9ca5oeO_HEFUNoT5bFmLbJIH1F-hENY",
      },
      body: JSON.stringify(title, description, tag),
    });

    const note = {
      _id: "647b936903b2c5478de15",
      user: "647b8a7a27c12cbaa",
      title: title,
      description: description,
      tag: tag,
      timestamp: "2023-06-03T19:24:25.324Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // DELETE NOTE
  const deleteNote = async (noteId) => {
    const editResponse = await fetch(`${host}/api/notes/updateNote/${noteId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3YjhhN2EyN2MxMmVjYzc1MmFjYmFhIn0sImlhdCI6MTY4NTgxNzk3OH0.e9OvrGhCRC-I9ca5oeO_HEFUNoT5bFmLbJIH1F-hENY",
      },
    });

    const newNotes = notesInitial.filter((note) => {
      return note._id !== noteId;
    });
    setNotes(newNotes);
  };

  // EDIT NOTE
  const editNote = async (id, title, description, tag) => {
    const editResponse = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3YjhhN2EyN2MxMmVjYzc1MmFjYmFhIn0sImlhdCI6MTY4NTgxNzk3OH0.e9OvrGhCRC-I9ca5oeO_HEFUNoT5bFmLbJIH1F-hENY",
      },
      body: JSON.stringify(title, description, tag),
    });

    for (let index = 0; index < notesInitial.length; index++) {
      const element = notesInitial[index];
      if (element._id == id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
