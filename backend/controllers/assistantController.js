// ======================================================
// SMARTCROP AI - AGRICULTURAL ASSISTANT
// ======================================================

const cropKnowledge = {
  rice: {
    soil: "Clayey or clay-loam soil with good water-holding capacity",
    water: "High",
    climate: "Warm and humid climate",
    temperature: "20-35°C",
    rainfall: "1000-2000 mm approximately",
    season: "Kharif; can also be grown in suitable irrigated areas",
    fertilizer: "Nitrogen, phosphorus and potassium based on soil testing",
    irrigation: "Regular irrigation is important, especially during dry periods"
  },

  wheat: {
    soil: "Well-drained loamy or clay-loamy soil",
    water: "Medium",
    climate: "Cool growing season with dry weather during maturity",
    temperature: "10-25°C",
    rainfall: "Approximately 300-900 mm",
    season: "Rabi",
    fertilizer: "Nitrogen, phosphorus and potassium based on soil testing",
    irrigation: "Important irrigation stages include crown-root initiation and flowering"
  },

  maize: {
    soil: "Well-drained loamy soil",
    water: "Medium",
    climate: "Warm climate with adequate sunlight",
    temperature: "18-30°C",
    rainfall: "Approximately 500-800 mm",
    season: "Kharif, Rabi and suitable summer conditions",
    fertilizer: "Nitrogen, phosphorus and potassium",
    irrigation: "Avoid waterlogging and provide water during critical growth stages"
  },

  cotton: {
    soil: "Black soil is highly suitable; also suitable well-drained loamy soils",
    water: "Medium",
    climate: "Warm climate with a long frost-free period",
    temperature: "21-30°C",
    rainfall: "Approximately 500-1000 mm",
    season: "Kharif",
    fertilizer: "Balanced NPK based on soil testing",
    irrigation: "Moderate irrigation; avoid excessive waterlogging"
  },

  groundnut: {
    soil: "Sandy loam and well-drained soils",
    water: "Medium",
    climate: "Warm and relatively dry climate",
    temperature: "25-30°C",
    rainfall: "Approximately 500-1000 mm",
    season: "Kharif, Rabi and summer depending on region",
    fertilizer: "Balanced fertilizer with attention to calcium and phosphorus",
    irrigation: "Avoid excessive irrigation and waterlogging"
  },

  chickpea: {
    soil: "Well-drained loamy and sandy-loam soil",
    water: "Low to Medium",
    climate: "Cool and relatively dry climate",
    temperature: "15-25°C",
    rainfall: "Approximately 400-700 mm",
    season: "Rabi",
    fertilizer: "Phosphorus and balanced nutrients based on soil testing",
    irrigation: "Usually requires limited irrigation"
  },

  soybean: {
    soil: "Well-drained loamy soil",
    water: "Medium",
    climate: "Warm growing season",
    temperature: "20-30°C",
    rainfall: "Approximately 600-1000 mm",
    season: "Kharif",
    fertilizer: "Balanced nutrients with appropriate phosphorus and sulfur",
    irrigation: "Avoid waterlogging"
  },

  sugarcane: {
    soil: "Deep, fertile and well-drained loamy soil",
    water: "Very High",
    climate: "Warm and humid climate",
    temperature: "20-35°C",
    rainfall: "Approximately 750-1500 mm",
    season: "Planting season varies by region",
    fertilizer: "High nutrient requirement; NPK based on soil testing",
    irrigation: "Requires regular irrigation in many regions"
  },

  potato: {
    soil: "Loose, fertile sandy-loam soil",
    water: "Medium",
    climate: "Cool climate",
    temperature: "15-25°C",
    rainfall: "Moderate rainfall with controlled irrigation",
    season: "Rabi in many Indian regions",
    fertilizer: "NPK and organic matter based on soil testing",
    irrigation: "Light and regular irrigation; avoid waterlogging"
  },

  tomato: {
    soil: "Well-drained sandy-loam or loamy soil",
    water: "Medium",
    climate: "Warm and moderate climate",
    temperature: "18-30°C",
    rainfall: "Moderate",
    season: "Can be grown in multiple seasons depending on region",
    fertilizer: "Balanced NPK with micronutrients when required",
    irrigation: "Regular irrigation; drip irrigation can improve water efficiency"
  },

  onion: {
    soil: "Well-drained sandy-loam or loamy soil",
    water: "Medium",
    climate: "Cool conditions during bulb development and relatively dry conditions near maturity",
    temperature: "13-25°C",
    rainfall: "Moderate",
    season: "Rabi and Kharif depending on region",
    fertilizer: "Balanced NPK and sulfur where required",
    irrigation: "Regular but controlled irrigation"
  },

  millet: {
    soil: "Sandy, sandy-loam and light soils",
    water: "Low",
    climate: "Hot and dry climate",
    temperature: "25-35°C",
    rainfall: "Approximately 250-600 mm",
    season: "Kharif",
    fertilizer: "Moderate balanced fertilizer based on soil testing",
    irrigation: "Generally drought tolerant"
  },

  bajra: {
    soil: "Sandy and sandy-loam soil",
    water: "Low",
    climate: "Hot and dry climate",
    temperature: "25-35°C",
    rainfall: "Approximately 250-600 mm",
    season: "Kharif",
    fertilizer: "Balanced nutrients according to soil condition",
    irrigation: "Low water requirement"
  },

  jowar: {
    soil: "Black, loamy and well-drained soils",
    water: "Low to Medium",
    climate: "Warm climate",
    temperature: "25-32°C",
    rainfall: "Approximately 400-750 mm",
    season: "Kharif and Rabi",
    fertilizer: "Balanced NPK based on soil testing",
    irrigation: "Moderate depending on season"
  },

  ragi: {
    soil: "Red loamy, sandy-loam and well-drained soils",
    water: "Low to Medium",
    climate: "Warm climate",
    temperature: "20-30°C",
    rainfall: "Approximately 500-1000 mm",
    season: "Kharif",
    fertilizer: "Balanced nutrients based on soil testing",
    irrigation: "Moderate water requirement"
  },

  mustard: {
    soil: "Loamy and well-drained soils",
    water: "Low",
    climate: "Cool and dry climate",
    temperature: "10-25°C",
    rainfall: "Approximately 400-600 mm",
    season: "Rabi",
    fertilizer: "Balanced NPK and sulfur where required",
    irrigation: "Limited irrigation can be beneficial"
  },

  sugarcane: {
    soil: "Deep fertile loamy soil",
    water: "Very High",
    climate: "Warm and humid",
    temperature: "20-35°C",
    rainfall: "750-1500 mm",
    season: "Region dependent",
    fertilizer: "High NPK requirement",
    irrigation: "Regular irrigation required"
  }
};


