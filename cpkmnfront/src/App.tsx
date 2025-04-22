
import './App.css';
import Navbar from './Navbar.tsx';
import PkForm from './pkForm.tsx';
import Customized from './CustomizedContainer.tsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
//will have taskbar and then a router to go between curr page and other page, with completely different functionality
//pass in, for now, just the sprite

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<PkForm/>} />
        <Route path="/customizer" element={<Customized />} />
      </Routes>
    {/* <PkForm/>
    <Customized/> */}
    </>
  )
}

export default App
