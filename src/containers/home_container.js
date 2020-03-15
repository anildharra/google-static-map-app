import React, { Component } from 'react';

import { connect } from 'react-redux';
import { artistListAll, artistList, getMapImage } from '../actions';

import { bindActionCreators } from 'redux';

//import Search from '../components/search';
//import Artistlist from '../components/artistlist';

class HomeContainer extends Component { 

    componentWillMount() {
        this.props.artistListAll();
       /* setTimeout(()=>{
            console.log(" setTimeout()") 
            this.props.getMapImage('https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=AIzaSyB15ABMV_RCXzl-zgHsZx5MXT-VRix6dCM');
        },2000)
        */
    }


    getKeywords = (event) => {
        let key = event.target.value;
        this.props.artistList(key)
    }

    render(){
        console.log("HomeContainer() render")
       // console.log(this.props)  
        let imgBase64='';
        let notLoadBool = false;
        if(this.props.mapImageSrc) {
            console.log("this.props.mapImageSrc ##################");
           // console.log(this.props.mapImageSrc.mapImageSrc);
            imgBase64 = `data:image/png;base64,${this.props.mapImageSrc.mapImageSrc}`
        }
        return (
            <div>
                <div>
                    {this.props.mapImageSrc ? 
                    <div>
                        <img src={imgBase64} alt="" />
                    </div>
                    : null
                }
                </div>
                {this.props.artists.artistList && notLoadBool ? this.props.artists.artistList.map((item)=>{
                    return  (
                        <div key = {item.id} >ID: {item.id} , name : {item.name}</div>
                    )
                })
                : null
                }
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return {
        artists:state.GoogleStaticMapReducer,
        mapImageSrc: state.GoogleStaticMapReducer
    }
}

function mapDispatchToProps(dispatch){
    //return bindActionCreators({artistListAll,artistList},dispatch)
    return bindActionCreators({artistListAll, artistList, getMapImage}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)