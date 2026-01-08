import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

function ZoomController({ zoom, position }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, zoom, {
      animate: true,
      duration: 0.6,
    });
  }, [zoom, position, map]);

  return null;
}

export default function HoverZoomMap() {
  const position = [10.7769, 106.7009];
  const normalZoom = 13;
  const hoverZoom = 16;

  const [zoom, setZoom] = useState(normalZoom);

  return (
    <div
      onMouseEnter={() => setZoom(hoverZoom)}
      onMouseLeave={() => setZoom(normalZoom)}
      style={{ cursor: "pointer" }}
    >
      <MapContainer
        center={position}
        zoom={normalZoom}
        style={{ height: "300px", width: "100%", marginBottom: "20px" }}
        scrollWheelZoom={false}
        whenReady={(map) => map.target.invalidateSize()}
      >
        <ZoomController zoom={zoom} position={position} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  );
}
