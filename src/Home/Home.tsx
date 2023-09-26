import { SliderSimple } from "../Components/Slider/Slider"
import "./Home.css"
import house from "../assets/house.png";
import shotcreteMachine from "../assets/shortcreteMachine.png";
import { FaArrowCircleUp, FaHandshake, FaQuoteRight, FaArrowRight, FaAngleDown } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SocialMediaMenu } from "../TopBar/TopBar";
import { HashLink } from "react-router-hash-link";
import { useRef, useState } from "react";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
// import hundred from "../assets/100.png";
import shortcretebg from "../assets/shortcretebg.jpg";

import dryLogo from "../assets/dry.png";
import dryBg from "../assets/drybg.jpg";
import shortcreteAdv from "../assets/shortcreteadv.png"
import aboutImage from "../assets/aboutimage.jpg"
import { ProductDetails, fasterStrongerSavings, howItWorks, productsProps, shotcretePanels } from "../constant";
import { t } from "i18next";

function ShotCreteAbout() {
  return (<div className="shortCreateBEAbout">
    <div className="aboutImage wm100" style={{
      backgroundImage: `url(${shortcretebg})`
    }}></div>
    <div className="aboutText wm100">
      <div className="aboutUsHead1">{t("BuildEasy Shotcrete")}</div>
      <div className="aboutUsContent tJustify">
        {t("shortP1")}

      </div>
    </div>
  </div>);
}


// import aboutImage from "../assets/about.png"

function About() {
  return (<section className="aboutContainer" id="about" data-aos="slide-up">
    <div className="aboutUsHead2">{t("About Us")}</div>
    <div className="aboutBE_Container">
      {/* <div className="line">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </div> */}
      {/* <div className="aboutBEText tJustify"></div> */}
      <div className="aboutLeft" style={{
        backgroundImage: `url(${aboutImage})`
      }}></div>
      <div className="aboutRight tJustify">{t("aboutP1")}</div>
    </div>
    <DryProducts />

    <ShotCreteAbout />
  </section>);
}



function ShortcreteProducts() {
  return (
    <>
      <div className="shortcreteContentContent1 mt5">{t("Buildeasy")}</div>
      <div className="aboutUsHead2">{t("Shotcrete Products")}</div>
      <FasterStrongerSavings />
      <div className="shortcreteContentContent3 tJustify shortcreteproductDescription">{t("spP1")}
      </div>
      <section className="shortcreteproductContainer" data-aos-offset="500" data-aos="slide-up">

        <div className="shortcreteImage"></div>
        <div className="shortcreteContent">
          {/* <div className="shortcreteContentContent1">Buildeasy</div>
          <div className="shortcreteContentContent2">Shotcrete Products</div> */}


          <div className="aboutUsHead1">{t("BuildEasy Shotcrete Mix")}</div>
          <div className="aboutUsContent tJustify">
            {t("spP2")}
            <div className="mt3"><FaArrowRight className="icon" /> {t("Cement")}</div>
            <div> <FaArrowRight className="icon" /> {t("Sand")}</div>
            <div><FaArrowRight className="icon" /> {t("aggregate")}</div>
            <div><FaArrowRight className="icon" />{t("fiber")}</div>
          </div>
        </div>
      </section></>);
}



function FasterStrongerSavings() {
  return (<section className="fasterStrongerSavingsContainer">
    {fasterStrongerSavings.map((item, index) => {
      return <div className="fasterStrongerSavingsItem" key={index}>
        <div className="fasterStrongerSavingsImage" style={{
          backgroundImage: `url(${item.image})`
        }}></div>
        {
          /* <img src={item.image} alt={item.text} className="src" /> */
        }
        <div className="fasterStrongerSavingsText">
          <div className="percentage"> {item.text.split(" ")[0]}</div>
          <div className="caption"> {t(item.text.split(" ")[1])}</div>
        </div>
      </div>;
    })}
  </section>);
}



