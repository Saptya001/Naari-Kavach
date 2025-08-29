// utils/geoUtils.js

/**
 * Convert degrees to radians
 * @param {number} degrees
 * @returns {number}
 */
const toRadians = (degrees) => (degrees * Math.PI) / 180;

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param {number} lat1 - Latitude of point 1
 * @param {number} lon1 - Longitude of point 1
 * @param {number} lat2 - Latitude of point 2
 * @param {number} lon2 - Longitude of point 2
 * @returns {number} - Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth radius in km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // in kilometers
};

/**
 * Check if a point is inside a circular radius
 * @param {number} centerLat - Center latitude
 * @param {number} centerLon - Center longitude
 * @param {number} pointLat - Point latitude
 * @param {number} pointLon - Point longitude
 * @param {number} radius - Radius in kilometers
 * @returns {boolean}
 */
export const isWithinRadius = (centerLat, centerLon, pointLat, pointLon, radius) => {
  const distance = calculateDistance(centerLat, centerLon, pointLat, pointLon);
  return distance <= radius;
};

/**
 * Find nearest location from a list of coordinates
 * @param {number} userLat - User latitude
 * @param {number} userLon - User longitude
 * @param {Array} locations - Array of objects with { name, latitude, longitude }
 * @returns {Object} - Nearest location object
 */
export const findNearestLocation = (userLat, userLon, locations) => {
  let nearest = null;
  let minDistance = Infinity;

  for (const loc of locations) {
    const distance = calculateDistance(userLat, userLon, loc.latitude, loc.longitude);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = { ...loc, distance };
    }
  }

  return nearest;
};
