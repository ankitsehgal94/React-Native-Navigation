import React,{Component} from 'react'
import {View,Text}from 'react-native'
import {connect} from "react-redux"
import PlaceInput from '../../src/components/PlaceInput/PlaceInput';
class SharePlace extends Component{

    placeAddedHandler=(placeName)=>{
        this.props.onAddPlace(placeName)
    }
    render(){
        return(
            <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onAddPlace:(placeName)=>dispatch(addPlace(placeName))
    }
}
export default connect(null,mapDispatchToProps)(SharePlace) 