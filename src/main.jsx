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

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    
    children:[
      {
        index: true,
        path:'/home',
        element:<Home></Home>,
        loader: () => fetch('/public/data.json')

      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader: () => fetch('/public/data.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/data/:id',
        element:<DonationDetails></DonationDetails>,
        loader: () => fetch('/public/data.json')
        
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
