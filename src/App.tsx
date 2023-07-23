import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MenuBar, MobileMenu, TopBar } from './TopBar/TopBar'
import { Home } from './Home/Home'
import "../src/Home/HomeMobile.css"
import "aos/dist/aos.css";
import AOS from 'aos';
function App() {
  const [showMenu, handleShowMenu] = useState(false)
  useEffect(() => {
    AOS.init({
      duration:1000,
      easing: 'ease',
      delay: 100,
      once: false,
      disable: 'mobile'
      // disable: 'mobile'
    });
    AOS.refresh();
  }, [])
  return (
    <>
   <TopBar/>
   <MenuBar showMenu={showMenu} handleShowMenu={handleShowMenu}/>
   <MobileMenu handleShowMenu={handleShowMenu}/>
   <Home/>
    </>
  )
}

export default App
