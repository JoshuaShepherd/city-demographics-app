# City Demographics (Ready for Deployment)

**Interactive demographic exploration** - A modern web application showcasing demographic data and cultural insights for North American cities.

![Status](https://img.shields.io/badge/status-ready--to--deploy-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan)

## ✅ Production Ready

The application is now fully built and ready for GitHub Pages deployment with:
- ✅ Clean build with no errors or warnings
- ✅ Static export configuration
- ✅ GitHub Actions workflow for automatic deployment
- ✅ Optimized for fast loading and performance  
**Audience**: "I've got 10 minutes before a meeting—show me what matters"  
**Voice**: Informed, welcoming, street-smart. Brief, active sentences. No jargon.

## 🏙️ Featured Cities

Explore demographic pulse for 11 diverse cities:

- **Krum, TX** - Small-town edges, big-sky openness
- **Kansas City, KS** - Freight lines & front porches  
- **Toronto, Canada** - Global city, neighborhood hearts
- **Boston, MA** - Brick minds, harbor breath
- **Pawtucket, RI** - River mills, new makers
- **Lynn, MA** - Coastline grit, colorful hustle
- **Columbia, MO** - Campus hum, midwest calm
- **Chicago, IL** - Lake wind, neighborhood constellations
- **Waterford Township, MI** - Lakes between pines
- **San Diego, CA** - Sunset circuits
- **Washington, DC** - Stately + street-level

## 🎨 Visual Language

### Duotone Core
- **Ink**: #0A0F1F (almost-black blue)
- **Mist**: #F7F8FC (paper white)
- **Treatment**: Imagery lives in ink↔mist—color arrives via city splash accents

### City Splash Accents
Each city gets a unique accent palette that appears in:
- Gradient bursts behind city names
- Interactive hover states
- Strategy action numbers
- Border treatments

### Motion Design
- **Fast**: 120ms for micro-interactions
- **Base**: 200ms for page transitions  
- **Easing**: Custom cubic-bezier for smooth feels
- **Reduced motion**: Respects user preferences

## 🔧 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **PWA**: next-pwa

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📊 Signal Metrics

Each city displays key demographic signals:

- **Population** - Heads counted. Context for reach.
- **Median Income** - Half of households earn at/above this.
- **Poverty Rate** - Below federal poverty threshold—pair outreach with care.
- **Bachelor's+** - Education level—expect strong campus/professional currents.
- **Foreign-born** - First-generation neighbors—language and newcomer support.
- **Language @ Home** - Speaks non-English at home—plan materials.
- **Median Age** - Age center of gravity for tone, timing, and programs.

## 🎭 Culture Vibe

Each city includes:
- **Keywords** - Mood descriptors
- **Visual Imagery** - Duotone art direction prompts
- **Strategy Cues** - 3-5 high-impact actions for leaders

## 📱 PWA Features

- **Installable** - Add to home screen on mobile/desktop
- **Offline Support** - Service worker for key functionality
- **Responsive** - Works beautifully on all screen sizes
- **Fast Loading** - Optimized bundle sizes and lazy loading

## 🎯 User Journey

1. **Landing** - City grid with splash accent previews
2. **City Detail** - Single-scroll experience with:
   - Hero band with city name + tagline
   - Signal metrics with tooltips
   - Culture vibe panel
   - Strategy cues for leaders
3. **Navigation** - Smooth transitions with city accent wipes

## 📋 Data Sources

- **U.S. Cities**: American Community Survey 2023 (Census Bureau)
- **Toronto**: Statistics Canada 2021 Census
- **Note**: Some small-place language values use foreign-born % as proxy

## 🎨 Design Tokens

```css
/* Colors */
--ink: #0A0F1F
--mist: #F7F8FC

/* Motion */
--motion-fast: 120ms
--motion-base: 200ms

/* Layout */
--radius-card: 1.25rem
--blur-glass: 12px
```

## 🔍 Adding Cities

To add a new city:

1. Add data to `src/lib/data.ts`
2. Include accent colors
3. Add vibe keywords and strategy cues
4. Update city grid automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build
5. Submit a pull request

## 📄 License

MIT License - feel free to use for your demographic visualization projects.

---

**City Pulse** - Feel your city's texture while grasping the signal metrics fast.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
