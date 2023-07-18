import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import TaskItem from './TaskItem';

import './TaskList.styles.scss';

const TasksList = props => {

    if(props.items.length === 0){
        return <div className='task-list center'>
            <Card>
                <h2>No Tasks Found.</h2>
                <Button to={`/users/new`}>Create A Task</Button>
            </Card>
        </div>
    }


    return <ul className='task-list'> 
        {
            props.items.map(task => <TaskItem key={task.id} task={task} />)
        }
    </ul>
}

export default TasksList;