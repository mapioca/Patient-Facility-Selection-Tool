import GoogleMapReact from 'google-map-react';
import './App.css';

const Facility = ({text}) => <div>{text}</div>;

function Map() {
  const saltLake = {
    center: {lat: 40.7608, lng: -111.8910},
    zoom: 11
  };

  return (
    <div style={{height:'100vh', width:'100%'}}>
      <GoogleMapReact
        defaultCenter={saltLake.center}
        defaultZoom={saltLake.zoom}>
          <Facility 
            lat={40.67504008290726}
            lng={-111.85518149700074}
            text="The Wellington"
          />
        </GoogleMapReact>
    </div>
  );
}

export default Map;
