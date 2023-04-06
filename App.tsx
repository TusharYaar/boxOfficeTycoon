import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, Text } from "@ui-kitten/components";
import AppProvider from "./providers/AppProvider";
import * as eva from "@eva-design/eva";
import { HomeStack } from "./navigators/StackNavigators";
export default function App() {
  return (
    <AppProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </ApplicationProvider>
    </AppProvider>
  );
}
