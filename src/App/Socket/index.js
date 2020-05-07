import React, { useCallback, createContext } from "react";
import SocketIOClient from "socket.io-client";
export const Context = createContext(null);

const Socket = ({ children }) => {
  const socket = SocketIOClient("http://192.168.1.37:4000"); // replace 'environment.serverUrl' with your server url

  const createRoom = useCallback(() => {
    socket.emit("channel1", "Hi server");
    console.log("created room");
  }, []);

  return <Context.Provider value={{ createRoom }}>{children}</Context.Provider>;
};

export default Socket;
