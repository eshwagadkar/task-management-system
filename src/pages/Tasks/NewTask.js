
import Input from '../../utility/components/FormElements/Input';
import './NewTask.styles.scss';

const NewTask = () => {
    return <>
        <form className={'task-form'}>
            <Input 
                type="text"
                element="input"
                label="Title"
                validators={[]}
                errorText="Please enter a valid title"
            />
        </form>
    </>
}

export default NewTask;