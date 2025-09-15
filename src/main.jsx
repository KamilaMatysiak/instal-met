import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createHashRouter } from 'react-router'
import { Home } from './page/home.jsx'
import { About } from './page/About.jsx'
import { Contact } from './page/Contact.jsx'
import { OfferPage } from './page/OfferPage.jsx'
const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: '/o-nas', Component: About },
      { path: '/kontakt', Component: Contact },
      { path: '/oferta/:kategoria?', Component: OfferPage },
    ],
  },
  {
    path: '/instal-met/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: '/instal-met/o-nas', Component: About },
      { path: '/instal-met/kontakt', Component: Contact },
      {
        path: '/instal-met/oferta/:kategoria?',
        Component: OfferPage,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
