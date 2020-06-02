import React from 'react';
import { View, StyleSheet, Image, Text  } from 'react-native';

export default class Title2 extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        if (this.props.dark) {
            this.bg = require("../../assets/img/title/title2-dark.png")
        } else {
            this.bg = require("../../assets/img/title/title2.png")
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <Image source={this.bg}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.props.content}</Text>
                    <Text style={styles.text}>{this.props.content2}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
        width: 320,
        transform: [{rotate: 0.1}]
    },
    textContainer: {
        position: "absolute",
        left: 40
    },
    text: {
        color: 'white',
        textAlign: "center"
    }
  });