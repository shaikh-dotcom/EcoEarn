import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const BIN_TYPES = ["Plastic", "Electronic", "General"];

// Generate random bins within ~1000m of a given lat/lng
const generateNearbyBins = (lat, lng, count = 7) => {
  return Array.from({ length: count }, (_, i) => {
    // 1 degree lat ≈ 111,000m → 0.009 degrees ≈ 1000m
    const offsetLat = (Math.random() - 0.5) * 0.018;
    const offsetLng = (Math.random() - 0.5) * 0.018;
    const binLat = lat + offsetLat;
    const binLng = lng + offsetLng;

    // Calculate rough distance in meters
    const dLat = offsetLat * 111000;
    const dLng = offsetLng * 111000 * Math.cos((lat * Math.PI) / 180);
    const distance = Math.round(Math.sqrt(dLat * dLat + dLng * dLng));

    return {
      id: i + 1,
      lat: binLat,
      lng: binLng,
      type: BIN_TYPES[Math.floor(Math.random() * BIN_TYPES.length)],
      available: Math.random() > 0.3,
      distance:
        distance < 6000 ? `${distance}m` : `${(distance / 6000).toFixed(1)}km`,
    };
  });
};

const createBinIcon = (available) =>
  L.divIcon({
    className: "",
    html: `
      <div style="
        width: 36px; height: 36px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        background: ${available ? "linear-gradient(135deg, #00ff88, #57f7df)" : "linear-gradient(135deg, #ff4444, #ff6666)"};
        border: 2px solid ${available ? "#57f7df" : "#ff6666"};
        box-shadow: 0 0 12px ${available ? "rgba(0,255,136,0.7)" : "rgba(255,68,68,0.7)"};
        display: flex; align-items: center; justify-content: center;
      ">
        <span style="transform: rotate(45deg); font-size: 16px;">🗑️</span>
      </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });

const createUserIcon = () =>
  L.divIcon({
    className: "",
    html: `
      <div style="
        width: 40px; height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #57f7df, #aef58f);
        border: 3px solid #fff;
        box-shadow: 0 0 20px rgba(87,247,223,0.8);
        display: flex; align-items: center; justify-content: center;
        font-size: 18px;
      ">👤</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });

const AutoFitBounds = ({ userPos, bins }) => {
  const map = useMap();
  useEffect(() => {
    if (!userPos || bins.length === 0) return;
    const allPoints = [
      [userPos.lat, userPos.lng],
      ...bins.map((b) => [b.lat, b.lng]),
    ];
    map.fitBounds(allPoints, { padding: [50, 50] });
  }, [userPos, bins, map]);
  return null;
};

const EcoMap = () => {
  const [userPos, setUserPos] = useState(null);
  const [bins, setBins] = useState([]);
  const [locationError, setLocationError] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError(true);
      return;
    }
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserPos((prev) => {
          // Only regenerate bins on first location fix
          if (!prev) setBins(generateNearbyBins(coords.lat, coords.lng));
          return coords;
        });
      },
      () => setLocationError(true),
      { enableHighAccuracy: true },
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Fallback center if no location yet
  const center = userPos ? [userPos.lat, userPos.lng] : [23.8103, 90.4125];

  return (
    <div className="ecomap-wrapper">
      {!userPos && !locationError && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "16px",
            color: "#57f7df",
            fontFamily: "Outfit, sans-serif",
            fontSize: "0.95rem",
            gap: "10px",
          }}
        >
          <span>📍</span> Getting your location…
        </div>
      )}

      {locationError && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "16px",
            color: "#ff7070",
            fontFamily: "Outfit, sans-serif",
            fontSize: "0.95rem",
            gap: "10px",
          }}
        >
          <span>⚠️</span> Location access denied. Please enable location to see
          nearby bins.
        </div>
      )}

      <MapContainer
        center={center}
        zoom={15}
        style={{ width: "100%", height: "100%", borderRadius: "16px" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        {userPos && <AutoFitBounds userPos={userPos} bins={bins} />}

        {bins.map((bin) => (
          <Marker
            key={bin.id}
            position={[bin.lat, bin.lng]}
            icon={createBinIcon(bin.available)}
          >
            <Popup className="eco-popup">
              <div className="bin-popup">
                <p className="bin-popup-type">
                  {bin.type === "Plastic"
                    ? "♻️"
                    : bin.type === "Electronic"
                      ? "💻"
                      : "🗑️"}{" "}
                  {bin.type} Bin
                </p>
                <p
                  className={`bin-popup-status ${bin.available ? "available" : "full"}`}
                >
                  {bin.available ? "✅ Available" : "🔴 Full"}
                </p>
                <p className="bin-popup-distance">📍 {bin.distance} away</p>
                <button
                  className="bin-popup-btn"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${bin.lat},${bin.lng}`,
                      "_blank",
                    )
                  }
                >
                  Get Directions
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        {userPos && (
          <Marker position={[userPos.lat, userPos.lng]} icon={createUserIcon()}>
            <Popup className="eco-popup">
              <div className="bin-popup">
                <p className="bin-popup-type">👤 You are here</p>
                <p className="bin-popup-status available">🟢 Online</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-dot available-dot" />
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot full-dot" />
          <span>Full</span>
        </div>
      </div>
    </div>
  );
};

export default EcoMap;
