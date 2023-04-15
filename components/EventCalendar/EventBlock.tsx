import { StyleSheet, View } from "react-native";
import React from "react";
import { getItemColors } from "./colors.utils";
import { Text } from "@ui-kitten/components";

type Props = {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

const EventBlock = ({ text, x, y, width, height }: Props) => {
  return (
    <View style={[styles.event, { left: x, top: y, width, height }, getItemColors(text)]}>
      <Text category="h3">{text}</Text>
    </View>
  );
};

export default EventBlock;

const styles = StyleSheet.create({
  event: {
    position: "absolute",
    borderWidth: 8,
    borderRadius: 5,
    padding: 10,
  },
});
