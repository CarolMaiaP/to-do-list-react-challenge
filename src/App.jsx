import styles from './App.module.css'
import { Header } from './components/Header'
import { ListTasks } from './components/ListTasks'
import { Task } from './components/Task'


export function App() {
  return (
    <div>
      <Header/>
      <div  className={styles.wrapper}>
        <Task/>
        <ListTasks/>
      </div>
    </div>
  )
}
