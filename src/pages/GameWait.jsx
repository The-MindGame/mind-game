import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { socketContext } from "../components/SocketProvider";
import { useContext } from "react";
import axios from "axios";
import "../styles/GameWait.scss";

function GameWait() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = location.state?.isAdmin;
  const currentNum = location.state?.currentNumberOfPlayers ? location.state?.currentNumberOfPlayers : 1;
  const { socket } = useContext(socketContext);
  const [users, setUsers] = useState([]);
  let currentUserId;

  const getUserCards = async function () {
    const response = await axios.get(`https://mindgamebackend-production.up.railway.app/board/${currentUserId}/getCards`);
  };

  useEffect(() => {
    if (!location.state?.boardPassword) {
      navigate("/home");
    }

    socket.on("message", (roomData) => {
      console.log(roomData, " roomdata");
      setUsers(roomData.users);
      const currentUser = roomData.users.find((user) => {
        return user.email === location.state.userEmail;
      });
      currentUserId = currentUser.id;
      getUserCards();
    });

    return () => {
      socket.on("leaveRoom");
    };
  }, []);

  const startGame = () => {
    navigate("/game", {
      state: { numOfPlayers: location.state?.numberOfPlayers, currentUserId },
    });
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
        <h1>{users.length}</h1>
        <h1>Room id: {isAdmin ? location.state?.boardPassword : location.state.boardPassword.boardPassword}</h1>
        {users.map((user, index) => {
          return (
            <h1 className="username">
              {index + 1}. {user.name}
            </h1>
          );
        })}
      </div>

      <button onClick={startGame}>Start the game</button>
    </div>
  );
}

export default GameWait;
