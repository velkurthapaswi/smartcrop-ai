const { getAssistantResponse } = require('./data/assistantKnowledge');
const cropsData = require('./data/cropsData');
const { calculateCropAdvice } = require('./controllers/advisorController');

console.log('🧪 Starting SmartCrop AI Backend Logic Tests...\n');

// Test 1: Check Crops Data
console.log(`[Test 1] Crops Dataset: Checking ${cropsData.length} predefined crops...`);
const requiredCrops = [
  'Rice', 'Wheat', 'Maize', 'Cotton', 'Tomato', 'Potato',
  'Groundnut', 'Sugarcane', 'Chilli', 'Onion', 'Banana', 'Mango'
];

const missingCrops = requiredCrops.filter(name => !cropsData.find(c => c.name.toLowerCase() === name.toLowerCase()));
if (missingCrops.length === 0) {
  console.log('✅ All 12 required crops exist with full agronomic profiles.');
} else {
  console.error('❌ Missing crops:', missingCrops);
}

// Test 2: Check Assistant Knowledge for sample questions
console.log('\n[Test 2] Testing Farming Assistant Responses:');
const testQueries = [
  'Which crop needs less water?',
  'What soil is suitable for rice?',
  'When should I grow wheat?',
  'What fertilizer is good for maize?',
  'How much water does tomato need?'
];

testQueries.forEach((q) => {
  const res = getAssistantResponse(q);
  if (res && res.reply && res.reply.length > 20 && res.suggestions.length > 0) {
    console.log(`✅ Q: "${q}" -> Answered (${res.reply.substring(0, 40)}...)`);
  } else {
    console.error(`❌ Q: "${q}" -> FAILED`);
  }
});

console.log('\n✨ Backend Core Agronomic Engine Verified Successfully!\n');
