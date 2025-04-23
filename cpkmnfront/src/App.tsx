
import './App.css';
import Navbar from './Navbar.tsx';
import PkForm from './pkForm.tsx';
import Signup from './Signup.tsx';
import Customized from './CustomizedContainer.tsx';
import Login from './Login.tsx';
import { Routes, Route} from 'react-router-dom'
function App() {
//will have taskbar and then a router to go between curr page and other page, with completely different functionality
//pass in, for now, just the sprite

//signup will be form, take user and password
//take it and send to backend
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
        <Route path="/getpkmn" element={<PkForm/>} />
        <Route path="/customizer" element={<Customized />} />
      </Routes>
    {/* <PkForm/>
    <Customized/> */}
    </>
  )
}

export default App
