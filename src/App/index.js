import React from 'react'
//import Routes from './routes'
import Socket from './Socket'
import Foo from './Foo'

export default class Index extends React.Component {
  render() {
    return (
      <Socket>
        <Foo />
      </Socket>
    )
  }
}
