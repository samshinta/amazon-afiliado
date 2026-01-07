import { GoogleGenAI } from "@google/genai";

export const handler = async (event: any) => {
  // Apenas aceita requisições POST
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: "Método não permitido" }) 
    };
  }

  try {
    const { prompt } = JSON.parse(event.body || "{}");
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "A variável de ambiente API_KEY não foi configurada no Netlify." }),
      };
    }

    // Inicializa o SDK conforme as diretrizes mais recentes
    const ai = new GoogleGenAI({ apiKey });

    // Gera o conteúdo usando o modelo mais avançado para raciocínio literário
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        thinkingConfig: { thinkingBudget: 32768 },
        systemInstruction: "Você é um bibliotecário especialista do site MelhoresPreços.shop. Sua missão é fornecer recomendações de livros profundas, poéticas e precisas em Português do Brasil. Sempre sugira autores brasileiros quando o tema permitir e lembre o usuário que os links da Amazon estão disponíveis no site para compra segura.",
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ text: response.text }),
    };
  } catch (error: any) {
    console.error("Erro na Function Gemini:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Erro interno ao processar a solicitação de IA." }),
    };
  }
};