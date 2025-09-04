export interface CityData {
  id: string;
  name: string;
  state: string;
  country?: string;
  population: number;
  medianIncome: number;
  poverty: number;
  bachelors: number;
  foreignBorn: number;
  languageAtHome: number | null;
  medianAge: number;
  vibe: {
    tagline: string;
    keywords: string[];
    imagery: string;
  };
  accent: {
    primary: string;
    secondary: string;
  };
  strategies: string[];
}

export const CITIES: CityData[] = [
  {
    id: 'krum',
    name: 'Krum',
    state: 'TX',
    population: 5896,
    medianIncome: 111316,
    poverty: 6.1,
    bachelors: 36.9,
    foreignBorn: 5.0,
    languageAtHome: null,
    medianAge: 36.6,
    vibe: {
      tagline: "Small-town edges, big-sky openness.",
      keywords: ["prairie", "Friday lights", "family rhythms", "craft makers"],
      imagery: "Wide Texas prairie in duotone, amber light flare, grain overlay, empty two-lane road, minimal signage."
    },
    accent: {
      primary: "#C084FC", // Prairie Amber
      secondary: "#FDE68A" // Sand
    },
    strategies: [
      "English-first collateral",
      "Family rhythms programming",
      "Partner with schools & rec centers"
    ]
  },
  {
    id: 'kansas-city',
    name: 'Kansas City',
    state: 'KS',
    population: 149918,
    medianIncome: 60739,
    poverty: 17.4,
    bachelors: 20.2,
    foreignBorn: 19.5,
    languageAtHome: null,
    medianAge: 35.1,
    vibe: {
      tagline: "Freight lines & front porches.",
      keywords: ["bridges", "barbecue smoke curls", "storefront revival"],
      imagery: "River bridge silhouette, sunflower accent sweep, dusk haze, duotone skyline fragments."
    },
    accent: {
      primary: "#EAB308", // Sunflower
      secondary: "#60A5FA" // Prairie Sky
    },
    strategies: [
      "Multilingual invites (Spanish baseline)",
      "Food-security and ESL partners",
      "Neighborhood anchors"
    ]
  },
  {
    id: 'toronto',
    name: 'Toronto',
    state: 'Canada',
    population: 2794356,
    medianIncome: 0, // Not available
    poverty: 0, // Not available
    bachelors: 0, // Not available
    foreignBorn: 0, // Not available
    languageAtHome: 25.9,
    medianAge: 0, // Not available
    vibe: {
      tagline: "Global city, neighborhood hearts.",
      keywords: ["streetcars", "winter light", "layered languages", "coffee steam"],
      imagery: "Streetcar wires, glass reflections, electric blue wash, multilingual shopfronts abstracted."
    },
    accent: {
      primary: "#3B82F6", // Electric Blue
      secondary: "#8B5CF6" // Violet Hour
    },
    strategies: [
      "Multilingual by default (Chinese varieties, Tagalog, Spanish, Tamil)",
      "International student outreach",
      "Ethnic media partnerships"
    ]
  },
  {
    id: 'boston',
    name: 'Boston',
    state: 'MA',
    population: 652442,
    medianIncome: 96931,
    poverty: 15.6,
    bachelors: 55.8,
    foreignBorn: 26.6,
    languageAtHome: 34.3,
    medianAge: 33.7,
    vibe: {
      tagline: "Brick minds, harbor breath.",
      keywords: ["campuses", "cobblestone", "rowhouses", "late-night study glow"],
      imagery: "Crimson accent on brick textures, duotone harbor glimmer, leaf shadows on paper."
    },
    accent: {
      primary: "#B91C1C", // Crimson
      secondary: "#DC2626" // Brick
    },
    strategies: [
      "Campus pipelines",
      "Young-professional rhythms",
      "Spanish + one Asian-language option near campuses"
    ]
  },
  {
    id: 'pawtucket',
    name: 'Pawtucket',
    state: 'RI',
    population: 75312,
    medianIncome: 63499,
    poverty: 17.0,
    bachelors: 28.2,
    foreignBorn: 26.0,
    languageAtHome: null,
    medianAge: 41.7,
    vibe: {
      tagline: "River mills, new makers.",
      keywords: ["mill buildings", "studios", "soccer fields", "Portuguese bakeries"],
      imagery: "Industrial windows in duotone, teal water line, soft motion blur of pedestrians."
    },
    accent: {
      primary: "#14B8A6", // Aqua Teal
      secondary: "#99F6E4" // Seafoam
    },
    strategies: [
      "English/Spanish materials",
      "Childcare + workforce pathways",
      "Sports-field touchpoints"
    ]
  },
  {
    id: 'lynn',
    name: 'Lynn',
    state: 'MA',
    population: 101250,
    medianIncome: 73723,
    poverty: 12.6,
    bachelors: 25.3,
    foreignBorn: 39.3,
    languageAtHome: null,
    medianAge: 38.7,
    vibe: {
      tagline: "Coastline grit, colorful hustle.",
      keywords: ["murals", "markets", "commuter rhythm", "night-shift lights"],
      imagery: "Raspberry gradient over wall art, fishing pier lines, rain-sheen pavement."
    },
    accent: {
      primary: "#D946EF", // Raspberry
      secondary: "#FB7185" // Neon Rose
    },
    strategies: [
      "Spanish priority",
      "Micro-events near murals/markets",
      "Childcare support"
    ]
  },
  {
    id: 'columbia',
    name: 'Columbia',
    state: 'MO',
    population: 129328,
    medianIncome: 62972,
    poverty: 18.3,
    bachelors: 55.9,
    foreignBorn: 7.6,
    languageAtHome: null,
    medianAge: 31.4,
    vibe: {
      tagline: "Campus hum, midwest calm.",
      keywords: ["quads", "bikes", "autumn Saturdays", "library stacks"],
      imagery: "Tiger gold rim light on trees, duotone lecture hall, paper flyers collage."
    },
    accent: {
      primary: "#FBBF24", // Tiger Gold
      secondary: "#111827" // Campus Black
    },
    strategies: [
      "Academic calendar cadence",
      "Internationals welcome nights",
      "Mentorship cohorts"
    ]
  },
  {
    id: 'chicago',
    name: 'Chicago',
    state: 'IL',
    population: 2664454,
    medianIncome: 74474,
    poverty: 16.8,
    bachelors: 45.7,
    foreignBorn: 21.0,
    languageAtHome: 34.7,
    medianAge: 36.4,
    vibe: {
      tagline: "Lake wind, neighborhood constellations.",
      keywords: ["grid", "blues clubs", "corner stores", "transit lines"],
      imagery: "Deep cobalt wash on lake horizon, red star ticks, elevated tracks pattern."
    },
    accent: {
      primary: "#2563EB", // Deep Cobalt
      secondary: "#EF4444" // Flag Red
    },
    strategies: [
      "Spanish baseline",
      "Consider Polish/Chinese in specific corridors",
      "Neighborhood-specific partners"
    ]
  },
  {
    id: 'waterford',
    name: 'Waterford Township',
    state: 'MI',
    population: 69380,
    medianIncome: 72155,
    poverty: 9.0,
    bachelors: 31.4,
    foreignBorn: 6.4,
    languageAtHome: null,
    medianAge: 42.1,
    vibe: {
      tagline: "Lakes between pines.",
      keywords: ["cul-de-sacs", "pontoons", "weekend garages"],
      imagery: "Cyan lake ripple under pine silhouettes, misty morning, subtle dock geometry."
    },
    accent: {
      primary: "#06B6D4", // Lake Cyan
      secondary: "#059669" // Pine
    },
    strategies: [
      "Family + seniors focus",
      "Community lake events",
      "Healthcare partners"
    ]
  },
  {
    id: 'san-diego',
    name: 'San Diego',
    state: 'CA',
    population: 1388312,
    medianIncome: 105780,
    poverty: 11.4,
    bachelors: 52.0,
    foreignBorn: 25.7,
    languageAtHome: 40.4,
    medianAge: 36.0,
    vibe: {
      tagline: "Sunset circuits.",
      keywords: ["beaches", "bases", "biotech", "taquerías"],
      imagery: "Coral to pink gradient over shoreline, surf lines as contour curves, high-sun shadows."
    },
    accent: {
      primary: "#F97316", // Sunset Coral
      secondary: "#F472B6" // Pink Salt
    },
    strategies: [
      "Bilingual (English/Spanish) by default",
      "Military-adjacent care",
      "Add Tagalog/Vietnamese where needed"
    ]
  },
  {
    id: 'washington',
    name: 'Washington',
    state: 'DC',
    population: 678972,
    medianIncome: 108210,
    poverty: 14.0,
    bachelors: 65.9,
    foreignBorn: 14.1,
    languageAtHome: 19.4,
    medianAge: 34.9,
    vibe: {
      tagline: "Stately + street-level.",
      keywords: ["rowhouses", "cherry trees", "embassies", "policy pulse"],
      imagery: "Federal navy base with blossom dusting, column shadows, flag fabric micro-texture."
    },
    accent: {
      primary: "#1E3A8A", // Federal Navy
      secondary: "#F472B6" // Cherry Blossom
    },
    strategies: [
      "Young-pro networking",
      "Spanish/Amharic touchpoints",
      "Civic partnerships"
    ]
  }
];

export const METRIC_TOOLTIPS = {
  population: "Heads counted. Context for reach.",
  medianIncome: "Half of households earn at/above this.",
  poverty: "Below federal poverty threshold—pair outreach with care.",
  bachelors: "Education level—expect strong campus/professional currents.",
  foreignBorn: "First-generation neighbors—language and newcomer support.",
  languageAtHome: "Speaks a non-English language at home—plan materials.",
  medianAge: "Age center of gravity for tone, timing, and programs."
} as const;

export function getCityById(id: string): CityData | undefined {
  return CITIES.find(city => city.id === id);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export function formatPercentage(num: number): string {
  return `${num}%`;
}
