import { Book } from '../types';

// URL da sua planilha exportada como CSV (Gid da aba 'amazon' fornecido: 852407710)
// Para integrar com N8N: Faça o N8N adicionar linhas nesta planilha do Google Sheets.
// O site lerá automaticamente as novas linhas adicionadas pelo N8N.
const SHEET_URL = "https://docs.google.com/spreadsheets/d/1oLUC_3zo0Rt7UDB3i4vLzP5OYaeK7C1VYVzRSmTdfkI/export?format=csv&gid=852407710";

export const fetchBooksFromSheet = async (): Promise<Book[]> => {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) throw new Error("Falha ao baixar dados da planilha");
    
    const csvText = await response.text();
    
    // Parser CSV simples mas robusto para lidar com aspas geradas pelo Excel/Sheets
    // Divide por linhas, ignorando quebras de linha dentro de aspas
    const rows: string[] = [];
    let currentRow = '';
    let insideQuotes = false;

    for (let i = 0; i < csvText.length; i++) {
      const char = csvText[i];
      if (char === '"') {
        insideQuotes = !insideQuotes;
      }
      if (char === '\n' && !insideQuotes) {
        rows.push(currentRow);
        currentRow = '';
      } else {
        currentRow += char;
      }
    }
    if (currentRow) rows.push(currentRow);

    // Remove o cabeçalho (assumindo que a primeira linha é header)
    const dataRows = rows.slice(1);

    return dataRows.map((row, index): Book | null => {
      // Divide por vírgula, respeitando aspas
      const cols = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
      // Limpa aspas extras dos valores
      const cleanCols = cols.map(c => c.replace(/^"|"$/g, '').trim());

      // Se a linha estiver vazia ou mal formatada, pula
      if (cleanCols.length < 2) return null;

      // Mapeamento das Colunas (Ordem esperada na planilha):
      // A: Título, B: Autor, C: Preço, D: Link Amazon, E: Imagem URL, F: Categoria
      const title = cleanCols[0]?.replace(/,/g, '') || 'Livro sem título'; // Remove vírgulas extras do título se houver
      const author = cleanCols[1] || 'Autor desconhecido';
      
      // Tratamento de preço (R$ 39,90 -> 39.90)
      let priceStr = cleanCols[2] || '0';
      priceStr = priceStr.replace('R$', '').replace(',', '.').trim();
      const price = parseFloat(priceStr);

      const amazonLink = cleanCols[3] || '#';
      const imageUrl = cleanCols[4] || `https://picsum.photos/seed/${index}/400/600`;
      const category = cleanCols[5] || 'Geral';

      return {
        id: `sheet-${index}`,
        title: title,
        author: author,
        description: `Destaque na categoria ${category}.`,
        price: !isNaN(price) && price > 0 ? price : 39.90,
        oldPrice: !isNaN(price) && price > 0 ? price * 1.2 : 49.90,
        imageUrl: imageUrl,
        category: category,
        rating: 4.8, // Valor padrão ou adicionar coluna na planilha
        reviewsCount: 1500,
        amazonLink: amazonLink,
        updatedAt: new Date().toISOString()
      };
    }).filter((book): book is Book => book !== null && book.title !== 'Livro sem título');
  } catch (error) {
    console.error("Erro ao processar planilha:", error);
    return [];
  }
};