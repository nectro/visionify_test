import { useTasksDispatch } from '@/state/tasksReducer';
import React from 'react'

function Task({ id, description, isDone }) {

        const  dispatch = useTasksDispatch();
  return (
    <div className='task'>
        {id}.
        <p className={isDone?`doneTask`:""}>{description}</p>
        <button onClick={() => {dispatch({type: "complete", id})}}>done</button>
        <button onClick={() => {dispatch({type: "deleted", id})}}>delete</button>
    </div>
  )
}

export default Task