import { StyleSheet, View } from "react-native";
import React from "react";
import { Movie } from "../types";
import { Text } from "@ui-kitten/components";
import { differenceInCalendarDays, format } from "date-fns";
import { useApp } from "../providers/AppProvider";

import Card from "./Card";
type Props = {
  movie: Movie;
  onPress?: () => void;
  action?: React.ReactNode;
};

const customFormat = (today: Date, calculate: Date, dateFormat: string) => {
  const dist = differenceInCalendarDays(calculate, today);
  if (dist <= 0) {
    return "Released";
  } else if (dist === 1) {
    return "Releases Tomorrow";
  } else if (dist > 1 && dist < 10) {
    return `Releases in ${dist} days`;
  } else {
    return `Releases on ${format(calculate, dateFormat)}`;
  }
};

const MovieItem = ({ movie, onPress, action }: Props) => {
  const { time } = useApp();

  return (
    <Card onPress={onPress} style={{ flex: 1, padding: 4, margin: 4, flexDirection: "row", height: 130 }}>
      <View style={{ height: "100%", width: 100, backgroundColor: "green" }} />
      <View style={{ flex: 1, marginLeft: 4 }}>
        <Text category="h6">{movie.title}</Text>
        <Text>
          {new Date(movie.release * 1000).getFullYear()} {movie.runtime}mins
        </Text>
        <Text>{customFormat(new Date(time * 1000), new Date(movie.release * 1000), "PP")}</Text>
        <Text>Rating {movie.popularity.max / 10}</Text>
        {!!action && action}
      </View>
    </Card>
  );
};

export default MovieItem;

const styles = StyleSheet.create({});
