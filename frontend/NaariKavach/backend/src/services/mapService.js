// services/mapService.js

import axios from "axios";

const { GOOGLE_MAPS_API_KEY } = process.env;

// ---- Get Address from Coordinates (Reverse Geocoding) ----
export const getAddressFromCoordinates = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
    );

    if (response.data.status === "OK") {
      const address = response.data.results[0]?.formatted_address || "Unknown location";
      return address;
    } else {
      throw new Error("Unable to fetch address");
    }
  } catch (error) {
    console.error("❌ Error in getAddressFromCoordinates:", error.message);
    throw error;
  }
};

// ---- Get Coordinates from Address (Geocoding) ----
export const getCoordinatesFromAddress = async (address) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${GOOGLE_MAPS_API_KEY}`
    );

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return { latitude: location.lat, longitude: location.lng };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error("❌ Error in getCoordinatesFromAddress:", error.message);
    throw error;
  }
};

// ---- Calculate Distance Between Two Coordinates (Haversine Formula) ----
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;

  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // in kilometers

  return distance;
};

// ---- Nearby Places Search (Optional) ----
export const getNearbyPlaces = async (latitude, longitude, radius = 1000, type = "police") => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${GOOGLE_MAPS_API_KEY}`
    );

    if (response.data.status === "OK") {
      return response.data.results.map((place) => ({
        name: place.name,
        address: place.vicinity,
        location: place.geometry.location,
      }));
    } else {
      throw new Error("Unable to fetch nearby places");
    }
  } catch (error) {
    console.error("❌ Error in getNearbyPlaces:", error.message);
    throw error;
  }
};
