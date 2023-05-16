import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";

type Props = {
  onPress: () => void;
  icon?: string;
};

const FAB = ({ onPress }: Props) => {
  return (
    <Button style={[styles.position]} onPress={onPress}>
      +
    </Button>
  );
};

export default FAB;

const styles = StyleSheet.create({
  position: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
});
