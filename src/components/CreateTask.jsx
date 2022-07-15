import styles from './CreateTask.module.css';
import {PlusCircle} from 'phosphor-react';
import { TaskList } from './TaskList';


const tasks = [
  1,
  2,
  3,
  4,
];

export function CreateTask(){
  return(
    <div>
      <form className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit">Criar<PlusCircle size={18}/></button>
      </form>

      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p><span>0</span>
        </div>
        <div className={styles.completedTasks}>
          <p>Concluídas</p><span>0</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map( task => {
          return <TaskList/>
        })}
      </div>
    </div>
  )
}