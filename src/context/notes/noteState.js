import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "647b936903b2c547de9cd015",
          "user": "647b8a7a27c12ecc752acbaa",
          "title": "prajwals note",
          "description": "descripiton",
          "tag": "prajwals",
          "timestamp": "2023-06-03T19:24:25.324Z",
          "__v": 0
        },
        {
            "_id": "647b936903b2c547de15",
            "user": "647b8a7a27c12cbaa",
            "title": "prajwals",
            "description": "descripiton",
            "tag": "prajwal",
            "timestamp": "2023-06-03T19:24:25.324Z",
            "__v": 0
          }
      ];

      const [notes, setNotes] = useState(notesInitial)

    
    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;