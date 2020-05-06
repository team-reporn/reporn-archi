import React, { useCallback, createContext } from 'react'

export const Context = createContext(null)

const Socket = ({ children }) => {
  const createRoom = useCallback(() => {
    console.log('created room')
  }, [])

  return <Context.Provider value={{ createRoom }}>{children}</Context.Provider>
}

export default Socket
