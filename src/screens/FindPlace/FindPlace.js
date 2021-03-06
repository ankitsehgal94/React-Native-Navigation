import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Navigation } from 'react-native-navigation';
import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    // this.props.navigator.push({
    //   screen: "awesome-places.PlaceDetailScreen",
    //   title: selPlace.name,
    //   passProps: {
    //     selectedPlace: selPlace
    //   }
    // });
    
    Navigation.push('App', {
      component: {
        name: 'awesome-places.PlaceDetailScreen',
        passProps: {
          selectedPlace: selPlace
        },
        options: {
          topBar: {
            title: {
              text:selPlace.name
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
