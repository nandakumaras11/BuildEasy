import { Slider } from "../Components/Slider/Slider"
import "./Home.css"
import faster from "../assets/faster.png";
import strengthImg from "../assets/strength.png"
import savings from "../assets/save-money.png"
// import aboutImage from "../assets/about.png"
export const Home = () => {
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
  const fasterStrongerSavings = [
    {
      image: faster,
      text: "60% Faster"
    },
    {
      image: strengthImg,
      text: "30% Stronge"
    },
    {
      image: savings,
      text: "20% Savings"
    }
  ]
  return (
    <>
      <div className="bannerContainer">
        <Slider>
          <div className="sliderBottom">
            {bottomItems.map(item => {
              return <div className="sliderBottomItem">
                <div className="itemImage"> <img src={`Images/${item.image}`} alt={item.text} className="src" /> </div>
                <div className="itemText">{item.text}</div>
              </div>
            })}
          </div>

        </Slider>
      </div>
      <section className="aboutContainer">
        <div className="aboutImage"></div>
        <div className="aboutText">
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
            The raw materials are</div>
          <ul>
            <li>Cement</li>
            <li>Sand</li>
            <li>Aggregates (with size less than 10mm only)</li>
            <li>Admixtures etc.</li>
          </ul>

        </div>
      </section>
    </>
  )
}
