import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import type IoniconsNames from "@expo/vector-icons/Ionicons";

type Props = {
  name: string;
  size?: number;
  onPress?: () => void;
  onLongPress?: () => void;
};

const IconButton = ({ name, size, onPress, onLongPress }: Props) => {
  return (
    <Pressable onPress={onPress ? onPress : null} onLongPress={onLongPress}>
      <Ionicons name={name as any} size={size ? size : 24} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
