
import { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utility/validator';
import { useForm } from '../../shared/hooks/form-hook';
import './Task.styles.scss';


const NewTask = () => {

    const [formState, inputHandler] = useForm({
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
                                      }, false );


    // Form (TASK) Submit Handler
    const taskSubmitHandler = event => {
        event.preventDefault();
    }

    return <>   
        {/* Create Flow */}
        <form className={'task-form'} onSubmit={taskSubmitHandler} >

            {/* Task Title Input */}
            <Input 
                id="title"
                type="text"
                element="input"
                label="Title"
                placeholder="My new task"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
                onInput={inputHandler}
          />
         
         {/* Task Description Input  */}
          <Input 
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
                />

          {/* Due Date Input  */}
          <Input 
                id="dueDate"
                type="text"
                element="input"
                label="Due Date"
                placeholder="For ex. 26th August 2023 (in string format)"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a Due date as a string For. ex. 26th Aug 2023 )."
                onInput={inputHandler}
          />
          
         {/* Form Submit Button */}
          <Button 
            type="submit"
            disabled={!formState.isValid}>
            CREATE NEW TASK
          </Button>

        </form>
    </>
}

export default NewTask;