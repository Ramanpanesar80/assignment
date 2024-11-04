import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskName, setEditingTaskName] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const editTask = (id) => {
    const task = tasks.find(task => task.id === id);
    setEditingTaskId(id);
    setEditingTaskName(task.name);
  };

  const saveTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, name: editingTaskName } : task));
    setEditingTaskId(null);
    setEditingTaskName('');
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Task List</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{ padding: '8px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={addTask} style={{ padding: '8px 16px' }}>Add Task</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')} style={{ padding: '8px 16px', marginRight: '10px' }}>All</button>
        <button onClick={() => setFilter('completed')} style={{ padding: '8px 16px', marginRight: '10px' }}>Completed</button>
        <button onClick={() => setFilter('incomplete')} style={{ padding: '8px 16px' }}>Incomplete</button>
      </div>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {filteredTasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              style={{ marginRight: '10px' }}
            />
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editingTaskName}
                onChange={(e) => setEditingTaskName(e.target.value)}
                onBlur={() => saveTask(task.id)}
                style={{ padding: '8px', flex: '1' }}
              />
            ) : (
              <span
                onClick={() => editTask(task.id)}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  flex: '1',
                  cursor: 'pointer'
                }}
              >
                {task.name}
              </span>
            )}
            <button onClick={() => deleteTask(task.id)} style={{ padding: '8px 16px', marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;