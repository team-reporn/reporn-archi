import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity  } from 'react-native';

export default class MainBtn extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.blueImg = require('../../assets/button/Rep1.png')
        this.whiteImg = require('../../assets/button/Rep1clic.png')
        this.actualImg = this.whiteImg
    }

    

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.main} onPress={this.props.onPress} onPressIn={() => {this.actualImg = this.blueImg; console.log('hey')}} onPressOut={()=>{this.actualImg = this.whiteImg; console.log('hey')}}>
                    <Image style={styles.child} source={this.actualImg}></Image>
                    <Text style={styles.text}>{this.props.content}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        justifyContent:"center",
        alignItems:"center"
    },
    text: {
        position: "absolute"
    }
  });