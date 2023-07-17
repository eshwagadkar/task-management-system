
import { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utility/validator';

import './NewTask.styles.scss';

const formReducer = (state, action) => {
    switch(action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for(const inputId in state.inputs ){
                if(inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs, 
                    [action.inputId] : { value: action.value, isValid: action.isValid }
                }, 
                isValid: formIsValid
             };
    
        default:
            return state;
    }
};

const NewTask = () => {

    const [ formState, dispatch ] = useReducer(formReducer,  { 
        inputs : {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    // Title Input Handlers
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
             type: 'INPUT_CHANGE', 
             value: value,
             isValid: isValid,
             inputId: id
           });
    }, []);

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