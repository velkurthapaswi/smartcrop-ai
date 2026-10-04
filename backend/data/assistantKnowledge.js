// backend/data/assistantKnowledge.js

// ======================================================
// SMARTCROP AI - 50 CROP AGRICULTURAL KNOWLEDGE
// ======================================================

const cropsData = [
  {
    name: "Rice",
    icon: "🌾",
    category: "Cereal",
    description: "Rice is an important cereal crop commonly grown in warm and humid conditions.",
    soilType: "Clay loam, clay and alluvial soil",
    season: "Kharif",
    waterRequirement: "High",
    temperature: "20-35°C",
    growingPeriod: "90-150 days",
    fertilizer: "Nitrogen, phosphorus and potassium",
    sunlight: "Full sunlight",
    expectedYield: "3-6 tonnes/hectare",
    farmingTips: [
      "Maintain adequate water during important growth stages.",
      "Use healthy seedlings and balanced fertilizer.",
      "Control weeds and pests regularly."
    ]
  },

  {
    name: "Wheat",
    icon: "🌾",
    category: "Cereal",
    description: "Wheat is an important Rabi cereal crop grown during cool and dry conditions.",
    soilType: "Well-drained loamy and clay loam soil",
    season: "Rabi",
    waterRequirement: "Medium",
    temperature: "15-25°C",
    growingPeriod: "120-150 days",
    fertilizer: "Nitrogen, phosphorus and potassium",
    sunlight: "Full sunlight",
    expectedYield: "3-5 tonnes/hectare",
    farmingTips: [
      "Sow during the recommended Rabi season.",
      "Provide irrigation at critical growth stages.",
      "Avoid excessive nitrogen application."
    ]
  },

  {
    name: "Maize",
    icon: "🌽",
    category: "Cereal",
    description: "Maize is a versatile cereal crop used for food, feed and industrial products.",
    soilType: "Well-drained fertile loamy soil",
    season: "Kharif/Rabi",
    waterRequirement: "Medium",
    temperature: "18-30°C",
    growingPeriod: "90-120 days",
    fertilizer: "NPK with nitrogen split application",
    sunlight: "Full sunlight",
    expectedYield: "4-8 tonnes/hectare",
    farmingTips: [
      "Use good quality hybrid seeds.",
      "Provide irrigation during flowering.",
      "Monitor fall armyworm."
    ]
  },

  {
    name: "Cotton",
    icon: "🌿",
    category: "Commercial Crop",
    description: "Cotton is an important fibre crop grown in warm climates.",
    soilType: "Black soil and well-drained loamy soil",
    season: "Kharif",
    waterRequirement: "Medium",
    temperature: "21-30°C",
    growingPeriod: "150-180 days",
    fertilizer: "NPK and micronutrients",
    sunlight: "Full sunlight",
    expectedYield: "1.5-3 tonnes/hectare",
    farmingTips: [
      "Maintain proper plant spacing.",
      "Monitor bollworms and sucking pests.",
      "Avoid waterlogging."
    ]
  },

  {
    name: "Groundnut",
    icon: "🥜",
    category: "Oilseed",
    description: "Groundnut is an important oilseed and food crop.",
    soilType: "Sandy loam and well-drained soil",
    season: "Kharif/Rabi",
    waterRequirement: "Low to Medium",
    temperature: "25-30°C",
    growingPeriod: "100-130 days",
    fertilizer: "Phosphorus, calcium and balanced NPK",
    sunlight: "Full sunlight",
    expectedYield: "1.5-3 tonnes/hectare",
    farmingTips: [
      "Use well-drained soil.",
      "Avoid excessive irrigation.",
      "Ensure adequate calcium during pod development."
    ]
  },

  {
    name: "Chilli",
    icon: "🌶️",
    category: "Vegetable/Spice",
    description: "Chilli is an important spice and vegetable crop.",
    soilType: "Well-drained loamy soil",
    season: "Kharif/Rabi",
    waterRequirement: "Medium",
    temperature: "20-30°C",
    growingPeriod: "120-180 days",
    fertilizer: "NPK and organic manure",
    sunlight: "Full sunlight",
    expectedYield: "5-10 tonnes/hectare",
    farmingTips: [
      "Avoid waterlogging.",
      "Monitor thrips and mites.",
      "Use drip irrigation where possible."
    ]
  },

  {
    name: "Tomato",
    icon: "🍅",
    category: "Vegetable",
    description: "Tomato is a popular vegetable crop requiring good sunlight and balanced irrigation.",
    soilType: "Well-drained loamy soil",
    season: "Kharif/Rabi/Summer",
    waterRequirement: "Medium",
    temperature: "18-30°C",
    growingPeriod: "90-120 days",
    fertilizer: "NPK, calcium and micronutrients",
    sunlight: "Full sunlight",
    expectedYield: "20-50 tonnes/hectare",
    farmingTips: [
      "Maintain uniform soil moisture.",
      "Use staking for better plant support.",
      "Monitor fungal diseases."
    ]
  },

  {
    name: "Potato",
    icon: "🥔",
    category: "Vegetable",
    description: "Potato is a cool-season tuber crop.",
    soilType: "Sandy loam and loamy soil",
    season: "Rabi",
    waterRequirement: "Medium",
    temperature: "15-25°C",
    growingPeriod: "80-120 days",
    fertilizer: "NPK and organic manure",
    sunlight: "Full sunlight",
    expectedYield: "20-30 tonnes/hectare",
    farmingTips: [
      "Use healthy seed tubers.",
      "Avoid waterlogging.",
      "Earth up plants properly."
    ]
  },

  {
    name: "Sugarcane",
    icon: "🎋",
    category: "Commercial Crop",
    description: "Sugarcane is a long-duration crop used mainly for sugar production.",
    soilType: "Deep fertile loamy soil",
    season: "Year-round",
    waterRequirement: "Very High",
    temperature: "20-35°C",
    growingPeriod: "10-18 months",
    fertilizer: "Nitrogen, phosphorus and potassium",
    sunlight: "Full sunlight",
    expectedYield: "70-120 tonnes/hectare",
    farmingTips: [
      "Provide sufficient irrigation.",
      "Use healthy setts.",
      "Control weeds during early growth."
    ]
  },

  {
    name: "Onion",
    icon: "🧅",
    category: "Vegetable",
    description: "Onion is an important bulb vegetable crop.",
    soilType: "Well-drained sandy loam",
    season: "Rabi/Kharif",
    waterRequirement: "Medium",
    temperature: "13-25°C",
    growingPeriod: "100-150 days",
    fertilizer: "NPK and sulphur",
    sunlight: "Full sunlight",
    expectedYield: "15-30 tonnes/hectare",
    farmingTips: [
      "Avoid excessive irrigation near harvest.",
      "Maintain good drainage.",
      "Use sulphur for better bulb development."
    ]
  },

  {
    name: "Banana",
    icon: "🍌",
    category: "Fruit",
    description: "Banana is a tropical fruit crop requiring warm conditions.",
    soilType: "Deep fertile loamy soil",
    season: "Year-round",
    waterRequirement: "High",
    temperature: "20-35°C",
    growingPeriod: "10-14 months",
    fertilizer: "Nitrogen, potassium and organic manure",
    sunlight: "Full sunlight",
    expectedYield: "30-60 tonnes/hectare",
    farmingTips: [
      "Provide regular irrigation.",
      "Use potassium-rich fertilizer.",
      "Protect plants from strong winds."
    ]
  },

  {
    name: "Mango",
    icon: "🥭",
    category: "Fruit",
    description: "Mango is a major tropical and subtropical fruit crop.",
    soilType: "Deep well-drained loamy soil",
    season: "Perennial",
    waterRequirement: "Medium",
    temperature: "24-30°C",
    growingPeriod: "3-5 years for bearing",
    fertilizer: "Organic manure, NPK and micronutrients",
    sunlight: "Full sunlight",
    expectedYield: "8-15 tonnes/hectare",
    farmingTips: [
      "Prune trees properly.",
      "Avoid waterlogging.",
      "Monitor fruit flies and fungal diseases."
    ]
  },

  {
    name: "Soybean",
    icon: "🫘",
    category: "Oilseed/Pulse",
    description: "Soybean is an important oilseed and protein-rich crop.",
    soilType: "Well-drained loamy soil",
    season: "Kharif",
    waterRequirement: "Medium",
    temperature: "20-30°C",
    growingPeriod: "90-120 days",
    fertilizer: "Phosphorus and balanced NPK",
    sunlight: "Full sunlight",
    expectedYield: "1.5-3 tonnes/hectare",
    farmingTips: [
      "Use Rhizobium inoculated seed.",
      "Avoid waterlogging.",
      "Control weeds during early growth."
    ]
  },

  {
    name: "Barley",
    icon: "🌾",
    category: "Cereal",
    description: "Barley is a cool-season cereal crop.",
    soilType: "Well-drained loamy soil",
    season: "Rabi",
    waterRequirement: "Low to Medium",
    temperature: "12-25°C",
    growingPeriod: "100-130 days",
    fertilizer: "NPK",
    sunlight: "Full sunlight",
    expectedYield: "2-4 tonnes/hectare",
    farmingTips: [
      "Sow during Rabi season.",
      "Avoid excessive nitrogen.",
      "Provide irrigation during critical stages."
    ]
  },

  {
    name: "Millet",
    icon: "🌾",
    category: "Cereal",
    description: "Millets are hardy cereal crops suitable for dryland farming.",
    soilType: "Sandy loam and light soils",
    season: "Kharif",
    waterRequirement: "Low",
    temperature: "25-35°C",
    growingPeriod: "70-100 days",
    fertilizer: "Organic manure and balanced NPK",
    sunlight: "Full sunlight",
    expectedYield: "1-2 tonnes/hectare",
    farmingTips: [
      "Suitable for low rainfall regions.",
      "Avoid excessive irrigation.",
      "Use drought-tolerant varieties."
    ]
  },

  {
    name: "Bajra",
    icon: "🌾",
    category: "Millet",
    description: "Bajra is a drought-tolerant millet crop.",
    soilType: "Sandy loam",
    season: "Kharif",
    waterRequirement: "Low",
    temperature: "25-35°C",
    growingPeriod: "75-100 days",
    fertilizer: "NPK and organic manure",
    sunlight: "Full sunlight",
    expectedYield: "1-2 tonnes/hectare",
    farmingTips: [
      "Suitable for dry regions.",
      "Maintain proper spacing.",
      "Control weeds early."
    ]
  },

  {
    name: "Jowar",
    icon: "🌾",
    category: "Millet",
    description: "Jowar is a drought-tolerant cereal crop.",
    soilType: "Loamy and black soil",
    season: "Kharif/Rabi",
    waterRequirement: "Low to Medium",
    temperature: "25-32°C",
    growingPeriod: "100-120 days",
    fertilizer: "NPK",
    sunlight: "Full sunlight",
    expectedYield: "1.5-3 tonnes/hectare",
    farmingTips: [
      "Suitable for semi-arid regions.",
      "Avoid waterlogging.",
      "Control shoot fly."
    ]
  },

  {
    name: "Ragi",
    icon: "🌾",
    category: "Millet",
    description: "Ragi is a nutritious millet crop suitable for dryland agriculture.",
    soilType: "Red loam and sandy loam",
    season: "Kharif",
    waterRequirement: "Low to Medium",
    temperature: "20-30°C",
    growingPeriod: "100-120 days",
    fertilizer: "NPK and organic manure",
    sunlight: "Full sunlight",
    expectedYield: "1.5-2.5 tonnes/hectare",
    farmingTips: [
      "Use good quality seeds.",
      "Control weeds early.",
      "Avoid excessive irrigation."
    ]
  },

  {
    name: "Pigeon Pea",
    icon: "🫘",
    category: "Pulse",
    description: "Pigeon pea is a protein-rich pulse crop.",
    soilType: "Well-drained loamy soil",
    season: "Kharif",
    waterRequirement: "Low to Medium",
    temperature: "20-30°C",
    growingPeriod: "150-240 days",
    fertilizer: "Phosphorus and balanced nutrients",
    sunlight: "Full sunlight",
    expectedYield: "1-2 tonnes/hectare",
    farmingTips: [
      "Avoid waterlogging.",
      "Use Rhizobium inoculation.",
      "Monitor pod borers."
    ]
  },

  {
    name: "Chickpea",
    icon: "🫘",
    category: "Pulse",
    description: "Chickpea is an important Rabi pulse crop.",
    soilType: "Well-drained loamy soil",
    season: "Rabi",
    waterRequirement: "Low",
    temperature: "15-25°C",
    growingPeriod: "100-120 days",
    fertilizer: "Phosphorus and balanced NPK",
    sunlight: "Full sunlight",
    expectedYield: "1-2 tonnes/hectare",
    farmingTips: [
      "Avoid excessive irrigation.",
      "Use disease-free seed.",
      "Monitor pod borer."
    ]
  },

  {
    name: "Black Gram",
    icon: "🫘",
    category: "Pulse",
    description: "Black gram is a short-duration pulse crop.",
    soilType: "Loamy and sandy loam",
    season: "Kharif/Rabi",
    waterRequirement: "Low to Medium",
    temperature: "25-35°C",
    growingPeriod: "70-100 days",
    fertilizer: "Phosphorus and balanced nutrients",
    sunlight: "Full sunlight",
    expectedYield: "0.7-1.2 tonnes/hectare",
    farmingTips: [
      "Avoid waterlogging.",
      "Use healthy seed.",
      "Control yellow mosaic disease."
    ]
  },

  {
    name: "Green Gram",
    icon: "🫘",
    category: "Pulse",
    description: "Green gram is a short-duration protein-rich pulse crop.",
    soilType: "Well-drained loamy soil",
    season: "Kharif/Rabi",
    waterRequirement: "Low",
    temperature: "25-35°C",
    growingPeriod: "60-90 days",
    fertilizer: "Phosphorus and balanced nutrients",
    sunlight: "Full sunlight",
    expectedYield: "0.8-1.2 tonnes/hectare",
    farmingTips: [
      "Control weeds early.",
      "Avoid excessive irrigation.",
      "Use disease-free seeds."
    ]
  },

  {
    name: "Lentil",
    icon: "🫘",
    category: "Pulse",
    description: "Lentil is a cool-season pulse crop.",
    soilType: "Well-drained loamy soil",
    season: "Rabi",
    waterRequirement: "Low",
    temperature: "18-25°C",
    growingPeriod: "100-120 days",
    fertilizer: "Phosphorus and balanced nutrients",
    sunlight: "Full sunlight",
    expectedYield: "0.8-1.5 tonnes/hectare",
    farmingTips: [
      "Avoid waterlogging.",
      "Use healthy seeds.",
      "Provide limited irrigation."
    ]
  },

  {
    name: "Peas",
    icon: "🫛",
    category: "Vegetable/Pulse",
    description: "Peas are cool-season vegetables and pulse crops.",
    soilType: "Well-drained loamy soil",
    season: "Rabi",
    waterRequirement: "Medium",
    temperature: "10-25°C",
    growingPeriod: "60-90 days",
    fertilizer: "Phosphorus and potassium",
    sunlight: "Full sunlight",
    expectedYield: "5-10 tonnes/hectare",
    farmingTips: [
      "Grow during cool weather.",
      "Provide support for climbing varieties.",
      "Maintain uniform moisture."
    ]
  },

  {
    name: "Mustard",
    icon: "🌼",
    category: "Oilseed",
    description: "Mustard is an important Rabi oilseed crop.",
    soilType: "Loamy and sandy loam",
    season: "Rabi",
    waterRequirement: "Low to Medium",
    temperature: "10-25°C",
    growingPeriod: "110-150 days",
    fertilizer: "Nitrogen, phosphorus and sulphur",
    sunlight: "Full sunlight",
    expectedYield: "1-2 tonnes/hectare",
    farmingTips: [
      "Provide irrigation at flowering.",
      "Sulphur supports oil production.",
      "Monitor aphids."
    ]
  },

  {
    name: "Sunflower",
    icon: "🌻",
    category: "Oilseed",
    description: "Sunflower is an oilseed crop that grows well under full sunlight.",
    soilType: "Well-drained loamy soil",
    season: "Kharif/Rabi",
    waterRequirement: "Medium",
    temperature: "20-30°C",
    growingPeriod: "90-120 days",
    fertilizer: "NPK and sulphur",
    sunlight: "Full sunlight",
    expectedYield: "1-2 tonnes/hectare",
    farmingTips: [
      "Ensure full sunlight.",
      "Irrigate during flowering and seed filling.",
      "Protect from birds."
    ]
  },

  {
    name: "Sesame",
    icon: "🌱",
    category: "Oilseed",
    description: "Sesame is a drought-tolerant oilseed crop.",
    soilType: "Sandy loam and well-drained soil",
    season: "Kharif",
    waterRequirement: "Low",
    temperature: "25-35°C",
    growingPeriod: "80-120 days",
    fertilizer: "NPK and organic manure",
    sunlight: "Full sunlight",
    expectedYield: "0.5-1 tonnes/hectare",
    farmingTips: [
      "Avoid waterlogging.",
      "Use light irrigation when necessary.",
      "Control weeds early."
    ]
  },

  {
    name: "Castor",
    icon: "🌱",
    category: "Oilseed",
    description: "Castor is an important oilseed crop suitable for warm climates.",
    soilType: "Well-drained loamy soil",
    season: "Kharif",
    waterRequirement: "Low to Medium",
    temperature: "20-30°C",
    growingPeriod: "150-240 days",
    fertilizer: "NPK",
    sunlight: "Full sunlight",
    expectedYield: "1-2 tonnes/hectare",
    farmingTips: [
      "Avoid waterlogging.",
      "Maintain proper spacing.",
      "Monitor semilooper pests."
    ]
  },

  {
    name: "Tobacco",
    icon: "🍃",
    category: "Commercial Crop",
    description: "Tobacco is a commercial leaf crop grown under controlled conditions.",
    soilType: "Well-drained sandy loam",
    season: "Rabi",
    waterRequirement: "Medium",
    temperature: "20-30°C",
    growingPeriod: "100-140 days",
    fertilizer: "Balanced NPK",
    sunlight: "Full sunlight",
    expectedYield: "1.5-2.5 tonnes/hectare",
    farmingTips: [
      "