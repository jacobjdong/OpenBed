import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import HospitalDetails from "./src/screens/HospitalDetails";
import HospitalDetails2 from "./src/screens/HospitalDetails2";
import ListView from "./src/screens/ListView";
import MapView from "./src/screens/MapView";
import Welcome from "./src/screens/Welcome";

const DrawerNavigation = createDrawerNavigator({
  Welcome: Welcome,
  HospitalDetails: HospitalDetails,
  HospitalDetails2: HospitalDetails2,
  ListView: ListView,
  MapView: MapView
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    HospitalDetails: HospitalDetails,
    HospitalDetails2: HospitalDetails2,
    ListView: ListView,
    MapView: MapView,
    Welcome: Welcome
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
