import { StyleSheet, View } from "react-native";
import React from "react";

import { Text } from "@ui-kitten/components";

const DayIndicator = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <Text category="h6">{text}</Text>
    </View>
  );
};

export default DayIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
});
