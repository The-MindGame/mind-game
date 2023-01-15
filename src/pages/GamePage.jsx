import "../styles/GamePage.scss";
import { Card } from "../components/card-component/Card";
import {useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom";

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
  // const [numOfPlayers, setNum]
  const isAdmin = location.state?.isAdmin;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!location.state?.boardPassword){navigate("/home")};
  }, [])
  

  return (
    <div className="game-page">
      <h1>Board Password : {location.state?.boardPassword}</h1>
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
