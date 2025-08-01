import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { FaSmile } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const StyledMapContainer = styled(MapContainer)`
  height: 100%;
  width: 100%;
  margin: 2rem 0;
  border-radius: 10px;
  overflow: hidden;
`;

function Map() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledMapContainer
      center={[14.5995, 120.9842]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={
          isDarkMode
            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        }
      />
      <Marker position={[14.5995, 120.9842]}>
        <Popup>
          <h1>
            I'm here <FaSmile />
          </h1>
        </Popup>
      </Marker>
    </StyledMapContainer>
  );
}

export default Map;
