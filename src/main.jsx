import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import DonationDetails from './Components/DonationDetails/DonationDetails';
import ErrorPage from './Components/Errorpage/ErrorPage';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children:[
      {
        index: true,
        element:<Home></Home>,
        loader: () => fetch('/data.json')

      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/data/:id',
        element:<DonationDetails></DonationDetails>,
        loader: () => fetch('/data.json')
        
        
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