function Advantages() {
  const [activeItem, setActiveItem] = useState(-1);
  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const advantages = [
    {
      name: "Faster constrution",
      descriptiom: t("FC_description")
    },
    {
      name: "Higher thermal insulation",
      descriptiom: t("HT_description")
    },
    {
      name: "Excellent Acoustics",
      descriptiom: t("EA_description")
    },
    {
      name: "Seismic Resistance",
      descriptiom: t("SR_description")
    },
    {
      name: "Reduced Water absorption",
      descriptiom: t("RW_description")
    },
    {
      name: "Reduced structural weight",
      descriptiom: t("RW_description")
    },
    {
      name: "Ease of Maintenance",
      descriptiom: t("EM_description")
    },
    {
      name: "Increased Durability ",
      descriptiom: t("ID_description")
    },
    {
      name: "Huge Energy savings",
      descriptiom: t("HE_description")
    }
    // {
    //   name: "Reduced wastage",
    //   descriptiom: "BuildEasy Shotcrete offers the advantage of reduced wastage in construction projects. The precise application process of shotcreting allows for efficient and controlled placement of concrete, minimizing the amount of material needed. Unlike conventional methods that may result in excess concrete or formwork waste, shotcrete's high-velocity projection ensures that only the necessary amount of concrete is used.By optimizing material usage and minimizing on-site waste, BuildEasy Shotcrete promotes sustainable construction practices, reduces disposal costs, and contributes to a more eco-friendly building process. This reduction in wastage aligns with modern environmental standards, making BuildEasy Shotcrete a responsible and efficient choice for construction projects"
    // },
  ]
  return (<section className="advantages">
    <div className="productSubHead">{t("Buildeasy")}</div>
    <div className="productHead">{t("Shotcrete Advantages")}</div>
    <div className="advantageRow">
      <div className="column2" style={{
        backgroundImage: `url(${shortcreteAdv})`
      }}></div>

      <div className="column1" >
        {advantages.map((advantage, index) => {
          return <div key={index} className="advantageItem">
            <div className="name" onClick={() => { activeItem == index ? setActiveItem(-1) : setActiveItem(index) }}>{t(advantage.name)} <FaAngleDown /></div>
            <div className={activeItem == index ? "description active" : "description nonActive"} ref={descriptionRef}

            >{advantage.descriptiom}</div>
          </div>
        })}
      </div>

    </div>
  </section>);
}



function HowItWorks() {
  return (<section className="howItWorksContainer">
    <div className="productHead"> {t("How it Works")}</div>
    <div className="howItWorksDescription">{t("A peek at the implementation process")}</div>
    <div className="howItWorkItems">
      {howItWorks.map((item, index) => {
        return <div key={index} className="howItWorkItem" data-aos="zoom-out" data-aos-offset="700">
          {/* <div className="howItWorkItemInnnerContainer"> */}
          <div className="number">{index + 1}</div>
          <div className="img" style={{
            backgroundImage: `url(/images/${item.image})`
          }}></div>
          <div className="name">{t(item.name)}</div>
          {/* </div> */}
        </div>;
      })}
    </div>
  </section>);
}



function ShortcretePanels() {
  return (<section className="shotcretePanelsContainer" data-aos-offset="500" data-aos="slide-up">
    <div className="shotcretePanelsLeft">
      <div className="shortcreteContentContent1">{t("Buildeasy")}</div>
      <div className="shortcreteContentContent2">{t("Shotcrete Panels")}</div>
      <div className="shortcreteContentContent3 tJustify">{t("spP1")}
      </div>
      <div className="shortcretePanels" data-aos="slide-up">
        {shotcretePanels.map((shotcretePanel, index) => {
          return <div className="shotcretePanel" key={index}>
            <div className="shotcretePanelImage" style={{
              backgroundImage: `url(${shotcretePanel.image})`
            }}></div>
            {
              /* <div className="shotcretePanelImage" >{shotcretePanel.image}</div> */
            }
            <div className="shotcretePanelName">{t(shotcretePanel.text)}</div>
            <div className="shotcretePanelCaption tJustify">{t(shotcretePanel.caption)}</div>
          </div>;
        })}
      </div>
    </div>
    <div className="shotcretePanelsRight" data-aos-offset="900" data-aos="slide-up" style={{
      backgroundImage: `url(${house})`
    }}></div>

  </section>);
}



function SHortcreteMachine() {
  return (<section className="shortcreteMachineContainer" data-aos-offset="500" data-aos="slide-up">
    <div className="shortcreteMachineLeft" style={{
      backgroundImage: `url(${shotcreteMachine})`
    }}></div>
    <div className="shortcreteMachineRight">
      <div className="shortcreteContentContent1">{t("Buildeasy")}</div>
      <div className="shortcreteContentContent2">{t("Shotcrete Machine")}</div>
      <div className="shortcreteContentContent3 tJustify">{t("machineP1")}
      </div>
    </div>
  </section>);
}



