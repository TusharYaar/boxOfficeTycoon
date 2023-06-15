import { StyleSheet, View } from "react-native";
import React from "react";
import { getItemColors } from "./colors.utils";
import { Button, ButtonGroup, Text } from "@ui-kitten/components";
import IconButton from "../IconButton";

type Props = {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  onPressUp?: () => void;
  onPressDown?: () => void;
  onPressDelete?: () => void;
};

const EventBlock = ({ text, x, y, width, height, onPressDelete, onPressDown, onPressUp }: Props) => {
  return (
    <View style={[styles.event, { left: x, top: y, width, height }, getItemColors(text)]}>
      <Text category="h3">{text}</Text>
      <View style={styles.actionContainer}>
        <ButtonGroup>
          <Button accessoryLeft={<IconButton name="caret-up" />} onPress={onPressUp} />
          <Button accessoryLeft={<IconButton name="trash-bin" />} onPress={onPressDelete} />
          <Button accessoryLeft={<IconButton name="caret-down" />} onPress={onPressDown} />
          {/* <IconButton name="caret-up" size={50} onPress={onPressUp} />
          <IconButton name="trash-bin" size={50} onPress={onPressDelete} />
          <IconButton name="caret-down" size={50} onPress={onPressDown} /> */}
        </ButtonGroup>
      </View>
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
  actionContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    // gap: 40,
  },
});
