import { useContext, createContext, useState, useEffect, useCallback } from "react";
import { MMKV } from "react-native-mmkv";
import { DEFAULT_CASH, TIME_UPDATE_FREQUENCY } from "../data/contants";
import MOVIES from "../data/movies";

import { StyleSheet, Button, View } from "react-native";

const storage = new MMKV();
const _time = storage.getNumber("app.time");
const _cash = storage.getNumber("app.cash");

const _ownedMovies = storage.getString("app.ownedMovies");

const AppContext = createContext({
  time: _time ? _time : 0,
  cash: _cash ? _cash : DEFAULT_CASH,
  ownedMovies: _ownedMovies ? JSON.parse(_ownedMovies) : [],
  buyMovie: (id: string) => {},
});

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [time, setTime] = useState(_time ? _time : 0);
  const [cash, setCash] = useState(_cash ? _cash : DEFAULT_CASH);

  const [ownedMovies, setOwnedMovies] = useState(_ownedMovies ? JSON.parse(_ownedMovies) : []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        storage.set("app.time", time + 1);
        return time + 1;
      });
    }, TIME_UPDATE_FREQUENCY);
    return () => clearInterval(interval);
  });

  const updateCash = useCallback((value: number) => {
    setCash((prev) => {
      storage.set("app.cash", prev + value);
      return prev + value;
    });
  }, []);

  const buyMovie = useCallback((movieId: string) => {
    const movie = MOVIES.find((_m) => _m.id === movieId);
    if (movie) {
      updateCash(-movie.price);
      setOwnedMovies((prev: string[]) => {
        storage.set("app.ownedMovies", JSON.stringify([...prev, movie.id]));
        return [...prev, movie.id];
      });
    }
  }, []);

  return (
    <AppContext.Provider value={{ time, cash, buyMovie, ownedMovies }}>
      {children}
      {__DEV__ && (
        <View style={styles.fab}>
          <Button title="Movies" onPress={() => setOwnedMovies([])} />
          <Button title="Time" onPress={() => setTime((prev) => prev + 1000000)} />
          <Button title="Cash" />
        </View>
      )}
    </AppContext.Provider>
  );
};

export default AppProvider;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
  },
});
