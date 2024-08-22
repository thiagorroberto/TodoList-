import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { useState } from 'react'

export default function Task({task, deleteTask, countTasksCompleted}) {

    const [taskCompleted, setTaskCompleted] = useState(false)

    function handleCompleteTask () {
        const toggleTaskCompleted = !taskCompleted
        setTaskCompleted(toggleTaskCompleted)
        countTasksCompleted(toggleTaskCompleted)
    }

    return (
        <div className={styles.taskContainer}>
            <button className={ taskCompleted === true ? styles.taskCompleted : styles.circle} onClick={handleCompleteTask}></button>
            <p style={ taskCompleted === true  ? {textDecoration: 'line-through', color: 'var(--gray-300)'} : {textDecoration: 'none'}  } >{task}</p>
            <button className={styles.deleteBtn} onClick={() => deleteTask(task)}>
                <Trash size={18}/>
            </button>
        </div>
    )
}