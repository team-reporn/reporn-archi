import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';

export default class Title1 extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.main}>
                <Image style={styles.img} source={require('../../assets/img/forms/inputWhite.png')}></Image>
                <TextInput style={styles.input} placeholder={this.props.placeholder}></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        
    },
    input: {
        color: 'blue',
        position: "absolute",
        width: "60%",
        height: "100%"
    }
  });