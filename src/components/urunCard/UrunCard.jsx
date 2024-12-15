import "./urunCard.scss"
import { Link } from "react-router-dom"

const UrunCard = (props) => {

  return (
    <div className="urun-card" key={props.id}>
      <Link to={(`${props}`) ? `/ProductList/${props.id}` : `/ProductList`} style={{textDecoration: "none"}}>
        <div className="imgCont">
          <img src={props.img} alt="urun_gruplari"/>
          <div className="whiteCover"></div>
        </div>         
        <div className="desc">
          <h2>{props.desc}</h2>
        </div>
      </Link>
    </div>
  )
}

export default UrunCard