import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
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
