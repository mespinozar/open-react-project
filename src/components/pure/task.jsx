import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { levels } from '../../models/levels.enum';



const TaskComponent = ({ task }) => {

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

    function taskIconCompleted() {
        if(task.completed) {
            return(<i className='bi-toggle-on' style={{color:'green'}}></i>)
        } else {
            return(<i className='bi-toggle-off' style={{color: 'grey'}}></i>)
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
                {taskIconCompleted}
                <id className="bi-trash" style={{color: 'tomato'}}></id>
            </td>
        </tr>



        //<div>
        //    <h2 className="task-name">
        //        Nombre: { task.name }
        //    </h2>
        //    <h3>
        //        Descripcion: { task.description }
        //    </h3>
        //    <h4>
        //        Level: { task.level }
        //    </h4>
        //    <h5>
        //        This task is: { task.completed ? 'COMPLETED':'PENDING' }
        //    </h5>
        //</div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;
