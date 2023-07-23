import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MenuBar, MobileMenu, TopBar } from './TopBar/TopBar'
import { Home } from './Home/Home'
import "../src/Home/HomeMobile.css"

function App() {
  const [showMenu, handleShowMenu] = useState(false)
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
