import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text  } from 'react-native';

export default class LinkBtn extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress}>
                <Text style={styles.text}>{this.props.content} ></Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    }
  });