import shortCreteImg from "./assets/shortcrete.png"
import panel1 from "./assets/panel1.png";
import panel2 from "./assets/panel2.png";
import panel3 from "./assets/panel3.png";
import masonryImg from "./assets/Masonry.png"
import plasteringImg from "./assets/Plastering.png"
import tileImg from "./assets/Tile.png"
import pillerImg from "./assets/piller.png"
import pillerSupr from "./assets/pillerSupr.png"
import floorImg from "./assets/floor.png"

import roofImg from "./assets/roof.png"
import pccImg from "./assets/pcc.png"
import bags from "./assets/bags.png"
import faster from "./assets/faster.png";
import strengthImg from "./assets/strength.png";
import savings from "./assets/save-money.png";

export type productsProps = {
    image: String,
    name: String,
    description: String,
    size: String
    details: String,
    category: 'shortcrete' | 'dry',

}[]
export const ProductDetails: productsProps = [

    {
        image: pillerSupr,
        name: "Pillar Super Mix",
        description: "Perfect for erecting sturdy pillars/beams",
        size: "Pack Size: 50 kg, Grade: M30, Bags Per M3: 40",
        category: "dry",
        details: "the ultimate solution for erecting sturdy pillars or beams in construction projects. Specially engineered with a perfect blend of raw materials, this proprietary mix is designed to deliver unmatched strength and reliability. Pillar Super Mix ensures precise proportions of cement, aggregates, and additives, creating a cohesive and robust foundation for your pillars and beams. With its high-performance properties, this mix guarantees exceptional load-bearing capacity and durability, providing the utmost stability to your structures. Say goodbye to worries about structural integrity and embrace the confidence that Pillar Super Mix brings to your construction endeavours. Experience the power of superior engineering with Pillar Super Mix, your go-to choice for building strong and resilient pillars or beams.."
    },
    {
        image: roofImg,
        name: "Roof Mix",
        description: "Appropriate for durable and strong roofing concrete",
        size: "Pack Size: 50 kg, Grade: M25, Bags Per M3:40",
        category: "dry",
        details: "The perfect choice for creating durable and strong concrete slabs for roofs. Specially formulated with a precise blend of raw materials, this proprietary mix ensures optimal performance and longevity for your roof construction. Roof Mix incorporates high-quality cement, aggregates, and additives to guarantee exceptional strength and crack resistance, making it ideal for withstanding the challenges of weather and time. With its superior engineering, this mix streamlines the process of laying concrete slabs for roofs, offering a smooth and efficient application. Embrace the peace of mind that comes with a resilient and long-lasting roof, knowing that Roof Mix has you covered with its unmatched durability and strength. Elevate your roofing projects with confidence, and experience the reliability of Roof Mix, your ultimate solution for sturdy and enduring roof concrete slabs"
    },
    {
        image: pillerImg,
        name: "Pillar Mix",
        description: "Perfect for erecting sturdy pillars/beams",
        size: "Pack Size: 50 kg, Grade: M20, Bags Per M3: 40",
        category: "dry",
        details: "The perfect solution for constructing strong and reliable pillars and beams. Carefully formulated with a precise blend of raw materials, this proprietary mix is tailored to ensure optimal performance in pillar and beam construction. Pillar Mix combines high-quality cement, aggregates, and additives to deliver exceptional strength and durability, guaranteeing the stability and integrity of your structures. With its superior engineering, this mix simplifies the process of creating sturdy pillars and beams, offering a seamless and efficient application. Embrace the confidence of building with Pillar Mix, knowing that your pillars and beams are fortified to withstand the test of time and bear heavy loads effortlessly. Experience the power of excellence in construction with Pillar Mix, your go-to choice for reliable and robust pillars and beams."
    },
    {
        image: floorImg,
        name: "Floor Mix",
        description: "Custom-made for perfecting high strength flooring",
        size: "Pack Size: 50 kg,Grade: M15, Bags Per M3: 40",
        category: "dry",
        details: "Our custom-made solution designed for the perfect high-strength flooring. Crafted with meticulous attention to detail, this proprietary mix combines an ideal blend of raw materials to ensure unparalleled performance and durability. Floor Mix incorporates top-grade cement, aggregates, and additives to create a robust foundation, capable of withstanding heavy foot traffic and daily wear and tear with ease. With its specialized formulation, this mix achieves exceptional compressive strength, making it ideal for high-traffic areas and industrial applications. Say goodbye to worries about flooring integrity and embrace the confidence that Floor Mix brings to your construction projects. Experience the power of resilience and longevity with our Floor Mix, elevating your flooring to new heights of excellence."
    },
    {
        image: pccImg,
        name: "PCC Mix",
        description: "Ideal for high strength PCC concrete",
        size: "Pack Size: 50 kg, Grade: M7.5, Bags Per M3: 40",
        category: "dry",
        details: "The ultimate choice for high-quality PCC (Plain Cement Concrete) concreting. Specially crafted to meet the strictest construction standards, this proprietary mix is the epitome of excellence. PCC Mix incorporates premium-grade cement, aggregates, and precisely balanced additives to achieve exceptional strength, durability, and workability. With its superior engineering, this mix ensures consistent and reliable results, providing a flawless finish for a wide range of PCC applications. Embrace the confidence of building with PCC Mix, knowing that your concreting projects will stand the test of time and deliver the utmost performance. Experience the power of perfection in construction with PCC Mix, your go-to solution for high-quality PCC concreting."
    },
    {
        image: plasteringImg,
        name: "Plastering Mix",
        description: "Fitting solution for robust interior and exterior wall plastering",
        size: "Pack Size: 50 kg",
        category: "dry",
        details: "The perfect fitting solution for robust interior and exterior plastering. Meticulously engineered with a precise blend of raw materials, this proprietary mix ensures exceptional performance and longevity in both indoor and outdoor applications. Plastering Mix incorporates high-quality cement, fine aggregates, and specialized additives, resulting in a smooth and seamless finish that stands the test of time. Whether it's for interior walls or exterior facades, this mix guarantees optimal adhesion and crack resistance, providing a durable and attractive plastering surface. With its superior workability, Plastering Mix streamlines the plastering process, allowing for efficient and precise applications. Embrace the confidence of flawless plastering with our Plastering Mix, where excellence in construction meets fitting solutions for enduring and beautiful interior and exterior finishes"
    },
    {
        image: masonryImg,
        name: "Masonry Mix",
        description: "Best for masonry works using concrete sand",
        size: "Pack Size: 50 kg",
        category: "dry",
        details: "The perfect solution for all masonry applications that require concrete sand. Carefully formulated with a precise blend of raw materials, this proprietary mix is engineered to excel in various masonry projects. Masonry Mix incorporates high-quality cement and specially graded concrete sand to ensure optimal workability and durability in bricklaying, blockwork, and other masonry tasks. With its superior composition, this mix delivers excellent bonding properties, making it ideal for building strong and resilient structures. Whether you're working on interior walls, exterior facades, or any masonry project, Masonry Mix guarantees consistent and reliable results. Embrace the confidence of outstanding craftsmanship with our Masonry Mix, where versatility and performance meet to elevate your masonry endeavors to new heights."
    },
    {
        image: tileImg,
        name: "Tile Mix 18",
        description: "Best for tile works using concrete sand",
        size: "Pack Size: 50 kg",
        category: "dry",
        details: "The ultimate solution for all floor tiling applications with top quality in mind. Meticulously crafted with a precise blend of raw materials, this proprietary mix is designed to exceed your tiling expectations. Tile Mix incorporates premium-grade cement, fine aggregates, and specially formulated additives, ensuring impeccable workability and long-lasting results. Whether you're tiling residential or commercial floors, this mix guarantees excellent adhesion and crack resistance, providing a flawless and durable tile installation. With its superior engineering, Tile Mix streamlines the tiling process, allowing for smooth and efficient applications. Embrace the confidence of top-quality tiling with our Tile Mix, where perfection in construction meets high-grade materials for a stunning and enduring tile finish on any floor surface."
    },
    {
        image: bags,
        name: "JUMBO BAGS",
        description: "Durable bags with modern technologies",
        size: "500KG 750KG, 1000KG 1500KG",
        category: "dry",
        details: ""
    },
    {
        image: shortCreteImg,
        name: "Shotcrete Mix 10",
        description: "Boasting a mix of raw materials with an ideal ratio",
        size: "Pack Size: 50 kg",
        category: 'shortcrete',
        details: " Introducing Shotcrete Mix 10 - the ultimate solution for the first layer of BE Shotcreting, meticulously crafted to perfection. This proprietary blend boasts a precise combination of raw materials, ensuring unparalleled performance and adherence to any surface. Designed specifically for optimal bonding and durability, Shotcrete Mix 10 lays the foundation for a robust and reliable Shotcreting process. With its ideal blend of cement, aggregates, and additives, this mix guarantees a smooth and consistent application, saving valuable time and resources during your construction projects. Trust in Shotcrete Mix 10 to elevate your Shotcreting experience and set the stage for a flawless finish that stands the test of time"
    },
    {
        image: shortCreteImg,
        name: "Shotcrete Mix 20",
        description: "Boasting a mix of raw materials with an ideal ratio",
        size: "Pack Size: 50 kg",
        category: 'shortcrete',
        details: "Shotcrete Mix 20 - the perfect blend of raw materials meticulously tailored for the final layer of BE Shotcreting. Crafted with precision and expertise, this proprietary mix is engineered to deliver exceptional results in the most critical stage of Shotcreting projects. Shotcrete Mix 20 ensures optimal adhesion, superior strength, and a flawless finish, providing an enduring surface that withstands the elements and the test of time. With its precise combination of cement, aggregates, and additives, this high-performance mix guarantees a smooth application process, reducing downtime and maximizing efficiency. Elevate your Shotcreting projects to new heights with the confidence of Shotcrete Mix 20, where innovation and quality converge to create a lasting impact on your construction endeavors."
    },
    {
        image: shortCreteImg,
        name: "Shotcrete Mix 30",
        description: "Boasting a mix of raw materials with an ideal ratio",
        size: "Pack Size: 50 kg",
        category: 'shortcrete',
        details: "Shotcrete Mix 30 - the ultimate blend of raw materials specially formulated for structural load bearing with fibre reinforcement in Shotcreting projects. Crafted to excel in demanding construction scenarios, this proprietary mix combines the finest quality cement, aggregates, and fibre reinforcement, ensuring unmatched strength and durability. Shotcrete Mix 30 guarantees superior structural integrity, making it the ideal choice for critical load-bearing applications. Its innovative fibre reinforcement enhances crack resistance and flexural strength, providing added resilience to withstand heavy loads and external forces. With precise proportions and expert engineering, Shotcrete Mix 30 streamlines the Shotcreting process, allowing for efficient and reliable applications. Trust in the power of Shotcrete Mix 30 to fortify your structures and meet the highest standards of construction excellence."
    },
    {
        image: panel1,
        name: "Single Panel",
        description: "Made with Eps sandwiched between galvanised mesh’s on either side",
        size: "",
        category: "shortcrete",
        details: "Made with Eps sandwiched between galvanised mesh’s on either side. Concrete is sprayed on either side forming a reinforced monolithic structure"
    },
    {
        image: panel2,
        name: "Double Panel",
        description: "Made of two EPS sandwiched panels with wire mesh on either side",
        size: "",
        category: "shortcrete",
        details: "Made of two EPS sandwiched panels with wire mesh on either side. Concrete is poured between the panels and shotcreted both sides, building a strong insulated wall quickly."
    },
    {
        image: panel3,
        name: "Floor Panel",
        description: "Concrete is poured on top forming a structurally insulated strong roof.",
        size: "",
        category: "shortcrete",
        details: "Build with EPS sandwiched with wire mesh on either side and two groves provided in the panels to run rebars for additional structural strength. Concrete is poured on top forming a structurally insulated strong roof."
    },
]

export const fasterStrongerSavings = [
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
export const shotcretePanels = [
    { image: panel1, text: "Single Panel", caption: "singlePanelCaption" },
    { image: panel2, text: "Double Panel", caption: "doublePanelCaption" },
    { image: panel3, text: "Floor Panel", caption: "floorPanelCaption" }
]

export const howItWorks = [
    { image: "labour-day.png", name: "PLANNING and PREPARATION" },
    { image: "paper.png", name: "ASSEMBLING OF PANELS" },
    { image: "interlocking.png", name: "INTERLOCKING OF PANELS" },
    { image: "sprinkler.png", name: "APPLICATION OF SHOTCRETE MIX" },
    { image: "brickwall.png", name: "Leveling and finishing" },
    { image: "paintroller.png", name: "PUTTYING, PAINTING,TILING ETC" },
]
