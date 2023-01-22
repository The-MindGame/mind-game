import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { socketContext } from "../components/SocketProvider";
import { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function GameWait() {
  const { socket } = useContext(socketContext);

  const location = useLocation();
  const navigate = useNavigate();
  
  const isAdmin = location.state?.isAdmin;
  const boardId = location.state?.boardId;
  const numberOfPlayers = location.state?.numberOfPlayers;
  
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState();
  const [currentNum, setCurrentNum] = useState(0);

  console.log(location.state?.board);

  const getUsers = async function () {
    const response = await axios.get(`https://mindgamebackend-production.up.railway.app/board/${boardId}/getUsers`);
    setUsers(response.data);
    setCurrentNum(response.data.length);
  };


  useEffect(() => {
    const currentUser = users?.find((user) => {
      return user.email === location.state.userEmail;
    });
    setCurrentUserId(currentUser?.id);
  }, [users])


  useEffect(()=>{
    getUsers();

    socket.on('GAME STARTED!', () => {
      navigate("/game", {
        state: {isAdmin: isAdmin, numOfPlayers: location.state?.numberOfPlayers, userId: currentUserId, boardId: boardId},
      });
    })
  },[])

  const auth_string = Cookies.get("user");
  const token = auth_string ? JSON.parse(auth_string).token : "";

  useEffect(() => {
    if (!location.state?.boardId) {
      navigate("/home");
    }

    socket.on('someoneJoinedRoom', (roomData) => {
      console.log(roomData, " roomdata");
      getUsers();
    });


    socket.on('GAME STARTED!', () => {
      console.log("started");
      console.log(boardId);
      console.log(currentUserId);
      navigate("/game", {
        state: {isAdmin: isAdmin, numOfPlayers: location.state?.numberOfPlayers, userId: currentUserId, boardId: boardId, users:users},
      });
    })

  }, [boardId, users, currentUserId]);


  const startGame = (e) => {
    
    e.preventDefault();
    console.log(boardId, token);
    socket.emit('gameStart', {boardId, token});
  };


  return (
    <div className="game-wait central-div">
      <h1>Waiting for all players to join...</h1>
      <div className="loadingio-spinner-interwind-my24hhwvlb">
        <div className="ldio-nnrk0kfiqbi">
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="user-list">
        <h1>{currentNum}</h1>
        <h1>Room Password: {isAdmin ? location.state?.boardPassword : location.state.board.boardPassword}</h1>
        {users?.map((user, index) => {
          return (
            <h1 key={index} className="username">
              {index + 1}. {user.name}
            </h1>
          );
        })}
      </div>
      {console.log(numberOfPlayers, currentNum, numberOfPlayers == currentNum)}
        {isAdmin ? <button onClick={startGame} className="start-game" disabled={!(numberOfPlayers == currentNum)}>Start the game</button> : <></>}
    </div>
  );
}

export default GameWait;
