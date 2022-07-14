import styles from './Task.module.css';
import {PlusCircle} from 'phosphor-react';

export function Task(){
  return(
      <form className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit">Criar<PlusCircle size={18}/></button>
      </form>
  )
}