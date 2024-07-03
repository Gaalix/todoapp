import React from 'react';
import { Button, Checkbox, ListItem } from '@carbon/react';

function Task({ task, index, toggleTask, deleteTask }) {
  return (
    <ListItem>
      <Checkbox 
        id={`task-${index}`}
        labelText={task.text}
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />
      <Button onClick={() => deleteTask(index)}>Delete</Button>
    </ListItem>
  );
}

export default Task;