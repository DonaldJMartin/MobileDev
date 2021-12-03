import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RosterComponent from "../components/RosterComponent";
import { Context } from "../context/HeroContext";


const HeroDetailScreen = (props) => {

    const {state, editHero} = useContext(Context);

    const heroID = props.navigation.getParam("id");

    const hero = state.find((hero) => {
        return heroID === hero.id;
    })

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(counter - 1);

    if(counter <= 0) {
        decrementCounter = () => setCounter(10)
    }

    return <View>
        {/* <Text style={styles.info2}>HERO DETAIL SCREEN!!</Text> */}

        <Text style={styles.name}> {hero.name} </Text>
        <Text style={styles.info}> Level: {hero.level} </Text>
        <Text style={styles.info2}> Current Health: {hero.currentHealth} / {hero.currentHealth}</Text>
        <Text style={styles.info2}> Max Health: {hero.maxHealth} / {hero.maxHealth}</Text>        
        <Text style={styles.info2}> Power: {hero.power} </Text>        
        <Text style={styles.info2}> Gold: {hero.gold} </Text>
        
        <TouchableOpacity style={styles.level} onPress={() => {editHero(hero.id, hero.name, hero.level+1, hero.power+5, 
                                                                        hero.maxHealth+2, hero.currentHealth+2, 
                                                                        hero.gold-(hero.level*10))}}>
            <Text style={styles.info3}>LEVEL UP! ({10*hero.level} GOLD)</Text>
        </TouchableOpacity>
        <RosterComponent navigation={props.navigation}/>
    </View>

}

const styles = StyleSheet.create({
    name: {
        alignSelf: "center",
        fontSize: 30,
        paddingTop: 100,
        fontWeight: "bold"
    },
    info: {
        paddingTop: 100,
        fontWeight: "bold"
    },
    info2: {
        fontWeight: "bold"
    },
    info3: {
        fontWeight: "bold",
        fontSize: 20,
    },
    button: {
        flex: 1,
        paddingTop: 200
    },
    button2: {
        width: 188,
        height: 30,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: "darkgrey",
        justifyContent: "center"
    },
    level: {
        alignSelf: "center",
        paddingTop: 100,
    }
});

export default HeroDetailScreen;