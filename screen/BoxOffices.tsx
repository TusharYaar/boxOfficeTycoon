import { StyleSheet, FlatList, Text, View } from "react-native";
import React, { useMemo } from "react";
import LOCATIONS from "../data/locations";
import BoxOfficeItem from "../components/BoxOfficeItem";
import { HomeStackScreens } from "../navigators/StackNavigators";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<HomeStackScreens, "BoxOffices">;

const BoxOffices = ({ route, navigation }: Props) => {
  const { city, country } = route.params;
  const offices = useMemo(() => {
    const _country = LOCATIONS.find((l) => l.name === country);
    const _city = _country.cities.find((c) => c.name === city);

    return _city.box_offices;
  }, [city, country]);

  console.log("LOGG");

  return (
    <FlatList
      data={offices}
      renderItem={(item) => (
        <BoxOfficeItem
          key={item.item.name}
          boxOffice={item.item}
          onPress={() => navigation.navigate("BoxOffice", { country, city, boxOffice: item.item.name })}
        />
      )}
    />
  );
};

export default BoxOffices;

const styles = StyleSheet.create({});
