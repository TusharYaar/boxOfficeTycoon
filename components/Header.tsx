import { StyleSheet, View } from "react-native";
import React from "react";
import { useApp } from "../providers/AppProvider";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Text } from "@ui-kitten/components";
import { getHeaderTitle } from "@react-navigation/elements";
import { format } from "date-fns";
const Header = ({ navigation, route, options, back }: NativeStackHeaderProps) => {
  const { time, cash } = useApp();
  const title = getHeaderTitle(options, route.name);

  return (
    <View>
      <View style={styles.container}>
        <Text category="h1">${cash}</Text>
        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Text>{format(new Date(time * 1000), "d MMM, yyyy")}</Text>
          <Text>{format(new Date(time * 1000), "h:m:s a")}</Text>
          {__DEV__ && <Text>Seconds {time}</Text>}
        </View>
      </View>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
