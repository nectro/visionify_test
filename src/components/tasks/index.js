import { useTasks } from '@/state/tasksReducer'
import React, { useState } from 'react'
import Task from './task';

function Tasks() {
    const tasks = useTasks();
    const [filter, setfilter] = useState("all")
  return (
    <div>
        Filter: 
        <select value={filter} onChange={(e) => setfilter(e.target.value)} style={{marginTop: 10, marginLeft: 10}}>
            <option>all</option>
            <option>completed</option>
            <option>pending</option>
        </select>
        {
            tasks.filter((task) => filter !== "all" ? filter === "completed" ? task.completed : !task.completed : true).map((task) =>  <Task id={task.id} description={task.description} isDone={task.completed}/>)
        }
    </div>
  )
}

export default Tasks