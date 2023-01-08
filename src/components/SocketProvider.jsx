import React from 'react'
import { createContext } from 'react'
import io from "socket.io-client"
import Cookies from 'js-cookie'


export const socketContext = createContext();

const socket = io(`https://mindgamebackend-production.up.railway.app/`, { transports: ['websocket']});
socket.on('connect', () => {
  console.log("connected");
  console.log(socket);
})

function SocketProvider({children}) {
    return (
        <socketContext.Provider value={{socket}}>
            {children}
        </socketContext.Provider>
    )
}

export default SocketProvider;