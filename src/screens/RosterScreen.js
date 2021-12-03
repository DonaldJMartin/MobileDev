import React, { useContext } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RosterComponent from "../components/RosterComponent";
import { Context } from "../context/HeroContext";

const newHero = () => {
    let hero = {};
    hero.level = 1;

    let firstNameList = ["John", "Sam", "Bobby", "Daniel", "David", "Mike", "Jane", "Sam", "Jake", "Dean", "Alyssa", "Matt",
        "Jason", "Fredrick", "Tom", "Lisa"]

    let lastNameList = ["Star", "Blacksmith", "Thrillseeker", "Bonecrusher", "Mindblaster", "Knucklebuster", "Farquad", "Kingslayer"]

    hero.name = firstNameList[Math.floor(Math.random() * firstNameList.length)] + " " + lastNameList[Math.floor(Math.random() * lastNameList.length)]

    hero.gold = 100;
    hero.power = Math.floor(Math.random() * 5) + 1
    hero.maxHealth = Math.floor(Math.random() * 8) + 3
    hero.currentHealth = hero.maxHealth
    return hero
}

const RosterScreen = (props) => {

    const {addHero, state} = useContext(Context);

    return <View>
        <Text style={styles.text}>Roster</Text>
        <FlatList 
            data = {state}
            keyExtractor={(hero) => {return hero.id}}
            renderItem={ ({item}) => {return <TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={() => {props.navigation.navigate("Detail", {id: item.id})}} >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            } }
        />
        <Button title="Hire New Hero" onPress={() => {addHero(newHero())}}/>
        <RosterComponent navigation={props.navigation}/>
    </View>

}

const styles = StyleSheet.create({
   container: {
       flex: 1
   },
   button: {
       width: 100,
       height:50,
       backgroundColor: 'red',
       justifyContent: 'center',
       position: 'absolute',
       bottom: 50
   },
   text: {
       alignSelf: "center",
       fontSize: 30
   }
});

export default RosterScreen;