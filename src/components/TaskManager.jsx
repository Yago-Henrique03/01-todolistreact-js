import styles from './TaskManager.module.css';
import { PlusCircle } from 'phosphor-react';

export function TaskManager() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Adicione uma tarefa"/>
                <button type="submit">Criar<PlusCircle size={16} /></button>
            </form>
            <div className={styles.flexManager}>
                <div className={styles.taskCount}>
                    <p>Tarefas criadas <span>0</span></p>
                    <p>Concluídas <span>0</span></p>
                </div>
                <div className={styles.manager}>

                </div>
            </div>  
        </div>
    )
}