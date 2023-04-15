import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Movies from "../screen/Movies";
import Countries from "../screen/Countries";
import Home from "../screen/Home";

const TopTabs = createMaterialTopTabNavigator();
const BottomTabNavigator = () => (
  <TopTabs.Navigator initialRouteName="Dashboard">
    <TopTabs.Screen name="Countries" component={Countries} />
    <TopTabs.Screen name="Dashboard" component={Home} />
    <TopTabs.Screen name="Movies" component={Movies} />
  </TopTabs.Navigator>
);

export default BottomTabNavigator;
