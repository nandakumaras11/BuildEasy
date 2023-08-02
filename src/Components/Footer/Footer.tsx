import "./Footer.css"
import logo from "../../assets/footerlogo.png"
import { FaArrowRight } from "react-icons/fa"
import { SocialMediaMenu, menus, scrollWithOffset } from "../../TopBar/TopBar"
import { NavHashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
export const Footer = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [pathname]);
    return (<>
        <div className="footerContainer">
            <div className="footerSection1">
                <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
                <div className="aboutCompany tJustify">Have a question or feedback?<br />
                    Contact us! We're here to assist you.
                    <br />
                    We value your input and are eager to hear from you!.</div>
                <div className="follow">
                    <div className="footerHead">FOLLOW US ON</div>

                    <SocialMediaMenu />
                </div>
            </div>
            <div className="footerSection2">
                <div className="footerHead">SERVICES</div>
                <div className="footerMenus">
                    {menus.map((menu) => {
                        // <NavHashLink key={menu.name} scroll={(el) => scrollWithOffset(el)} to={menu.to} className="menuItem" >{menu.name}</NavHashLink>
                        return <NavHashLink key={menu.name} scroll={(el) => scrollWithOffset(el)} to={menu.to} className="menuItem" > <div className="footerMenu">
                            <FaArrowRight className="icon" />
                            <div className="name">{menu.name}</div>
                        </div>
                        </NavHashLink>
                    })}
                </div>
                <div className="makeInIndia" style={{ backgroundImage: `url(/images/makeInIndia.png)` }} ></div>

            </div>
            <div className="footerSection3">
                <div className="footerHead">CONTACT INFO</div>
                <div className="address">
                    <div className="footerLine">Eco Best Build LLP</div>
                    <div className="footerLine">6/38/BE, 1st Floor, Koyikkakudiyil Building,</div>
                    <div className="footerLine">Above SBI De Paul Branch, Angamaly, Kerala-683589.</div>
                    <div className="footerLine">Ernakulam- 683573`</div>
                </div>
                <div className="mobile"><a href={`tel:${import.meta.env.VITE_MOBILE}`}>{import.meta.env.VITE_MOBILE}</a></div>
                <div className="email"><a href={`mailto:${import.meta.env.VITE_EMAIL}`}>{import.meta.env.VITE_EMAIL}</a></div>
                <div className="certification">
                    <div className="footerHead">CERTIFICATIONS</div>
                    <div className="certificateLogo" style={{ backgroundImage: `url(/images/certificate.png)` }}></div>
                </div>
            </div>
        </div>
        <div className="copyRight">Build Easy &copy;  2023 All Right Reserved</div>
    </>
    )
}
