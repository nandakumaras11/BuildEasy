import "./Loader.css"
import { useNavigate } from "react-router-dom"
export const Loader = () => {
  const navigate = useNavigate();
  return (
    <div className="loaderContainer">
      <div className="logo" onClick={() => navigate("/")}></div>
    </div>
  )
}
