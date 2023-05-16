import { StyleSheet, View, Text, FlatList } from "react-native";
import React, { useMemo, useState, useCallback } from "react";
import EventCalendar from "../components/EventCalendar";
import { WORKING_HOURS } from "../data/contants";
import MOVIES from "../data/movies";
import { Event } from "../types";
import { useApp } from "../providers/AppProvider";
import FAB from "../components/FAB";
import { Button, ButtonGroup, Modal } from "@ui-kitten/components";
import MovieItem from "../components/MovieItem";
import Card from "../components/Card";

const Schedule = () => {
  const { globalSchedule, addShow } = useApp();

  const [movieModal, setMovieModal] = useState(false);

  const updateSchedule = (schedule: string[]) => {};
  const events = useMemo(() => {
    let passedHours = WORKING_HOURS[0] * 60;

    // variables
    const _events: Event[] = [];
    globalSchedule.forEach((item, index) => {
      const movie = MOVIES.find((m) => m.id === item);
      const _event = {
        id: `${movie.id}-${index}`,
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
        style={{ height: "70%", width: "90%", padding: 0, margin: 0 }}
      >
        <Card>
          <FlatList
            data={MOVIES}
            renderItem={(item) => (
              <MovieItem
                movie={item.item}
                action={
                  <ButtonGroup size="small">
                    <Button>-</Button>
                    <Button style={{ flex: 1 }}>
                      {globalSchedule.reduce((prev, curr) => (curr === item.item.id ? prev + 1 : prev), 0)}
                    </Button>
                    <Button onPress={() => addShow(item.item.id)}>+</Button>
                  </ButtonGroup>
                }
              />
            )}
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
