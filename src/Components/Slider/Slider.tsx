import "./Slider.css"
import shortCreteImg from "../../assets/shortcrete.png"
import testImage from "../../assets/test.png"
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa"
import { useEffect, useState } from "react"
import Slider from "react-slick";
interface MyProps { }
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const SliderSimple = (props: React.PropsWithChildren<MyProps>) => {
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
    var settings = {
        autoplay:false,
        dots: true,
        dotsClass:"slick-dots sliderDot",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:true,
        verticalSwiping: true
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
