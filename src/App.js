import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.styles.scss';

import RootLayout from './pages/Root';
import HomePage from './pages/Home/HomePage';
import NewTask from './pages/Tasks/NewTask';
import UpdateTask from './pages/Tasks/UpdateTask';
import ListUserTasks from './pages/Tasks/ListUserTasks';
import UserPage from './pages/Users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element : <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/:userId/tasks', element: <ListUserTasks /> },
      { path: '/users/new', element: <NewTask /> },
      { path: '/tasks/:taskid', element: <UpdateTask /> },
      { path: '/users', element: <UserPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
