import React, { useEffect } from 'react'
import useSocket from './Socket/useSocket'
import { View, Text } from 'react-native'

const Foo = () => {
  const { createRoom } = useSocket()

  useEffect(() => {
    // Create a room on mount
    createRoom()
  }, [createRoom])

  return (
    <View>
      <Text>Foo</Text>
    </View>
  )
}

export default Foo
