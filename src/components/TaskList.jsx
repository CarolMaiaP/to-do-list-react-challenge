import styles from './TaskList.module.css';
import clipboard from '../assets/clipboard.svg';
import {Trash} from 'phosphor-react';

export function TaskList(){
  return(
    <div>

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