import "./TopBar.css"
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import logo from "../assets/logo.png"
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
                <div className="mobile"> {`Call us Now: ${import.meta.env.VITE_MOBILE}`}</div>
            </div>
        </div>
    )
}

export const MenuBar = () => {
    const menus = [
        { name: "Home", to: "/" },
        { name: "About", to: "/About" },
        { name: "Products", to: "/Products" },
        { name: "Gallery", to: "/Gallery" },
        { name: "Contact Us", to: "/Contact" },
    ]
    return (
        <div className="menuBarContainer">
            <div className="logo"><img src={logo}/></div>
            <div className="menus">
                {menus.map((menu) => {
                    return <div className="menuItem">{menu.name}</div>
                })}
            </div>
        </div>
    )
}
