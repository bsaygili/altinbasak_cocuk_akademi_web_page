import { Link } from "react-router-dom"
import "./productCategory.scss"

const ProductCategory = (props) => {

  return (
    <Link to={`/ProductPage/${props.id}`} className="productLink" >
        <div className="urun-card active" key={props.id} >
            <div className="imgCont" >
                <img src={props.img} alt="urun_gruplari" style={{borderRadius: "0"}}/>
                <div className="whiteCover active"></div>
            </div>
            <button className="detailBtn">İncele</button>         
            <div className="prodDesc">
                <h2>{props.desc}</h2>
            </div>
        </div>
    </Link>
  )
}

export default ProductCategory