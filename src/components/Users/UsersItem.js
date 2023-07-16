import Avatar from '../../utility/Components/UIElements/Avatar';
import './UsersItem.styles.scss';

const UsersItem = props => {
    return (
        <li className='user-item'>  
            {/* User Item Content */}
            <div className='user-item__content'> 
                {/* User Image */}
                <div className='user-item__image'>
                    <Avatar image={props.user.image} alt={props.user.name} />
                </div>
                {/* User Info */}
                <div className='user-item__info'>
                    <h2>{props.user.name}</h2>
                    <h3>
                        {props.user.notes} {props.user.notes === 1 ? 'Place' : 'Places' }
                    </h3>
                </div>
            </div>
        </li>
    )
}

export default UsersItem;