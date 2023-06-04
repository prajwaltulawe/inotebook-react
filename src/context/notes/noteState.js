import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name": "pajya",
        "class": "sadf"
    }
    const [state, setstate] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setstate({
                "name": "pajya tulawe",
                "class": "sadf"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{state, update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;