import React, { Component } from 'react';
import InputRange from 'react-input-range';
import '../App.css';
import RenderMapImg from './RenderMapImg';
import * as inputRange from 'react-input-range/lib/css/index.css';
//import S3 from 'react-aws-s3';
/*
const config = {
  bucketName: 'google-map.img-upload',
  dirName: 'media',  
  region: 'eu-west-1',
  accessKeyId: 'AKIAJD3FF5UV63EPI7CA',
  secretAccessKey: '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'
   
}

*/

//const ReactS3Client = new S3(config);
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
 
/* This is optional */
const newFileName = 'dharra-test-file-aws3';

class SimpleMap extends Component {
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
      // Important! Always set the container height explicitly
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
    <input maxLength="10" size="10" type="text" name="lat" value ={this.state.lat} onChange={this.handleLatChange} />
  </label>

  <label>
    Longitude:
    <input   maxLength="10" size="10" type="text" name="long" value ={this.state.long} onChange={this.handleLongChange} />
  </label>
  <br />
  <input  type="button" value="Submit" onClick={this.handleSubmit}  />
  <span style={{paddingRight:'10px'}}></span>
  <input type="button" value={this.mayViewType} onClick={this.MapViewTypeHandler}  />
</form>
      </header>
        <div>
            {this.mapUrl ==='' ? null:
            <RenderMapImg mapUrl= {this.mapUrl} alt='' />
            }
        </div>
      </div>
    );
  }
}

export default SimpleMap;