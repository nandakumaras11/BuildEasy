import { Suspense, useState } from 'react'
import './App.css'
import { MenuBar, MobileMenu, SocialMediaMenu, TopBar } from './TopBar/TopBar'
import { ScrollToTopBtn } from './Home/Home'
import "../src/Home/HomeMobile.css"
import { Routes } from './AllRoutes'
import { Footer } from './Components/Footer/Footer'
import { Loader } from './Components/Loader/Loader'
import { useTranslation } from 'react-i18next';
// ...
function App() {
  const [showMenu, handleShowMenu] = useState(false);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <TopBar />
        <MenuBar showMenu={showMenu} handleShowMenu={handleShowMenu} />
        <MobileMenu handleShowMenu={handleShowMenu} />
        <Routes />
        <ScrollToTopBtn />
        <SocialMediaMenu cls="fixedIons" />

        <Footer />
      </Suspense>
    </>
  )
}

export default App
