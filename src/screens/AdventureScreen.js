import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const generateAdventure = () => {
    let adventure = {};

    const adj = ["spooky", "scary", "dire", "aweful", "miserable", "dangerous", 
                 "deadly", "stinky", "tasteless", "grim", "irritating", "tedious", 
                 "annoying", "hopeless", "mysterious"]
    
    const locations = ["caves", "forest", "depths", "grove", "fields", "desert", "tundra", 
                      "university", "back alley", "animal den"]

    const qualifiers = ["no hope", "no return", "death", "hatred", "evil", "sorrow", "heartbreak"]

    adventure.name = "The " + adj[Math.floor(Math.random() * adj.length)] + " " +
        locations[Math.floor(Math.random() * locations.length)] + " of " +
        qualifiers[Math.floor(Math.random() * qualifiers.length)]

    adventure.challengeLevel = Math.floor(Math.random() * 10) + 1;

    return adventure;
}

const AdventureScreen = (props) => {
    return <View>
             <Text>ADVENTURE SCREEN!!!</Text>
           </View>
}


const styles = StyleSheet.create({

    });

export default AdventureScreen;