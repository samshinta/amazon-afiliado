import { GoogleGenAI } from "@google/genai";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { prompt } = JSON.parse(event.body || "{}");
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API_KEY não configurada no ambiente do Netlify. Vá em Site Settings > Environment Variables." }),
      };
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 32768 },
        systemInstruction: `
          Você é o Curador Literário do site MelhoresPreços.shop. 
          Sua missão é ajudar leitores a encontrar livros baseados em seus gostos, sentimentos ou necessidades técnicas.
          Use seu "Thinking Mode" para analisar profundamente os temas dos livros.
          Seja empático, culto e direto. 
          Sempre mencione autores brasileiros quando relevante.
          Responda em Português do Brasil de forma concisa mas inspiradora.
        `
      },
    });

    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      },
      body: JSON.stringify({ text: response.text }),
    };
  } catch (error: any) {
    console.error("Erro na função Gemini:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Erro interno no servidor de IA" }),
    };
  }
};