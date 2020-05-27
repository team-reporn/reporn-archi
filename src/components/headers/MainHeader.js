import React from 'react';
import { View, StyleSheet, Image, Text  } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MainHeader extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.main}>
                <BackBtn/>
                <ParamBtn/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height:100,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    center: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    },
    bg: {
        position: "absolute",
        right: 0,
        top: 0,
        height: 100,
        width: 200,
        resizeMode: 'stretch'
    },
    bg2: {
        position: "absolute",
        left: 0,
        top: 0,
        height: 100,
        width: 200,
        resizeMode: 'stretch'
    },
    icon: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 1
    }
  });

  let BackBtn = ({}) => {
      return (
          <View>
              <Image style={styles.bg2} source={require('../../assets/img/headers/retourBg.png')}/>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/img/headers/retourIco.png')}/>
              </TouchableOpacity>
          </View>
      )
  }

  let ParamBtn = ({}) => {
    return (
        <View>
            <Image style={styles.bg} source={require('../../assets/img/headers/reglageBg.png')}/>
            <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/img/headers/reglageIco.png')}/>
            </TouchableOpacity>
        </View>
    )
}