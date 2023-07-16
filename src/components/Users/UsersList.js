import UsersItem from './UsersItem';
import Card from '../../utility/Components/UIElements/Card';
import './UsersItem.styles.scss';

const UsersList = props => {

    // if no users 
    if(props.items.length === 0){
        return (
            <div className='center'>
                <Card>
                  <h2>No Users Found</h2>
                </Card>
            </div>
        )
    }

    return <ul className='users-list'>
        {props.items.map(user => (
                 <UsersItem user={user} key={user.id} />
             )
        )}
    </ul>
}

export default UsersList;