import { StyleSheet, ScrollView } from "react-native";
import React, { useMemo } from "react";

import HourBlock from "./HourBlock";
import EventBlock from "./EventBlock";
import { HOURS, WORKING_HOURS } from "../../data/contants";
import DayIndicator from "./DayIndicator";
import { Event } from "../../types";
import { useApp } from "../../providers/AppProvider";

type Props = { events: Event[]; onScheduleChange: (schedule: string[]) => void };

const HOUR_BLOCK_HEIGHT = 100;
const MINUTE_HEIGHT = HOUR_BLOCK_HEIGHT / 60;

const EventCalendar = ({ events }: Props) => {
  const calendarHours = useMemo(() => {
    return HOURS.map((hr) => {
      if (hr < 12) return { hour: hr, period: "AM", isDisabled: !WORKING_HOURS.includes(hr) };
      else if (hr === 24) return { hour: 12, period: "AM", isDisabled: !WORKING_HOURS.includes(hr) };
      else if (hr === 12) return { hour: 12, period: "PM", isDisabled: !WORKING_HOURS.includes(hr) };
      else return { hour: hr - 12, period: "PM", isDisabled: !WORKING_HOURS.includes(hr) };
    });
  }, []);

  const eventItems = useMemo(() => {
    return events.map((_e) => ({
      ..._e,
      x: 70,
      y: MINUTE_HEIGHT * _e.startTime + 30,
      height: MINUTE_HEIGHT * _e.duration,
    }));
  }, [events]);

  return (
    <ScrollView style={styles.scrollView}>
      <DayIndicator text="Day Starts" />
      {calendarHours.map((time) => (
        <HourBlock
          key={`hour=${time.hour}-${time.period}`}
          hour={time.hour}
          period={time.period}
          isDisabled={time.isDisabled}
        />
      ))}
      <DayIndicator text="Day Ends" />

      {eventItems.map((event, index) => (
        <EventBlock
          key={`${event}-${index}`}
          text={event.title}
          x={event.x}
          y={event.y}
          width={300}
          height={event.height}
        />
      ))}
    </ScrollView>
  );
};

export default EventCalendar;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
});
