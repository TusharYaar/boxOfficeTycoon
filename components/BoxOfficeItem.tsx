import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "@ui-kitten/components";
import { BoxOffice } from "../types";
import { useApp } from "../providers/AppProvider";

type Props = {
  boxOffice: BoxOffice;
  onPress?: () => void;
};

const BoxOfficeItem = ({ boxOffice, onPress }: Props) => {
  return (
    <Card onPress={onPress}>
      <Text>{boxOffice.name}</Text>
      <Text>${boxOffice.price}</Text>
    </Card>
  );
};

export default BoxOfficeItem;
