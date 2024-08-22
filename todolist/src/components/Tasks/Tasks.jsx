import styles from './Tasks.module.css'

import noTasksImg from '../../assets/noTasks.svg'
import Task from '../Task/Task'

export default function Tasks({ tasks, deleteTask, countTasksCompleted, listTasksCompleted }) {
    return (
        <div className={styles.tasksContainer}>
            <header>
                <div className={styles.createdContainer}>
                    <strong>Tarefas criadas</strong>
                    <p>{tasks.length}</p>
                </div>
                <div className={styles.completedContainer}>
                    <strong>Concluídas</strong>
                    <p>{listTasksCompleted}</p>
                </div>
            </header>
            <main className={styles.listContainer}>
                
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <Task key={task} task={task} deleteTask={deleteTask} countTasksCompleted={countTasksCompleted} />
                    ))
                ) : (
                    <div className={styles.noTasksContainer}>
                        <img src={noTasksImg} alt="" />
                        <p className={styles.firstText}>Você ainda não tem tarefas cadastradas</p>
                        <p className={styles.secondText}>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                )}
            </main>
        </div>
    )
}