import * as React from 'react';
import { Text, View, ImageBackground, SafeAreaView, Alert, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
export default class ISSLocationScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            location: {}
        }
    }
    getISSLocation = () => {
        axios.get("https://api.wheretheiss.at/v1/satellites/25544.")
            .then(response => { this.setState({ location: response.data }) })
            .catch(error => { Alert.alert(error.message) })
    }
    componentDidMount() { this.getISSLocation() }
    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 25 }}>Loading..
                    </Text>
                </View>
            )
        } else {
            return (<View style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <ImageBackground source={require("../assets/iss_bg.jpg")} style={{ flex: 1, resizeMode: "cover" }}>
                        <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>ISS Location</Text>
                        </View>
                        <View style={{ flex: 0.7 }}>
                            <MapView region={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude, longitudeDelta: 100, latitudeDelta: 100 }}
                                style={{ width: "100%", height: "100%" }}>
                                <Marker coordinate={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude }}>
                                    <Image source={require("../assets/iss_icon.png")} style={{ height: 50, width: 50 }} />
                                </Marker> </MapView> </View>
                        <View style={{ flex: 0.2 }}>
                            <Text> Longitude: {this.state.location.longitude} </Text>
                            <Text> Latitude: {this.state.location.latitude} </Text>
                            <Text> Altitude: {this.state.location.altitude} </Text>
                            <Text> Velocity: {this.state.location.velocity} </Text>
                        </View>
                    </ImageBackground> </SafeAreaView> </View>)
        }
    }
}