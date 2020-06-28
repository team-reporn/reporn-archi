import React from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback  } from 'react-native';
import { Audio } from 'expo-av';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

let customFonts = {
    MaimDisfigured: require("../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
  };

export default class Chrono extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            open: false
        }
    }

    state = {
        fontsLoaded: false,
      };
    
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }


    render() {
        if (this.state.fontsLoaded) {
            if (this.state.open) {
                return(
                    <TouchableWithoutFeedback onPress={()=>{this.setState({open: false}); console.log('yes')}}>
                        <View style={{justifyContent: "center", alignItems: "center", position: "absolute", bottom: 0, width: '100%'}}>
                            <Image style={{resizeMode: "stretch", width: "100%"}} source={require('../assets/img/pornNews/On.png')}/>
                            <Text style={styles.text}>PornNews</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            } else {
                return (
                    <TouchableWithoutFeedback onPress={()=>{this.setState({open: true}); console.log('yes')}}>
                        <View style={{justifyContent: "center", alignItems: "center", position: "absolute", bottom: 0, width: '100%'}}>
                            <Image style={{resizeMode: "stretch", width: "100%"}} source={require('../assets/img/pornNews/Off.png')}/>
                            <Text style={styles.text}>PornNews</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }
        } else {
            return <AppLoading/>
        }
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        position: "absolute",
        fontFamily: "MaimDisfigured",
    }
  });