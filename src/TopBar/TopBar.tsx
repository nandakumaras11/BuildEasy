import "./TopBar.css"
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaBars } from "react-icons/fa"
import logo from "../assets/logo.png"
import { NavHashLink } from 'react-router-hash-link';
export const TopBar = () => {
    return (
        <div className="topBar">
            <div className="leftBar">
                <div className="connectWithUs">
                    Connect With Us:
                </div>
                <div className="socialMediaIcon">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaYoutube />
                    <FaTwitter />
                </div>
            </div>
            <div className="rightBar">
                <div className="email">{import.meta.env.VITE_EMAIL} {`  `} </div>
                <span>|</span>
                <div className="mobileNumber"> {`Call us Now: ${import.meta.env.VITE_MOBILE}`}</div>
            </div>
        </div>
    )
}
export const menus = [
    { name: "Home", to: "/" },
    { name: "About", to: "/#about" },
    { name: "Products", to: "/#product" },
    // { name: "Gallery", to: "/Gallery" },
    { name: "Contact Us", to: "/#contact" },
]

export const MenuBar = () => {

    return (
        <div className="menuBarContainer">
            <div className="logo"><img src={logo} /></div>
            <div className="menus">
                {menus.map((menu) => {
                    return <NavHashLink key={menu.name} scroll={(el) => scrollWithOffset(el)} to={menu.to} className="menuItem" >{menu.name}</NavHashLink>
                    // return <a href={menu.to} className="href"> <div className="menuItem">{menu.name}</div></a>
                })}
            </div>
        </div>
    )
}
export const MobileMenu = () => {
    return (
        <div className="mobileMenuContainer">
            <div className="mobileMenu">
                <div className="mobileLogo" style={{ backgroundImage: `url(${logo})` }}></div>
                <div className="menuOpener"><FaBars /></div>
            </div>
        </div>
    )
}

export const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};