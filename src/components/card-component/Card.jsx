import "./Card.scss";
export function Card({ cardNumber }) {
  return (
    <div className="card-wrapper">
      <p className="top">{cardNumber}</p>
      <p className="bottom">{cardNumber}</p>
      <img src="src/assets/images/Bunny.png" alt="" />
    </div>
  );
}
