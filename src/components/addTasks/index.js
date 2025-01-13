import { useTasksDispatch } from '@/state/tasksReducer'
import React, { useState } from 'react'

function AddTaskComponent() {
    const  dispatch = useTasksDispatch();
    const [value, setValue] = useState()

  return (
    <div className='addtask'><input placeholder='title: walk a mile' value={value} onChange={(e) => {setValue(e.target.value)}}/><button onClick={() => {dispatch({type: "add", description: value})}}>Add</button></div>
  )
}

export default AddTaskComponent