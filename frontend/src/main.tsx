// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { RootLayout } from './layouts/RootLayout'
import { Landing } from './pages/Landing'
import { Proyectos } from './pages/Proyectos'
import { Contacto } from './pages/Contacto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'proyectos', element: <Proyectos /> },
      { path: 'contacto', element: <Contacto /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
