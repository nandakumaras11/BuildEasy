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

function ShotCreteAbout() {
  return (<div className="shortCreateBEAbout">
    <div className="aboutImage wm100" style={{
      backgroundImage: `url(${shortcretebg})`
    }}></div>
    <div className="aboutText wm100">
      <div className="aboutUsHead1">BuildEasy Shotcrete</div>
      <div className="aboutUsContent tJustify">
        A revolution under construction, Shotcrete is the method of applying concrete projected at high velocity primarily on to a vertical or overhead surface. The sprayed concrete is conveyed through a hose and pneumatically onto the surface that is typically reinforced by steel mesh. Shotcrete is placed and compacted/consolidated at the same time, thanks to the force with which it is ejected from the nozzle. Since the nature of the placement process results in an excellent bond with most substrates and rapid or instant capabilities, Shotcrete has the characteristics of high compressive strength, good durability, water tightness and frost resistance.

      </div>
    </div>
  </div>);
}


// import aboutImage from "../assets/about.png"

function About() {
  return (<section className="aboutContainer" id="about" data-aos="slide-up">
    <div className="aboutUsHead2">About Us</div>
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
      <div className="aboutRight tJustify">At BuildEasy, we aim at delivering end-to-end basic
        building material solutions by introducing a standard in
        construction methodology. To this end, we employ
        mechanised automated solutions that cater to every
        requirement of our projects. Our solutions are the greenest
        in the industry since we reduce wastage and ensure optimal
        use of raw materials that will retain their property even in
        extreme weather conditions. Moreover, we use our
        hi-quality solutions for packing as well, to achieve
        the best results possible</div>
    </div>
    <DryProducts />

    <ShotCreteAbout />
  </section>);
}



