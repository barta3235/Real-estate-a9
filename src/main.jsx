import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