function BEProducts(props: any) {
  return (<section className="buildEasyProductsContainer" id="product">
    <div className="productSubHead">  {t("Buildeasy Product")}</div>
    <div className="productHead">   {t("Our BuildEasy Product")}</div>
    <div className="productFilter">
      <div className={props.productFilter == "all" ? "active filterBtn" : "filterBtn"} onClick={() => {
        props.setFilter("all");
      }}>{t("All")}</div>
      <div className={props.productFilter == "shortcrete" ? "active filterBtn" : "filterBtn"} onClick={() => {
        props.setFilter("shortcrete");
      }}>{t("Shotcrete")}</div>
      <div className={props.productFilter == "dry" ? "active filterBtn" : "filterBtn"} onClick={() => {
        props.setFilter("dry");
      }}>{t("Dry Mix")}</div>
      {
        /* <div className="shotcreteBricks">Bricks</div> */
      }
    </div>
    <div className="buildEasyProducts">
      {props.filteredProducts.map((product: any) => {
        return <motion.div initial="hidden" whileInView="visible" onClick={() => {
          props.navigate(`/Product/${product.name.replaceAll(" ", "_")}`);
        }} viewport={{
          once: false
        }} transition={{
          duration: 0.4
        }} variants={{
          visible: {
            opacity: 1,
            scale: 1
          },
          hidden: {
            opacity: 0,
            scale: 1.1
          }
        }} key={`${product.name}+${new Date().getSeconds()}+`} className="buildEasyProduct" data-aos-offset="800" data-aos="zoom-out">
          <div className="productImg" style={{
            backgroundImage: `url(${product.image})`
          }} />
          <div className="productName">{t(product.name)}</div>
          <div className="description">t{t(product.description)}</div>
          <div className="size">{t(product.size).split(",").map((item: any) => {
            return <div>{item} </div>;
          })}</div>
        </motion.div>;
      })}
    </div>
  </section>);
}



function Customers() {
  return (<section className="customer">
    <div className="customerHead">{t('Our Customers Deserve the Best')}</div>
    <div className="customerCaption tJustify">{t("customerDes")}</div>
    <img src="/images/qaq.png" data-aos="zoom-in" data-aos-offset="300" alt="process_img" className="process_img" />
    <div className="QaQ" data-aos-offset="700">{t("Our Unique")} <span>QaQ</span> {t("Approach")}</div>
  </section>);
}



function HappyClients() {
  return (<section className="happyClientsContainer" data-aos="slide-up">
    <div className="productSubHead">{t("Buildeasy Client")}</div>
    <div className="productHead">{t("Our Happy Clients")}</div>
    <Testimonial />
  </section>);
}



