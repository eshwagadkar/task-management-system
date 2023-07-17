
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utility/validator';
import './NewTask.styles.scss';

const NewTask = () => {
    return <>
        <form className={'task-form'}>
            <Input 
                type="text"
                element="input"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
            />
        </form>
    </>
}

export default NewTask;