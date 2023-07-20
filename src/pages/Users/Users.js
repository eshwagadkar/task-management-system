import { useEffect, useState } from 'react';

import UsersList from "../../components/Users/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import './Users.styles.scss';

const UserPage = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState();
    const [ loadedUsers, setLoadedUsers ] = useState();

    useEffect(() => {
      const sendRequest = async () => {

        setIsLoading(true);

        try{
            const response = await fetch('http://localhost:3000/api/v1/users/');
            const responseData = await response.json(); 

            if(!response.ok){
              throw new Error(responseData.message);
            }
            console.log(responseData)
            setLoadedUsers(responseData);
          } catch (err) {
            setIsLoading(false);
            setError(err.message);
          }
          
      setIsLoading(false);

      };
      sendRequest();
    }, [] );

    const errorHandler = () =>{
      setError(null);
    }

    return <>
      <ErrorModal error={error} onClear={errorHandler} />
      {
        isLoading && (
          <div className='center'>
            <LoadingSpinner />
          </div>
        )
      }
     {  !isLoading && loadedUsers && <UsersList items={loadedUsers} /> } 
    </>
}

export default UserPage;