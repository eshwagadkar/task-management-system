import Card from '../../shared/components/UIElements/Card';
import TaskItem from './TaskItem';

import './TaskList.styles.scss';

const TasksList = props => {

    if(props.items.length === 0){
        return <div className='task-list center'>
            <Card>
                <h2>No Tasks Found.</h2>
                <button>Share Task</button>
            </Card>
        </div>
    }


    return <ul className='task-list'> 
        {
            props.items.map(task => <TaskItem task={task} />)
        }
    </ul>
}

export default TasksList;