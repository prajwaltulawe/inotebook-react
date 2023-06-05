import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";

export const Home = () => {
  console.log(noteContext)
  const context = useContext(noteContext);
  console.log(context);
  const {notes, setNotes} = context;
  return (
    <div>
      <div className="container">
        <h1>ADD NOTES</h1>
        <form action="" method="post">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </div>

      <div className="container">
        <h1>YOUR NOTES</h1>
        {
          notes.map((note) =>{
            return note.title
          })
        }
      </div>
    </div>
  );
};

export default Home;