// ======================================================
// SOIL KNOWLEDGE
// ======================================================

const soilKnowledge = {

  black: {
    name: "Black Soil",
    features:
      "Black soil has high clay content and good moisture-holding capacity.",
    suitable:
      "Cotton, soybean, wheat, maize, sorghum, chickpea and some oilseeds.",
    management:
      "Avoid working the soil when it is extremely wet. Maintain drainage and add organic matter."
  },

  red: {
    name: "Red Soil",
    features:
      "Red soils are generally well drained and may have lower organic matter.",
    suitable:
      "Groundnut, millets, pulses, cotton, maize, vegetables and some oilseeds.",
    management:
      "Use organic matter and balanced fertilizers based on soil testing."
  },

  alluvial: {
    name: "Alluvial Soil",
    features:
      "Alluvial soils are generally fertile and occur in many river plains.",
    suitable:
      "Rice, wheat, sugarcane, maize, pulses, vegetables and many other crops.",
    management:
      "Maintain balanced nutrients and avoid excessive fertilizer application."
  },

  sandy: {
    name: "Sandy Soil",
    features:
      "Sandy soil has large particles, fast drainage and relatively low water-holding capacity.",
    suitable:
      "Groundnut, watermelon, muskmelon, carrot, potato and some millets.",
    management:
      "Add organic matter, use mulching and apply smaller amounts of water more frequently."
  },

  clay: {
    name: "Clay Soil",
    features:
      "Clay soil has fine particles and high water-holding capacity but may have drainage problems.",
    suitable:
      "Rice and crops that tolerate heavier soils.",
    management:
      "Improve drainage and avoid excessive irrigation."
  },

  loamy: {
    name: "Loamy Soil",
    features:
      "Loamy soil has a good balance of sand, silt and clay.",
    suitable:
      "Rice, wheat, maize, vegetables, pulses, fruits and many field crops.",
    management:
      "Maintain organic matter and balanced nutrients."
  },

  laterite: {
    name: "Laterite Soil",
    features:
      "Laterite soil is generally well drained and can be acidic.",
    suitable:
      "Tea, coffee, cashew, coconut and some plantation crops depending on local conditions.",
    management:
      "Use soil testing and appropriate organic matter and nutrient management."
  },

  saline: {
    name: "Saline Soil",
    features:
      "Saline soil contains excess soluble salts which can reduce crop growth.",
    suitable:
      "Salt-tolerant crops may be selected depending on salinity level.",
    management:
      "Improve drainage, use good-quality irrigation water and follow soil reclamation practices."
  }
};


