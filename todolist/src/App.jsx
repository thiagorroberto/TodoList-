import './global.css'
import styles from './App.module.css'
import Header from './components/Header/Header'
import NewTask from './components/NewTask/NewTask'
import Tasks from './components/Tasks/Tasks'
import { useState } from 'react'

export default function App() {

  const [tasks, setTasks] = useState([])

  const [tasksCompleted, setTasksCompleted] = useState(0)

  function createTask(task) {
    setTasks(state => [...state, task])
    
  }

  function deleteTask(taskDeleted) {
    const newList = tasks.filter(task => task !== taskDeleted)
    console.log(newList);
    
    setTasks(newList)
    
  }

  function countTasksCompleted (task) {
    if(task === true) {
      setTasksCompleted(tasksCompleted + 1)
    } else {
      setTasksCompleted(tasksCompleted - 1)
    }
    
  }

  return (
    <div className={styles.container}>
        <Header/>
        <NewTask createTask={createTask}/>
        <Tasks tasks={tasks} deleteTask={deleteTask} countTasksCompleted={countTasksCompleted} listTasksCompleted={tasksCompleted} />
    </div>
  )
}

