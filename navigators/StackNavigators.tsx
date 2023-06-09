import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Movies from "../screen/Movies";
import Countries from "../screen/Countries";
import Cities from "../screen/Cities";
import BoxOffices from "../screen/BoxOffices";
import BoxOffice from "../screen/BoxOffice";
import TopTabNavigator from "./TopTabNavigator";
import Schedule from "../screen/Schedule";

export type HomeStackScreens = {
  Home: undefined;
  Movies: { currentTime: number };
  Countries: undefined;
  Schedule: undefined;
  Cities: { country: string; index: number };
  BoxOffices: { country: string; city: string };
  BoxOffice: { country: string; city: string; boxOffice: string };
};
const HomeStackNavigator = createNativeStackNavigator<HomeStackScreens>();

export const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ header: (props) => <Header {...props} /> }}>
      <HomeStackNavigator.Screen name="Home" component={TopTabNavigator} />
      <HomeStackNavigator.Screen name="Movies" component={Movies} />
      <HomeStackNavigator.Screen name="Countries" component={Countries} />
      <HomeStackNavigator.Screen name="Cities" component={Cities} />
      <HomeStackNavigator.Screen name="BoxOffices" component={BoxOffices} />
      <HomeStackNavigator.Screen name="BoxOffice" component={BoxOffice} />
      <HomeStackNavigator.Screen name="Schedule" component={Schedule} />
    </HomeStackNavigator.Navigator>
  );
};
