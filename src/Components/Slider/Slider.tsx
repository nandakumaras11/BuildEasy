import "./Slider.css"
import shortCreteImg from "../../assets/shortcrete.png"
import plasteringMix from "../../assets/Plastering.png"
import pillerMix from "../../assets/piller.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion"

export const SliderSimple = () => {
    const slider = [
        {
            sliderText1: "SHOTCRETE MIX",
            sliderText2: "Expertly Blended Raw Materials for Optimal Results",
            sliderText3: "Vetted by Engineers ",
            productImage: shortCreteImg
        },
        {
            sliderText1: "Plaster mix",
            sliderText2: "The Perfect Strength-Smoothness Blend",
            sliderText3: "Perfect for your needs",
            productImage: plasteringMix
        },
        {
            sliderText1: "Piller Mix",
            sliderText2: "Unveiling the Perfect Strength-Smoothness Blend",
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
                    arrows: false

                }
            }]
    };

    return (
        <Slider {...settings}>
            {slider.map((slide, index) => {
                return <span key={index}><div className="sliderContainer">
                    <div className="sliderText">
                        <motion.div
                            initial="left"
                            whileInView="right"
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            variants={{
                                left: { opacity: 0, translateX: -50 },
                                right: { opacity: 1, translateX: 0 }
                            }}
                            className="sliderText1" data-aos="slide-left">{slide.sliderText1}</motion.div>
                        <motion.div
                            initial="right"
                            whileInView="left"
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            variants={{
                                right: { opacity: 1, translateX: 100 },
                                left: { opacity: 1, translateX: 0 }
                            }} className={"sliderText2"} data-aos="slide-right">
                            {slide.sliderText2}
                        </motion.div>
                        <div className="sliderText3">{slide.sliderText3}
                        </div>
                        <div className="btn1">
                            <a href="#product" className="href">More Details</a>
                        </div>
                        {/* <div className="sliderIndicator"><FaCircle /> <FaCircle /> <FaCircle /></div> */}
                    </div>
                    <div className="productImage" data-aos="slide-down" style={{ backgroundImage: `url(${slide.productImage})` }}></div>
                    {/* <div className="rightNavigation"><FaChevronRight /></div> */}
                    {/* {props.children} */}
                </div></span>
            })}

        </Slider>

    )
}
