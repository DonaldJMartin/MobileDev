import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import RosterScreen from "./src/screens/RosterScreen";
import HeroDetailScreen from "./src/screens/HeroDetailScreen";
import { Provider as HeroProvider } from "./src/context/HeroContext";
import AdventureScreen from "./src/screens/AdventureScreen";
import RosterComponent from "./src/components/RosterComponent";

const navigator = createStackNavigator({
    Roster: RosterScreen,
    Detail: HeroDetailScreen,
    Adventure: AdventureScreen,
    RosterComponent: RosterComponent

},
    {
        initialRouteName: "Roster",
        defaultNavigationOptions: {
            title: "Hero Game HW3"
        }
    
    });

const App = createAppContainer(navigator);

export default () => {
    return <HeroProvider>
                <App />
            </HeroProvider>
}