import React from 'react';
import { View, StyleSheet, Image, Text  } from 'react-native';

export default class Title1 extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        if (this.props.dark) {
            this.bg = require("../../assets/title/title1-dark.png")
        } else {
            this.bg = require("../../assets/title/title1.png")
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <Image source={this.bg}></Image>
                <Text style={styles.text}>{this.props.content}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: 'white',
        position: "absolute"
    }
  });