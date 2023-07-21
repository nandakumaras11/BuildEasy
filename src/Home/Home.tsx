import { Slider } from "../Components/Slider/Slider"
import "./Home.css"
import faster from "../assets/faster.png";
import strengthImg from "../assets/strength.png";
import savings from "../assets/save-money.png";
import panel1 from "../assets/panel1.png";
import panel2 from "../assets/panel2.png";
import panel3 from "../assets/panel3.png";
import house from "../assets/house.png";
import shotcreteMachine from "../assets/shortcreteMachine.png";
import { FaQuoteRight } from "react-icons/fa";
import { Footer } from "../Components/Footer/Footer";
// import aboutImage from "../assets/about.png"
export const Home = () => {

  const fasterStrongerSavings = [
    {
      image: faster,
      text: "60% Faster"
    },
    {
      image: strengthImg,
      text: "30% Strong"
    },
    {
      image: savings,
      text: "20% Savings"
    }
  ]
  const shotcretePanels = [
    { image: panel1, text: "Shotcrete Panel 1", caption: "BuildEasy Shotcrete Panels are manufactured by sandwiching" },
    { image: panel2, text: "Shotcrete Panel 2", caption: "BuildEasy Shotcrete Panels are manufactured by sandwiching" },
    { image: panel3, text: "Shotcrete Panel 3", caption: "BuildEasy Shotcrete Panels are manufactured by sandwiching" }
  ]

  const products = [
    {
      category: "Shotcrete", products: [
        {
          image: "product1.png",
          name: "Product 1",
          description: "Fiing solution for robust interior and exterior wall plastering",
          size: "50 kg"
        },
        {
          image: "product1.png",
          name: "Product 1",
          description: "Fiing solution for robust interior and exterior wall plastering",
          size: "50 kg"
        },
        {
          image: "product1.png",
          name: "Product 1",
          description: "Fiing solution for robust interior and exterior wall plastering",
          size: "50 kg"
        },
        {
          image: "product1.png",
          name: "Product 1",
          description: "Fiing solution for robust interior and exterior wall plastering",
          size: "50 kg"
        }
      ]
    },

  ]

  const howItWorks = [
    { image: "labour-day.png", name: "REDUCED LABOUR" },
    { image: "paper.png", name: "ASSEMBLING OF PANELS" },
    { image: "interlocking.png", name: "INTERLOCKING OF PANELS" },
    { image: "sprinkler.png", name: "APPLICATION OF SHOTCRETE MIX" },
    { image: "brickwall.png", name: "LEVELING FINISHING OF WALLS" },
    { image: "paintroller.png", name: "PUTTYING, PAINTING,TILING ETC" },
  ]
  return (
    <>
      <div className="bannerContainer">
        <Slider>

          <SliderBottom cls="desktop" />
        </Slider>
      </div>
      <SliderBottom cls="mobile" />
      <section className="aboutContainer">
        <div className="aboutImage wm100"></div>
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
          <div className="btn1">Read More</div>
        </div>
      </section>
      <section className="fasterStrongerSavingsContainer">
        {fasterStrongerSavings.map((item) => {
          return <div className="fasterStrongerSavingsItem">
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
        <div className="customerHead">Our Customers Deserve the Best</div>
        <div className="customerCaption">Our advanced dry mix concrete solutions are the greenest in the industry since we reduce wastage and involve
          optimal use of raw materials, which will retain their property even in extreme weather conditions.</div>
        <img src="/Images/process.png" alt="process_img" className="process_img" />
        <div className="QaQ">Our Unique <span>QaQ</span> Approach</div>
      </section>
      <section className="shortcreteproductContainer">
        <div className="shortcreteImage"></div>
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
      <section className="shotcretePanelsContainer">
        <div className="shotcretePanelsLeft">
          <div className="shortcreteContentContent1">Buildeasy</div>
          <div className="shortcreteContentContent2">Shotcrete Panels</div>
          <div className="shortcreteContentContent3">BuildEasy Shotcrete Panels are manufactured by sandwiching eps between square
            mesh on either side. The mesh is cross welded for extra strength.
          </div>
          <div className="shortcretePanels">
            {shotcretePanels.map((shotcretePanel) => {
              return <div className="shotcretePanel">
                <div className="shotcretePanelImage" style={{ backgroundImage: `url(${shotcretePanel.image})` }}></div>
                {/* <div className="shotcretePanelImage" >{shotcretePanel.image}</div> */}
                <div className="shotcretePanelName">{shotcretePanel.text}</div>
                <div className="shotcretePanelCaption">{shotcretePanel.caption}</div>
              </div>
            })}
          </div>
        </div>
        <div className="shotcretePanelsRight" style={{ backgroundImage: `url(${house})` }}></div>
      </section>
        <section className="shortcreteMachineContainer">
        <div className="shortcreteMachineLeft" style={{ backgroundImage: `url(${shotcreteMachine})` }}></div>
        <div className="shortcreteMachineRight">
          <div className="shortcreteContentContent1">Buildeasy</div>
          <div className="shortcreteContentContent2">Shotcrete Machine</div>
          <div className="shortcreteContentContent3">BuildEasy Shotcrete Machine is the equipment developed by BuildEasy that
            allows for the projection of the concrete mixture at high pressure. It includes
            a mixer, an additive pump, a compressor, a sprayer arm and the control
            system
          </div>
        </div>
      </section>
      <section className="buildEasyProductsContainer">
        <div className="productSubHead">  Buildeasy Product</div>
        <div className="productHead">   Our BuildEasy Product</div>
        <div className="productFilter">
          <div className="ShotcreteBtn">Shotcrete</div>
          <div className="mixProducts">Mix Products</div>
          <div className="shotcreteBricks">Bricks</div>
        </div>
        <div className="buildEasyProducts">
          {products[0].products.map((product) => {
            return <div className="buildEasyProduct">
              <div className="productImg" style={{ backgroundImage: `url(/Images/${product.image})` }} />
              <div className="productName">{product.name}</div>
              <div className="description">{product.description}</div>
              <div className="size">Pack size: {product.size}</div>
            </div>

          })}
        </div>
      </section>
      <section className="howItWorksContainer">
        <div className="productHead"> How it Works</div>
        <div className="howItWorksDescription">A peek at the implementation process</div>
        <div className="howItWorkItems">
          {howItWorks.map((item) => {
            return <div className="howItWorkItem">
              <div className="img" style={{ backgroundImage: `url(/Images/${item.image})` }}></div>
              <div className="name">{item.name}</div>
            </div>
          })}
        </div>
      </section>
      <section className="happyClientsContainer">
        <div className="productSubHead">Buildeasy Client</div>
        <div className="productHead">Our Happy Clients</div>
        <div className="happyClients">
          <div className="happyClientsLeft">
            <div className="testimonialContainer">
              <div className="user">
                <div className="row">
                  <div className="avatar" style={{ backgroundImage: `url(Images/tony.png)` }}></div>
                  <div className="userInfo">
                    <div className="name" >Tony Supervisor</div>
                    <div className="location">Ernakulam</div>
                  </div>
                </div>

                <div className="testimonial">
                  BuildEasy is very easy to use and build. We used to do 1-2 m3 per day. Now with the same team, we can do up to 5 m3, with ease.
                </div>
                <div className="quote"><FaQuoteRight /></div>
              </div>
            </div>
          </div>
          <div className="happyClientsRight" style={{ backgroundImage: `url("/Images/videoThumb.png")` }}></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
type classProps = {
  cls: string
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
      {bottomItems.map(item => {
        return <div className="sliderBottomItem">
          <div className="itemImage" style={{ backgroundImage: `url(Images/${item.image})` }}> </div>
          <div className="itemText">{item.text}</div>
        </div>
      })}
    </div>
  )
}
