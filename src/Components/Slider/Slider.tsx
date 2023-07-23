import "./Slider.css"
import shortCreteImg from "../../assets/shortcrete.png"
import testImage from "../../assets/test.png"
import plasteringMix from "../../assets/Plastering.png"
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa"
import { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
interface MyProps { }
export const SliderSimple = (props: React.PropsWithChildren<MyProps>) => {
    // let activeSliderIndex = 0;

    const slider = [
        {
            sliderText1: "SHOTCRETE MIX 10",
            sliderText2: "Magical mix of raw materials with an ideal ratio",
            sliderText3: "Vetted by Engineers ",
            productImage: shortCreteImg
        },
        {
            sliderText1: "Plaster mix",
            sliderText2: "The perfect blend of strength and smoothness.",
            sliderText3: "Perfect for your needs",
            productImage: plasteringMix
        },
        {
            sliderText1: "Industrial mix 20",
            sliderText2: "2 Advanced Shotcrete test Solutions",
            sliderText3: "2 Test Your Smart Choice",
            productImage: shortCreteImg
        }
    ]
    var settings = {
        autoplay: false,
        dots: true,
        dotsClass: "slick-dots sliderDot",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 989,
                settings: {
                    // centerMode: true,
                    // slidesToShow: 1,
                    // variableWidth: false,
                    // infinite: false,
                    dots: false,
                    vertical: false,
                    verticalSwiping: false,
                    arrows:false

                }
            }]
    };

    return (
        <Slider {...settings}>
            {slider.map((slide) => {
                return <span><div className="sliderContainer">
                    {/* <div className="leftNavigation "><FaChevronLeft /></div> */}
                    <div className="sliderText">
                        <div className="sliderText1">{slide.sliderText1}</div>
                        <div className={"sliderText2"}>
                            {slide.sliderText2}
                        </div>
                        <div className="sliderText3">{slide.sliderText3}
                        </div>
                        <div className="btn1">More Details</div>
                        {/* <div className="sliderIndicator"><FaCircle /> <FaCircle /> <FaCircle /></div> */}
                    </div>
                    <div className="productImage" style={{ backgroundImage: `url(${slide.productImage})` }}></div>
                    {/* <div className="rightNavigation"><FaChevronRight /></div> */}
                    {/* {props.children} */}
                </div></span>
            })}

        </Slider>

    )
}
