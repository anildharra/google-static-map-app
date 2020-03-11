import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
  )
class SimpleMap extends Component {
    mayViewType = 'roadmap';
    mapUrl = '';

  static defaultProps = {
    center: {
      lat: 29.5397,
      lng: 76.9731
    },
    zoom: 17,
    mapTypeId: 'roadmap'
  };
state = {
    toggle:false,
    lat:'29.5397',
    long:'76.9731'
    
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
    this.setState({toggle: !this.state.toggle});
    this.mapUrl =`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.lat},${this.state.long}&zoom=12&size=400x400&maptype=${this.state.toggle}&key=AIzaSyB15ABMV_RCXzl-zgHsZx5MXT-VRix6dCM`;
    
    console.log("this.state.toggle ="+this.state.toggle)
  }
  MapViewTypeHandler = ()=>{
      if(this.mayViewType ==='roadmap') {
        this.mayViewType ='satellite';
      } else {
        this.mayViewType ='roadmap';
      }
      console.log("this.mayViewType ="+this.mayViewType)
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '98%' }}>
           <header className="App-header">
           <form >
  <label>
    Latitude:
    <input maxLength="10" size="10" type="text" name="lat" value ={this.state.lat} onChange={this.handleLatChange} />
  </label>
  <label>
    Longitude:
    <input   maxLength="10" size="10" type="text" name="long" value ={this.state.long} onChange={this.handleLongChange} />
  </label>

  <input type="button" value="Submit" onClick={this.handleSubmit}  />
  <input type="button" value="Road View" onClick={this.MapViewTypeHandler}  />
</form>
      </header>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB15ABMV_RCXzl-zgHsZx5MXT-VRix6dCM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          defaultMapTypeId={this.props.mapTypeId}
        >
          <AnyReactComponent
            lat={29.5397}
            lng={76.9731}
            text="My Marker"
          />
        </GoogleMapReact>
        <div>
            {this.mapUrl ==='' ? null:
            <img src= {this.mapUrl} alt='' />
            }
        </div>
      </div>
    );
  }
}

export default SimpleMap;