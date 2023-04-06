import { useContext, createContext, useState, useEffect } from "react";
import { MMKV } from "react-native-mmkv";
import { DEFAULT_CASH, TIME_UPDATE_FREQUENCY } from "../data/contants";

const storage = new MMKV();
const _time = storage.getNumber("app.time");
const _cash = storage.getNumber("app.cash");

const AppContext = createContext({ time: _time ? _time : 0, cash: _cash ? _cash : DEFAULT_CASH });

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [time, setTime] = useState(_time ? _time : 0);
  const [cash, setCash] = useState(_cash ? _cash : DEFAULT_CASH);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        storage.set("app.time", time + 1);
        return time + 1;
      });
    }, TIME_UPDATE_FREQUENCY);
    return () => clearInterval(interval);
  });
  return <AppContext.Provider value={{ time, cash }}>{children}</AppContext.Provider>;
};

export default AppProvider;
