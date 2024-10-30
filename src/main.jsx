import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './components/Home/Home'
import Users from './components/Users/Users'
import UserDetails from './components/UserDetails/UserDetails'
import Posts from './components/Posts/Posts'
import PostDetails from './components/PostDetails/PostDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />
      },
      {
        path:"/user/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />
      },
      {
        path:"/posts",
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts />
      },
      {
        path:'/post/:postId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails />
      },
      {
        path:'/blogs',
        element: <h1>This is our Blog page!</h1>
      },
      {
        path:"/about",
        element:<h1>This is About us Page!</h1>
      }
    ]
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
