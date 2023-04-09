import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackScreens } from "../navigators/StackNavigators";

type Props = NativeStackScreenProps<HomeStackScreens, "Cities">;

import LOCATIONS from "../data/locations";

const Cities = ({ navigation, route }: Props) => {
  useEffect(() => {
    navigation.setOptions({ headerTitle: route.params.country });
  }, []);

  const cities = useMemo(() => {
    let country = LOCATIONS[route.params.index];

    if (route.params.country !== country.name) country = LOCATIONS.find((e) => e.name === route.params.country);

    return country.cities || [];
  }, [route.params]);

  return (
    <View>
      {cities.map((area) => (
        <Text>{area.name}</Text>
      ))}
    </View>
  );
};

export default Cities;

const styles = StyleSheet.create({});
