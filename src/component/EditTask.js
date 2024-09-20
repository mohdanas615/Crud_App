import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../redux/TaskReducer';

function EditTask() {
    const {id} = useParams();
    const tasks = useSelector((state) => state.tasks);
    const existingTask = tasks.find((task) => task.id === Number(id));

    

    const { title, description, due_date, priority, status } = existingTask;
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);
    const [editDue_date, setEditDue_Date] = useState(due_date);
    const [editPriority, setEditPriority] = useState(priority);
    const [editStatus, setEditStatus] = useState(status);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!existingTask) {
      return <div>Task not found</div>;
  }

    
    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editTask({
            id: Number(id),
            title: editTitle,
            description: editDescription,
            due_date: editDue_date,
            priority: editPriority,
            status: editStatus
        }));
        navigate('/');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleEdit} className="task-form">
                <h2>Edit Task Details</h2>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        rows="3"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dueDate">Due Date</label>
                    <input
                        type="date"
                        id="dueDate"
                        value={editDue_date}
                        onChange={(e) => setEditDue_Date(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select
                        id="priority"
                        value={editPriority}
                        onChange={(e) => setEditPriority(e.target.value)}
                    >
                        <option value="">Select</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                    >
                        <option value="">Select</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <button type="submit">Save Change</button>
            </form>
        </div>
    );
}

export default EditTask;

