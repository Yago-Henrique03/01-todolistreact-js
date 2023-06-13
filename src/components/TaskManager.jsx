import { PlusCircle } from 'phosphor-react';
import { Trash } from 'phosphor-react'
import { Task } from './Task';
import { useState } from 'react';

import styles from './TaskManager.module.css';
import clipboard from '../assets/Clipboard.svg';

export function TaskManager() {

    const [ tasks, setTasks ] = useState([{
        id: 1,
        content: 'Este é o meu primeiro task',
        isComplete: false,
    }])

    const [ taskName, setTaskName] = useState('')

    function handleTaskName(){
        const input_name = event.target.value
        setTaskName(input_name);
    }

    function handleAddNewTask() {
        event.preventDefault();
        setTasks([...tasks, { id: tasks.length + 1, content: taskName, isComplete: false}]);
        setTaskName('')
    }

    function DeleteTask(taskToDelete) {
        const tasksWithoutDeletedOne = tasks.filter( task => task != taskToDelete )
        setTasks(tasksWithoutDeletedOne);
    }

    return (
        <div className={styles.flexControl}>
            <form onSubmit={handleAddNewTask}>
                <input type="text" name="taskName" value={taskName} onChange={handleTaskName}placeholder="Adicione uma tarefa"/>
                <button type="submit">Criar<PlusCircle size={16} /></button>
            </form>
            <div className={styles.flexManager}>
                <div className={styles.taskCount}>
                    <p>Tarefas criadas <span>{tasks.length}</span></p>
                    <p>Concluídas <span>0</span></p>
                </div>

                { tasks.length > 0 ? (
                    <div className={styles.manager}>
                        {tasks.map( task => {
                            return (
                                <Task key={task.id} onDeleteTask={DeleteTask} task={task}/>
                            )
                        })}
                    </div> 
                ) : (
                    <div className={styles.managerWithoutTasks}>
                        <img src={clipboard} />
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                )}

            </div>  
        </div>
    )
}