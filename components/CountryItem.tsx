import { StyleSheet, View } from "react-native";
import React, { useMemo } from "react";
import { Card, Text } from "@ui-kitten/components";
import { Country } from "../types";

type Props = {
  onPress: () => void;
  country: Country;
};

const CountryItem = ({ onPress, country }: Props) => {
  const location = useMemo(() => {
    const _location = country.cities.reduce((prev, city) => {
      return prev + city.box_offices.length;
    }, 0);

    return `${_location} locations across ${country.cities.length} cities`;
  }, [country]);

  return (
    <Card onPress={onPress}>
      <View>
        <Text>{country.name}</Text>
        <Text>{location}</Text>
      </View>
    </Card>
  );
};

export default CountryItem;

const styles = StyleSheet.create({});
