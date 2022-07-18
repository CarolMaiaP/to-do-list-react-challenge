import styles from './CreateTask.module.css';
import {PlusCircle} from 'phosphor-react';
import { TaskList } from './TaskList';
import { useState } from 'react';

export function CreateTask(){

  const [tasks, setTasks] = useState([
    'Estudar React'
  ])

  const [newTaskText, setNewTaskText] = useState('');
  
  function handleCreateNewTask(){
    event.preventDefault();
    
    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange(){
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete){
    const commentsWithoutDeletedOne = tasks.filter(task =>{
      return task !== taskToDelete;
    })
    
    setTasks(commentsWithoutDeletedOne);
  }

  return(
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" name='newTask' onChange={handleNewTaskChange} value={newTaskText}
        />
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
          return <TaskList key={task} content={task} onDeleteTask={deleteTask}/>
        })}
      </div>
    </div>
  )
}