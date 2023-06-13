/* eslint-disable react/prop-types */
import styles from './Task.module.css';
import { Trash } from 'phosphor-react'
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export function Task({ task, onDeleteTask }) {
 
    function handleDeleteTask(){
        onDeleteTask(task);
    }

    const [ input, setInput] = useState(true);

    function handleChangeInput(){
        setInput(!input);
        console.log(input);
    }

    return (
        <div className={styles.task}>
            <input type="checkbox" onChange={handleChangeInput}/>
            <div className={styles.controlP}>
                <p>{task.content}</p>
            </div>
            <button type="submit" onClick={handleDeleteTask}><Trash size={24}/></button>
        </div>
    )
}