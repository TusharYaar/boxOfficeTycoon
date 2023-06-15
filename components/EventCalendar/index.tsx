import { StyleSheet, ScrollView } from "react-native";
import React, { useMemo } from "react";

import HourBlock from "./HourBlock";
import EventBlock from "./EventBlock";
import { HOURS } from "../../data/contants";
import DayIndicator from "./DayIndicator";
import { Event } from "../../types";

type Props = { events: Event[]; onScheduleChange: (schedule: Event[]) => void };

const HOUR_BLOCK_HEIGHT = 100;
const MINUTE_HEIGHT = HOUR_BLOCK_HEIGHT / 60;

const EventCalendar = ({ events, onScheduleChange }: Props) => {
  const eventItems = useMemo(() => {
    return events.map((_e, index) => ({
      ..._e,
      eventId: `${_e.id}-${index}`,
      x: 70,
      y: MINUTE_HEIGHT * _e.startTime + 30,
      height: MINUTE_HEIGHT * _e.duration,
    }));
  }, [events]);

  const deleteItem = (id: string) => {
    const newEvents = eventItems.filter((e) => e.eventId !== id);
    onScheduleChange(newEvents);
  };

  const moveItemUp = (id: string) => {
    const newEvents = eventItems.map((e, index) => {
      if (index < eventItems.length - 1 && eventItems[index + 1].eventId === id) return eventItems[index + 1];
      else if (e.eventId === id && index !== 0) return eventItems[index - 1];
      else return e;
    });
    onScheduleChange(newEvents);
  };
  const moveItemDown = (id: string) => {
    const newEvents = eventItems.map((e, index) => {
      if (e.eventId === id && index !== eventItems.length - 1) {
        return eventItems[index + 1];
      } else if (index > 0 && eventItems[index - 1].eventId === id) return eventItems[index - 1];
      else return e;
    });
    onScheduleChange(newEvents);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <DayIndicator text="Day Starts" />
      {HOURS.map((hour) => (
        <HourBlock key={hour.label} hour={hour.time} label={hour.label} isDisabled={!hour.isWorking} />
      ))}
      <DayIndicator text="Day Ends" />

      {eventItems.map((event, index) => (
        <EventBlock
          key={event.eventId}
          text={event.title}
          x={event.x}
          y={event.y}
          width={300}
          height={event.height}
          onPressDelete={() => deleteItem(event.eventId)}
          onPressDown={() => moveItemDown(event.eventId)}
          onPressUp={() => moveItemUp(event.eventId)}
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
