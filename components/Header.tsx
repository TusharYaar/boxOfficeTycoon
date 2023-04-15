import { StyleSheet, View } from "react-native";
import React from "react";
import { useApp } from "../providers/AppProvider";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Button, Icon, Text } from "@ui-kitten/components";
import { getHeaderTitle } from "@react-navigation/elements";
import { format } from "date-fns";
const Header = ({ navigation, route, options, back }: NativeStackHeaderProps) => {
  const { time, cash } = useApp();
  const title = getHeaderTitle(options, route.name);

  return (
    <View>
      <View style={styles.container}>
        <Text category="h3">${cash}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", alignItems: "flex-end", paddingHorizontal: 5 }}>
            <Text category="h6">{format(new Date(time * 1000), "dd MMM, yyyy")}</Text>
            <Text category="s1">{format(new Date(time * 1000), "hh:mm:ss a")}</Text>
          </View>
          <Button
            onPress={() => navigation.navigate("Schedule")}
            // accessoryLeft={(props) => <Icon {...props} name="calendar-outline" />}
          />
        </View>
      </View>
      {/* <Text>{title}</Text> */}
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
