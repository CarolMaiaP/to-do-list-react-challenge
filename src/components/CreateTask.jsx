import styles from './CreateTask.module.css';
import {PlusCircle} from 'phosphor-react';
import { TaskList } from './TaskList';
import { useState } from 'react';

export function CreateTask(){

  const [tasks, setTasks] = useState([
    'Estudar React'
  ])

  const [newTaskText, setNewTaskText] = useState('');

  function handleNewTask(){
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange(){
    setNewTaskText(event.target.value);
  }

  return(
    <div>
      <form onSubmit={handleNewTask} className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" value={newTaskText} name='newTask' onChange={handleNewTaskChange}/>
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
          return <TaskList content={task}/>
        })}
      </div>
    </div>
  )
}