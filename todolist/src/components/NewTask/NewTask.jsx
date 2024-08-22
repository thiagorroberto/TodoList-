import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { useState } from 'react'



export default function NewTask({createTask}) {

    const [task, setTask] = useState('')

    const handleCreateTask = (e) => {
        e.preventDefault()
        createTask(task)
        setTask('')
    }

    return (
        <form  onSubmit={handleCreateTask} className={styles.formContainer}>
            <input type="text" required placeholder='Adicione uma nova task' value={task}  onChange={e => setTask(e.target.value)}/>
            <button type='submit'>
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}