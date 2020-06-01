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
            <View style={[styles.main, this.props.style]}>
                <BackBtn/>
                <ParamBtn/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    bg: {
        height: "100%",
        width: 250,
        resizeMode: 'stretch'
    },
    bg2: {
        height: "100%",
        width: 200,
        resizeMode: 'stretch'
    },
    icon: {
        position: "absolute",
        top: 0,
        zIndex: 1,
        margin: 10
    }
  });

  let BackBtn = ({}) => {
      return (
          <View style={styles.center}>
              <Image style={styles.bg} source={require('../../assets/img/headers/retourBg.png')}/>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/img/headers/retourIco.png')}/>
              </TouchableOpacity>
          </View>
      )
  }

  let ParamBtn = ({}) => {
    return (
        <View style={styles.center}>
            <Image style={styles.bg} source={require('../../assets/img/headers/reglageBg.png')}/>
            <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/img/headers/reglageIco.png')}/>
            </TouchableOpacity>
        </View>
    )
}