function ShortcreteProducts() {
  return (
    <>
      <div className="shortcreteContentContent1 mt5">Buildeasy</div>
      <div className="aboutUsHead2">Shotcrete Products</div>
      <FasterStrongerSavings />
      <div className="shortcreteContentContent3 tJustify shortcreteproductDescription">BuildEasy shotcreting is a scaled-down version of the conventional shotcrete method, involving the high-velocity application of concrete onto vertical or overhead surfaces. Similar to traditional shotcreting, the concrete mix is conveyed through a hose and pneumatically projected onto the surface, often reinforced with steel mesh. This process ensures simultaneous placement and compaction, facilitated by the forceful ejection from the nozzle. As with regular shotcrete, BuildEasy shotcreting creates a strong bond with most substrates, offering rapid setting capabilities and boasting high compressive strength, good durability, water tightness, and frost resistance. This innovative technique is well-suited for various construction projects where efficient and reliable concrete application is required.
      </div>
      <section className="shortcreteproductContainer" data-aos-offset="500" data-aos="slide-up">

        <div className="shortcreteImage"></div>
        <div className="shortcreteContent">
          {/* <div className="shortcreteContentContent1">Buildeasy</div>
          <div className="shortcreteContentContent2">Shotcrete Products</div> */}


          <div className="aboutUsHead1">BuildEasy Shotcrete Mix</div>
          <div className="aboutUsContent tJustify">
            Introducing the groundbreaking BE Shotcrete Mix, proudly developed by BuildEasy as our exclusive proprietary product. With an impeccable combination of raw materials in the perfect ratio, this innovative mix redefines construction standards. Offering unrivaled strength and durability, BE Shotcrete Mix is designed to excel in various applications. From structural reinforcements to rapid repairs, its versatility knows no bounds. Crafted with precision and expertise, this game-changing product ensures consistent and reliable results on every project. Embrace the future of construction with confidence, as BE Shotcrete Mix from BuildEasy revolutionizes the way you build, delivering exceptional performance and quality like never before
            <div className="mt3"><FaArrowRight className="icon" /> Cement</div>
            <div> <FaArrowRight className="icon" /> Sand</div>
            <div><FaArrowRight className="icon" />  Aggregates (with size less than 10mm only)</div>
            <div><FaArrowRight className="icon" /> Fiber & Admixtures etc.</div>
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
          <div className="caption"> {item.text.split(" ")[1]}</div>
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
      descriptiom: "BuildEasy Shotcrete introduces a faster construction methodology that revolutionizes the building industry.By leveraging the use of lightweight EPS sandwiched panels and advanced shotcreting techniques, this innovative approach accelerates construction timelines significantly.The lightweight panels enable easy handling and assembly, requiring fewer manpower resources and reducing construction time.Moreover, shotcreting with specialized machines & panels  expedites the concrete application process, eliminating the need for conventional formwork.The high - velocity projection of concrete ensures rapid placement, consolidation, and compaction, resulting in efficient construction without compromising on structural strength and durability.This speed and efficiency make BuildEasy Shotcrete ideal for various projects, from residential and commercial buildings to infrastructure and emergency constructions.Not only does BuildEasy Shotcrete deliver faster results, but it also offers excellent quality with strength.By shortening construction timelines, it reduces labor and overhead expenses, making it an attractive option for clients seeking efficient, reliable, and time - sensitive construction solutions.Embracing this faster construction methodology opens up new possibilities and paves the way for more streamlined and successful building projects."
    },
    {
      name: "Higher thermal insulation",
      descriptiom: "BuildEasy Shotcrete offers an exceptional level of temperature insulation, thanks to its unique EPS sandwiched panels used in construction. These panels effectively limit the transfer of outside temperatures to the interior, providing a comfortable and stable atmosphere for occupants. By preventing external heat or cold from penetrating the structure, BuildEasy Shotcrete helps maintain the desired indoor temperature for an extended period. This impressive temperature insulation not only creates a comfortable environment for people inside but also significantly reduces the need for energy consumption in air conditioning devices. The energy-saving benefits make BuildEasy Shotcrete a sustainable and cost-effective solution for construction projects, promoting environmental consciousness and enhancing occupant comfort."
    },
    {
      name: "Excellent Acoustics",
      descriptiom: "BuildEasy Shotcrete offers the significant advantage of huge energy savings in construction projects. The innovative construction method, with its precise temperature control and EPS sandwiched panels, contributes to the overall energy efficiency of the building. By limiting the transfer of external temperatures to the interior and maintaining a comfortable indoor environment, the need for excessive heating or cooling is minimized. This results in substantial reductions in energy consumption, leading to lower utility bills and a reduced carbon footprint. The combination of outstanding temperature insulation and energy-saving capabilities makes BuildEasy Shotcrete an eco-friendly and cost-effective choice for modern construction, aligning with sustainable building practices and promoting environmental stewardship."
    },
    {
      name: "Seismic Resistance",
      descriptiom: "BuildEasy Shotcrete stands as an exceptional construction method renowned for its remarkable seismic resistance. In regions prone to earthquakes, the structural integrity of buildings becomes paramount. The application process of shotcrete ensures thorough and uniform distribution of concrete, resulting in a monolithic structure capable of withstanding seismic forces. The combination of high compressive strength, bonding properties, and steel reinforcement equips the shotcrete structure to flex and absorb seismic energy, minimizing damage during earthquakes. Its inherent ductility allows for controlled deformation without catastrophic failure, providing a reliable safeguard for occupants. With BuildEasy Shotcrete, structures gain the resilience needed to endure seismic events, offering peace of mind and protection for inhabitants, and reinforcing the confidence in constructing durable and robust buildings in seismically active areas."
    },
    {
      name: "Reduced Water absorption",
      descriptiom: "BuildEasy Shotcrete presents a distinctive advantage with its reduced water absorption properties. The application process and the inherent characteristics of shotcrete contribute to its low porosity, limiting water infiltration into the structure. This reduced water absorption not only enhances the material's durability but also prevents potential issues such as cracking, corrosion of reinforcement, and degradation due to water-related damage. The ability of BuildEasy Shotcrete to resist water absorption makes it an ideal choice for a wide range of applications, including swimming pools, underground structures etc, where water tightness is crucial. The minimized water permeability ensures longevity and longevity of the structures, promoting sustainable and long-lasting construction solutions with BuildEasy Shotcrete."
    },
    {
      name: "Reduced structural weight",
      descriptiom: "One of the notable advantages of BuildEasy Shotcrete is its ability to provide reduced structural weight in construction projects. The shotcrete application method allows for precise and controlled placement of concrete, resulting in a thin yet durable layer. The efficient use of materials reduces the overall weight of the structure without compromising its strength and integrity. Additionally, the incorporation of EPS sandwiched panels in BuildEasy Shotcrete further contributes to weight reduction while maintaining structural stability. The lighter weight of shotcrete structures not only eases the construction process but also offers benefits such as reduced foundation requirements and transportation costs. This advantage makes BuildEasy Shotcrete an attractive option for various applications, including building facades, architectural elements, and infrastructure projects, where the optimization of structural weight is essential."
    },
    {
      name: "Ease of Maintenance",
      descriptiom: "BuildEasy Shotcrete offers the advantage of ease of maintenance, simplifying the upkeep and care of constructed structures. The durable and compacted shotcrete surface, along with the protective EPS sandwiched panels, reduces the need for frequent maintenance and repairs. The shotcreting process ensures a strong bond with most substrates, minimizing the likelihood of cracks or deterioration.Furthermore, the uniformity and homogeneity of shotcrete surfaces result in smoother finishes, making them easier to clean and maintain over time. Unlike other construction methods that may require extensive and costly maintenance, BuildEasy Shotcrete provides a low-maintenance solution that saves both time and resources.Incorporating BuildEasy Shotcrete in construction projects ensures buildings and infrastructure remain resilient and easily maintainable throughout their lifecycle, contributing to long-term cost savings and hassle-free maintenance for property owners and managers."
    },
    {
      name: "Increased Durability ",
      descriptiom: "BuildEasy Shotcrete excels in providing increased durability, making it a preferred choice for long-lasting structures. The shotcreting process ensures a homogenous and compacted concrete placement, resulting in a robust and uniform structure that can withstand various environmental challenges. The excellent bonding properties of shotcrete create a strong bond with most substrates, enhancing the overall durability of the construction.The incorporation of EPS sandwiched panels further contributes to durability, as they protect the concrete from moisture ingress and reduce the risk of cracks and deterioration. The reduced water absorption characteristic of BuildEasy Shotcrete plays a crucial role in preventing potential damage due to chemical exposure.With its ability to resist wear and tear, weathering, and other adverse conditions, BuildEasy Shotcrete structures have an extended service life, reducing the need for frequent maintenance and repair. This enhanced durability ensures that buildings and infrastructure constructed using BuildEasy Shotcrete stand the test of time, providing reliable and resilient solutions for a wide range of construction projects."
    },
    {
      name: "Huge Energy savings",
      descriptiom: "BuildEasy Shotcrete offers the significant advantage of huge energy savings in construction projects. The innovative construction method, with its precise temperature control and EPS sandwiched panels, contributes to the overall energy efficiency of the building. This results in substantial reductions in energy consumption, leading to lower utility bills and a reduced carbon footprint. The combination of outstanding temperature insulation and energy-saving capabilities makes BuildEasy Shotcrete an eco-friendly and cost-effective choice for modern construction, aligning with sustainable building practices and promoting environmental stewardship."
    }
    // {
    //   name: "Reduced wastage",
    //   descriptiom: "BuildEasy Shotcrete offers the advantage of reduced wastage in construction projects. The precise application process of shotcreting allows for efficient and controlled placement of concrete, minimizing the amount of material needed. Unlike conventional methods that may result in excess concrete or formwork waste, shotcrete's high-velocity projection ensures that only the necessary amount of concrete is used.By optimizing material usage and minimizing on-site waste, BuildEasy Shotcrete promotes sustainable construction practices, reduces disposal costs, and contributes to a more eco-friendly building process. This reduction in wastage aligns with modern environmental standards, making BuildEasy Shotcrete a responsible and efficient choice for construction projects"
    // },
  ]
  return (<section className="advantages">
    <div className="productSubHead">Buildeasy</div>
    <div className="productHead">Shotcrete Advantages</div>
    <div className="advantageRow">
      <div className="column2" style={{
        backgroundImage: `url(${shortcreteAdv})`
      }}></div>

      <div className="column1" >
        {advantages.map((advantage, index) => {
          return <div key={index} className="advantageItem">
            <div className="name" onClick={() => { activeItem == index ? setActiveItem(-1) : setActiveItem(index) }}>{advantage.name} <FaAngleDown /></div>
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
    <div className="productHead"> How it Works</div>
    <div className="howItWorksDescription">A peek at the implementation process</div>
    <div className="howItWorkItems">
      {howItWorks.map((item, index) => {
        return <div key={index} className="howItWorkItem" data-aos="zoom-out" data-aos-offset="700">
          {/* <div className="howItWorkItemInnnerContainer"> */}
          <div className="number">{index + 1}</div>
          <div className="img" style={{
            backgroundImage: `url(/images/${item.image})`
          }}></div>
          <div className="name">{item.name}</div>
          {/* </div> */}
        </div>;
      })}
    </div>
  </section>);
}



function ShortcretePanels() {
  return (<section className="shotcretePanelsContainer" data-aos-offset="500" data-aos="slide-up">
    <div className="shotcretePanelsLeft">
      <div className="shortcreteContentContent1">Buildeasy</div>
      <div className="shortcreteContentContent2">Shotcrete Panels</div>
      <div className="shortcreteContentContent3 tJustify">BuildEasy Shotcrete Panels are manufactured by sandwiching eps between square
        mesh on either side. The mesh is cross welded for extra strength..
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
            <div className="shotcretePanelName">{shotcretePanel.text}</div>
            <div className="shotcretePanelCaption tJustify">{shotcretePanel.caption}</div>
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
      <div className="shortcreteContentContent1">Buildeasy</div>
      <div className="shortcreteContentContent2">Shotcrete Machine</div>
      <div className="shortcreteContentContent3 tJustify">Discover the cutting-edge BuildEasy Shotcrete Machine, a state-of-the-art equipment designed to revolutionize concrete application. Engineered by BuildEasy, this advanced machine empowers construction professionals with the ability to project concrete mixture at high pressure, ensuring precise and efficient placement. The Shotcrete Machine features a seamlessly integrated system, including a powerful mixer, a reliable additive pump, a robust compressor, a versatile sprayer arm, and an intuitive control system. With this innovative equipment at your disposal, you can effortlessly tackle a wide range of projects, from commercial building to residential projects. Embrace the future of concrete application with the BuildEasy Shotcrete Machine, where efficiency, precision, and performance converge to elevate your construction endeavors to new heights
      </div>
    </div>
  </section>);
}



function BEProducts(props: any) {
  return (<section className="buildEasyProductsContainer" id="product">
    <div className="productSubHead">  Buildeasy Product</div>
    <div className="productHead">   Our BuildEasy Product</div>
    <div className="productFilter">
      <div className={props.productFilter == "all" ? "active filterBtn" : "filterBtn"} onClick={() => {
        props.setFilter("all");
      }}>All</div>
      <div className={props.productFilter == "shortcrete" ? "active filterBtn" : "filterBtn"} onClick={() => {
        props.setFilter("shortcrete");
      }}>Shotcrete</div>
      <div className={props.productFilter == "dry" ? "active filterBtn" : "filterBtn"} onClick={() => {
        props.setFilter("dry");
      }}>Dry Mix</div>
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
          <div className="productName">{product.name}</div>
          <div className="description">{product.description}</div>
          <div className="size">{product.size.split(",").map((item: any) => {
            return <div>{item} </div>;
          })}</div>
        </motion.div>;
      })}
    </div>
  </section>);
}



