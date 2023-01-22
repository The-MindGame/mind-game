import "./Card.scss";
import bunny from "../../assets/images/Bunny.png"


export function Card({ cardNumber }) {
  return (
    <div className="card-wrapper">
      <p className="top">{cardNumber}</p>
      <p className="bottom">{cardNumber}</p>
      <img src={bunny} alt="" />
    </div>
  );
}
