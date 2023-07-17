// import { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './TaskItem.styles.scss';

const TaskItem = props => {

    // const [] = useState(false);

    const { title, description, dueDate } = props.task;
    return <>
        {/* <Modal > */}
            <li className='task-item'>
                <Card className='task-item__content'>
                    {/* Task Item Info */}
                    <div className='task-item__info'>
                        <h2>{title}</h2>
                        <h3>{description}</h3>
                        <p>{dueDate}</p>
                    </div>

                    {/* Task Actions */}
                    <div className='task-item__actions'>
                        <Button to={`/tasks/${props.id}`}>EDIT</Button>
                        <Button danger>Delete</Button>
                    </div>
                </Card>
            </li>
        {/* </Modal> */}
    </>
}

export default TaskItem;