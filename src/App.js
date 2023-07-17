import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.styles.scss';

import RootLayout from './pages/Root';
import HomePage from './pages/Home/HomePage';
import TaskCreationPage from './pages/Tasks/TasksCreationPage';
import TaskListingPage from './pages/Tasks/TasksListingPage';
import UserPage from './pages/Users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element : <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/users/new', element: <TaskCreationPage /> },
      { path: '/users/tasks', element: <TaskListingPage /> },
      { path: '/users', element: <UserPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
