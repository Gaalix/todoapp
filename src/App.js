import React, {useState, useEffect} from "react";
import {Button, TextInput, UnorderedList, Header, HeaderName} from "@carbon/react";
import Task from "./components/Task";


function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            return JSON.parse(savedTasks);
        } else {
            return [];
        }
    });
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
        else {
            window.alert('Task cannot be empty');
        }
    };

    const toggleTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div>
            <Header aria-label="To Do App">
                <HeaderName href="" prefix="">
                    To Do App
                </HeaderName>
            </Header>
            <div className="container" style={{ marginTop: '48px', padding: '20px' }}>
                <div className="task-input">
                    <TextInput
                        id="new-task"
                        placeholder="Enter your task"
                        value={newTask}
                        onChange={e => setNewTask(e.target.value)}
                    />
                    <Button onClick={addTask} style={{ marginTop: '10px' }}>Add task</Button>
                </div>
                <div className="task-list" style={{ marginTop: '20px' }}>
                    <h2>Task List</h2>
                    <UnorderedList>
                        {tasks.map((task, index) => (
                            <Task key={index} task={task} index={index} toggleTask={toggleTask} deleteTask={deleteTask}/>
                        ))}
                    </UnorderedList>
                </div>
            </div>
        </div>
    );
}

export default App;
