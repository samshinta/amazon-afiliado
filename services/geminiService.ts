
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (prompt: string) => {
  if (!API_KEY) {
    throw new Error("API Key não configurada");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        thinkingConfig: { 
          thinkingBudget: 32768 
        },
        systemInstruction: `
          Você é o Curador Literário do site MelhoresPreços.shop. 
          Sua missão é ajudar leitores a encontrar livros baseados em seus gostos, sentimentos ou necessidades técnicas.
          Use seu "Thinking Mode" para analisar profundamente os temas dos livros.
          Seja empático, culto e direto. 
          Sempre mencione autores brasileiros quando relevante.
          Responda em Português do Brasil.
        `
      },
    });

    return response.text;
  } catch (error) {
    console.error("Erro ao chamar Gemini:", error);
    throw error;
  }
};
