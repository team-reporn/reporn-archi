import React, { useCallback, createContext, useState } from "react";
import SocketIOClient from "socket.io-client";
export const Context = createContext(null);

const socket = SocketIOClient("http://192.168.1.37:4000");

const Socket = ({ children }) => {
  const [progress, setProgress] = useState({ start: false });
  const [roomInfo, setRoomInfo] = useState({});
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

    socket.on("joined", (data) => {
      console.log("==========\n==========\n==========\n==========\n");
      console.log(data);
      console.log("==========\n==========\n==========\n==========\n");
      if (data && data.success) {
        console.log("joined");
        setRoomInfo(data.roomInfo);
      } else {
        console.log("fail to join the room");
        setRoomInfo({ roomId: null });
      }
    });
    socket.on("room info", (data) => {
      console.log("room info", data);
      setRoomInfo(data);
    });
    console.log("created room ");
  }, []);
  let getRoomInfo = useCallback(() => {
    socket.emit("update room info", roomInfo.roomId);
  }, [roomInfo]);
  const createRoom = useCallback(() => {
    socket.emit("create room");
  }, []);
  const joinARoom = useCallback((roomId) => {
    socket.emit("join a room", roomId);
  }, []);

  const ready = useCallback(() => {
    socket.emit("ready", "i'm ready");
    console.log("i'm ready");
  }, []);

  return (
    <Context.Provider
      value={{
        initializeSocket,
        createRoom,
        ready,
        progress,
        roomInfo,
        getRoomInfo,
        joinARoom,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Socket;
