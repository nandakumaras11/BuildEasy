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
export const ProductDetails: any = [

    {
        image: pillerSupr,
        name: "Pillar Super Mix",
        description: "Perfect for erecting sturdy pillars/beams",
        size: "Pack Size: 50 kg, Grade: M30, Bags Per M3: 40",
        category: "dry",
        details: "p1De"
    },
    {
        image: roofImg,
        name: "Roof Mix",
        description: "Appropriate for durable and strong roofing concrete",
        size: "Pack Size: 50 kg, Grade: M25, Bags Per M3:40",
        category: "dry",
        details: "p2De"
    },
    {
        image: pillerImg,
        name: "Pillar Mix",
        description: "Perfect for erecting sturdy pillars/beams",
        size: "Pack Size: 50 kg, Grade: M20, Bags Per M3: 40",
        category: "dry",
        details: "p3De"
    },
    {
        image: floorImg,
        name: "Floor Mix",
        description: "Custom-made for perfecting high strength flooring",
        size: "Pack Size: 50 kg,Grade: M15, Bags Per M3: 40",
        category: "dry",
        details: "p4De"
    },
    {
        image: pccImg,
        name: "PCC Mix",
        description: "Ideal for high strength PCC concrete",
        size: "Pack Size: 50 kg, Grade: M7.5, Bags Per M3: 40",
        category: "dry",
        details: "p5De"
    },
    {
        image: plasteringImg,
        name: "Plastering Mix",
        description: "Fitting solution for robust interior and exterior wall plastering",
        size: "Pack Size: 50 kg",
        category: "dry",
        details: "p6De"
    },
    {
        image: masonryImg,
        name: "Masonry Mix",
        description: "Best for masonry works using concrete sand",
        size: "Pack Size: 50 kg",
        category: "dry",
        details: "p7De"
    },
    {
        image: tileImg,
        name: "Tile Mix 18",
        description: "Best for tile works using concrete sand",
        size: "Pack Size: 50 kg",
        category: "dry",
        details: "p8De"
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
        details: "p9De"
    },
    {
        image: shortCreteImg,
        name: "Shotcrete Mix 20",
        description: "Boasting a mix of raw materials with an ideal ratio",
        size: "Pack Size: 50 kg",
        category: 'shortcrete',
        details: "p10de"
    },
    {
        image: shortCreteImg,
        name: "Shotcrete Mix 30",
        description: "Boasting a mix of raw materials with an ideal ratio",
        size: "Pack Size: 50 kg",
        category: 'shortcrete',
        details: "p11de"
    },
    {
        image: panel1,
        name: "Single Panel",
        description: "Made with Eps sandwiched between galvanised mesh’s on either side",
        size: "",
        category: "shortcrete",
        details: "singlePanelCaption"
    },
    {
        image: panel2,
        name: "Double Panel",
        description: "Made of two EPS sandwiched panels with wire mesh on either side",
        size: "",
        category: "shortcrete",
        details: "doublePanelCaption"
    },
    {
        image: panel3,
        name: "Floor Panel",
        description: "Concrete is poured on top forming a structurally insulated strong roof.",
        size: "",
        category: "shortcrete",
        details: "floorPanelCaption"
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
