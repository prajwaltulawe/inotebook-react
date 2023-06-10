import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "647b936903b2c347de9cd015",
      user: "647b8a7a27c12ecc752acbaa",
      title: "prajwals note",
      description: "descripiton",
      tag: "prajwals",
      timestamp: "2023-06-03T19:24:25.324Z",
      __v: 0,
    },
    {
      _id: "647b936903b2c237de15",
      user: "647b8a7a27c12cbaa",
      title: "prajwals",
      description: "descripiton",
      tag: "prajwal",
      timestamp: "2023-06-03T19:24:25.324Z",
      __v: 0,
    },
    {
      _id: "647b936903b2c567de9cd015",
      user: "647b8a7a27c12ecc752acbaa",
      title: "prajwals note",
      description: "descripiton",
      tag: "prajwals",
      timestamp: "2023-06-03T19:24:25.324Z",
      __v: 0,
    },
    {
      _id: "647b936903b2c787de9cd015",
      user: "647b8a7a27c12ecc752acbaa",
      title: "prajwals note",
      description: "descripiton",
      tag: "prajwals",
      timestamp: "2023-06-03T19:24:25.324Z",
      __v: 0,
    },
    {
      _id: "647b936903b2c547de15",
      user: "647b8a7a27c12cbaa",
      title: "prajwals",
      description: "descripiton",
      tag: "prajwal",
      timestamp: "2023-06-03T19:24:25.324Z",
      __v: 0,
    },
    {
      _id: "647b936903b2c5237de9cd015",
      user: "647b8a7a27c12ecc752acbaa",
      title: "prajwals note",
      description: "descripiton",
      tag: "prajwals",
      timestamp: "2023-06-03T19:24:25.324Z",
      __v: 0,
    },
    {
      _id: "647b936903b2c5478de15",
      user: "647b8a7a27c12cbaa",
      title: "prajwals",
      description: "descripiton",
      tag: "prajwal",
      timestamp: "2023-06-03T19:24:25.324Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //   ADD NOTE
  const addNote = (title, description, tag) => {
    console.log("adding new note")
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
  const deleteNote = () => {};

  // EDIT NOTE
  const editNote = () => {};

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
