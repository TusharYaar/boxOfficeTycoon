import { FlatList } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackScreens } from "../navigators/StackNavigators";

import LOCATIONS from "../data/locations";
import CountryItem from "../components/CountryItem";

type Props = NativeStackScreenProps<HomeStackScreens, "Cities">;

const Countries = ({ navigation }: Props) => {
  return (
    <FlatList
      data={LOCATIONS}
      renderItem={(item) => (
        <CountryItem
          key={item.item.name}
          country={item.item}
          onPress={() => navigation.navigate("Cities", { country: item.item.name, index: item.index })}
        />
      )}
    />
  );
};

export default Countries;
