import {Navigation} from 'react-native-navigation'


 const startTabs=()=>{
    Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [{
                
              component: {
                name: 'RNN.sharescreen',
                passProps: {
                  text: 'This is tab 2'
                },
                options: {
                  bottomTab: {
                    text: 'Tab 2',
                    icon: require('../../src/assets/beautiful-place.jpg'),
                    testID: 'SECOND_TAB_BAR_BUTTON'
                  }
                }
              }
            },
        {
            component: {
                name: 'RNN.findplace',
                passProps: {
                  text: 'This is tab 2'
                },
                options: {
                  bottomTab: {
                    text: 'Tab 3',
                    icon: require('../../src/assets/beautiful-place.jpg'),
                    testID: 'SECOND_TAB_BAR_BUTTON'
                  }
                }
              }
        }]
          }
        }
      });
}

export default startTabs