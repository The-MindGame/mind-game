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
  //
  const currentNum = location.state?.currentNumberOfPlayers
    ? location.state?.currentNumberOfPlayers
    : 1;

  const { socket } = useContext(socketContext);

  const [numOfPlayers, setnumOfPlayers] = useState(currentNum);

  useEffect(() => {
    if (!location.state?.boardPassword) {
      navigate("/home");
    }
  }, []);

  useEffect(() => {
    socket.on("message", () => {
      console.log("HELLO");
      setnumOfPlayers(numOfPlayers + 1);
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
        {console.log(numOfPlayers)}
        <h1>{numOfPlayers}</h1>
        <h1>{isAdmin ? location.state?.boardPassword : "board pass here"}</h1>
      </div>

      <button onClick={startGame}></button>
    </div>
  );
}

export default GameWait;
