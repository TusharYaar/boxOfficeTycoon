import { StyleSheet, FlatList } from "react-native";
import React from "react";

import MOVIES from "../data/movies";
import MovieItem from "../components/MovieItem";
import { HomeStackScreens } from "../navigators/StackNavigators";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<HomeStackScreens, "Movies">;

const Movies = ({ route }: Props) => {
  return <FlatList data={MOVIES} renderItem={(item) => <MovieItem movie={item.item} />} numColumns={2} />;
};

export default Movies;

const styles = StyleSheet.create({});
