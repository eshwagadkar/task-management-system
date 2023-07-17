import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/utility/validator';

const DUMMY_TASKS = [
    
    {   
        id: 't1',
        title: 'Finish paint',
        description: 'Painting the famous architectural building',
        dueDate: '23-12-1995',
        creator: 'u1'
    },

    {   
        id: 't2',
        title: 'Finish paint the task',
        description: 'Painting the famous architectural building',
        dueDate: '25-12-1995',
        creator: 'u2'
    }  
]


const UpdateTask = props => {

    const taskId = useParams().taskId;

    const identifiedTask = DUMMY_TASKS.find(task => task.id === taskId)

    if(!identifiedTask){
        return (
            <div className='center'>
                <h2>Couldnot find place</h2>
            </div>
        ) 
        
    }

    return <>
        {/* Edit Flow */}
        <form>
            {/* Task Title Input */}
            <Input
                id="title"
                type="text"
                element="input"
                label="Title"
                validators={[ VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={() => {}}
                value={identifiedTask.title}
                valid={true}
            />

            {/* Task Description Input */}
            <Input 
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={() => {}}
                value={identifiedTask.description}
                valid={true}
            />

            {/* Due Date Input */}
            <Input 
                id="dueDate"
                type="text"
                element="input"
                label="Due Date"
                placeholder="For ex. 26th August 2023 (in string format)"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a Due date as a string For. ex. 26th Aug 2023 )."
                onInput={() => {}}
                value={identifiedTask.dueDate}
                valid={true}
          />

         {/* Form Submit Button */}
         <Button type="submit" disabled={true}>
            UPDATE THE TASK
         </Button>

        </form>
    </>
}

export default UpdateTask;