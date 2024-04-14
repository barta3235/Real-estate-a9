import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={Router} />
      </AuthProvider>
  </React.StrictMode>,
)
