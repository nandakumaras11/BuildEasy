import "./TopBar.css"
import { FaFacebookF, FaInstagram, FaBars, FaTimes, FaEnvelopeOpen, FaWhatsapp } from "react-icons/fa"
import logo from "../assets/logo.png"
import { NavHashLink } from 'react-router-hash-link';
export const TopBar = () => {
    return (
        <div className="topBar">
            <div className="leftBar">
                <div className="connectWithUs">
                    Connect With Us:
                </div>
                <SocialMediaMenu />
            </div>
            <div className="rightBar">
                <div className="email"><a href={`mailto:${import.meta.env.VITE_EMAIL}`}>{import.meta.env.VITE_EMAIL} </a>{`  `} </div>
                <span>|</span>
                <div className="mobileNumber"> Call us Now: <a href={`tel:${import.meta.env.VITE_MOBILE}`}>{`${import.meta.env.VITE_MOBILE}`}</a></div>
            </div>
        </div>
    )
}
export const menus = [
    { name: "Home", to: "/#top" },
    { name: "About", to: "/#about" },
    { name: "Products", to: "/#product" },
    // { name: "Gallery", to: "/Gallery" },
    { name: "Contact Us", to: "/#contact" },
]


export const SocialMediaMenu = () => {
    return (
        <div className="socialMediaIcon">
            <div className="fb"><a href="https://www.facebook.com/BuildEasyInd/" className="href"><FaFacebookF /></a></div>
            <div className="insta"><a href="https://www.instagram.com/BuildEasyInd/" className="href"><FaInstagram /></a></div>
            <div className="gmail"><a href={`mailto:${import.meta.env.VITE_EMAIL}`}><FaEnvelopeOpen /></a></div>
            {/* whatsapp://send?text=I am interested in Insourze.&amp;phone=+971505690203 */}
            <div className="gmail"><a href={import.meta.env.VITE_WHATSAPP}><FaWhatsapp /></a></div>

            {/* <FaYoutube />
            <FaTwitter /> */}
        </div>
    )
}

export default TopBar
export const MenuBar = ({ handleShowMenu, showMenu }: any) => {
    return (
        <>
            <div className="menuBarContainer">
                <div className="logo"><img src={logo} /></div>
                <div className="menus">
                    {menus.map((menu, index) => {
                        return <NavHashLink key={index} scroll={(el) => scrollWithOffset(el)} to={menu.to} className="menuItem" >{menu.name}</NavHashLink>
                    })}
                </div>
            </div>
            <div className="mobile">
                <div className={showMenu ? "mobileMenuLeft showMenu" : "mobileMenuLeft"}>
                    <div className="close" onClick={() => handleShowMenu(false)}><FaTimes /></div>
                    {menus.map((menu, index) => {
                        return <div  key={index} className="menuItemMobile"><NavHashLink onClick={() => handleShowMenu(false)} scroll={(el) => scrollWithOffset(el)} to={menu.to}  >{menu.name}</NavHashLink></div>
                    })}
                </div>
            </div>
        </>
    )
}
export const MobileMenu = ({ handleShowMenu }: any) => {
    return (
        <div className="mobileMenuContainer">
            <div className="mobileMenu">
                <div className="mobileLogo" style={{ backgroundImage: `url(${logo})` }}></div>
                <div className="menuOpener" onClick={() => handleShowMenu(true)}><FaBars /></div>
            </div>
        </div>
    )
}

export const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};