function ContactUs() {
  return (<section className="contactUs" id="contact" data-aos="slide-up">
    <div className="contactUsLeft">
      <div className="map">

      </div>
      <div className="sectionHead">
        <FaHandshake color="white" /> Contact&nbsp;<span>Us</span>
      </div>
      <div className="sectionMainHead gap">{t("Get In Touch")}</div>

      <h2 className="conatctUsSubHead bold">Our Locations</h2>
      <hr className="contactLine"></hr>
      <div className="addressContainer">
        <div className="address mt5">
          <div className="conatctUsSubHead bold">Australia</div>
          <div className="contactUsValues">
            <div className="linebreak subContents">Sydney</div>
            <div className="linebreak subContents">19/103 George St</div>
            <div className="linebreak subContents">Parramatta, NSW</div>
            <div className="linebreak subContents">Australia -2150</div>
            <div className="linebreak subContents">Contact no - +61 481363093</div>


          </div>
        </div>
        {/* <hr className="contactLine mt5"></hr> */}
        <div className="address mt5">
          <div className="conatctUsSubHead bold">Oman</div>
          <div className="contactUsValues">
            <div className="linebreak subContents">Muscat</div>
            <div className="linebreak subContents">Near Indian public school</div>
            <div className="linebreak subContents">Darsite, Muscat</div>
            <div className="linebreak subContents">Contact no - +96871151194</div>
            {/* <div className="linebreak subContents"></div> */}
            {/* <div className="linebreak subContents">{`Eco Best Build LLP
6/38/BE, 1st Floor, Koyikkakudiyil Building,
Above SBI De Paul Branch, Angamaly, Kerala-683589.`}</div> */}

          </div>
        </div>
        {/* <hr className="contactLine"></hr> */}
        <div className="address mt5">
          <div className="conatctUsSubHead bold">India</div>
          <div className="contactUsValues">
            <div className="linebreak subContents">Bangalore 4th Main,,</div>
            <div className="linebreak subContents"> No,849  12th Cross Rd,</div>
            <div className="linebreak subContents"> near BDA Complex, </div>
            <div className="linebreak subContents">Indira Nagar 1st Stage, </div>
            <div className="linebreak subContents">Bengaluru, Karnataka 560038</div>
            {/* <div className="linebreak subContents">{`Eco Best Build LLP
6/38/BE, 1st Floor, Koyikkakudiyil Building,
Above SBI De Paul Branch, Angamaly, Kerala-683589.`}</div> */}

          </div>
        </div>
        {/* <hr className="contactLine"></hr> */}
        <div className="address mt5">
          <div className="conatctUsSubHead bold">India</div>
          <div className="contactUsValues">

            <div className="linebreak subContents">Research and development</div>
            <div className="linebreak subContents">Angamaly              6/38/BE, 1st floor, </div>
            {/* <div className="linebreak subContents">koyikkakudiyil building
            </div> */}
            <div className="linebreak subContents">Above SBI de Paul branch angamaly Kerala - 683589</div>
            <div className="linebreak subContents">       Contact no - +91 9645799933</div>

          </div>
          {/* <hr className="contactLine "></hr> */}
        </div>
      </div>
      <hr className="contactLine mt5"></hr>
      <div className="mailCallContainer mt5">
        {/* <div className="callUs">
          <div className="conatctUsSubHead bold">Call US</div>
          <div className="contactUsValues subContents">
            <a href={`tel:${import.meta.env.VITE_MOBILE}`}><div>{import.meta.env.VITE_MOBILE}</div></a>
          </div>
        </div> */}
        {/* <hr className="contactLine"></hr> */}
        <div className="mail">
          <div className="conatctUsSubHead bold">Email</div>
          <div className="contactUsValues subContents">
            <div><a href={`mailto:${import.meta.env.VITE_EMAIL}`}>{import.meta.env.VITE_EMAIL}</a></div>

          </div>
        </div>
        <div className="followUs">
          <div className="conatctUsSubHead bold followUsHead">FOLLOW US</div>
          <div className="contactUsValues mt5">
            <div><SocialMediaMenu /></div>
          </div>
        </div>
      </div>
      {/* <hr className="contactLine"></hr> */}


    </div>
  </section>);
  // <div className="contactUsRight">
  //   {
  //     /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.335475113237!2d76.62970754999999!3d9.236796850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0619b7c32320d3%3A0x8626062c65ae732c!2sIndian%20Oil%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1685078274678!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }}  allowFullScreen= {false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */
  //   }
  //   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.080865456867!2d76.3742376!3d10.1740824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08078e115dcb43%3A0x857794c0f6fb60a7!2sBuildEasy!5e0!3m2!1sen!2sin!4v1690089517301!5m2!1sen!2sin" width="100%" height="100%" style={{
  //     border: '0'
  //   }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  // </div>
}



function DryProducts() {
  return (
    <section className="dryProductContainer" data-aos-offset="500" data-aos="slide-up">
      <div className="aboutUsHead1">{t("BE Dry Ready to Mix")}</div>
      <div className="dryMixInfo">
        <div className="dryMixContent tJustify">
          {t("bdryP1")} <p>{t("bdryP2")}</p>
        </div>
        <div className="logo" style={{ backgroundImage: `url(${dryLogo})` }}></div>
        <div className="dryImage" style={{ backgroundImage: `url(${dryBg})` }}>
        </div>
      </div>
    </section>);
}


