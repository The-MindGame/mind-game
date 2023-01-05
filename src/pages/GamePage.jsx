import "../styles/GamePage.scss";
import { Card } from "../components/card-component/Card";

const cards = [
  {
    id: 1,
    value: 13,
  },
  {
    id: 2,
    value: 14,
  },
  {
    id: 3,
    value: 15,
  },
  {
    id: 4,
    value: 99,
  },
];

export default function GamePage() {
  return (
    <div className="game-page">
      <div className="board"></div>
      <div className="user">
        <div className="user-cards">
          {cards.map((card) => {
            return <Card key={card.id} cardNumber={card.value} />;
          })}
        </div>
        <div className="user-details">
          <p>Luntik</p>
        </div>
      </div>
      <div className="level-wrapper"></div>
    </div>
  );
}
