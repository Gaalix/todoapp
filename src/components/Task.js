import React from 'react';
import { Button, Checkbox, ListItem } from 'carbon-components-react';

function Task({ task, index, toggleTask, deleteTask }) {
    return (
        <ListItem key={index}>
            <Checkbox labelText={task.text} checked={task.completed} onChange={() => toggleTask(index)} />
            <Button onClick={() => deleteTask(index)}>Delete</Button>
        </ListItem>
    );
}

export default Task;