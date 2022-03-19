import * as React from "react"
import HomeScreen from "./screens/HomeScreen"
import ISSLocation from "./screens/ISSLocation"
import Meteor from "./screens/Meteor"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()
export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="ISSLocation" component={ISSLocation} />
                    <Stack.Screen name="Meteor" component={Meteor} />
                </Stack.Navigator>
            </NavigationContainer>


        )
    }
}
