import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Text } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Function to generate random coordinates within Oslo's latitude and longitude
const getRandomCoordinates = () => {
  const osloBounds = {
    lat: [59.8, 60.1],
    lng: [10.5, 10.9],
  };
  return {
    lat: Math.random() * (osloBounds.lat[1] - osloBounds.lat[0]) + osloBounds.lat[0],
    lng: Math.random() * (osloBounds.lng[1] - osloBounds.lng[0]) + osloBounds.lng[0],
  };
};

// Generate 10 random building locations
const buildings = Array.from({ length: 10 }, () => getRandomCoordinates());

// Default Leaflet pin icon
const pinIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const Index = () => {
  return (
    <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map((building, index) => (
        <Marker key={index} position={[building.lat, building.lng]} icon={pinIcon}>
          <Popup>
            <Box>
              <Text fontWeight="bold">Building {index + 1}</Text>
              <Text>Temperature: {Math.random() * 10 + 18}°C</Text>
              <Text>Humidity: {Math.random() * 50 + 30}%</Text>
              <Text>Energy Consumption: {Math.random() * 500 + 500}kWh</Text>
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Index;