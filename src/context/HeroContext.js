import React, {useReducer} from "react";
import { call, max } from "react-native-reanimated";
import createDataContext from "./createDataContext";

const heroReducer = (state, action) => {
    switch(action.type){
        case 'get_hero':
            return action.payload;
        case 'add_hero':
            return [...state, { 
                    id: Math.floor(Math.random() * 999999), 
                    name: action.payload.hero.name,
                    level: action.payload.hero.level,
                    power: action.payload.hero.power,
                    maxHealth: action.payload.hero.maxHealth,
                    currentHealth: action.payload.hero.currentHealth,
                    gold: action.payload.hero.gold
                }
            ]
        case 'delete_hero':
            return state.filter((hero) => {
                return hero.id !== action.payload
            });      
        return (hero, callback) => {
        dispatch({ type: 'add_hero', payload: { hero } })
        if(callback){
            callback();
        }
    }
        case 'edit_hero':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else{
                    return hero;
                }
            })
        default:
            return state;
    }
}

const getHero = dispatch => {
    return async () => {
        console.log("about to make network request...?")
        try{
            const response = await jsonServer.get("/blogposts");
            console.log("network request completed!!!");
            //response.data === [{}, {}, {}]
            console.log(response.data);
            dispatch({type: 'get_blogposts', payload: response.data})
        }
        catch(e){
            console.log("something went wrong...")
            console.log(e);
        }
    }
}

const levelUpHero = (dispatch) => {
    return (hero, callback) => {
        dispatch({ type: 'level_up_hero', payload: { hero } })
        if(callback){
            callback();
        }
    }
}

const addHero = (dispatch) => {
    return (hero, callback) => {
        dispatch({ type: 'add_hero', payload: { hero } })
        if(callback){
            callback();
        }
    }
}

const deleteHero = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_hero', payload: id  })
    }
}

const editHero = (dispatch) => {
    return (id, name, level, power, maxHealth, currentHealth, gold, callback) => {
        dispatch({type: 'edit_hero', payload: { id: id, name: name, level: level, 
                                                power: power, maxHealth: maxHealth, 
                                                currentHealth: currentHealth, gold: gold }})

                                                if(callback){
                                                callback();
                                                }
    }
}

export const {Context, Provider} = createDataContext(heroReducer, 
                                    {addHero, deleteHero, getHero, editHero}, 
                                    [ ]
                                );