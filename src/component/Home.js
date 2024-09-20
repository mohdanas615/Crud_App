import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/TaskReducer';
import { Modal, Button } from 'react-bootstrap';

function Home() {
  const tasks = useSelector((state) => state.tasks);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [taskList, setTaskList] = useState(tasks);
  const [sortOrder, setSortOrder] = useState('asc');
  
  // State for managing modal visibility and selected task to delete
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask({ id }));
    setShowModal(false); // Close modal after deletion
  };

  const handleFilter = () => {
    const result = tasks.filter((task) => {
      if (searchKeyword === "") return tasks;
      return task.title.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    setTaskList(result);
  };

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

  const handlePriority = (event) => {
    const selectedPriority = event.target.value; // Get the selected priority
    const priorityOrder = ['Low', 'Medium', 'High'];
  
    const sortedTasks = [...taskList].sort((a, b) => {
      const priorityA = priorityOrder.indexOf(a.priority);
      const priorityB = priorityOrder.indexOf(b.priority);
  
      // If one of the tasks matches the selected priority, push it to the top
      if (a.priority === selectedPriority && b.priority !== selectedPriority) {
        return -1; // a should come before b
      }
      if (b.priority === selectedPriority && a.priority !== selectedPriority) {
        return 1; // b should come before a
      }
  
      // If neither or both match the selected priority, sort by priorityOrder
      return priorityA - priorityB;
    });
  
    setTaskList(sortedTasks);
  };

  const handleShowModal = (id) => {
    setTaskToDelete(id); // Set the task to delete
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal without deleting
    setTaskToDelete(null); // Clear the selected task
  };

  useEffect(() => {
    setTaskList(tasks); // Reset taskList when tasks change
  }, [tasks]);

  return (
    <>
      <h1 className="text-center">Task Management CRUD App</h1>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Type Title here"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)} // Control the input
            />
          </div>
          <div className="col-md-2 mb-3">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleFilter}
            >
              Search
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="col-md-3 mb-3">
            <select className="form-select" onChange={handleDueDate}>
              <option value="">Sort by Due Date</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <select className="form-select" onChange={handlePriority}>
              <option value="">Sort by Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className='d-flex justify-content-between align-items-center my-5 mb-2 bg-secondary text-white p-3 rounded'>
          <b>Task List</b>
          <Link to='./AddTask'>
            <button type="button" className="btn btn-primary">
              Add Task
            </button>
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table">
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
              {taskList.map((task, index) => (
                <tr key={index}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.due_date}</td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                  <td>
                    <Link to={`/EditTask/${task.id}`}>
                      <button className='btn btn-primary'>Edit</button>
                    </Link>
                    <button onClick={() => handleShowModal(task.id)} className='btn btn-danger ms-2'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for delete confirmation */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(taskToDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