function Customers() {
  return (<section className="customer">
    <div className="customerHead">Our Customers Deserve the Best</div>
    <div className="customerCaption tJustify">Our advanced dry mix concrete solutions are the greenest in the industry since we reduce wastage and involve
      optimal use of raw materials, which will retain their property even in extreme weather conditions.</div>
    <img src="/images/qaq.png" data-aos="zoom-in" data-aos-offset="300" alt="process_img" className="process_img" />
    <div className="QaQ" data-aos-offset="700">Our Unique <span>QaQ</span> Approach</div>
  </section>);
}



function HappyClients() {
  return (<section className="happyClientsContainer" data-aos="slide-up">
    <div className="productSubHead">Buildeasy Client</div>
    <div className="productHead">Our Happy Clients</div>
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
      <div className="sectionMainHead gap">Get In Touch</div>

      <div className="address mt5">
        <div className="conatctUsSubHead bold">Address</div>
        <div className="contactUsValues">
          <div className="linebreak subContents">{`Eco Best Build LLP
6/38/BE, 1st Floor, Koyikkakudiyil Building,
Above SBI De Paul Branch, Angamaly, Kerala-683589.`}</div>

        </div>
      </div>
      <hr className="contactLine mt5"></hr>
      <div className="callUs">
        <div className="conatctUsSubHead bold">Call US</div>
        <div className="contactUsValues subContents">
          {
            /* {import.meta.env.VITE_EMAIL} */
          }
          <a href={`tel:${import.meta.env.VITE_MOBILE}`}><div>{import.meta.env.VITE_MOBILE}</div></a>
        </div>
      </div>
      <hr className="contactLine"></hr>
      <div className="mail">
        <div className="conatctUsSubHead bold">Email</div>
        <div className="contactUsValues subContents">
          {
            /* <a href={`tel:${import.meta.env.VITE_MOBILE}`}><div>{import.meta.env.VITE_MOBILE}</div></a> */
          }

          <div><a href={`mailto:${import.meta.env.VITE_EMAIL}`}>{import.meta.env.VITE_EMAIL}</a></div>
        </div>
      </div>
      <hr className="contactLine"></hr>
      <div className="followUs mt5">
        <div className="conatctUsSubHead bold followUsHead">FOLLOW US</div>
        <div className="contactUsValues mt5">
          <div><SocialMediaMenu /></div>
        </div>
      </div>


    </div>
    <div className="contactUsRight">
      {
        /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.335475113237!2d76.62970754999999!3d9.236796850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0619b7c32320d3%3A0x8626062c65ae732c!2sIndian%20Oil%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1685078274678!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }}  allowFullScreen= {false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */
      }
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.080865456867!2d76.3742376!3d10.1740824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08078e115dcb43%3A0x857794c0f6fb60a7!2sBuildEasy!5e0!3m2!1sen!2sin!4v1690089517301!5m2!1sen!2sin" width="100%" height="100%" style={{
        border: '0'
      }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>);
}



