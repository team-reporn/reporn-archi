import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity  } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default class GameHeader extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        if (this.props.dark) {
            this.bg = require("../../assets/img/title/title1-dark.png")
        } else {
            this.bg = require("../../assets/img/title/title1.png")
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <Image style={styles.bg} source={require('../../assets/img/headers/gameHeaderBg.png')} />
                <View style={styles.content}>
                    <UserBtn/>
                    <Text>Ok</Text>
                    <ParamBtn/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    bg: {
        height: 100,
        width: "100%",
        resizeMode: "stretch"
    },
    content: {
        flexDirection:"row",
        justifyContent: "space-between",
        position: "absolute",
        height: 50,
        width: "100%"
    }
  });

  let UserBtn = () => {
      return(
      <TouchableOpacity>
          <Image source={require('../../assets/img/headers/userIco.png')} />
      </TouchableOpacity>
      )
  }

  let ParamBtn = () => {
      return(
    <TouchableOpacity>
        <Image source={require('../../assets/img/headers/reglageIco.png')} />
    </TouchableOpacity>
    )
}