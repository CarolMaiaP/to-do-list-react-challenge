import clipboard from '../assets/clipboard.svg';
import styles from './ListTasks.module.css';
import {Trash} from 'phosphor-react';

export function ListTasks(){
  return(
    <div>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p><span>0</span>
        </div>
        <div className={styles.completedTasks}>
          <p>Concluídas</p><span>0</span>
        </div>
      </header>

      <div className={styles.emptyTaskList}>
        <img src={clipboard}/>
        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

      <div className={styles.task}>
        <label className={styles.check}>
          <input type="checkbox" />
          <span className={styles.checkbox}></span>
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </label>
        
        <button className={styles.removeTask}>
          <Trash size={18}/>
        </button>
      </div>
    </div> 
  )
}