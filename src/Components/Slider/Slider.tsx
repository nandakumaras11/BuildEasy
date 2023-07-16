import "./Slider.css"
import shortCreteImg from "../../assets/shortcrete.png"
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa"
interface MyProps { }
export const Slider = (props: React.PropsWithChildren<MyProps>) => {
    return (
        <div className="sliderContainer">
            <div className="leftNavigation"><FaChevronLeft /></div>
            <div className="sliderText">
                <div className="sliderText1">SHOTCRETE MIX 10</div>
                <div className="sliderText2">
                    Advanced Shotcrete Solutions
                </div>
                <div className="sliderText3">Your Smart Choice</div>
                <div className="btn1">More Details</div>
                <div className="sliderIndicator"><FaCircle /> <FaCircle /> <FaCircle /></div>
            </div>
            <div className="productImage"><img src={shortCreteImg} /></div>
            <div className="rightNavigation"><FaChevronRight /></div>
            {props.children}
        </div>

    )
}
