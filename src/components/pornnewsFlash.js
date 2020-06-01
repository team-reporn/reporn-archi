import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PornnewsFlash extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <View style={[styles.main, this.props.style]}>
                <TouchableOpacity onPress={()=>{this.setState({show: !this.state.show})}}>
                    <Image source={require('../assets/img/pornFlashBtn.png')}/>
                </TouchableOpacity>
                {this.state.show &&
                <View style={styles.content}>
                    <Image style={styles.image} source={require('../assets/img/pornFlashBg.png')} />
                    <View style={styles.textCtn}>
                        <Text style={styles.text}>Pornnews Flash</Text>
                        <Text style={styles.text}>Blaaaaaaaa</Text>
                        <Text style={styles.text}>POUR SAVOIR PLUS, RDV après la partie, sur pornews à l’accueil</Text>
                    </View>
                </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {

       // position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 200
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
    },
    textCtn: {
        position: "absolute"
    },
    text: {
        color: "white",
        textAlign: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch"
    }
  });