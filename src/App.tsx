import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MenuBar, MobileMenu, TopBar } from './TopBar/TopBar'
import { Home } from './Home/Home'
import "../src/Home/HomeMobile.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <TopBar/>
   <MenuBar/>
   <MobileMenu/>
   <Home/>
    </>
  )
}

export default App
