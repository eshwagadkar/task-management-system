import { useParams } from 'react-router-dom';

import TasksList from "../../components/Tasks/TaskList";

const DUMMY_TASKS = [
    
    {   
        id: 't1',
        title: 'Finish paint',
        description: 'Painting the famous architectural building',
        dueDate: '23-12-1995',
        creator: 'u1'
    },

    {   
        id:'t2',
        title: 'Finish paint the task',
        description: 'Painting the famous architectural building',
        dueDate: '25-12-1995',
        creator: 'u2'
    }  
]

const ListUserTasks = () => {

    const userId = useParams().userId;
    const filteredtasks = DUMMY_TASKS.filter(task => task.creator === userId)
    
    return <TasksList items={filteredtasks} />
}

export default ListUserTasks;