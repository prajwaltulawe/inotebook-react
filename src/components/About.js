import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export const About = () => {
  const a = useContext(noteContext);
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  }, [])
  return (
    <div>
        About {a.state.name}
    </div>
  )
}

export default About