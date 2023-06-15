import { FlatList } from "react-native";
import React from "react";

import MOVIES from "../data/movies";
import MovieItem from "../components/MovieItem";
import { HomeStackScreens } from "../navigators/StackNavigators";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Button } from "@ui-kitten/components";
import { useApp } from "../providers/AppProvider";

type Props = NativeStackScreenProps<HomeStackScreens, "Movies">;

const Movies = ({ route }: Props) => {
  const { buyMovie, cash, ownedMovies, time, ownedLocations } = useApp();

  return (
    <FlatList
      data={MOVIES}
      renderItem={({ item }) => (
        <MovieItem
          movie={item}
          action={
            !ownedMovies.includes(item.id) && (
              <Button
                onPress={() => buyMovie(item.id)}
                disabled={cash < item.price || time < item.release || ownedLocations.length === 0}
                size="small"
              >
                {`Buy for \$${item.price}`}
              </Button>
            )
          }
        />
      )}
    />
  );
};
export default Movies;

// const styles = StyleSheet.create({});
