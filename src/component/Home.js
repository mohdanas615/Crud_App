import React, { useState,useEffect } from 'react'
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../redux/TaskReducer';

function Home() {
  const tasks=useSelector((state=>state.tasks))
  const[searchkeyword,setSearchkeyword]=useState('');
  const[taskList,setTaskList]=useState(tasks)
  const [sortOrder, setSortOrder] = useState('asc');
    
    // console.log(tasks);
    const dispatch=useDispatch();
   const handleDelete=(id)=>{
dispatch(deleteTask({id:id}))
   }
   const handlefilter=(e)=>{
    const result=tasks.filter((task)=>{
      if(searchkeyword ==="") return tasks;
      return task.title.toLowerCase().includes(searchkeyword.toLowerCase())
    })
    setTaskList(result)
   }
   const handleDueDate = () => {
    const sortedTasks = [...taskList].sort((a, b) => {
      const parseDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
      };
      const dateA = parseDate(a.due_date);
      const dateB = parseDate(b.due_date);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setTaskList(sortedTasks);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
  };
  const handlePriority=()=>{
    const priorityOrder = ['Low', 'Medium', 'High'];

    const sortedTasks = [...taskList].sort((a, b) => {
      const priorityA = priorityOrder.indexOf(a.priority);
      const priorityB = priorityOrder.indexOf(b.priority);

      
      return sortOrder === 'asc' ? priorityA - priorityB : priorityB - priorityA;
    });
  
    setTaskList(sortedTasks);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
  }
   useEffect(() => {
    setTaskList(tasks); // Reset taskList when tasks change
  }, [tasks]);
  return (
    <>
    
<h1 id="text-center">Task Management CRUD App</h1>
<div class="input-group d-flex align-items-center my-5">
  <div class="form-outline me-3" data-mdb-input-init>
    <input
      type="search" 
      id="form1" 
      class="form-control" 
      placeholder="Type Title here"
      value={searchkeyword}
      onChange={(e) => setSearchkeyword(e.target.value)} // Control the input
    />
    <label class="form-label" for="form1"></label>
  </div>
  <button
    type="button"
    class="btn btn-primary me-3"
    style={{"marginTop":"25px"}}
    data-mdb-ripple-init
    onClick={handlefilter}
  >
    Search
    <i class="fas fa-search"></i>
  </button>
  
  <div className="sort2">
    <strong id="sort2-search"></strong>
    <select
      className="form-select form-select-lg mx-2 w-10"
      aria-label=".form-select-lg example"
      onChange={handleDueDate}
    >
      <option selected="Select">Sort by Due Date</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  </div>
  <div className="sort3 mx-5">
    <strong id="sort2-search"></strong>
    <select
      className="form-select form-select-lg mx-2 w-10"
      aria-label=".form-select-lg example"
      onChange={handlePriority}
    >
      <option selected="Select">Sort by Priority</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </div>
</div>

    <div className='container'>
      <div className='tasklist-table'><b>Task List</b>
      <Link to='./AddTask'><button type="button" class="btn btn-primary ms-2" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Task</button></Link>
      </div>
        
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Due Date</th>
      <th scope="col">Priority</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        taskList.map((task,index)=>(
            <tr key={index}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.due_date}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
               <td>
                <Link to={`/EditTask/${task.id}`}><button className='btn btn-primary'>Edit</button></Link>
                <button onClick={()=>handleDelete(task.id)}className='btn btn-danger ms-2'>Delete</button>
               </td>
            </tr>
        ))
    }
  </tbody>
</table>
      
    </div>
    </>
  )
}

export default Home
