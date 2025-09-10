import React, { useEffect, useState } from "react";
import { getSafeZones } from "../services";
import SafeZoneCard from "../components/SafeZoneCard";

export default function SafeZone() {
  const [safezones, setSafezones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchZones = async () => {
      try {
        const res = await getSafeZones(22.5726, 88.3639); // Kolkata sample
        setSafezones(res.safezones || []);
      } catch (err) {
        console.error("Error fetching safe zones", err);
      } finally {
        setLoading(false);
      }
    };
    fetchZones();
  }, []);

  return (
    <div className="container">
      <h2>🛡️ Nearby Safe Zones</h2>
      {loading ? (
        <p>⌛ Loading safe zones...</p>
      ) : safezones.length === 0 ? (
        <p>No safe zones found (placeholder for now).</p>
      ) : (
        safezones.map((zone, i) => (
          <SafeZoneCard key={i} name={zone.name} address={zone.address} />
        ))
      )}
    </div>
  );
}
