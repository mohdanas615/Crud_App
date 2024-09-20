import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AddTask from './component/AddTask';
import EditTask from './component/EditTask';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>} />
       </Routes>
       <Routes>
         <Route path="/AddTask" element={<AddTask/>} />
       </Routes>
       <Routes>
         <Route path="/EditTask/:id" element={<EditTask/>} />
       </Routes>
       
     </BrowserRouter>
    </>
  );
}

export default App;
