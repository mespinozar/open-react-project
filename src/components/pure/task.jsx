import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { levels } from '../../models/levels.enum';



const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
      console.log('tarea creada')
    
      return () => {
        console.log(`Task: ${task.name} is going to unmount`)
      }
    }, [task]);
    
    function taskLevelBadge () {
        switch (task.level) {
            case levels.normal:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-primary">
                            {task.level}
                        </span>

                    </h6>
                )
            case levels.urgent:
                return(
                    <h6 className="mb-0">
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
                case levels.blocking:
                    return(
                        <h6 className="mb-0">
                            <span className='badge bg-danger'>
                                {task.level}
                            </span>
                        </h6>
                    )
            default:
                break;
        }

    }

    function taskIconCompletedIcon() {
        if(task.completed) {
            return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:'green'}}></i>)
        } else {
            return(<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    return (

        <tr className="fw-normal">
            <th>
                <span className="ms-2">{ task.name }</span>
            </th>
            <td className="align-middle">
                <span>{ task.description }</span>
            </td>
            <td className="align-middle">
                {taskLevelBadge()}
            </td>
            <td className="align-middle">
                {task.completed ?
                    (<i className="bi-toggle-on" style={{color: 'green'}}></i>) :
                    (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)
                }
                <i className='bi-trash' style={{color: 'tomato', fontSize: '20px'}}></i>
                <span>{ task.completed ? 'Completed' : 'Pending' }</span>
            </td>
            <td className="align-middle">
                {taskIconCompletedIcon}
                <id className="bi-trash task-action" style={{color: 'tomato'}} onclick={() =>remove(task)} ></id>
            </td>
        </tr>


    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
