// Real city coordinates based on actual lat/lng positions on a 960x500 US map
export const REAL_CITY_COORDINATES = {
  'krum': { x: 350, y: 340, lat: 33.2618, lng: -97.1378 }, // Krum, TX
  'kansas-city': { x: 410, y: 290, lat: 39.1142, lng: -94.6266 }, // Kansas City, KS  
  'toronto': { x: 580, y: 140, lat: 43.6532, lng: -79.3832 }, // Toronto, ON
  'boston': { x: 740, y: 180, lat: 42.3601, lng: -71.0589 }, // Boston, MA
  'pawtucket': { x: 735, y: 190, lat: 41.8787, lng: -71.3828 }, // Pawtucket, RI
  'lynn': { x: 740, y: 175, lat: 42.4668, lng: -70.9495 }, // Lynn, MA
  'columbia': { x: 430, y: 270, lat: 38.9517, lng: -92.3341 }, // Columbia, MO
  'chicago': { x: 520, y: 230, lat: 41.8781, lng: -87.6298 }, // Chicago, IL
  'waterford': { x: 580, y: 220, lat: 42.6625, lng: -83.3994 }, // Waterford Township, MI
  'san-diego': { x: 120, y: 380, lat: 32.7157, lng: -117.1611 }, // San Diego, CA
  'washington': { x: 670, y: 250, lat: 38.9072, lng: -77.0369 } // Washington, DC
} as const;

export interface CityCoordinate {
  x: number;
  y: number;
  lat: number;
  lng: number;
}

export function getCityCoordinates(cityId: string): CityCoordinate | undefined {
  return REAL_CITY_COORDINATES[cityId as keyof typeof REAL_CITY_COORDINATES];
}
