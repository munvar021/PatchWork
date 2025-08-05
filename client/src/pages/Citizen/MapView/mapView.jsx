import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapWrapper } from './mapViewStyles';

// Fix for default icon issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});



const MapView = () => {
  const position = [51.505, -0.09]; // Default position (e.g., London)

  return (
    <div>
      <h2>Global Issue Map</h2>
      <p>Explore reported issues around the world.</p>
      <MapWrapper>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A sample issue location.
            </Popup>
          </Marker>
        </MapContainer>
      </MapWrapper>
    </div>
  );
};

export default MapView;