// ======================================================
// CLIMATE KNOWLEDGE
// ======================================================

const climateKnowledge = {

  hot: `
Hot climates are suitable for crops such as maize, cotton, millet,
sorghum, groundnut and some vegetables.
Choose crops according to temperature, rainfall and soil.
`,

  cold: `
Cool climates are suitable for crops such as wheat, barley,
peas, chickpea, mustard and some vegetables.
Avoid frost-sensitive crops during severe cold periods.
`,

  humid: `
Humid climates can support rice, banana, sugarcane and several
vegetables, but high humidity can increase fungal disease risk.
Good drainage and disease monitoring are important.
`,

  dry: `
Dry climates are suitable for drought-tolerant crops such as
millets, sorghum, chickpea, pigeon pea and groundnut.
Water conservation techniques are very important.
`,

  rainy: `
High rainfall areas require crops that tolerate moisture.
Rice and some plantation crops can perform well in suitable soils.
Good drainage is essential to prevent root diseases.
`
};


// ======================================================
// WATER KNOWLEDGE
// ======================================================

const waterKnowledge = {

  low: `
Low-water crops include millet, bajra, jowar, ragi,
chickpea, pigeon pea, green gram and black gram.
Use mulching and water-saving irrigation methods.
`,

  medium: `
Medium-water crops include wheat, maize, soybean,
groundnut, tomato, potato, onion and many vegetables.
Irrigation should depend on soil moisture and weather.
`,

  high: `
High-water crops include rice and sugarcane.
Use efficient irrigation and avoid unnecessary water loss.
`,

  irrigation: `
Common irrigation methods include drip irrigation,
sprinkler irrigation, furrow irrigation and surface irrigation.
Drip irrigation can improve water-use efficiency for many crops.
`
};


// ======================================================
// FERTILIZER KNOWLEDGE
// ======================================================

const fertilizerKnowledge = `

Fertilizer guidance:

• Nitrogen (N) mainly supports vegetative growth and leaves.
• Phosphorus (P) supports roots and reproductive development.
• Potassium (K) supports overall plant strength, water regulation
  and stress tolerance.

Always prefer soil-test-based fertilizer recommendations.

Organic sources such as compost, farmyard manure and suitable
biofertilizers can help improve soil health.

Avoid excessive fertilizer because it can damage crops,
increase production costs and affect soil and water quality.
`;


// ======================================================
// PEST AND DISEASE KNOWLEDGE
// ======================================================

const pestKnowledge = `

For pest problems:

1. Identify the pest before applying pesticides.
2. Inspect leaves, stems, roots and fruits.
3. Remove severely affected plant parts when appropriate.
4. Encourage beneficial insects.
5. Use integrated pest management (IPM).
6. Use pesticides only according to the crop label and local
   agricultural recommendations.

For disease problems, check symptoms such as yellow leaves,
leaf spots, wilting, rotting and unusual growth.
Correct diagnosis is important before treatment.
`;


// ======================================================
// GENERAL AGRICULTURE KNOWLEDGE
// ======================================================

const generalKnowledge = `

Smart farming recommendations:

• Test soil before selecting fertilizer.
• Select crops according to soil, climate and water availability.
• Use quality seeds.
• Follow recommended sowing depth and spacing.
• Maintain proper irrigation.
• Remove weeds at the right stage.
• Monitor pests and diseases regularly.
• Use crop rotation where suitable.
• Add organic matter to maintain soil health.
• Avoid unnecessary pesticide and fertilizer use.
• Consider local weather and agricultural recommendations.
`;


// ======================================================
// FIND CROP
// ======================================================

function findCrop(question) {

  const lower = question.toLowerCase();

  const cropNames = Object.keys(cropKnowledge);

  for (const crop of cropNames) {
    if (lower.includes(crop)) {
      return crop;
    }
  }

  return null;
}


// ======================================================
// ASSISTANT RESPONSE
// ======================================================

