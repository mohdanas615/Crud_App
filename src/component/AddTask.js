// import React, {useState} from 'react'
// import { addTask } from '../redux/TaskReducer';
// import { useDispatch,useSelector } from 'react-redux';
// import {useNavigate} from 'react-router-dom';


// function AddTask() {

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [due_date, setDue_Date] = useState('');
//     const [priority, setPriority] = useState('Low');
//     const [status, setStatus] = useState('In Progress');

//     const tasks=useSelector((state=>state.tasks))
//     const dispatch=useDispatch();
//     const navigate=useNavigate();
  
//     // Function to handle form submission
//     const handleSubmit = (e) => {
//       e.preventDefault(); // Prevents page reload on form submission
//   dispatch(addTask({id:tasks[tasks.length-1].id +1,title, description, due_date, priority, status }))
//   navigate('/')
    
//     };
  
//   return (
//     <>
//    <div className="form-container">
    
//       <form onSubmit={handleSubmit} className="task-form">
//       <h2>Add Task Details</h2>
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             rows="3"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="dueDate">Due Date</label>
//           <input
//             type="date"
//             id="dueDate"
//             value={due_date}
//             onChange={(e) => setDue_Date(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="priority">Priority</label>
//           <select
//             id="priority"
//             value={priority}
//             onChange={(e) => setPriority(e.target.value)}
//           >
//             <option selected="">Select</option>
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="status">Status</label>
//           <select
//             id="status"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option selected="">Select</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//           </select>
//         </div>

//         <button type="submit">Add Task</button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default AddTask

// import React, { useState } from 'react';
// import { addTask } from '../redux/TaskReducer';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// function AddTask() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [due_date, setDue_Date] = useState('');
//   const [priority, setPriority] = useState('Low');
//   const [status, setStatus] = useState('In Progress');

//   const tasks = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents page reload on form submission
//     dispatch(addTask({ id: tasks[tasks.length - 1].id + 1, title, description, due_date, priority, status }));
//     navigate('/');
//   };

//   return (
//     <div className="container mt-5">
//       <div className="form-container">
//         <form onSubmit={handleSubmit} className="task-form">
//           <h2>Add Task Details</h2>

//           <div className="mb-3">
//             <label htmlFor="title" className="form-label">Title</label>
//             <input
//               type="text"
//               id="title"
//               className="form-control"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">Description</label>
//             <textarea
//               id="description"
//               className="form-control"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows="3"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="dueDate" className="form-label">Due Date</label>
//             <input
//               type="date"
//               id="dueDate"
//               className="form-control"
//               value={due_date}
//               onChange={(e) => setDue_Date(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="priority" className="form-label">Priority</label>
//             <select
//               id="priority"
//               className="form-select"
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//             >
//               <option value="">Select</option>
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="High">High</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="status" className="form-label">Status</label>
//             <select
//               id="status"
//               className="form-select"
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//             >
//               <option value="">Select</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//             </select>
//           </div>

//           <button type="submit" className="btn btn-primary">Add Task</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddTask;

import React, { useState } from 'react';
import { addTask } from '../redux/TaskReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [due_date, setDue_Date] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('In Progress');

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    dispatch(addTask({ id: tasks[tasks.length - 1].id + 1, title, description, due_date, priority, status }));
    toast("Task added Successfully")
    setTimeout(()=>{
      navigate('/');
    },1000)
   
  };

  return (
    <div className="container-fluid mt-5">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="task-form">
          <h2 className="text-center mb-4">Add Task Details</h2>

          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                id="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="dueDate" className="form-label">Due Date</label>
              <input
                type="date"
                id="dueDate"
                className="form-control"
                value={due_date}
                onChange={(e) => setDue_Date(e.target.value)}
                required
              />
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="priority" className="form-label">Priority</label>
              <select
                id="priority"
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="status" className="form-label">Status</label>
              <select
                id="status"
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Add Task</button>
            <ToastContainer/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;

