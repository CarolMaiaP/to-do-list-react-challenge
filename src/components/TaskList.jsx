import styles from './TaskList.module.css';
import clipboard from '../assets/clipboard.svg';
import {Trash} from 'phosphor-react';

export function TaskList(props){
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
          <p>{props.content}</p>
        </label>
        
        <button className={styles.removeTask}>
          <Trash size={18}/>
        </button>
      </div>
    </div>
  )
}