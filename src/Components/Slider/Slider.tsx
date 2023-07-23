import "./Slider.css"
import shortCreteImg from "../../assets/shortcrete.png"
import testImage from "../../assets/test.png"
import plasteringMix from "../../assets/Plastering.png"
import pillerMix from "../../assets/piller.png"
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
            sliderText1: "Piller Mix",
            sliderText2: "Perfect for erecting sturdy pillars/beams",
            sliderText3: "Best for long lasting pillers",
            productImage: pillerMix
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
                        <div className="sliderText1" data-aos="slide-left">{slide.sliderText1}</div>
                        <div className={"sliderText2"}  data-aos="slide-right">
                            {slide.sliderText2}
                        </div>
                        <div className="sliderText3">{slide.sliderText3}
                        </div>
                        <div className="btn1">
                            <a href="#product" className="href">More Details</a>
                            </div>
                        {/* <div className="sliderIndicator"><FaCircle /> <FaCircle /> <FaCircle /></div> */}
                    </div>
                    <div className="productImage"  data-aos="slide-down" style={{ backgroundImage: `url(${slide.productImage})` }}></div>
                    {/* <div className="rightNavigation"><FaChevronRight /></div> */}
                    {/* {props.children} */}
                </div></span>
            })}

        </Slider>

    )
}
