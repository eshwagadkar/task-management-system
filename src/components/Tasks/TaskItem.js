import Card from '../../utility/Components/UIElements/Card';

import './TaskItem.styles.scss';

const TaskItem = props => {
    
    const { title, description, dueDate } = props.task;
    return <>
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
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
            </Card>
        </li>
    </>
}

export default TaskItem;