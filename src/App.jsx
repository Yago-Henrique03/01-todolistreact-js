import { Header } from "./components/Header";
import styles from './App.module.css';
import { TaskManager } from "./components/TaskManager";

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <TaskManager/>
      </div>
    </div>
  )
}