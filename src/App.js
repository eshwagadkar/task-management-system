import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.styles.scss';

import RootLayout from './pages/Root';
import HomePage from './pages/Home/Home';
import TaskPage from './pages/Tasks/Tasks';
import UserPage from './pages/Users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element : <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/tasks', element: <TaskPage /> },
      { path: '/users', element: <UserPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
