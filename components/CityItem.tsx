import { StyleSheet } from "react-native";
import React from "react";
import { City } from "../types";

import { Card, Text } from "@ui-kitten/components";

type Props = {
  city: City;
  onPress: () => void;
};

const CityItem = ({ city, onPress }: Props) => {
  return (
    <Card onPress={onPress}>
      <Text>{city.name}</Text>
      <Text>{city.box_offices.length} Locations</Text>
    </Card>
  );
};

export default CityItem;

const styles = StyleSheet.create({});
