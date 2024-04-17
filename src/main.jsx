import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import './index.css'
import Router from './router/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </HelmetProvider>
    <ToastContainer
            position="top-center"
            autoClose={2000}
            toastStyle={{ borderRadius: '10px',background:'#742A2A',color:'white',fontSize:'18px',fontWeight:'bold' }}
            progressStyle={{background:'white'}}
            closeOnClick={true}></ToastContainer>
  </React.StrictMode>,
)
