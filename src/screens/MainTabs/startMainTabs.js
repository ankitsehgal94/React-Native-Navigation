import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(sources => {
      // Navigation.setRoot({
      //   root: {
      //     bottomTabs: {
      //       children: [
      //       {
      //         component: {
      //           name: 'awesome-places.FindPlaceScreen',
      //           passProps: {
      //             text: 'Find Place'
      //           },
      //           options: {
      //             bottomTab: {
      //               text: 'Find Place',
      //               icon: sources[0],
      //               testID: 'Find Place'
      //             }
      //           }
      //         }
      //       },

      //       {
      //         component: {
      //           name: 'awesome-places.SharePlaceScreen',
      //           passProps: {
      //             text: 'Share Place'
      //           },
      //           options: {
      //             bottomTab: {
      //               text: 'Share Place',
      //               icon: sources[1],
      //               testID: 'Share Place'
      //             }
      //           }
      //         }
      //       }
      //     ]
      //     }
      //   }
      // });
      Navigation.setRoot({
        root: {
          bottomTabs: {
            
            children: [{
              
              stack: {
                id:'App',
                children: [{
                  component: {
                    name: 'awesome-places.FindPlaceScreen',
                    passProps: {
                      text: 'Find Place'
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    text: 'Find Place',
                    icon: sources[0],
                    testID: 'Find Place'
                  }
                }
              }
            },
            {
              component: {
                name: 'awesome-places.SharePlaceScreen',
                passProps: {
                  text: 'Share Place'
                },
                options: {
                  bottomTab: {
                    text: 'Share Place',
                    icon: sources[1],
                    testID: 'Share Place'
                  }
                }
              }
            }]
          }
        }
      });
    });
};

export default startTabs;