import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { Button } from "@ui-kitten/components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackScreens } from "../navigators/StackNavigators";
import { useApp } from "../providers/AppProvider";
import LOCATIONS from "../data/locations";

type Props = NativeStackScreenProps<HomeStackScreens, "Home">;

const Home = ({ navigation }: Props) => {
  const { time, ownedLocations, ownedMovies, globalSchedule } = useApp();

  const allLocations = useMemo(
    () =>
      LOCATIONS.flatMap((country) =>
        country.cities.flatMap((city) =>
          city.box_offices.map((office) => ({ ...office, city: city.name, country: country.name }))
        )
      ),
    [ownedLocations]
  );

  return (
    <View>
      <Text>OwnedLocations: {JSON.stringify(ownedLocations)}</Text>
      <Text>OwnedMOvies: {JSON.stringify(ownedMovies)}</Text>
      <Text>Schedule: {JSON.stringify(globalSchedule)}</Text>
      {/* <Text> {JSON.stringify(allLocations.filter((l) => ownedLocations.includes(l.name)))}</Text> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
