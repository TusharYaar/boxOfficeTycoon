import { StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { Movie } from "../types";
import { Button, Card, Text } from "@ui-kitten/components";
import { differenceInCalendarDays, format } from "date-fns";
import { useApp } from "../providers/AppProvider";

type Props = {
  movie: Movie;
  currentTime: number;
  onPress?: () => void;
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

const MovieItem = ({ movie, currentTime, onPress }: Props) => {
  const { buyMovie, cash, ownedMovies } = useApp();
  const isPurchaseDisable = useMemo(() => {
    if (differenceInCalendarDays(currentTime * 1000, movie.release * 1000) < 0) return true;
    if (ownedMovies.includes(movie.id)) return true;
    if (cash - movie.price < 0) return true;
    else return false;
  }, [movie, cash, currentTime, ownedMovies]);

  return (
    <Card onPress={onPress}>
      <Text category="h6">{movie.title}</Text>
      <Text>Runs for {movie.runtime} mins</Text>
      <Text>{customFormat(new Date(currentTime * 1000), new Date(movie.release * 1000), "PP")}</Text>
      {!ownedMovies.includes(movie.id) && (
        <Button onPress={() => buyMovie(movie.id)} disabled={isPurchaseDisable}>{`$${movie.price}`}</Button>
      )}
    </Card>
  );
};

export default MovieItem;

const styles = StyleSheet.create({});