function DryProducts() {
  return (
    <section className="dryProductContainer" data-aos-offset="500" data-aos="slide-up">
      <div className="aboutUsHead1">BE Dry Ready to Mix</div>
      <div className="dryMixInfo">
        <div className="dryMixContent tJustify">
          Discover the unmatched convenience and reliability of our Dry Mix Concrete – the ultimate solution for all your construction needs. Designed to streamline your building projects, our dry mix concrete eliminates the hassle of on-site mixing, ensuring consistent and superior results every time. With precise proportions of cement, aggregates, and additives pre-blended by our experts, you can be confident in achieving the ideal mix for your specific application. Whether it's for foundations, slabs, or structural elements, our dry mix concrete guarantees optimal strength and durability. <p>Say goodbye to time-consuming mixing processes and hello to efficient construction with our Dry Mix Concrete. Experience the freedom to focus on the art of building, knowing that the groundwork is laid with excellence, backed by our commitment to quality and performance. Trust in our Dry Mix Concrete to elevate your construction endeavors and revolutionize the way you build</p>
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
    const _filteredProducts = ProductDetails.filter((product) => { return product.category == productFilter });
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
      text: "100+ Projects Completed"
    },
    {
      image: "bottomItem2.png",
      text: "Compatible with the building standards in India"
    },
    {
      image: "bottomItem3.png",
      text: "Patented Technology"
    },
    {
      image: "bottomItem4.png",
      text: "Expert Team Synergizes With Industry Experts"
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
          <div className="itemText">{item.text}</div>
        </div>
      })}
    </motion.div>
  )
}

