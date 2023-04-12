import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useMemo } from "react";
import { HomeStackScreens } from "../navigators/StackNavigators";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LOCATIONS from "../data/locations";
import { Card, Button } from "@ui-kitten/components";
import { useApp } from "../providers/AppProvider";

type Props = NativeStackScreenProps<HomeStackScreens, "BoxOffice">;

const BoxOffice = ({ route }: Props) => {
  const { params } = route;
  const { cash, buyLocation, ownedLocations } = useApp();

  const boxOffice = useMemo(() => {
    // TODO: Change location.name to location.id
    const _country = LOCATIONS.find((l) => l.name === params.country);
    if (_country) {
      const _city = _country.cities.find((c) => c.name === params.city);
      if (_city) {
        const office = _city.box_offices.find((b) => b.name === params.boxOffice);
        if (office) return office;
      }
      //   TODO: Add something to do when its invalid
    }
  }, [params]);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio
          impedit veniam, neque animi, nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit
          veniam, neque animi, nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam,
          neque animi, nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque
          animi, nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eius, distinctio! Ad, eius aliquam! Repellat odio impedit veniam, neque animi,
          nulla quia quidem autem rem, saepe necessitatibus. Autem nobis velit quo!
        </Text>
      </ScrollView>
      {!ownedLocations.includes(params.boxOffice) && (
        <Card>
          <Button
            disabled={cash < boxOffice.price}
            onPress={() => buyLocation(params.country, params.city, params.boxOffice)}
          >
            Buy
          </Button>
        </Card>
      )}
    </View>
  );
};

export default BoxOffice;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
