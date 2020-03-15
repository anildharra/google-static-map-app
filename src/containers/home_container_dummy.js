import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getMapImage } from '../actions';

import { bindActionCreators } from 'redux';

//import Search from '../components/search';
//import Artistlist from '../components/artistlist';

class HomeContainer extends Component { 

    componentWillMount() {
        //this.props.artistListAll();
       // this.props.getMapImage('https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=AIzaSyB15ABMV_RCXzl-zgHsZx5MXT-VRix6dCM');
    }

    render(){
        console.log("HomeContainerDummy() render")
       //console.log(this.props)  
        //console.log(this.props.artists.artistList)
        let imgBase64='';
        if(this.props.mapImageSrcDummy) {
            console.log("this.props.mapImageSrc ##################");
           // console.log(this.props.mapImageSrcDummy.mapImageSrc);
            imgBase64 = `data:image/png;base64,${this.props.mapImageSrcDummy.mapImageSrc}`
        }
        return (
            <div>
                Home container DUMMY
                <br />
                 
                <div>
                    {this.props.mapImageSrcDummy ? 
                    <div>
                    <img src={imgBase64} alt="Red dot" />
                    </div>
                    : null
                }   
                </div>
            </div>
        )
    }
    
}


function mapStateToProps(state){
    return {
        mapImageSrcDummy: state.GoogleStaticMapReducer
    }
}

function mapDispatchToProps(dispatch){
    //return bindActionCreators({artistListAll,artistList},dispatch)
    return bindActionCreators({getMapImage}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)