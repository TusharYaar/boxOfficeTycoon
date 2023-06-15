import { StyleSheet, View, FlatList } from "react-native";
import React, { useMemo, useState, useCallback } from "react";
import EventCalendar from "../components/EventCalendar";
import MOVIES from "../data/movies";
import { Event } from "../types";
import { useApp } from "../providers/AppProvider";
import FAB from "../components/FAB";
import { Modal } from "@ui-kitten/components";
import MovieItem from "../components/MovieItem";
import Card from "../components/Card";

const Schedule = () => {
  const { globalSchedule, updateGlobalSchedule, ownedMovies } = useApp();

  const [movieModal, setMovieModal] = useState(false);

  const addShow = (id: string) => {
    // TODO: Add Check
    setMovieModal(false);
    updateGlobalSchedule([...globalSchedule, id]);
  };

  const updateSchedule = useCallback((schedule: Event[]) => {
    updateGlobalSchedule(schedule.map((e) => e.id));
  }, []);
  const events = useMemo(() => {
    let passedHours = 6 * 60;

    // variables
    const _events: Event[] = [];
    globalSchedule.forEach((item, index) => {
      const movie = MOVIES.find((m) => m.id === item);
      const _event = {
        id: movie.id,
        title: movie.title,
        duration: movie.runtime,
        startTime: passedHours,
        endTime: passedHours + movie.runtime,
        description: "New Movie",
      };
      passedHours = passedHours + _event.duration;
      _events.push(_event);
    });
    return _events;
  }, [globalSchedule]);

  return (
    <View style={styles.screen}>
      <EventCalendar events={events} onScheduleChange={updateSchedule} />
      <FAB onPress={() => setMovieModal(true)} icon="plus" />
      <Modal
        visible={movieModal}
        onBackdropPress={() => setMovieModal(false)}
        style={{ height: "70%", width: "90%", padding: 0, margin: 0, backgroundColor: "white" }}
      >
        <Card>
          <FlatList
            data={MOVIES}
            // data={MOVIES.filter((m) => ownedMovies.includes(m.id))}
            renderItem={({ item }) => <MovieItem movie={item} onPress={() => addShow(item.id)} />}
          />
        </Card>
      </Modal>
    </View>
  );
};
export default Schedule;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
