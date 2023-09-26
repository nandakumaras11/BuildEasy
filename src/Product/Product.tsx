import "./Product.css";
import { useNavigate, useParams } from "react-router-dom";
import { ProductDetails } from "../constant";
import { FaArrowLeft } from "react-icons/fa";
import { t } from "i18next";

const Product = () => {
    let { productName } = useParams();
    const navigate = useNavigate();
    let filteredProductDetails = ProductDetails.filter((product: any) => {
        return product.name.replaceAll(" ", "_") == productName;
    })
    console.log(productName && productName.replaceAll(" ", "_"));
    console.log(...filteredProductDetails)
    const { image, details, name, size } = filteredProductDetails[0];
    return (
        <div className="productDetailContainer">
            <div className="backBtn"><FaArrowLeft onClick={() => { navigate(-1) }} /></div>
            <div className="productImage" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="productInfo">
                <div className="productName">{t(name)}</div>
                <div className="productDetails">{t(details)}</div>
                <div className="size">{t(size)}</div>
            </div>
        </div>
    )
}

export default Product