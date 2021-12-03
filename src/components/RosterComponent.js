import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const RosterComponent = (props) => {
    return <View style={styles.container}>
             <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Roster")}} >
                <Text style={styles.text}>Roster</Text>
             </TouchableOpacity> 

             <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Adventure")}} >
                <Text style={styles.text}>Adventures</Text>
             </TouchableOpacity>
           </View>
}


    const styles = StyleSheet.create({
        container: {
            flexDirection: "row"
        },
        button: {
            width: 188,
            height: 30,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            backgroundColor: "darkgrey",
            justifyContent: "center",
        },
        text: {
            alignSelf: "center",
            fontWeight: "bold",
        },
    });

export default RosterComponent;