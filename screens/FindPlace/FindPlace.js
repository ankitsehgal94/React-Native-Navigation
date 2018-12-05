import React,{Component} from 'react'
import {View,Text}from 'react-native'
import PlaceList from "../../src/components/PlaceList/PlaceList"
import {connect} from "react-redux"
class FindPlace extends Component{
    render(){
        return(
            <PlaceList places={this.props.places}/>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        places:state.places.places
    }
}

export default connect(mapStateToProps)(FindPlace)