export const Testimonial = () => {
  const testimonials = [
    {
      clientImg: "tony.png",
      user: { name: "Tony Supervisor", location: "Ernakulam" },
      testimonial: "BuildEasy is very easy to use and build. We used to do 1-2 m3 per day. Now with the same team, we can do up to 5 m3, with ease."
    },
    {
      clientImg: "John.jpg",
      user: { name: "John Aloshy", location: "Ernakulam" },
      testimonial: "Huge savings in labor and work can be done quite fast. The most important 2 aspects of this product is, no wastage at all and can be stored very easily"
    },
    {
      clientImg: "chacko.jpg",
      user: { name: "JArc T J Chacko", location: "Ernakulam" },
      testimonial: "Although we were initially sceptical about using this new product, the idea of having a professionally measured Cement mix and ease of use really caught our attention. Once we used it and understood how much time it can save us, there was no going back to the traditional ways. We would highly recommend Build Easy cement mix to anyone looking for quality and consistency.                            "
    },
    {
      clientImg: "denu.jpg",
      user: { name: "Adv. Denu Joseph", location: "Ernakulam" },
      testimonial: "Our property is near the High Court of Kerala, which is a high-traffic area. This posed a difficulty for hiring skilled people to complete the job as well as storing the cement, and raw materials separately. Then I came to know about the team at BuildEasy for my problem. Just like their name, they had highly innovative solutions to our problem which helped to complete the project before time."
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
                  {testimonial.testimonial}
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