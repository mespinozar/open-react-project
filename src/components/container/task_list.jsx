import React, { useState, useEffect } from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default description1', true, levels.normal );
    const defaultTask2 = new Task('Example2', 'Default description2', false, levels.urgent );
    const defaultTask3 = new Task('Example3', 'Default description3', false, levels.blocking );

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      //console.log('Modificacion de tareas');
      setLoading(false);
    
      return () => {
        console.log('Componente en marcha')
      }
    }, [tasks])

    function completeTask(task) {
        console.log('Complete this Task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks(index).completed = !tempTasks[index].completed;
        setTasks(tempTasks);

    }

    function deleteTask(task) {
        console.log('Delete this Task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);

    }

    function addTask(task) {
        console.log('');
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }
    

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <table className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => {
                                return (
                                    <TaskComponent 
                                        key={index}
                                        task={ task }
                                        complete= { completeTask }
                                        remove = {deleteTask}
                                    />
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <TaskForm add={addTask}/>
            </div>
            
        </div>
    );
};


export default TaskListComponent;
