import React from "react";
import { createContext } from "react";
import io from "socket.io-client";

export const socketContext = createContext();

const socket = io(`https://mindgamebackend-production.up.railway.app/`, { transports: ["websocket"] });
socket.on("connect", (data) => {
  console.log("connected");
});

function SocketProvider({ children }) {
  return <socketContext.Provider value={{ socket }}>{children}</socketContext.Provider>;
}

export default SocketProvider;
