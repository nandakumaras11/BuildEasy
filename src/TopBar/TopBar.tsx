import "./TopBar.css"
import { FaFacebookF, FaInstagram, FaBars, FaTimes, FaEnvelopeOpen, FaWhatsapp } from "react-icons/fa"
import logo from "../assets/logo.png"
import { NavHashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";
import { useEffect } from "react";
import { t } from "i18next";
export const TopBar = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="topBar">
            <div className="leftBar">
                <div className="connectWithUs">
                    {/* Connect With Us: */}
                    {t('TopBar.connect')}
                </div>
                <SocialMediaMenu />
            </div>
            <div className="rightBar">
                <div className="email"><a href={`mailto:${import.meta.env.VITE_EMAIL}`}>{import.meta.env.VITE_EMAIL} </a>{`  `} </div>
                <span>|</span>
                <div className="mobileNumber"> {t("TopBar.callus")} <a href={`tel:${import.meta.env.VITE_MOBILE}`}>{`${import.meta.env.VITE_MOBILE}`}</a></div>
            </div>
        </div>
    )
}
export const menus = [
    { name: "Home", to: "/#top" },
    { name: "About", to: "/#about" },
    { name: "Products", to: "/#product" },
    { name: "Gallery", to: "/Gallery" },
    { name: "Contact Us", to: "/#contact" },
]


export const SocialMediaMenu = ({ cls = "" }) => {
    return (
        <div className={`socialMediaIcon ${cls}`}>
            <div className="icon facebook"><a href="https://www.facebook.com/BuildEasyGlobal" className="iconhref"><FaFacebookF /></a></div>
            <div className="icon instagram"><a href="https://www.instagram.com/buildeasyglobal/" className="iconhref"><FaInstagram /></a></div>
            <div className="icon gmail"><a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="iconhref"><FaEnvelopeOpen /></a></div>
            {/* whatsapp://send?text=I am interested in Insourze.&amp;phone=+971505690203 */}
            <div className="icon whatsapp"><a href={import.meta.env.VITE_WHATSAPP} className="iconhref"><FaWhatsapp /></a></div>

            {/* <FaYoutube />
            <FaTwitter /> */}
        </div>
    )
}

export default TopBar
export const MenuBar = ({ handleShowMenu, showMenu }: any) => {
    const navigate = useNavigate();
    // useEffect()
    const { i18n } = useTranslation('home');

    return (
        <>
            <div className="menuBarContainer">
                <div className="logo" style={{ backgroundImage: `url(${logo})` }} onClick={() => navigate("/")}></div>
                <div className="menus">
                    {menus.map((menu, index) => {
                        return <NavHashLink smooth={true} key={index} scroll={(el) => scrollWithOffset(el)} to={menu.to} className="menuItem" >{t(menu.name)}</NavHashLink>
                    })}
                    <div className="language" style={{ width: "100px" }}>
                        <div onClick={() => { i18n.changeLanguage(i18n.language == "ar" ? "en" : "ar") }}>{i18n.language}</div>
                    </div>
                </div>

            </div>
            <div className="mobile">
                <div className={showMenu ? "mobileMenuLeft showMenu" : "mobileMenuLeft"}>
                    <div className="close" onClick={() => handleShowMenu(false)}><FaTimes /></div>
                    {menus.map((menu, index) => {
                        return <div key={index} className="menuItemMobile"><NavHashLink onClick={() => handleShowMenu(false)} scroll={(el) => scrollWithOffset(el)} to={menu.to}  >{menu.name}</NavHashLink></div>
                    })}
                </div>
            </div>
        </>
    )
}
export const MobileMenu = ({ handleShowMenu }: any) => {
    const navigate = useNavigate();
    return (
        <div className="mobileMenuContainer">
            <div className="mobileMenu">
                <div className="mobileLogo" style={{ backgroundImage: `url(${logo})` }} onClick={() => navigate("/")}></div>
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