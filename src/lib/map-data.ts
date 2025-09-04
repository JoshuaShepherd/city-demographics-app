// City coordinates for map positioning (approximate)
export const CITY_COORDINATES = {
  'krum': { x: 30, y: 60, state: 'TX' },
  'kansas-city': { x: 45, y: 55, state: 'KS' },
  'toronto': { x: 70, y: 25, state: 'ON' },
  'boston': { x: 85, y: 35, state: 'MA' },
  'pawtucket': { x: 84, y: 38, state: 'RI' },
  'lynn': { x: 85, y: 36, state: 'MA' },
  'columbia': { x: 50, y: 55, state: 'MO' },
  'chicago': { x: 55, y: 45, state: 'IL' },
  'waterford': { x: 62, y: 42, state: 'MI' },
  'san-diego': { x: 10, y: 70, state: 'CA' },
  'washington': { x: 78, y: 50, state: 'DC' }
} as const;

export interface CityCoordinate {
  x: number;
  y: number;
  state: string;
}

export function getCityCoordinates(cityId: string): CityCoordinate | undefined {
  return CITY_COORDINATES[cityId as keyof typeof CITY_COORDINATES];
}
