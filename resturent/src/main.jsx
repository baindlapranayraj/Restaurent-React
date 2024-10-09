import React,{StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from 'react-router-dom'

//Pages
import Error from './assets/components/Error'
import About from './assets/components/About'
import Contact from './assets/components/Contat'
import RestaurentMenu from './assets/components/resturentmenu'
import Body from './assets/components/Body'


const router =  createBrowserRouter ([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/resturents/:resId",
        element: <RestaurentMenu/>,
      },
    ],
    errorElement: <Error/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
