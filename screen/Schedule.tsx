import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { WORKING_HOURS } from "../data/contants";
import MOVIES from "../data/movies";
import { Event } from "../types";

const Schedule = () => {
  const [schedule, setSchedule] = useState(["helo", "helo", "woco", "helo", "srtl", "srtl"]);
  const events = useMemo(() => {
    let passedHours = WORKING_HOURS[0] * 60;
    const _events: Event[] = [];
    schedule.forEach((item, index) => {
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
  }, [schedule]);

  return (
    <View style={styles.screen}>
      <EventCalendar events={events} />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
