import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useApp } from "../providers/AppProvider";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const Header = ({}: NativeStackHeaderProps) => {
  const { time } = useApp();

  return (
    <View>
      <Text>time: {new Date(time * 1000).toUTCString()}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
