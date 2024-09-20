import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "../data";

const taskSlice=createSlice({
    name:'tasks',
    initialState:taskList,
    reducers:{
 addTask:(state,action)=>{
   state.push(action.payload)
    console.log(action)
 },
 editTask:(state,action)=>{
   const {id,title,description, due_date, priority, status}=action.payload;
   const editingTask=state.find(task=>task.id===id);
   if(editingTask){
      editingTask.title=title;
      editingTask.description=description;
      editingTask.due_date=due_date;
      editingTask.priority=priority;
      editTask.status=status;
   }

 },
 deleteTask:(state,action)=>{
   const {id}=action.payload;
   const existingTask=state.find(task=>task.id===id);
   if(existingTask){
      return state.filter(f=>f.id !==id);
   }
 }
    }
})
export const {addTask, editTask, deleteTask}= taskSlice.actions;
export default taskSlice.reducer;