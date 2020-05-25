import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity  } from 'react-native';

export default class NextBtn extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress}>
                <Image source={require('../../assets/buttons/arrowright.png')}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

  });