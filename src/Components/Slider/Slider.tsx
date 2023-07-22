import "./Slider.css"
import shortCreteImg from "../../assets/shortcrete.png"
import testImage from "../../assets/test.png"
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa"
import { useEffect, useState } from "react"
interface MyProps { }
export const Slider = (props: React.PropsWithChildren<MyProps>) => {
    // let activeSliderIndex = 0;
    const slider = [
        {
            sliderText1: "SHOTCRETE MIX 10",
            sliderText2: "Advanced Shotcrete Solutions",
            sliderText3: "Your Smart Choice",
            productImage: shortCreteImg
        },
        {
            sliderText1: "Test slider",
            sliderText2: "Advanced Shotcrete test Solutions",
            sliderText3: "Test Your Smart Choice",
            productImage: testImage
        },
        {
            sliderText1: "Test slider 2",
            sliderText2: "2 Advanced Shotcrete test Solutions",
            sliderText3: "2 Test Your Smart Choice",
            productImage: shortCreteImg
        }
    ]
    // const [activeSlider, setActiveSlider] = useState(slider[0]);
    const [activeSliderIndex, setActiveSliderIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const changeSlider = () => {
        setTimeout(() => {
            // let sliderIndex = activeSliderIndex == slider.length - 1 ? 0 : activeSliderIndex + 1;
            // setActiveSliderIndex(sliderIndex);
            // setAnimate(true);
            // setTimeout(() => {
            //     setAnimate(false);
            // }, 500);
            // changeSlider();
        }, 5000)
    }
    changeSlider();

    return (
        <div className="sliderContainer">
            <div className="leftNavigation"><FaChevronLeft /></div>
            <div className="sliderText">
                <div className="sliderText1">{slider[activeSliderIndex].sliderText1}</div>
                <div className={animate ? "sliderText2 animate" : "sliderText2"}>
                    {slider[activeSliderIndex].sliderText2}
                </div>
                <div className="sliderText3">{slider[activeSliderIndex].sliderText3}
                </div>
                <div className="btn1">More Details</div>
                <div className="sliderIndicator"><FaCircle /> <FaCircle /> <FaCircle /></div>
            </div>
            <div className="productImage" style={{ backgroundImage: `url(${slider[activeSliderIndex].productImage})` }}></div>
            <div className="rightNavigation"><FaChevronRight /></div>
            {props.children}
        </div>

    )
}
