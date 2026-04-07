import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("Gemini key exists:", !!apiKey);
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getGeminiResponse = async (prompt: string) => {
  if (!ai) {
    throw new Error("Gemini API key is not configured.");
  }

  const systemInstruction = `
    You are an AI Agricultural Planner for "Green Group-Kosova", a premium mushroom production company in Gjilan, Kosovo.
    Your goal is to help farmers and partners plan their mushroom production, understand substrate quality, and optimize yield.
    
    Company Context:
    - Specializes in Fresh Champignon Mushrooms and High-Quality Mushroom Substrate.
    - Based in Gjilan, Kosovo.
    - Focuses on B2B wholesale and supporting local farmers.
    
    Your tone should be professional, helpful, and expert.
    Provide actionable advice on:
    - Cultivation techniques for champignons.
    - Substrate preparation and usage.
    - Yield estimation.
    - Pest and disease control in mushroom farming.
    - Seasonal planning in the Balkans climate.
    
    Keep responses concise and formatted with markdown for readability.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
      }
    });

    return response.text || "No response from AI.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};