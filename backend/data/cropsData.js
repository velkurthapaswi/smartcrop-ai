const cropsData = [
  {
    name: 'Rice',
    soilType: 'Clayey Loam / Alluvial Soil',
    season: 'Kharif (Monsoon / Summer)',
    waterRequirement: 'High (1000 - 1500 mm, standing water preferred)',
    temperature: '22°C - 32°C',
    growingPeriod: '120 - 150 days',
    fertilizer: 'NPK 120:60:40 kg/ha with Zinc Sulphate top dressing',
    sunlight: 'Full Sun (6 - 8 hours of direct sunlight daily)',
    description: 'Rice is one of the primary staple crops worldwide, thriving in flooded lowland paddies and fertile clayey river basins with warm and humid climates.',
    farmingTips: [
      'Maintain 2-5 cm of shallow standing water during tillering and flowering stages.',
      'Transplant 21-25 day old nursery seedlings with 2-3 seedlings per hill.',
      'Apply nitrogen in 3 split doses: basal, active tillering, and panicle initiation.',
      'Practice regular weeding within the first 30 days after transplanting.'
    ],
    category: 'Cereal / Grain',
    icon: '🌾',
    expectedYield: '4.5 - 6.5 tonnes/hectare'
  },
  {
    name: 'Wheat',
    soilType: 'Well-drained Loam / Sandy Loam',
    season: 'Rabi (Winter)',
    waterRequirement: 'Moderate (400 - 650 mm, 4 to 6 critical irrigations)',
    temperature: '15°C - 24°C',
    growingPeriod: '110 - 140 days',
    fertilizer: 'NPK 120:60:40 kg/ha applied with organic compost',
    sunlight: 'Full Sun (Bright sunny days with cool nights)',
    description: 'Wheat is a premier cool-season cereal grain grown widely during winter months, vital for bread, flour, and nutritious staple diets.',
    farmingTips: [
      'Crown Root Initiation (CRI) stage at 20-25 days after sowing is the most critical irrigation period.',
      'Treat certified seeds with fungicide (Carbendazim or Thiram) before sowing to avoid smut.',
      'Maintain spacing of 20-22 cm between rows and depth of 4-5 cm.',
      'Avoid excess nitrogen near maturity to prevent lodging during wind.'
    ],
    category: 'Cereal / Grain',
    icon: '🌾',
    expectedYield: '4.0 - 5.5 tonnes/hectare'
  },
  {
    name: 'Maize',
    soilType: 'Deep, rich, well-drained Loam to Silt Loam',
    season: 'Kharif & Rabi (All Season adaptable)',
    waterRequirement: 'Moderate (500 - 800 mm with good soil moisture)',
    temperature: '20°C - 30°C',
    growingPeriod: '90 - 120 days',
    fertilizer: 'NPK 120:60:40 kg/ha with Farm Yard Manure',
    sunlight: 'Full Sun (Long bright daylight hours)',
    description: 'Maize (Corn) is a versatile queen of cereals used for grain, animal fodder, corn starch, and sweet corn production with rapid biomass growth.',
    farmingTips: [
      'Ensure proper drainage as maize cannot tolerate waterlogging even for 24 hours.',
      'Critical moisture stages are tasseling (flowering) and silking (grain filling).',
      'Watch out for Fall Armyworm (FAW); use pheromone traps and neem oil sprays early.',
      'Perform ridge and furrow planting to optimize root aeration.'
    ],
    category: 'Cereal / Grain',
    icon: '🌽',
    expectedYield: '5.0 - 7.0 tonnes/hectare'
  },
  {
    name: 'Cotton',
    soilType: 'Deep Black Cotton Soil (Regur) or Deep Alluvial Loam',
    season: 'Kharif (Warm season with long frost-free period)',
    waterRequirement: 'Moderate to High (600 - 1100 mm)',
    temperature: '21°C - 35°C',
    growingPeriod: '150 - 180 days',
    fertilizer: 'NPK 100:50:50 kg/ha with Boron and Magnesium foliar spray',
    sunlight: 'Abundant Direct Sun (Requires warm sunny days during boll opening)',
    description: 'Cotton is the premier commercial cash crop providing natural textile fiber and cottonseed oil, favoring warm tropical and sub-tropical regions.',
    farmingTips: [
      'Square formation and boll development stages require consistent moisture without water stagnation.',
      'Defoliate appropriately and harvest clean bolls in dry sunny mornings.',
      'Adopt integrated pest management (IPM) for bollworms and sucking pests (aphids, jassids).',
      'Maintain spacing of 90 x 45 cm for Bt-cotton varieties.'
    ],
    category: 'Fiber / Cash Crop',
    icon: '🧶',
    expectedYield: '2.0 - 3.5 tonnes/hectare'
  },
  {
    name: 'Tomato',
    soilType: 'Fertile Sandy Loam with organic matter (pH 6.0 - 6.8)',
    season: 'Year-Round (Summer, Autumn, and Winter cycles)',
    waterRequirement: 'Moderate (400 - 600 mm, regular drip irrigation)',
    temperature: '18°C - 28°C',
    growingPeriod: '90 - 120 days',
    fertilizer: 'NPK 150:100:120 kg/ha + Calcium Nitrate to prevent blossom end rot',
    sunlight: 'Full Sun (Minimum 6 to 8 hours daily)',
    description: 'Tomato is a high-value horticultural vegetable crop packed with vitamins and antioxidants, favored in open fields and greenhouse shade nets.',
    farmingTips: [
      'Provide sturdy stakes or trellising to lift foliage off moist soil and improve airflow.',
      'Prune lower suckers to concentrate nutrients into primary fruiting branches.',
      'Mulch beds with plastic or straw to conserve soil moisture and prevent weed pressure.',
      'Avoid overhead sprinkler watering to minimize early blight and fungal foliage infections.'
    ],
    category: 'Horticulture / Vegetable',
    icon: '🍅',
    expectedYield: '25 - 40 tonnes/hectare'
  },
  {
    name: 'Potato',
    soilType: 'Loose, friable Sandy Loam rich in humus (pH 5.2 - 6.4)',
    season: 'Rabi (Cool Winter Season)',
    waterRequirement: 'Moderate (450 - 550 mm, light and frequent irrigations)',
    temperature: '15°C - 22°C (Optimal tuberization below 20°C)',
    growingPeriod: '80 - 110 days',
    fertilizer: 'NPK 150:80:100 kg/ha with well-rotted farmyard manure',
    sunlight: 'Full Sun (6+ hours, cool daytime sunlight)',
    description: 'Potato is a globally essential underground tuber crop providing carbohydrates, potassium, and vitamins with high per-acre caloric productivity.',
    farmingTips: [
      'Perform thorough earthing-up (hilling) around stems at 30 and 45 days to keep tubers dark and prevent greening.',
      'Use certified disease-free sprouted seed tubers weighing 40-50 grams.',
      'Stop irrigation 10-12 days before harvesting to harden the tuber skin.',
      'Scout regularly for late blight; apply prophylactic contact fungicides before humid foggy spells.'
    ],
    category: 'Tuber / Vegetable',
    icon: '🥔',
    expectedYield: '20 - 30 tonnes/hectare'
  },
  {
    name: 'Groundnut',
    soilType: 'Well-drained Sandy Loam or Red Sandy Soil (Loose texture)',
    season: 'Kharif & Summer',
    waterRequirement: 'Low to Moderate (400 - 600 mm)',
    temperature: '25°C - 32°C',
    growingPeriod: '105 - 125 days',
    fertilizer: 'NPK 25:50:50 kg/ha + Gypsum (400 kg/ha at pegging for pod filling)',
    sunlight: 'Full Sun (Warm sunny conditions)',
    description: 'Groundnut (Peanut) is a vital legume oilseed providing protein-rich nuts and high-grade vegetable cooking oil while fixing atmospheric nitrogen.',
    farmingTips: [
      'Apply agricultural gypsum during peg penetration stage to supply calcium for healthy pod formation.',
      'Avoid heavy clay soils which impede peg entry and make pod digging difficult.',
      'Seed treatment with Rhizobium culture boosts root nodulation and nitrogen economy.',
      'Maintain friable topsoil through gentle intercultural weeding prior to pegging.'
    ],
    category: 'Oilseed / Legume',
    icon: '🥜',
    expectedYield: '2.0 - 3.2 tonnes/hectare'
  },
  {
    name: 'Sugarcane',
    soilType: 'Deep well-drained Loamy to Heavy Clay Soils with good organic content',
    season: 'Perennial / Spring / Autumn planting',
    waterRequirement: 'Very High (1500 - 2500 mm over 10-12 months)',
    temperature: '24°C - 36°C',
    growingPeriod: '300 - 365 days (10 to 12 months)',
    fertilizer: 'NPK 250:100:120 kg/ha with micronutrient supplements',
    sunlight: 'Intense Full Sunlight (High photosynthetic requirement)',
    description: 'Sugarcane is a tall perennial grass cultivated in tropical regions as the primary source of sugar, jaggery, bio-ethanol, and renewable bagasse energy.',
    farmingTips: [
      'Use two or three-budded healthy setts treated in carbendazim solution.',
      'Adopt drip fertigation to cut irrigation water usage by 40% while raising sucrose recovery.',
      'Trash mulching in inter-rows suppresses weed growth and conserves vital soil moisture.',
      'Earthing up at 90 and 120 days prevents stalk lodging during monsoon winds.'
    ],
    category: 'Commercial / Sugar',
    icon: '🎋',
    expectedYield: '80 - 120 tonnes/hectare'
  },
  {
    name: 'Chilli',
    soilType: 'Well-drained Loam to Sandy Loam rich in organic matter (pH 6.5 - 7.5)',
    season: 'Kharif, Rabi, and Summer',
    waterRequirement: 'Moderate (400 - 650 mm, avoid water stagnation)',
    temperature: '20°C - 30°C',
    growingPeriod: '120 - 150 days',
    fertilizer: 'NPK 100:50:50 kg/ha + Micronutrient sprays during flowering',
    sunlight: 'Full Sun (6 to 8 hours daily)',
    description: 'Chilli is a high-value spice and condiment crop known for its pungency (capsaicin), vibrant color, culinary popularity, and medicinal uses.',
    farmingTips: [
      'Spray neem formulations or bio-pesticides early to manage thrips and mite infestations.',
      'Ensure soil does not stay waterlogged, as chilli roots are highly sensitive to wilt and root rot.',
      'Apply light irrigations during flowering and fruit setting to avoid blossom drop.',
      'Harvest green chillies when mature and firm; allow red varieties to ripen fully before sun-drying.'
    ],
    category: 'Spice / Vegetable',
    icon: '🌶️',
    expectedYield: '2.5 - 4.0 tonnes dry chilli/hectare'
  },
  {
    name: 'Onion',
    soilType: 'Friable Sandy Loam to Silt Loam with good drainage (pH 6.0 - 7.5)',
    season: 'Rabi (Winter) and Kharif (Rainy)',
    waterRequirement: 'Moderate (350 - 550 mm, shallow root system needs regular moisture)',
    temperature: '15°C - 28°C',
    growingPeriod: '120 - 150 days',
    fertilizer: 'NPK 100:50:80 kg/ha with Sulphur application (30 kg/ha) for pungency and storage',
    sunlight: 'Full Sun (Day-length sensitive during bulb development)',
    description: 'Onion is an indispensable culinary bulb crop grown worldwide, rich in quercetin, allicin, and distinctive aromatic flavor.',
    farmingTips: [
      'Stop irrigation 10 to 15 days before harvest when 50% of tops start bending/falling over.',
      'Apply sulphur fertilizer to significantly improve bulb pungency, firmness, and storage shelf-life.',
      'Do not plant seedlings too deep (only 2-3 cm deep) to allow uniform bulb expansion.',
      'Field-cure harvested bulbs under shade for 7-10 days before cold storage or market transit.'
    ],
    category: 'Vegetable / Bulb',
    icon: '🧅',
    expectedYield: '18 - 28 tonnes/hectare'
  },
  {
    name: 'Banana',
    soilType: 'Deep, rich, well-drained Alluvial Loam with high organic matter (pH 6.5 - 7.5)',
    season: 'Year-Round planting (Preferably onset of monsoon)',
    waterRequirement: 'High (1500 - 2000 mm, requires consistent humid moisture)',
    temperature: '22°C - 35°C',
    growingPeriod: '300 - 360 days (10 to 12 months)',
    fertilizer: 'NPK 200:50:300 grams per plant in split applications + Potassium rich feeds',
    sunlight: 'Full Sun with windbreak protection (Large leaves susceptible to tearing)',
    description: 'Banana is a nutritious, rapid-growing tropical fruit giant cultivated for high carbohydrate fruit bunches, banana fiber, and eco-friendly leaves.',
    farmingTips: [
      'Install drip irrigation and fertigation to meet heavy potassium and water demands during bunching.',
      'Desucker regularly to retain only 1 sword sucker for the succeeding ratoon crop.',
      'Provide bamboo or wooden props to support heavy fruiting bunches against wind tilt.',
      'Cover bunches with blue polybags to prevent sunburn, insect scratches, and optimize skin finish.'
    ],
    category: 'Horticulture / Fruit',
    icon: '🍌',
    expectedYield: '45 - 65 tonnes/hectare'
  },
  {
    name: 'Mango',
    soilType: 'Deep, well-drained Alluvial Loam or Red Loam with low water table (pH 5.5 - 7.5)',
    season: 'Perennial (Flowering in winter, harvesting in summer)',
    waterRequirement: 'Moderate (Withhold water 2-3 months prior to flowering to induce flower buds)',
    temperature: '24°C - 35°C (Frost-free climate essential)',
    growingPeriod: 'Perennial orchard (Commercial bearing starts in year 3-4 for grafts)',
    fertilizer: 'NPK 500:250:500 grams/tree/year of age + Organic Vermicompost',
    sunlight: 'Full Direct Sun (Unshaded open canopy)',
    description: 'Known as the King of Fruits, Mango is a prized tropical fruit tree producing succulent, aromatic, sweet drupes adored globally.',
    farmingTips: [
      'Withhold irrigation during October-November to trigger vegetative dormancy and uniform flower bud emergence.',
      'Spray paclobutrazol (as per canopy diameter) in alternative bearing orchards under agricultural supervision.',
      'Control powdery mildew and mango hoppers during panicle emergence with timely organic or fungicidal sprays.',
      'Harvest fruit with 1 cm pedicel intact using mechanical pole harvesters to avoid sap-burn blemishes.'
    ],
    category: 'Fruit / Orchard',
    icon: '🥭',
    expectedYield: '10 - 18 tonnes/hectare (mature orchard)'
  }
];

module.exports = cropsData;
