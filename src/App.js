import { useState, useCallback } from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom'
import './App.styles.scss';

import RootLayout from './pages/Root';
import HomePage from './pages/Home/HomePage';
import NewTask from './pages/Tasks/NewTask';
import UpdateTask from './pages/Tasks/UpdateTask';
import ListUserTasks from './pages/Tasks/ListUserTasks';
import UserPage from './pages/Users/Users';
import Auth from './pages/Users/Auth';

import { AuthContext } from './shared/context/authContext';

const App = () => {

  const [ isLoggedIn,  setIsLoggedIn ] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  let routes;

  if(isLoggedIn) {
    routes = (
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path='/:userId/tasks' element={<ListUserTasks />} />
          <Route path='/users/new' element={<NewTask />} />
          <Route path='/tasks/:taskId' element={<UpdateTask />} />
          <Route path='/users' element={<UserPage />} />
          <Route path="*" element={<Navigate replace to='/' />} />
        </Route>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Navigate replace to='/auth' />} />
        </Route>
     </Routes>  
    );
  }

  return <>
  <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
     {routes}
  </AuthContext.Provider>
    
  
  </>
}

export default App;
