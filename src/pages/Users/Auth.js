import { useForm } from '../../shared/hooks/form-hook';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/utility/validator';

import './Auth.styles.scss';


const Auth = () => {

    const [ formState, inputHandler ] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, 
    false );

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return <>
        <Card className="authentication" >
            <h2 className='authentication__header'>Login Required</h2><br />
            <hr />
            <form>
                {/* Email Input */}
                <Input
                 id='email'
                 element='input'
                 type="email"
                 label='E-mail'
                 validators={ [VALIDATOR_EMAIL()]}
                 errorText="Please enter a valid e-mail address"
                 onInput={inputHandler}
                 />

                {/* Password Input   */}
                <Input
                 id='password'
                 element='input'
                 type="password"
                 label='Password'
                 validators={ [VALIDATOR_MINLENGTH(5)]}
                 errorText="Please enter a valid password, atleast 5 characters"
                 onInput={inputHandler}
                 />

                 <Button type="submit" disabled={!formState.isValid}>LOGIN</Button>
            </form>
        </Card>
    </>
};

export default Auth;