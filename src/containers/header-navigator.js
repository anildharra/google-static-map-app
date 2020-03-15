import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getMapImage } from '../actions';
import { bindActionCreators } from 'redux';

import InputRange from 'react-input-range';
import * as inputRange from 'react-input-range/lib/css/index.css';
import '../App.css'
 
class   HeaderNavigator extends Component{
    mayViewType = 'roadmap';
    mapUrl = '';

  static defaultProps = {
    center: {
      lat: 37.4223098,
      lng: -122.0846239
    },
    zoom: 17,
    mapTypeId: 'roadmap'
  };
state = {
    toggle:false,
    lat:'37.4223098',
    long:'-122.0846239',
    imgWidth:'400',
    imgHeight:'400',
    counter:0,
    rangeValue:7
    
}

handleLatChange= (event) =>{
    //this.setState({toggle: !this.state.toggle});
    this.setState({lat: event.target.value});
    console.log("this.state.toggle ="+this.state.lat)
}

handleLongChange= (event) =>{
    //this.setState({toggle: !this.state.toggle});
    this.setState({long: event.target.value});
    console.log("this.state.toggle ="+this.state.long)
}
handleSubmit = (event) =>{
    console.log('A name was submitted: ');
    event.preventDefault();
    this.setState({
      toggle: !this.state.toggle,
      imgWidth: window.innerWidth,
      imgHeight: window.innerHeight
    });
    const rnd = Math.floor(Math.random()*9999);
    //this.mapUrl ="../loader.png";

   // setTimeout(()=>{
      this.setState(
        {counter: this.state.counter + 1}
        );

      this.mapUrl =`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.lat},${this.state.long}&zoom=${this.state.rangeValue}&size=${this.state.imgWidth}x${this.state.imgHeight}&maptype=${this.mayViewType}&key=AIzaSyB15ABMV_RCXzl-zgHsZx5MXT-VRix6dCM&rnd=${rnd}`;
      //console.log("this.mapUrl ="+this.mapUrl)
      console.log("this.state.counter ="+this.state.counter)
    //}, 2000)
    
    //console.log("window.innerWidth ="+ window.innerWidth + " " + window.innerHeight)
    console.log("this.mapUrl ="+this.mapUrl)
    this.props.getMapImage(this.mapUrl);

  }

  
  ShiftFromNorthHandler = (event) =>{
    console.log('ShiftFromNorthHandler()');
    let  north = parseFloat(this.state.lat);
    north -=0.5;

   this.setState({
    lat: north
   })
    this.handleSubmit(event);

  }

  ShiftFromEastHandler = (event) =>{
    console.log('ShiftFromEastHandler()');
    let  east = parseFloat(this.state.long);
    east +=0.5;
    
   this.setState({
    long: east
   })
    this.handleSubmit(event);

  }

  ShiftFromSouthHandler = (event) =>{
    console.log('ShiftFromSouthHandler()');
    let  south = parseFloat(this.state.lat);
    south +=0.5;
   this.setState({
    lat: south
   })
    this.handleSubmit(event);

  }


  ShiftFromWestHandler = (event) =>{
    console.log('ShiftFromWestHandler()');
    let  west = parseFloat(this.state.long);
    west -=0.5;

   this.setState({
    long: west
   })
    this.handleSubmit(event);

  }

  MapViewTypeHandler = (event)=>{
      if(this.mayViewType ==='roadmap') {
        this.mayViewType ='satellite';
      } else {
        this.mayViewType ='roadmap';
      }
      event.target.value = this.mayViewType;
      console.log("this.mayViewType ="+this.mayViewType)
  }
   render() {
    return (
        <>
 
 <div style={{ height: '80vh', width: '98%' }}>
           <header className="App-header">
           <form >
  <label>
    Zoom:
    <InputRange
        maxValue={17}
        minValue={1}
        value={this.state.rangeValue}
        onChange={rangeValue => this.setState({ rangeValue })} />

  </label>
  <br />


    <label>
    Latitude:
    <input maxLength="20" size="20" type="text" name="lat" value ={this.state.lat} onChange={this.handleLatChange} />
  </label>

  <label>
    Longitude:
    <input   maxLength="20" size="20" type="text" name="long" value ={this.state.long} onChange={this.handleLongChange} />
  </label>
  <br />
  <input  type="button" value="Submit" onClick={this.handleSubmit}  />
  <span style={{paddingRight:'10px'}}></span>
  <input type="button" value={this.mayViewType} onClick={this.MapViewTypeHandler}  />



  <span style={{paddingRight:'10px'}}></span>
  <input type="button" value="North" onClick={this.ShiftFromNorthHandler}  />

  <span style={{paddingRight:'10px'}}></span>
  <input type="button" value="East" onClick={this.ShiftFromEastHandler}  />

  
  
  <span style={{paddingRight:'10px'}}></span>
  <input type="button" value="South" onClick={this.ShiftFromSouthHandler}  />

  <span style={{paddingRight:'10px'}}></span>
  <input type="button" value="West" onClick={this.ShiftFromWestHandler}  />
  
</form>
      </header>
        
      </div>
        </>
    )
   }
    
}

function mapStateToProps(state){
    return {
        mapImageSrcNavigator: state.GoogleStaticMapReducer,  
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getMapImage}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderNavigator)