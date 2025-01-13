import { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'add': {
      return [...tasks, {
        id: tasks.length + 1,
        description: action.description,
        completed: false,
      }];
    }
    case 'complete': {
      return tasks.map(t => {
        if (t.id === action.id) {
          return {
            id: action.id,
            description: t.description,
            completed: true,
        };
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
    //demo task
    {
        id: 1,
        description: "walk a mile!",
        completed: true,
    }
]

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider
        value={dispatch}
      >
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}