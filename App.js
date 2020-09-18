import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";


const API_KEY = "d4dd95c2a7d78b9f27cd68a4b18c44ad";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
    this.setState({
      isLoading: false, 
      condition: weather[0].main, 
      temp: temp
    }); 
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false });
      // Send to API sand get weather

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading 
    ? (<Loading />) 
    : ( <Weather temp={Math.round(temp)} condition="Thunderstorm" />); // 변경필요: condtion={condition}
  }
}
