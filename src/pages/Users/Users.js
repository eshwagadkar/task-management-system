import UsersList from "../../components/Users/UsersList";

import './Users.styles.scss';

const UserPage = () => {

    const USERS = [
        {
          id: 'u1',
          name: 'Max Schwarz',
          image:
            'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          notes: 3
        }
      ];
    
    return <UsersList items={USERS} />; 
}

export default UserPage;