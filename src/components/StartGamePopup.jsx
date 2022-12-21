import React from 'react'
import PlayIcon from '../assets/icons/PlayIcon'
import bunnyVid from "../assets/video/popup_bunny.mp4"
import CloseIcon from "../assets/icons/CloseIcon"

function StartGamePopup({popup, setPopup}) {

  return (
    <div className = {`popup ${popup ? "active" : ""}`}>
        <div className="popup-window" >
          <div className="popup-content">
            
            <div className="btn-row">
              <button className='close-btn' onClick={() => {setPopup(false)}}><CloseIcon/></button>
            </div>

            <video src={bunnyVid} className="popup-video" autoPlay loop muted />
            <h1>Start the GAME now!</h1>
            <h2>Join thousands of rooms in a single click</h2>

            <form className='join-room-form'>
              <input type="text" id="input-room-id" placeholder="Join the Room"/>
              <button><PlayIcon/></button>
            </form>
            
            <button className='create-room-btn'>Create the Room</button>
          </div>
        </div>
    </div>
  )
}

export default StartGamePopup