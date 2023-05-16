import { StyleSheet, ViewStyle, Pressable } from "react-native";
import React from "react";
import { useTheme } from "@ui-kitten/components";

type Props = { children: React.ReactElement | React.ReactElement[]; onPress?: () => void; style?: ViewStyle };

const Card = ({ children, style, onPress }: Props) => {
  const theme = useTheme();
  return (
    <Pressable
      style={[{ backgroundColor: theme["background-basic-color-1"] }, style]}
      onPress={onPress ? onPress : null}
    >
      {children}
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({});
