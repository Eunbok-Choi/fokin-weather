
import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    "Thunderstorm": {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title:"Thunderstorm is in house",
        subtitle:"Actually, outside of the house"
    },
    "Drizzle": {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"Drizzle",
        subtitle:"rain..?"
    },
    "Rain": {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "005BEA"],
        title:"",
        subtitle:"Don't forget the unbrella"
    },
    "Snow": {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title:"Cold as balls",
        subtitle:"Do you want to build a snowman?"
    },
    "Atmosphere": {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"Atmosphere",
        subtitle:"Good mood"
    },
    "Clear": {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title:"Sunny",
        subtitle:"Be carefull"
    },
    "Clouds": {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title:"Cloudy",
        subtitle:"I'm sad"
    },
    "Dust": {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Dusty",
        subtitle:"Thanks a lot China"
    },
    "Haze": {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Haze",
        subtitle:"Just don't go outside"
    },
    "Mist": {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Misty",
        subtitle:"Stay at home"
    }
};

export default function Weather ({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={76}
                    name={weatherOptions[condition].iconName} 
                    color="white" />
                <Text style={styles.temp}>
                    {temp}º
                </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>  
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Dust",
        "Haze",
        "Mist"

    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 30,
        color: "white"
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        color: "white",       
        fontSize: 40,
        fontWeight: "300",
        marginBottom: 10

    },

    subtitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "600"
    },

    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});



