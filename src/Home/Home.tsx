import { SliderSimple } from "../Components/Slider/Slider"
import "./Home.css"
import faster from "../assets/faster.png";
import strengthImg from "../assets/strength.png";
import savings from "../assets/save-money.png";
import panel1 from "../assets/panel1.png";
import panel2 from "../assets/panel2.png";
import panel3 from "../assets/panel3.png";
import house from "../assets/house.png";
import shotcreteMachine from "../assets/shortcreteMachine.png";
import { FaArrowCircleUp, FaHandshake, FaQuoteRight } from "react-icons/fa";
import { Footer } from "../Components/Footer/Footer";
import masonryImg from "../assets/Masonry.png"
import shortCreteImg from "../assets/shortcrete.png"
import plasteringImg from "../assets/Plastering.png"
import tileImg from "../assets/Tile.png"
import pillerImg from "../assets/piller.png"
import pillerSupr from "../assets/pillerSupr.png"
import floorImg from "../assets/floor.png"
import roofImg from "../assets/roof.png"
import pccImg from "../assets/pcc.png"
import bags from "../assets/bags.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SocialMediaMenu } from "../TopBar/TopBar";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
// import aboutImage from "../assets/about.png"
export const Home = () => {
  const [productFilter, setFilter] = useState("all");
  const fasterStrongerSavings = [
    {
      image: faster,
      text: "60% Faster"
    },
    {
      image: strengthImg,
      text: "30% Stronger"
    },
    {
      image: savings,
      text: "20% Savings"
    }
  ]
  const shotcretePanels = [
    { image: panel1, text: "Single Panel", caption: "Made with Eps sandwiched between galvanised mesh’s on either side. Concrete is sprayed on either side forming a reinforced monolithic structure" },
    { image: panel2, text: "Double Panel", caption: "Made of two EPS sandwiched panels with wire mesh on either side. Concrete is poured between the panels and shotcreted both sides, building a strong insulated wall quickly." },
    { image: panel3, text: "Floor Panel 3", caption: "Build with EPS sandwiched with wire mesh on either side and two groves provided in the panels to run rebars for additional structural strength. Concrete is poured on top forming a structurally insulated strong roof." }
  ]
  type filteredProductsProps = {
    image: String,
    name: String,
    description: String,
    size: String
  }
  type productsProp = {
    category: String,
    product: filteredProductsProps[]
  }[]
  const products: productsProp = [{
    category: "shortcrete",
    product: [{
      image: shortCreteImg,
      name: "Shotcrete Mix",
      description: "Boasting a mix of raw materials with an ideal ratio",
      size: "Pack Size: 50 kg"
    },
    {
      image: shortCreteImg,
      name: "Shotcrete Mix 200",
      description: "Boasting a mix of raw materials with an ideal ratio",
      size: "Pack Size: 50 kg"
    },
    {
      image: shortCreteImg,
      name: "Shotcrete Mix 300",
      description: "Boasting a mix of raw materials with an ideal ratio",
      size: "Pack Size: 50 kg"
    },
    {
      image: panel1,
      name: "Single Panel",
      description: "Made with Eps sandwiched between galvanised mesh’s on either side",
      size: ""
    },
    {
      image: panel2,
      name: "Double Panel",
      description: "Made of two EPS sandwiched panels with wire mesh on either side",
      size: ""
    },
    {
      image: panel3,
      name: "Floor Panel",
      description: "Concrete is poured on top forming a structurally insulated strong roof.",
      size: ""
    }
    ]
  },
  {
    category: "dry",
    product: [
      {
        image: masonryImg,
        name: "Masonry Mix",
        description: "Best for masonry works using concrete sand",
        size: "Pack Size: 50 kg"
      },
      {
        image: plasteringImg,
        name: "Plastering Mix",
        description: "Fitting solution for robust interior and exterior wall plastering",
        size: "Pack Size: 50 kg"
      },
      {
        image: tileImg,
        name: "Tile Mix 18",
        description: "Best for tile works using concrete sand",
        size: "Pack Size: 50 kg"
      },
      {
        image: pillerSupr,
        name: "Pillar Super Mix",
        description: "Perfect for erecting sturdy pillars/beams",
        size: "Pack Size: 50 kg, Grade: M30, Bags Per M3: 40"
      },
      {
        image: pillerImg,
        name: "Pillar Mix",
        description: "Perfect for erecting sturdy pillars/beams",
        size: "Pack Size: 50 kg, Grade: M20, Bags Per M3: 40"
      },
      {
        image: floorImg,
        name: "Floor Mix",
        description: "Custom-made for perfecting high strength flooring",
        size: "Pack Size: 50 kg,Grade: M15, Bags Per M3: 40"
      },
      {
        image: roofImg,
        name: "Roof Mix",
        description: "Appropriate for durable and strong roofing concrete",
        size: "Pack Size: 50 kg, Grade: M25, Bags Per M3:40"
      },
      {
        image: pccImg,
        name: "PCC Mix",
        description: "Ideal for high strength PCC concrete",
        size: "Pack Size: 50 kg, Grade: M7.5, Bags Per M3: 40"
      },
      {
        image: bags,
        name: "JUMBO BAGS",
        description: "Durable bags with modern technologies",
        size: "500KG 750KG, 1000KG 1500KG"
      }]
  }]


  const howItWorks = [
    { image: "labour-day.png", name: "REDUCED LABOUR" },
    { image: "brickwall.png", name: "Leveling and finishing" },
    { image: "paper.png", name: "ASSEMBLING OF PANELS" },
    { image: "interlocking.png", name: "INTERLOCKING OF PANELS" },
    { image: "sprinkler.png", name: "APPLICATION OF SHOTCRETE MIX" },
    { image: "paintroller.png", name: "PUTTYING, PAINTING,TILING ETC" },
  ]

  let filteredProducts: filteredProductsProps[] = [];

  if (productFilter == "all") {
    filteredProducts = [...products[0].product, ...products[1].product]
  }
  else {
    const _filteredProducts = products.filter((product) => { return product.category == productFilter });
    filteredProducts = _filteredProducts[0].product;
  }
  return (
    <>
      <div className="bannerContainer" id="home">
        <SliderSimple />
        <SliderBottom cls="desktop" />

      </div>
      <SliderBottom cls="mobile" />
      <section className="aboutContainer" data-aos="slide-up">
        <div className="aboutImage wm100" id="about"></div>
        <div className="aboutText wm100">
          <div className="line">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </div>
          <div className="aboutUsHead1">About Us</div>
          <div className="aboutUsHead2">BUILDEASY SHOTCRETE</div>
          <div className="aboutUsContent">A revolution under construction Shotcrete is the method of applying
            concrete projected at high velocity primarily on to a vertical or overhead
            surface. The sprayed concrete is conveyed through a hose and
            pneumatically onto the surface that is typically reinforced
            by steel mesh. Shotcrete is placed and compacted/consolidated at the
            same time, thanks to the force with which it is ejected from the nozzle.</div>
          {/* <div className="btn1">Read More</div> */}
        </div>
      </section>
      <section className="fasterStrongerSavingsContainer">
        {fasterStrongerSavings.map((item, index) => {
          return <div className="fasterStrongerSavingsItem" key={index}>
            <div className="fasterStrongerSavingsImage" style={{ backgroundImage: `url(${item.image})` }}></div>
            {/* <img src={item.image} alt={item.text} className="src" /> */}
            <div className="fasterStrongerSavingsText">
              <div className="percentage"> {item.text.split(" ")[0]}</div>
              <div className="caption"> {item.text.split(" ")[1]}</div>
            </div>
          </div>
        })}
      </section>
      <section className="customer">
        <div className="customerHead" >Our Customers Deserve the Best</div>
        <div className="customerCaption" >Our advanced dry mix concrete solutions are the greenest in the industry since we reduce wastage and involve
          optimal use of raw materials, which will retain their property even in extreme weather conditions.</div>
        <img src="/images/process.png" data-aos="zoom-in" data-aos-offset="300" alt="process_img" className="process_img" />
        <div className="QaQ" data-aos-offset="700" >Our Unique <span>QaQ</span> Approach</div>
      </section>
      <section className="shortcreteproductContainer" id="product" data-aos-offset="500" data-aos="slide-up">
        <div className="shortcreteImage"   ></div>
        <div className="shortcreteContent">
          <div className="shortcreteContentContent1">Buildeasy</div>
          <div className="shortcreteContentContent2">Shotcrete Products</div>
          <div className="shortcreteContentContent3">BuildEasy Shotcrete Mix is the proprietary productof BuildEasy, boasting a
            mix of raw materials with an ideal ratio.
            The raw materials are

            <div><i /> Cement</div>
            <div><i /> Sand</div>
            <div><i />  Aggregates (with size less than 10mm only)</div>
            <div><i />  Admixtures etc.</div>
          </div>

        </div>
      </section>
      <section className="shotcretePanelsContainer" data-aos-offset="500" data-aos="slide-up">
        <div className="shotcretePanelsLeft">
          <div className="shortcreteContentContent1"  >Buildeasy</div>
          <div className="shortcreteContentContent2">Shotcrete Panels</div>
          <div className="shortcreteContentContent3">BuildEasy Shotcrete Panels are manufactured by sandwiching eps between square
            mesh on either side. The mesh is cross welded for extra strength.
          </div>
          <div className="shortcretePanels" data-aos="slide-up">
            {shotcretePanels.map((shotcretePanel, index) => {
              return <div className="shotcretePanel" key={index}>
                <div className="shotcretePanelImage" style={{ backgroundImage: `url(${shotcretePanel.image})` }}></div>
                {/* <div className="shotcretePanelImage" >{shotcretePanel.image}</div> */}
                <div className="shotcretePanelName">{shotcretePanel.text}</div>
                <div className="shotcretePanelCaption">{shotcretePanel.caption}</div>
              </div>
            })}
          </div>
        </div>
        <div className="shotcretePanelsRight" data-aos-offset="900" data-aos="slide-up" style={{ backgroundImage: `url(${house})` }}></div>
      </section>
      <section className="shortcreteMachineContainer" data-aos-offset="500" data-aos="slide-up">
        <div className="shortcreteMachineLeft" style={{ backgroundImage: `url(${shotcreteMachine})` }}></div>
        <div className="shortcreteMachineRight"  >
          <div className="shortcreteContentContent1">Buildeasy</div>
          <div className="shortcreteContentContent2">Shotcrete Machine</div>
          <div className="shortcreteContentContent3">BuildEasy Shotcrete Machine is the equipment developed by BuildEasy that
            allows for the projection of the concrete mixture at high pressure. It includes
            a mixer, an additive pump, a compressor, a sprayer arm and the control
            system
          </div>
        </div>
      </section>
      <section className="buildEasyProductsContainer" >
        <div className="productSubHead">  Buildeasy Product</div>
        <div className="productHead">   Our BuildEasy Product</div>
        <div className="productFilter">
          <div className={productFilter == "all" ? "all active" : "ShotcreteBtn"} onClick={() => { setFilter("all") }}>All</div>
          <div className="ShotcreteBtn" onClick={() => { setFilter("shortcrete") }}>Shotcrete</div>
          <div className="mixProducts" onClick={() => { setFilter("dry") }}>Dry Mix</div>
          {/* <div className="shotcreteBricks">Bricks</div> */}
        </div>
        <div className="buildEasyProducts" >
          {filteredProducts.map((product, index) => {
            return <div key={index} className="buildEasyProduct" data-aos-offset="800" data-aos="zoom-out">
              <div className="productImg" style={{ backgroundImage: `url(${product.image})` }} />
              <div className="productName">{product.name}</div>
              <div className="description">{product.description}</div>
              <div className="size">{product.size.split(",").map((item) => { return <div>{item} </div> })}</div>
            </div>

          })}
        </div>
      </section>
      <section className="howItWorksContainer">
        <div className="productHead"> How it Works</div>
        <div className="howItWorksDescription">A peek at the implementation process</div>
        <div className="howItWorkItems">
          {howItWorks.map((item, index) => {
            return <div key={index} className="howItWorkItem" data-aos="zoom-out" data-aos-offset="700">
              <div className="img" style={{ backgroundImage: `url(/images/${item.image})` }}></div>
              <div className="name">{item.name}</div>
            </div>
          })}
        </div>
      </section>
      <section className="happyClientsContainer" data-aos="slide-up">
        <div className="productSubHead">Buildeasy Client</div>
        <div className="productHead">Our Happy Clients</div>
        <Testimonial />
      </section>
      <section className="contactUs" id="contact" data-aos="slide-up">
        <div className="contactUsLeft">
          <div className="map">

          </div>
          <div className="sectionHead" >
            <FaHandshake color="white" /> Contact&nbsp;<span>Us</span>
          </div>
          <div className="sectionMainHead gap">Get In Touch</div>

          <div className="address mt5" >
            <div className="conatctUsSubHead bold">Address</div>
            <div className="contactUsValues" >
              <div className="linebreak subContents">{`Eco Best Build LLP
6/38/BE, 1st Floor, Koyikkakudiyil Building,
Above SBI De Paul Branch, Angamaly, Kerala-683589.
info@build-easy.in, +91 9645 799 933`}</div>

            </div>
          </div>
          <hr className="contactLine mt5" ></hr>
          <div className="callUs">
            <div className="conatctUsSubHead bold">Call US</div>
            <div className="contactUsValues subContents">
              {/* {import.meta.env.VITE_EMAIL} */}
              <a href={`tel:${import.meta.env.VITE_MOBILE}`}><div>{import.meta.env.VITE_MOBILE}</div></a>
            </div>
          </div>
          <hr className="contactLine" ></hr>
          <div className="mail" >
            <div className="conatctUsSubHead bold">Email</div>
            <div className="contactUsValues subContents">
              {/* <a href={`tel:${import.meta.env.VITE_MOBILE}`}><div>{import.meta.env.VITE_MOBILE}</div></a> */}

              <div><a href={`mailto:${import.meta.env.VITE_EMAIL}`}>{import.meta.env.VITE_EMAIL}</a></div>
            </div>
          </div>
          <hr className="contactLine" ></hr>
          <div className="followUs mt5" >
            <div className="conatctUsSubHead bold followUsHead">FOLLOW US</div>
            <div className="contactUsValues mt5">
              <div><SocialMediaMenu /></div>
            </div>
          </div>


        </div>
        <div className="contactUsRight">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.335475113237!2d76.62970754999999!3d9.236796850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0619b7c32320d3%3A0x8626062c65ae732c!2sIndian%20Oil%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1685078274678!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }}  allowFullScreen= {false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.080865456867!2d76.3742376!3d10.1740824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08078e115dcb43%3A0x857794c0f6fb60a7!2sBuildEasy!5e0!3m2!1sen!2sin!4v1690089517301!5m2!1sen!2sin" width="100%" height="100%" style={{ border: '0' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <ScrollToTopBtn />
      <Footer />
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
      text: "10 Years of industry experience"
    }
  ];
  return (
    <div className={`sliderBottom ${cls}`}>
      {bottomItems.map((item, index) => {
        return <div key={index} className="sliderBottomItem" data-aos="zoom-out" data-aos-offset="300">
          <div className="itemImage" style={{ backgroundImage: `url(/images/${item.image})` }}> </div>
          <div className="itemText">{item.text}</div>
        </div>
      })}
    </div>
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

                <div className="testimonial">
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