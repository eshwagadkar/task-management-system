import TasksList from "../../components/Tasks/TaskList";


const DUMMY_TASKS = [
    {
        title: 'Finish paint',
        description: 'Painting the famous architectural building',
        dueDate: '23-12-1995'
    }
]

const TaskListingPage = () => {

    return <TasksList items={DUMMY_TASKS} />
}

export default TaskListingPage;