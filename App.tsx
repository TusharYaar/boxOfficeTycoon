import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import AppProvider from "./providers/AppProvider";
import * as eva from "@eva-design/eva";
import { HomeStack } from "./navigators/StackNavigators";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
export default function App() {
  return (
    <AppProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </ApplicationProvider>
    </AppProvider>
  );
}
