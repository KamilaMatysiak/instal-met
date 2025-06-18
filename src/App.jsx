import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

import { Outlet } from 'react-router'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