function getAssistantResponse(question) {

  const q = question.toLowerCase().trim();

  if (!q) {
    return "Please ask a farming question.";
  }


  // ------------------------------------------
  // GREETING
  // ------------------------------------------

  if (
    q === "hi" ||
    q === "hello" ||
    q === "hey" ||
    q.includes("good morning") ||
    q.includes("good evening")
  ) {
    return `
🌱 Hello! I am SmartCrop AI.

I can help you with:

🌾 Crop selection
🟤 Soil types
🌡️ Climate
💧 Water requirements
🌧️ Rainfall
🧪 Fertilizers
🐛 Pest management
🦠 Crop diseases
🚜 Irrigation
📅 Sowing seasons
🌱 Soil health

Ask me any farming question.
`;
  }


  // ------------------------------------------
  // SOIL QUESTIONS
  // ------------------------------------------

  if (
    q.includes("black soil") ||
    q.includes("black cotton soil")
  ) {

    return `
🖤 BLACK SOIL

${soilKnowledge.black.features}

🌾 Suitable crops:
${soilKnowledge.black.suitable}

🌱 Management:
${soilKnowledge.black.management}
`;
  }


  if (q.includes("red soil")) {

    return `
🔴 RED SOIL

${soilKnowledge.red.features}

🌾 Suitable crops:
${soilKnowledge.red.suitable}

🌱 Management:
${soilKnowledge.red.management}
`;
  }


  if (q.includes("alluvial soil")) {

    return `
🌊 ALLUVIAL SOIL

${soilKnowledge.alluvial.features}

🌾 Suitable crops:
${soilKnowledge.alluvial.suitable}

🌱 Management:
${soilKnowledge.alluvial.management}
`;
  }


  if (q.includes("sandy soil")) {

    return `
🏖️ SANDY SOIL

${soilKnowledge.sandy.features}

🌾 Suitable crops:
${soilKnowledge.sandy.suitable}

🌱 Management:
${soilKnowledge.sandy.management}
`;
  }


  if (q.includes("clay soil")) {

    return `
🟤 CLAY SOIL

${soilKnowledge.clay.features}

🌾 Suitable crops:
${soilKnowledge.clay.suitable}

🌱 Management:
${soilKnowledge.clay.management}
`;
  }


  if (q.includes("loamy soil")) {

    return `
🌱 LOAMY SOIL

${soilKnowledge.loamy.features}

🌾 Suitable crops:
${soilKnowledge.loamy.suitable}

🌱 Management:
${soilKnowledge.loamy.management}
`;
  }


  if (q.includes("laterite soil")) {

    return `
🟠 LATERITE SOIL

${soilKnowledge.laterite.features}

🌾 Suitable crops:
${soilKnowledge.laterite.suitable}

🌱 Management:
${soilKnowledge.laterite.management}
`;
  }


  if (q.includes("saline soil") || q.includes("salty soil")) {

    return `
🧂 SALINE SOIL

${soilKnowledge.saline.features}

🌾 Suitable crops:
${soilKnowledge.saline.suitable}

🌱 Management:
${soilKnowledge.saline.management}
`;
  }


  // ------------------------------------------
  // SOIL GENERAL
  // ------------------------------------------

  if (
    q.includes("soil type") ||
    q.includes("types of soil") ||
    q.includes("which soil")
  ) {

    return `
🟤 IMPORTANT AGRICULTURAL SOIL TYPES

1. Black soil
2. Red soil
3. Alluvial soil
4. Sandy soil
5. Clay soil
6. Loamy soil
7. Laterite soil
8. Saline soil

The best soil depends on the crop.

For example:

🌾 Rice → Clay / clay-loam
🌾 Wheat → Loamy
🌽 Maize → Well-drained loamy
🌿 Cotton → Black soil
🥜 Groundnut → Sandy loam
🌱 Millets → Sandy / light soils

Soil testing is recommended before making a final decision.
`;
  }


  // ------------------------------------------
  // LOW WATER
  // ------------------------------------------

  if (
    q.includes("less water") ||
    q.includes("low water") ||
    q.includes("water saving") ||
    q.includes("drought")
  ) {

    return `
💧 LOW-WATER CROPS

Some relatively drought-tolerant crops include:

🌾 Bajra
🌾 Jowar
🌾 Ragi
🌾 Millets
🫘 Chickpea
🫘 Pigeon pea
🫘 Green gram
🫘 Black gram
🥜 Groundnut

Tip:

Use drip or sprinkler irrigation where appropriate,
mulching and soil-moisture conservation to reduce
water losses.
`;
  }


  // ------------------------------------------
  // HIGH WATER
  // ------------------------------------------

  if (
    q.includes("high water") ||
    q.includes("more water") ||
    q.includes("water requirement")
  ) {

    return `
💧 WATER REQUIREMENT

Crops with relatively high water requirements include:

🌾 Rice
🎋 Sugarcane
🍌 Banana
🥥 Coconut

Medium-water crops include:

🌽 Maize
🌾 Wheat
🥜 Groundnut
🫘 Soybean
🍅 Tomato
🥔 Potato

Lower-water crops include:

🌾 Millets
🌾 Bajra
🌾 Jowar
🌾 Ragi
🫘 Chickpea
🫘 Pigeon pea

Actual irrigation needs depend on soil, rainfall,
temperature, crop stage and local conditions.
`;
  }


  // ------------------------------------------
  // IRRIGATION
  // ------------------------------------------

  if (
    q.includes("irrigation") ||
    q.includes("drip") ||
    q.includes("sprinkler")
  ) {

    return `
🚜 IRRIGATION GUIDANCE

Common irrigation methods:

💧 Drip irrigation
💧 Sprinkler irrigation
💧 Furrow irrigation
💧 Surface irrigation

Drip irrigation delivers water near the plant root zone
and can reduce water losses.

Sprinklers can be useful for many field and vegetable crops.

The correct method depends on crop, soil, field condition,
water availability and local climate.
`;
  }


  // ------------------------------------------
  // CLIMATE
  // ------------------------------------------

  if (
    q.includes("climate") ||
    q.includes("temperature") ||
    q.includes("weather condition")
  ) {

    return `
🌡️ CLIMATE AND FARMING

Crop growth depends on:

🌡️ Temperature
🌧️ Rainfall
💧 Humidity
☀️ Sunlight
🌬️ Wind
🟤 Soil
💧 Water availability

Examples:

🌾 Wheat → generally prefers cool growing conditions.
🌾 Rice → prefers warm and humid conditions.
🌽 Maize → prefers warm conditions.
🌿 Cotton → prefers warm conditions.
🌾 Millets → tolerate relatively hot and dry conditions.

Always consider your local weather before sowing.
`;
  }


  // ------------------------------------------
  // RAINFALL
  // ------------------------------------------

  if (
    q.includes("rainfall") ||
    q.includes("rain") ||
    q.includes("heavy rain")
  ) {

    return `
🌧️ RAINFALL AND FARMING

Rainfall requirements vary by crop.

🌾 Rice generally performs well in high-moisture conditions.
🌽 Maize requires moderate water.
🥜 Groundnut prefers well-drained soil.
🌾 Millets can tolerate relatively low rainfall.
🫘 Chickpea generally performs well under relatively dry
conditions.

During heavy rainfall:

• Ensure proper drainage.
• Avoid waterlogging.
• Monitor roots for disease.
• Protect young plants from erosion.
`;
  }


  // ------------------------------------------
  // FERTILIZER
  // ------------------------------------------

  if (
    q.includes("fertilizer") ||
    q.includes("fertiliser") ||
    q.includes("npk") ||
    q.includes("nutrient")
  ) {

    return `
🧪 FERTILIZER AND NUTRIENT GUIDANCE

${fertilizerKnowledge}

🌱 N → Vegetative growth
🌱 P → Root and reproductive development
🌱 K → Plant strength and stress tolerance

For exact fertilizer quantity, soil testing and
crop-specific recommendations should be followed.
`;
  }


  // ------------------------------------------
  // PEST / DISEASE
  // ------------------------------------------

  if (
    q.includes("pest") ||
    q.includes("insect") ||
    q.includes("disease") ||
    q.includes("fungus") ||
    q.includes("fungal") ||
    q.includes("yellow leaves") ||
    q.includes("leaf spot")
  ) {

    return `
🐛 PEST AND DISEASE GUIDANCE

${pestKnowledge}

If you tell me:

🌱 Crop name
📍 Crop growth stage
🐛 Pest or symptom
📷 Photo if available

I can provide more specific guidance.
`;
  }


  // ------------------------------------------
  // ORGANIC FARMING
  // ------------------------------------------

  if (
    q.includes("organic farming") ||
    q.includes("organic fertilizer") ||
    q.includes("compost") ||
    q.includes("farmyard manure")
  ) {

    return `
🌱 ORGANIC FARMING

Useful practices include:

♻️ Compost
🐄 Farmyard manure
🌿 Green manure
🌱 Crop rotation
🍂 Mulching
🪱 Vermicompost
🌾 Cover crops

Organic matter can improve soil structure,
water-holding capacity and biological activity.
`;
  }


  // ------------------------------------------
  // CROP-SPECIFIC QUESTIONS
  // ------------------------------------------

  const crop = findCrop(q);

  if (crop) {

    const data = cropKnowledge[crop];

    if (
      q.includes("soil") ||
      q.includes("land")
    ) {

      return `
🌱 ${crop.toUpperCase()} - SOIL

🟤 Suitable soil:
${data.soil}

💧 Water:
${data.water}

🌡️ Climate:
${data.climate}

For final crop selection, consider local soil testing.
`;
    }


    if (
      q.includes("water") ||
      q.includes("irrigation")
    ) {

      return `
💧 ${crop.toUpperCase()} - WATER

Water requirement:
${data.water}

Irrigation:
${data.irrigation}

Actual water requirement changes with soil,
rainfall, temperature and crop growth stage.
`;
    }


    if (
      q.includes("climate") ||
      q.includes("temperature") ||
      q.includes("weather")
    ) {

      return `
🌡️ ${crop.toUpperCase()} - CLIMATE

Climate:
${data.climate}

Temperature:
${data.temperature}

Rainfall:
${data.rainfall}
`;
    }


    if (
      q.includes("season") ||
      q.includes("sow") ||
      q.includes("sowing") ||
      q.includes("grow")
    ) {

      return `
📅 ${crop.toUpperCase()} - GROWING SEASON

Season:
${data.season}

Climate:
${data.climate}

Temperature:
${data.temperature}

Sowing time should be adjusted according to
your local agricultural calendar and weather.
`;
    }


    if (
      q.includes("fertilizer") ||
      q.includes("fertiliser")
    ) {

      return `
🧪 ${crop.toUpperCase()} - FERTILIZER

Recommended nutrient approach:
${data.fertilizer}

Always use soil-test-based fertilizer recommendations
when possible.
`;
    }


    return `
🌱 ${crop.toUpperCase()} INFORMATION

🟤 Soil:
${data.soil}

💧 Water:
${data.water}

🌡️ Climate:
${data.climate}

🌡️ Temperature:
${data.temperature}

🌧️ Rainfall:
${data.rainfall}

📅 Season:
${data.season}

🧪 Fertilizer:
${data.fertilizer}

🚜 Irrigation:
${data.irrigation}
`;
  }


  // ------------------------------------------
  // GENERAL FARMING
  // ------------------------------------------

  if (
    q.includes("farming") ||
    q.includes("agriculture") ||
    q.includes("crop")
  ) {

    return `
🌱 SMARTCROP AI

I can help you with:

🌾 Crop selection
🟤 Soil selection
🌡️ Climate
💧 Water requirements
🌧️ Rainfall
🧪 Fertilizers
🐛 Pest management
🦠 Diseases
🚜 Irrigation
📅 Sowing seasons
🌱 Organic farming
🧬 Plant nutrients

Try asking something specific, for example:

"Which crop is suitable for sandy soil?"

"What crops need less water?"

"What climate is suitable for wheat?"

"What fertilizer is suitable for maize?"

"When should I sow chickpea?"
`;
  }


  // ------------------------------------------
  // FALLBACK
  // ------------------------------------------

  return `
🌱 SMARTCROP AI

I can help you with agricultural questions about:

🌾 Crops
🟤 Soil
🌡️ Climate
💧 Water
🌧️ Rainfall
🧪 Fertilizers
🐛 Pests
🦠 Diseases
🚜 Irrigation
📅 Sowing and harvesting
🌱 Organic farming

Please make your question a little more specific.

Examples:

• Which crop is suitable for black soil?
• Which crop needs less water?
• What soil is suitable for rice?
• What climate is suitable for wheat?
• What fertilizer is good for maize?
• Which crops grow well in sandy soil?
• How can I improve soil fertility?
`;
}


// ======================================================
// EXPRESS CONTROLLER
// ======================================================

async function assistant(req, res) {

  try {

    const message =
      req.body.message ||
      req.body.question ||
      req.body.query;

    if (!message || !message.trim()) {

      return res.status(400).json({
        success: false,
        message: "Please enter a farming question."
      });

    }

    const reply = getAssistantResponse(message);

    return res.json({
      success: true,
      reply: reply
    });

  } catch (error) {

    console.error("Assistant Error:", error);

    return res.status(500).json({
      success: false,
      message: "SmartCrop AI could not process the question."
    });
  }
}


// ======================================================
// EXPORTS
// ======================================================

module.exports = {
  assistant,
  getAssistantResponse
};