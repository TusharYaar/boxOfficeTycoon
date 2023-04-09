import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import Header from "../components/Header";
import Movies from "../screen/Movies";
import Countries from "../screen/Countries";
import Cities from "../screen/Cities";

export type HomeStackScreens = {
  Home: undefined;
  Movies: { currentTime: number };
  Countries: undefined;
  Cities: { country: string; index: number };
};
const HomeStackNavigator = createNativeStackNavigator<HomeStackScreens>();

export const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ header: (props) => <Header {...props} /> }}>
      <HomeStackNavigator.Screen name="Home" component={Home} />
      <HomeStackNavigator.Screen name="Movies" component={Movies} />
      <HomeStackNavigator.Screen name="Countries" component={Countries} />
      <HomeStackNavigator.Screen name="Cities" component={Cities} />
    </HomeStackNavigator.Navigator>
  );
};
