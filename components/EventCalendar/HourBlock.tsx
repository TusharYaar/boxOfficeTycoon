import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

type Props = {
  hour: number;
  label: string;
  isDisabled?: boolean;
};

const HourBlock = ({ hour, label, isDisabled }: Props) => {
  return (
    <View style={[styles.hourBlock, isDisabled ? styles.disabled : null]}>
      <Text category="s2">{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hourBlock: {
    height: 100,
    flex: 1,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  disabled: {
    backgroundColor: "#a1a5a872",
  },
});

export default HourBlock;
