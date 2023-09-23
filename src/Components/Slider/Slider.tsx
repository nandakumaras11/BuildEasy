import "./Slider.css"
import shortCreteImg from "../../assets/shortcrete.png"
import plasteringMix from "../../assets/Plastering.png"
import pillerMix from "../../assets/piller.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

export const SliderSimple = () => {
    const { t } = useTranslation();
    const slider = [
        {
            sliderText1: t("SHOTCRETE MIX"),
            sliderText2: t("Slider1Text2"),
            sliderText3: t("Slider1Text3"),
            productImage: shortCreteImg
        },
        {
            sliderText1: t("SliderText21"),
            sliderText2: t("SliderText22"),
            sliderText3: t("SliderText23"),
            productImage: plasteringMix
        },
        {
            sliderText1: t("SliderText31"),
            sliderText2: t("SliderText32"),
            sliderText3: t("SliderText33"),
            productImage: pillerMix
        }
    ]
    var settings = {
        autoplay: true,
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
                return <div key={index} className={`bannerContainer bannerBg${index + 1}`}>
                    <div className="sliderContainer" >
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
                                <a href="#product" className="href">{t("moreInfo")}</a>
                            </div>
                            {/* <div className="sliderIndicator"><FaCircle /> <FaCircle /> <FaCircle /></div> */}
                        </div>
                        <motion.div
                            initial="start"
                            whileInView="end"
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            variants={{
                                start: { translateY: -100 },
                                end: { translateY: 0 }
                            }}
                            className="productImage" data-aos="slide-down" style={{ backgroundImage: `url(${slide.productImage})` }}></motion.div>
                        {/* <div className="rightNavigation"><FaChevronRight /></div> */}
                        {/* {props.children} */}
                    </div></div>
            })}

        </Slider>

    )
}
