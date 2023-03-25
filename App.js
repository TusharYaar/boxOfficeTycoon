import { useEffect } from "react";
import { useInterstitialAd, TestIds } from "react-native-google-mobile-ads";
import { View, Button } from "react-native";
export default function App({ navigation }) {
  const { isLoaded, isClosed, load, show, reward, isEarnedReward, error } = useInterstitialAd(TestIds.REWARDED);

  console.log({ isLoaded, reward, isEarnedReward, error });

  useEffect(() => {
    // Start loading the interstitial straight away
    load();
  }, [load]);

  useEffect(() => {
    if (isClosed) {
      // Action after the ad is closed
      // navigation.navigate("NextScreen");
    }
  }, [isClosed, navigation]);

  return (
    <View>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          if (isLoaded) {
            show();
          } else {
            load();
            // No advert ready to show yet
            // navigation.navigate("NextScreen");
          }
        }}
      />
    </View>
  );
}
