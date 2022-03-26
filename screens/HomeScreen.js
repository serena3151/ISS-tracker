import * as React from "react"
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet, Image } from "react-native"

export default class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={require("../assets/bg_image.png")}
                    style={{ resizeMode: "cover", flex: 1 }}>
                    <View style={{ alignItems: "center", flex: 0.25 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}> ISS Tracker App</Text>

                    </View>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate("ISSLocation")}
                    >
                        <Text style={styles.buttonText}> ISS Location</Text>
                        <Text style={{ color: "red" }}>{"Know more --->"}</Text>
                        <Text style={styles.digit}> 1</Text>
                        <Image source={require("../assets/iss_icon.png")}
                            style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate("Meteor")}>
                        <Text style={styles.buttonText}> Meteors</Text>
                        <Text style={{ color: "red" }}>{"Know more --->"}</Text>
                        <Text style={styles.digit}> 2</Text>
                        <Image source={require("../assets/meteor_icon.png")}
                            style={styles.icon}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        )

    }
}
const styles = StyleSheet.create({
    buttons: {
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 50,
        marginRight: 50,
        marginLeft: 50,
        alignItems: "center",
        flex: 0.25,
        borderRadius: 30,
        borderWidth: 3
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 80
    },
    icon: {
        width: 200,
        height: 200,
        position: "absolute",
        top: -100
    },
    digit: {
        fontSize: 120,
        position: "absolute",
        right: 30,
        color: "rgba(183,183,183,0.5)"
    }

})