import React from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, levels.normal );

    const changeState = ( id ) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your Tasks :
            </div>
            <TaskComponent task={ defaultTask }/>
        </div>
    );
};


export default TaskListComponent;
