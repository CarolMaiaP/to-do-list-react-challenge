import styles from './App.module.css'
import { CreateTask } from './components/createTask'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'


//id
//isCompleted:boolean
//task: string
//delete


export function App() {
  return (
    <div>
      <Header/>
      <div  className={styles.wrapper}>
        <CreateTask/>
      </div>
    </div>
  )
}
