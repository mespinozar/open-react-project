import React, { useState, useEffect } from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';
import '../../styles/task.scss';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, levels.normal );

    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      console.log('Modificacion de tareas');
      setLoading(false);
    
      return () => {
        console.log('Componente en marcha')
      }
    }, [tasks])
    

    const changeCompleted = ( id ) => {
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
