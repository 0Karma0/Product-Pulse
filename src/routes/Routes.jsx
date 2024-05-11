import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import AllQueries from '../pages/AllQueries'
import MyQueries from '../pages/MyQueries'
import PrivateRoute from './PrivateRoute'
import AddQueries from '../pages/AddQueries'
import UpdateQueries from '../pages/UpdateQueries'
import MyQueriesDetails from '../pages/MyQueriesDetails'
import AllQueriesDetails from '../pages/AllQueriesDetails'
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
        element: <AllQueries />,
      },
      {
        path: '/myQueries',
        element: <PrivateRoute>
          <MyQueries></MyQueries>
        </PrivateRoute>,
      },
      {
        path: '/addQueries',
        element: <PrivateRoute>
          <AddQueries></AddQueries>
        </PrivateRoute>,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <UpdateQueries></UpdateQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/myQueryDetails/:id",
        element: (
          <PrivateRoute>
            <MyQueriesDetails></MyQueriesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/queryDetails/:id",
        element: (
          <PrivateRoute>
            <AllQueriesDetails></AllQueriesDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
