import React, { useCallback, createContext, useState } from "react";
import SocketIOClient from "socket.io-client";
export const Context = createContext(null);

const socket = SocketIOClient("http://192.168.1.37:4000");

const Socket = ({ children }) => {
  const [game, setGame] = useState({ name: "cultureQ" });
  const [character, setCharacter] = useState({ cardRole: null, id: null });
  const [progress, setProgress] = useState({ start: false });
  const [roomInfo, setRoomInfo] = useState({
    roomId: null,
    numClients: null,
    role: null,
  });

  const initializeSocket = useCallback(() => {
    socket.emit("channel1", "Hi server");

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
        setRoomInfo({ roomId: null, numClients: null, role: null });
      }
    });
    socket.on("room info", (data) => {
      // console.log("room info", data);
      setRoomInfo(data);
    });
    socket.on("game info", (data) => {
      console.log("game info", data);
      setGame(data);
    });
    socket.on("game start", (data) => {
      setCharacter(data);
    });
    console.log("created room ");
    setRoomInfo({ roomId: null, numClients: null, role: null });
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
  const startGame = useCallback(() => {
    socket.emit("start playing", roomInfo.roomId);
    console.log("start playing");
  }, []);
  const changeGame = useCallback(() => {
    socket.emit("change game");
  });
  const ready = useCallback(() => {
    socket.emit("ready", "i'm ready");
    console.log("i'm ready");
  }, []);
  const getPlayerInfo = useCallback(() => {}, []);
  const getGameInfo = useCallback(() => {
    socket.emit("update game info");
  }, []);

  return (
    <Context.Provider
      value={{
        game,
        initializeSocket,
        createRoom,
        ready,
        progress,
        roomInfo,
        getRoomInfo,
        setRoomInfo,
        joinARoom,
        startGame,
        changeGame,
        getGameInfo,
        character,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Socket;
