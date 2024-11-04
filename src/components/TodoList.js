import React, { useState } from "react";
import './TodoList.css';

function TodoList(props) {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);//array of tasks

    const handleAddTask = () => {
        if (task.trim()) {
        setTasks([...tasks,{ Text: task }]);
            setTask('');
        }
    };
//["task1", "task2", "task3", "task4", "task5"]// splice(2,3)
    const handleRemoveTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.length > 0 && (
                    <>
                        {(() => {
                            const taskElement = [];
                            for (let i = 0; i < tasks.length; i++) {
                                taskElement.push(
                                    <li>
                                        {tasks[i].Text}
                                        <button onClick={
                                            () => handleRemoveTask(i)}
                                        >Remove</button>
                
                                    </li>
                                );
                            }
                            return taskElement;
                        })()}
                    </>
                )}
            </ul>      
        </div>
    );
}

export default TodoList;