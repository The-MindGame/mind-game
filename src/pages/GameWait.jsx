import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { socketContext } from "../components/SocketProvider";
import { useContext } from "react";

function GameWait() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = location.state?.isAdmin;
  const currentNum = location.state?.currentNumberOfPlayers ? location.state?.currentNumberOfPlayers : 1;
  const { socket } = useContext(socketContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(location.state);
    if (!location.state?.boardPassword) {
      navigate("/home");
    }
    socket.on("message", (data) => {
      console.log("message data", data);
      setUsers(data.users);
      // setnumOfPlayers(numOfPlayers + 1);
    });
  }, []);

  const startGame = () => {
    navigate("/game", {
      state: { numOfPlayers: location.state?.numberOfPlayers },
    });
  };

  return (
    <div className="central-div">
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
        {users.map((user) => {
          return <h1 className="username">{user.name}</h1>;
        })}
        <h1>{isAdmin ? location.state?.boardPassword : location.state.boardPassword.boardPassword}</h1>
      </div>

      <button onClick={startGame}></button>
    </div>
  );
}

export default GameWait;
