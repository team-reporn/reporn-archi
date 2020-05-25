import React from 'react';
import { View, Text, Button } from 'react-native';

export default class PornnewsFlash extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View>
                <Text>Pornnews Flash</Text>
                <Text>{this.props.content}</Text>
            </View>
        )
    }
}