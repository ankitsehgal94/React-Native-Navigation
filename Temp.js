import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(sources => {
        Navigation.setRoot({
            root: {
              bottomTabs: {
                children: [
                {
                  component: {
                    name: 'awesome-places.SharePlaceScreen',
                    passProps: {
                      text: 'This is tab 2'
                    },
                    options: {
                      bottomTab: {
                        text: 'Tab 2',
                        icon: sources[0],
                        testID: 'SECOND_TAB_BAR_BUTTON'
                      }
                    }
                  }
                },
                {
                    component: {
                      name: 'awesome-places.PlaceDetailScreen',
                      passProps: {
                        text: 'This is tab 2'
                      },
                      options: {
                        bottomTab: {
                          text: 'Tab 2',
                          icon: sources[0],
                          testID: 'SECOND_TAB_BAR_BUTTON'
                        }
                      }
                    }
                  }
            ]
              }
            }
          });
    });
};

export default startTabs;



import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import {persistStore} from 'redux-persist'
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import configureStore from "./src/store/configureStore";

const store = configureStore();
// Register Screens
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  Provider, store
);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  Provider, store
);
Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  Provider, store
);
Navigation.registerComponent(
  "awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen,
  Provider, store
)


Navigation.events().registerAppLaunchedListener(()=>{
  Navigation.setRoot({
      root: {
        component: {
          name: 'awesome-places.AuthScreen',
          title:'Login'
        }
      }
    });
  });
