import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import AllQueries from '../pages/AllQueries'
import MyQueries from '../pages/MyQueries'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/allQueries',
        element: <AllQueries/>,
      },
      {
        path: '/myQueries',
        element: <MyQueries></MyQueries>,
      },
    ],
  },
])

export default router
