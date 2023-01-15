import {React, useContext} from 'react'
import PlayIcon from '../assets/icons/PlayIcon'
import bunnyVid from "../assets/video/popup_bunny.mp4"
import CloseIcon from "../assets/icons/CloseIcon"
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { socketContext } from './SocketProvider'
import { useEffect, useState } from 'react'
import {io} from "socket.io-client"


function StartGamePopup({popup, setPopup}) {

  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [boardPassword, setboardPassword] = useState("");

  const auth_string = Cookies.get("user");
  const token = (auth_string ? JSON.parse(auth_string).token : "");
  const navigate = useNavigate();
  if(!token){navigate("/login")};

  const {socket} = useContext(socketContext);

  const createRoom = () => {
    console.log((auth_string ? JSON.parse(auth_string).email : ""))
    socket.emit('createRoom', {token:token, numberOfPlayers: numberOfPlayers}); 
  }

  useEffect(() => {
    socket.on('generatedPassword', (data) => {
      console.log(data);
      if(data){navigate("/gamewait", {state: {boardPassword: data, isAdmin: true, numberOfPlayers: numberOfPlayers}})}
      // console.log(data);
    })

    socket.on('joinedRoom', (data) => {
      console.log(data);
      if(data){navigate("/gamewait", {state: {boardPassword: data, isAdmin: false, numberOfPlayers: numberOfPlayers, currentNumberOfPlayers: data?.users.length}})}
    })
  }, [socket]);


  const joinRoom = () => {
    console.log((auth_string ? JSON.parse(auth_string).email : ""))
    socket.emit('joinRoom', {boardPassword: boardPassword, token: token});
  }

  return (
    <div className = {`popup ${popup ? "active" : ""}`}>
        <div className="popup-window" >
          <div className="popup-content">
            
            <div className="btn-row">
              <button className='close-btn' onClick={() => {setPopup(false)}}><CloseIcon/></button>
            </div>

            <video src={bunnyVid} className="popup-video" autoPlay loop muted />
            <h1>Start the GAME now!</h1>

            <div className='join-room-form'>
            <h2>Enter board password : </h2>
            <input
              type="text"
              id="input-room-id"
              placeholder="Join the Room"
              onChange={(e) => setboardPassword(e.target.value)}
              value={boardPassword}
            />              
            <button onClick={joinRoom} className='join-room-btn'><PlayIcon/></button>
            </div>

            <h2>OR</h2>
            
            <div className="create-room-form">
            <h2>Enter players number : </h2>
            <input
              type="number"
              id="create-room-id"
              placeholder="#"
              min="2"
              max="4"
              onChange={(e) => setNumberOfPlayers(e.target.value)}
              value={numberOfPlayers}
            />
            <button onClick={createRoom} className="create-room-btn">
              Create the Room
            </button>
          </div>          
          </div>
        </div>
    </div>
  )
}

export default StartGamePopup