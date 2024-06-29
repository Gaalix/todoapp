import React, {useState, useEffect} from "react";
import {Button, TextInput, UnorderedList, FormLabel, Header, HeaderName} from "carbon-components-react";
import Task from "./components/Task";
import "./App.css";


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
        setTasks([...tasks, {text: newTask, completed: false}]);
        setNewTask('');
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
            <div className="container">
                <div className="task-input">
                    <FormLabel for="new-task">Input your task:</FormLabel>
                    <TextInput id="new-task" labelText="" value={newTask} onChange={e => setNewTask(e.target.value)}/>
                    <Button onClick={addTask}>Add task</Button>
                </div>
                <div className="task-list">
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
