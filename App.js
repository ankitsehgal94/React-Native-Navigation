import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux"
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import configureStore from "./src/store/configureStore";
import React from "react"

const store = configureStore();

// function sceneCreator (sceneComp, store) {

  
  
//   return () => {
//     class SceneWrapper extends React.Component {
//       render () {
//         return <Provider store={store}>{React.createElement(sceneComp)}</Provider>
// // may be this also works: return <Provider store={store}><sceneComp/></Provider>
//       }
//     }
//   }
// }


const reduxStoreWrapper=(MyComponent, store)=> {
  
      return class StoreWrapper extends React.Component {
          render () {
              return (
                  <Provider store={store}>
                      {React.createElement(MyComponent)}
                  </Provider>
              );
          }
      };
  };



// Register Screens
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => reduxStoreWrapper(AuthScreen, store)
);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => reduxStoreWrapper(SharePlaceScreen, store)
);
Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => reduxStoreWrapper(FindPlaceScreen, store)
);
Navigation.registerComponent(
  "awesome-places.PlaceDetailScreen",
  () =>  reduxStoreWrapper(PlaceDetailScreen, store)
)

// Start a App
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: "awesome-places.AuthScreen",
//     title: "Login"
//   }
// });

// Navigation.setRoot({
//   root:{
//     component: {
//       name: 'awesome-places.AuthScreen',
//       passProps: {
//         text: 'Login'
//       }
//   }
// }
// })

Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'awesome-places.AuthScreen',
          passProps: {
            Login: 'Login'
          }
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'Login'
          }
        }
      }
    }
  }
});