export const Home = () => {
  const [productFilter, setFilter] = useState("all");
  const navigate = useNavigate()

  let filteredProducts: productsProps = [];

  if (productFilter == "all") {
    filteredProducts = ProductDetails;
  }
  else {
    const _filteredProducts = ProductDetails.filter((product: any) => { return product.category == productFilter });
    filteredProducts = _filteredProducts;
  }
  return (
    <>
      <div className="bannerSliderContainer" id="home">
        <SliderSimple />
        <SliderBottom cls="desktop" />
      </div>
      <SliderBottom cls="mobile" />
      <About />
      {/* <section className="aboutContainer" data-aos="slide-up">
        <div className="aboutUsHead2">BuildEasy Shotcrete</div>
        <div className="aboutUsContent">
          Introducing the groundbreaking BE Shotcrete Mix, proudly developed by BuildEasy as our exclusive proprietary product. With an impeccable combination of raw materials in the perfect ratio, this innovative mix redefines construction standards. Offering unrivaled strength and durability, BE Shotcrete Mix is designed to excel in various applications. From structural reinforcements to rapid repairs, its versatility knows no bounds. Crafted with precision and expertise, this game-changing product ensures consistent and reliable results on every project. Embrace the future of construction with confidence, as BE Shotcrete Mix from BuildEasy revolutionizes the way you build, delivering exceptional performance and quality like never before
        </div>
      </section> */}
      <ShortcreteProducts />
      {/* <FasterStrongerSavings /> */}
      <ShortcretePanels />
      {/* <div className="homeImage"></div> */}
      <div className="homeImage" data-aos-offset="900" data-aos="slide-up" style={{
        backgroundImage: `url(${house})`
      }}></div>
      <SHortcreteMachine />
      <Advantages />
      <HowItWorks />
      <BEProducts productFilter={productFilter} setFilter={setFilter} navigate={navigate} filteredProducts={filteredProducts} />
      <Customers />
      <HappyClients />
      <ContactUs />

    </>
  )
}
type classProps = {
  cls: string
}

export const ScrollToTopBtn = () => {
  return (
    <HashLink
      smooth={true}
      className="scrollToTop nav pulse" to="#top" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}>
      <FaArrowCircleUp />
    </HashLink>
  )
}
export const SliderBottom = ({ cls }: classProps) => {
  const bottomItems = [
    {
      image: "bottomItem1.png",
      text: "item1Text"
    },
    {
      image: "bottomItem2.png",
      text: "item2Text"
    },
    {
      image: "bottomItem3.png",
      text: "item3Text"
    },
    {
      image: "bottomItem4.png",
      text: "item4Text"
    }
  ];
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className={`sliderBottom ${cls}`}>
      {bottomItems.map((item, index) => {
        return <div key={index} className="sliderBottomItem" data-aos="zoom-out" data-aos-offset="300">
          <div className="itemImage" style={{ backgroundImage: `url(/images/${item.image})` }}> </div>
          <div className="itemText">{t(item.text)}</div>
        </div>
      })}
    </motion.div>
  )
}

export const Testimonial = () => {
  const testimonials = [
    {
      clientImg: "tony.png",
      user: { name: "Tony Supervisor", location: "" },
      testimonial: "tm1"
    },
    {
      clientImg: "John.jpg",
      user: { name: "John Aloshy", location: "" },
      testimonial: "tm2"
    },
    {
      clientImg: "chacko.jpg",
      user: { name: "JArc T J Chacko", location: "" },
      testimonial: "tm3"
    },
    {
      clientImg: "denu.jpg",
      user: { name: "Adv. Denu Joseph", location: "Ernakulam" },
      testimonial: "tm4"
    },

  ]
  const settings = {
    autoplay: false,
    dots: true,
    className: "slickTestimonials",
    dotsClass: "slick-dots marginTopDots",
    // infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // vertical: true,
    // verticalSwiping: true,
    responsive: [
      {
        autoplay: true,
        breakpoint: 989,
        settings: {
          dots: false,
          arrows: false,
          centerMode: false,
        }
      }]
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => {
        return <div key={index} className="happyClients">
          <div className="happyClientsLeft">
            <div className="testimonialContainer">
              <div className="user">
                <div className="row">
                  <div className="avatar" style={{ backgroundImage: `url(images/${testimonial.clientImg})` }}></div>
                  <div className="userInfo">
                    <div className="name" >{testimonial.user.name}</div>
                    <div className="location">{testimonial.user.location}</div>
                  </div>
                </div>

                <div className="testimonial tJustify">
                  {t(testimonial.testimonial)}
                </div>
                <div className="quote"><FaQuoteRight /></div>
              </div>
            </div>
          </div>
          {/* <div className="happyClientsRight" style={{ backgroundImage: `url("/images/videoThumb.png")` }}></div> */}
        </div>
      })}

    </Slider>
  )
}


export default Home;