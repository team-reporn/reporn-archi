import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity  } from 'react-native';

export default class MainBtn extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.pressed = false
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.main} onPress={this.props.onPress} onPressIn={() => {this.setState({pressed: true})}} onPressOut={()=>{this.setState({pressed: false})}}>
                    <ImageBtn pressed={this.state.pressed} />
                    <Text style={this.state.pressed?styles.textPressed:styles.text}>{this.props.content}</Text>
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
    },
    textPressed: {
        position: "absolute",
        color: "white"
    }
  });

  let ImageBtn = ({pressed}) => {
    return pressed?<Image style={styles.child} source={require('../../assets/img/btn/AnswerBtnBlue.png')}></Image>:<Image style={styles.child} source={require('../../assets/img/btn/AnswerBtnWhite.png')}></Image>   
}