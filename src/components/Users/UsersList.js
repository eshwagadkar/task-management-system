import UsersItem from './UsersItem';
import './UsersItem.styles.scss';

const UsersList = props => {

    // if no users 
    if(props.items.length === 0){
        return (
            <div className='center'>
                <h2>No Users Found</h2>
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