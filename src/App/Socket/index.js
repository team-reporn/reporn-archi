import React, { useCallback, createContext, useState } from "react";
import SocketIOClient from "socket.io-client";
export const Context = createContext(null);

const Socket = ({ children }) => {
  const [progress, setProgress] = useState({ start: false });
  const socket = SocketIOClient("http://192.168.1.37:4000");

  const initializeSocket = useCallback(() => {
    socket.emit("channel1", "Hi server");
    socket.emit("create or join");

    socket.on("everyone is ready", () => {
      console.log("everyone");
      setProgress({ start: true });
    });
    socket.on("created", () => {
      console.log("created");
    });
    socket.on("joined", () => {
      console.log("joined");
    });

    console.log("created room ");
  }, []);

  const createRoom = useCallback(() => {}, []);

  const ready = useCallback(() => {
    socket.emit("ready", "i'm ready");
    console.log("i'm ready");
  }, []);

  return (
    <Context.Provider value={{ initializeSocket, createRoom, ready, progress }}>
      {children}
    </Context.Provider>
  );
};

export default Socket;
