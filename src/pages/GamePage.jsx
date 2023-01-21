
import { Card } from "../components/card-component/Card";
import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { socketContext } from "../components/SocketProvider";
import axios from "axios";
import { useState } from "react";


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

  const { socket } = useContext(socketContext);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = location.state?.isAdmin;
  const currentUserId = location.state?.userId;
  // const [currentUserId, setCurrentUserId]
  const boardId = location.state?.boardId;
  const [userCards, setUserCards] = useState([]);
  const [boardCards, setBoardCards] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [messageEndGame, setMessageEndGame] = useState("");
  

  const getUserCards = async function () {
    const response = await axios.get(`https://mindgamebackend-production.up.railway.app/board/${currentUserId}/getCards`);
    setUserCards(response?.data);
    console.log(response);
  };



  useEffect(() => {
    socket.on('cardPlayed', (card)=>{
      console.log("card played");
      console.log(card);
      console.log(boardCards);
      if(!boardCards.includes(card)){

        setBoardCards(current => [...current, card]);
      }
    })
  }, [])
  

  useEffect(()=>{
    
    socket.on('New Round', () => {
      getUserCards();
    })

    socket.on('Game Over', (message) => {
      console.log(message);
      setEndGame(true);
      setMessageEndGame(message);
    })

    socket.on('Victory', (message) => {
      console.log(message);
      setEndGame(true);
      setMessageEndGame(message);
    })
  },[])


  useEffect(() => {
    getUserCards();
  }, [location.state, boardCards]);

  // const destroyRoom = () => {

  // }

  const playCard = (cardId) => {
    console.log(boardId,cardId);
    socket.emit('playCard', {cardId, boardId});
  }



  return (
    <div className="game-page">
      <h1>User ID : {currentUserId}</h1>
      {/* {isAdmin ? <button onClick={destroyRoom}>End the Game</button> : <></>} */}

      {endGame ? <h1>{messageEndGame}</h1> : <div className="page-wrapper">
        <div className="board-wrapper">
          <div className="board-border">
            <div className="board">
              {boardCards.map((card) => {
                return <Card key={card} cardNumber={card} className="board-card"/>
              })}
            </div>
          </div>
        </div>
      
      <div className="user">

        <div className="user-cards">
          {userCards.map((card) => {
            return <button key={card.id} onClick={() => playCard(card.id)}><Card key={card.id} cardNumber={card.id} /></button>;
          })}
        </div>
        <div className="user-details">
          <p>Luntik</p><button onClick={getUserCards}>get cards</button>
        </div>
      </div>
      <div className="level-wrapper"></div></div>}

    </div>
  );
}
