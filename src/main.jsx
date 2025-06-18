import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from 'react-router'
import { Home } from './page/home.jsx'
import { About } from './page/About.jsx'
import { Contact } from './page/Contact.jsx'

const router = createHashRouter([
  {
    path: '/instal-met/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: '/instal-met/o-nas', Component: About },
      { path: '/instal-met/kontakt', Component: Contact },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
