import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import { Text, TopNavigation } from "@ui-kitten/components";
import Header from "../components/Header";

const HomeStackNavigator = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ header: (props) => <Header {...props} /> }}>
      <HomeStackNavigator.Screen name="Home" component={Home} />
    </HomeStackNavigator.Navigator>
  );
};
