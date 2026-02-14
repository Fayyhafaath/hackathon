require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testModels() {
  console.log("🧪 Testing Gemini models with your API key...\n");
  
  const testModels = [
    "gemini-2.0-flash",
    "gemini-2.0-flash-exp",
    "gemini-exp-1114"
  ];
  
  for (const modelName of testModels) {
    try {
      console.log(`Testing ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("test");
      const response = await result.response;
      console.log(`✅ ${modelName} - WORKS!\n`);
      console.log(`Recommendation: Use "${modelName}"`);
      return;
    } catch (error) {
      const msg = error.message || error.toString();
      console.log(`❌ ${modelName} - ${msg.substring(0, 100)}\n`);
    }
  }
}

testModels();
