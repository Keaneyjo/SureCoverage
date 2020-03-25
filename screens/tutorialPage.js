import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button, Image, } from 'react-native';
import {gStyles} from '../styles/globalStyles';
//import Slideshow from  'react-native-slideshow';
import {SliderBox} from "react-native-image-slider-box";
import { LinearGradient } from 'expo-linear-gradient';



export default class tutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('./image3.png'),
                require('./image4.png'),
                require('./image5.png'),
                require('./image6.png'),
                require('./image7.png'),
                require('./image8.png'),
                require('./image12.png')
            ]
            
        };

    }

    render() {
        return(

            <LinearGradient
                colors={['#74ebd5', '#acb6e5']}
                style= {gStyles.homeScreen}>
                <View style = {styles.containers}>
                    <SliderBox 
                        images={this.state.images}
                        sliderBoxHeight={400}
                        autoplay
                        dotStyle={{width:0,
                        height:0
                        }}
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom:0,
                            padding:0,
                            alignItems: "center",
                            alignSelf:"center",
                            paddingVertical:10,
                            justifyContent:"center"

                        }}
                        ImageComponentStyle={{
                            borderRadius: 15, 
                            width: '90%', 
                            marginTop: 15
                        }}

                    />
                </View>
            </LinearGradient>
        )
    }
}



// export default class tutPage extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             height: 450,
//             position: 1,
//             interval: null,
//             containerStyle: {
//                 indicatorSize: 0,
//                 arrowSize : 0,
//             },
//             dataSource: [
//                 {
//                     url: require('./image1.png'),
//                 },
//                 {
//                     url: require('./image2.png'),
                    
//                 },
//                 {
                    
//                     url: require('./image3.png'),
//                 },
//                 {
                    
//                     url: require('./image4.png'),
//                 },
//                 {
                    
//                     url: require('./image5.png'),
//                 },
//                 {
                    
//                     url: require('./image6.png'),
//                 },
//                 {
                    
//                     url: require('./image7.png'),
//                 },
//                 {
                    
//                     url: require('./image8.png'),
//                 },
//                 {
                    
//                     url: require('./image9.png'),
//                 },
//                 {
                    
//                     url: require('./image10.png'),
//                 },
//                 {
                    
//                     url: require('./image11.png'),
//                 },
//                 {
                    
//                     url: require('./image12.png'),
//                 },
            
//             ],
//         };
//     }

//     componentDidMount() {
//         this.setState({
//             interval: setInterval(() => {
//                 this.setState({
//                     position:this.state.position === this.state.dataSource.length ? 0: this.state.position +1
//                 });

//             }, 3000)
//         });
//     }

//     componentWillUnmount() {
//         clearInterval(this.state.interval);
//     }

//     render() {
//         return(
//         <View style = {styles.SlideshowContainer}>
//             <Text style = {{fontSize : 24}}>Follow These Instructions!</Text>
//             <Slideshow
//                 containerStyle = {this.state.containerStyle}
//                 height = {this.state.height}
//                 dataSource = {this.state.dataSource}
//                 position = {this.state.position}
//                 onPosChange = {position => this.setState({ position })}/>
//             <Button title = 'Take a Photo!' style = {{paddingTop: 10}}/>
//         </View>
//         );
//     }

// }

// const styles= StyleSheet.create({
//     SlideshowContainer: {
//         flex:1,
//         height: 300,
//         alignItems: 'center',
//         backgroundColor: '#90CAF9'
//     }
// })

const styles = StyleSheet.create({
    containers: {
        flex:1
    }
});