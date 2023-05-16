import { StyleSheet, FlatList } from "react-native";
import React from "react";

import MOVIES from "../data/movies";
import MovieItem from "../components/MovieItem";
import { HomeStackScreens } from "../navigators/StackNavigators";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Button } from "@ui-kitten/components";
// import { useApp } from "../providers/AppProvider";

type Props = NativeStackScreenProps<HomeStackScreens, "Movies">;

const Movies = ({ route }: Props) => {
  // const { buyMovie, cash, ownedMovies, time } = useApp();

  // {!ownedMovies.includes(movie.id) && (
  //   <Button onPress={() => buyMovie(movie.id)} disabled={isPurchaseDisable} size="small">
  //     {isPurchaseDisable ? "Unreleased" : `Buy for $${movie.price}`}
  //   </Button>
  // )}
  return (
    <FlatList
      data={MOVIES}
      renderItem={(item) => <MovieItem movie={item.item} action={<Button size="small">Release</Button>} />}
    />
  );
};
export default Movies;

const styles = StyleSheet.create({});
