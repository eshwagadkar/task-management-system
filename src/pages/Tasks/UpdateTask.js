import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';

import './Task.styles.scss';

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

    const [isLoading, setIsLoading] = useState(true);
    const taskId = useParams().taskId;

    
    // Leverage useForm(Hook)
    const [formState, inputHandler, setFormData ] = useForm({
        title: {
            value: '',
            isValid: false
        }, 
        description: {
            value: '',
            isValid: false
        },
        dueDate: {
            value: '',
            isValid: false
        }
        
    }, true)
    
    const identifiedTask = DUMMY_TASKS.find(task => task.id === taskId);

    useEffect(() => {

        if(identifiedTask) {
            
            setFormData({
                title: {
                    value: identifiedTask.title,
                    isValid: true
                }, 
                description: {
                    value: identifiedTask.description,
                    isValid: true
                },
                dueDate: {
                    value: identifiedTask.dueDate,
                    isValid: true
                }
            }, true);

        }
        setIsLoading(false)
    }, [setFormData, identifiedTask] );


    const taskSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    // If no task found
    if(!identifiedTask){
        return (
            <div className='center'>
                <Card>
                   <h2>Unable to find the task!</h2>
                </Card>
            </div>
        )   
    }

    if(isLoading){
        return (
            <div className='center'>
                <h2>Loading...</h2>
            </div>
        );   
    }

    return <>
        {/* Edit Flow */}
            <form className='task-form' onSubmit={taskSubmitHandler}>
            {/* Task Title Input */}
            <Input
                id="title"
                type="text"
                element="input"
                label="Title"
                validators={[ VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />

            {/* Task Description Input */}
            <Input 
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
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
                onInput={inputHandler}
                initialValue={formState.inputs.dueDate.value}
                initialValid={formState.inputs.dueDate.isValid}
          />

         {/* Form Submit Button */}
         <Button type="submit" disabled={!formState.isValid}>
            UPDATE THE TASK
         </Button>

        </form> 
    </>
}

export default UpdateTask;