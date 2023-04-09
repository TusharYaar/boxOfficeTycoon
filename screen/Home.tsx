import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackScreens } from "../navigators/StackNavigators";
import { useApp } from "../providers/AppProvider";

type Props = NativeStackScreenProps<HomeStackScreens, "Home">;

const Home = ({ navigation }: Props) => {
  const { time } = useApp();
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("Countries")}>Countries</Button>
      <Button onPress={() => navigation.navigate("Movies", { currentTime: time })}>Movies</Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
