
import { Card } from "../components/card-component/Card";
import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { socketContext } from "../components/SocketProvider";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import partyParrot from "../assets/images/party-parrot.gif"
import sadPepe from "../assets/images/crying-pepe.gif"
import { Link } from "react-router-dom";
import PartyEmoji from "../assets/icons/PartyEmoji"
import SadEmoji from "../assets/icons/SadEmoji"

const auth_string = Cookies.get("user");
const email = auth_string ? JSON.parse(auth_string).email : "";


export default function GamePage() {

  const { socket } = useContext(socketContext);
  
  const location = useLocation();
  const navigate = useNavigate();

  const isAdmin = location.state?.isAdmin;
  const currentUserId = location.state?.userId;
  const boardId = location.state?.boardId;
  const users = location.state?.users;
  const currentUser = users?.find((user) => {
    return user.email === email;
  });

  console.log(currentUser);

  const [userCards, setUserCards] = useState([]);
  const [boardCards, setBoardCards] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [messageEndGame, setMessageEndGame] = useState("");
  const [win, setWin] = useState(false);
  const [round, setRound] = useState(1);
  

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
      console.log("NEW ROUND FROM SERVER");
      getUserCards();
      setBoardCards([]);
    })

    socket.on('Game Over', (message) => {
      console.log(message);
      setEndGame(true);
      setWin(false)
      setMessageEndGame(message);
    })

    socket.on('Victory', (message) => {
      console.log(message);
      setEndGame(true);
      setWin(true)
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
      
      {/* {isAdmin ? <button onClick={destroyRoom}>End the Game</button> : <></>} */}

      {endGame ? 
      <div className="window-wrapper">
        <div className="endgame-window">
          <div className="endgame-content">
            <img src={win ? partyParrot : sadPepe} className="parrot"></img>
            <h1 className="endgame-message">{win ? <PartyEmoji/> : <SadEmoji/>}{win ? "You Won! Congratulations!" : "Game Over. You Lost ..."}{win ? <PartyEmoji/> : <SadEmoji/>}</h1>
            <Link to="/home" className="back-button"> Back to Home Page</Link>
          </div>
        </div>
      </div> 
      : <div className="page-wrapper">
        <h1>Round : {round}</h1>
        {
          users.filter(user => user.id != currentUserId).map((user, index) => {
              return <div className={"user-" + index}>{user.name}</div>
          })
        }
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
          <p>{currentUser?.name} <span>User ID : {currentUserId}</span></p>
        </div>
      </div>
    </div>}

    </div>
  );
}
