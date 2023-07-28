import "./Product.css";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../constant";

const Product = () => {
    let { productName } = useParams();
    let filteredProductDetails = ProductDetails.filter((product) => {
        return product.name.replaceAll(" ", "_") == productName;
    })
    console.log(productName && productName.replaceAll(" ", "_"));
    console.log(...filteredProductDetails)
    const { image, details, name, size } = filteredProductDetails[0];
    return (
        <div className="productDetailContainer">
            <div className="productImage" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="productInfo">
                <div className="productName">{name}</div>
                <div className="productDetails">{details}</div>
                <div className="size">{size}</div>
            </div>
        </div>
    )
}

export default Product