import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main
