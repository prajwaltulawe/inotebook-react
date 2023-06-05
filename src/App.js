import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
          <Navbar />
          <div className="container m-auto">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About />} />
            </Routes> 
          </div>
      </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
