import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackScreens } from "../navigators/StackNavigators";

import LOCATIONS from "../data/locations";
import { Button } from "@ui-kitten/components";

type Props = NativeStackScreenProps<HomeStackScreens, "Cities">;

const Countries = ({ navigation }: Props) => {
  return (
    <FlatList
      data={LOCATIONS}
      renderItem={(item) => (
        <Button onPress={() => navigation.navigate("Cities", { country: item.item.name, index: item.index })}>
          {item.item.name}
        </Button>
      )}
    />
  );
};

export default Countries;

const styles = StyleSheet.create({});
