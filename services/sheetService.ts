
import { Book } from '../types';

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1oLUC_3zo0Rt7UDB3i4vLzP5OYaeK7C1VYVzRSmTdfkI/export?format=csv&gid=852407710";

export const fetchBooksFromSheet = async (): Promise<Book[]> => {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) throw new Error("Falha ao baixar dados da planilha");
    
    const csvText = await response.text();
    
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

    const dataRows = rows.slice(1);

    return dataRows.map((row, index): Book | null => {
      const cols = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
      const cleanCols = cols.map(c => c.replace(/^"|"$/g, '').trim());

      if (cleanCols.length < 2) return null;

      // MAPEAMENTO COLUNAS N8N:
      // 0: Título | 1: Autor | 2: Preço (IGNORADO) | 3: Link Amazon | 4: URL Imagem | 5: Categoria 
      // 6: Resumo Detalhado | 7: Por que vale a pena | 8: Melhores Frases (Separadas por ;)
      
      const title = cleanCols[0]?.replace(/,/g, '') || 'Livro sem título';
      const author = cleanCols[1] || 'Autor desconhecido';
      
      const amazonLink = cleanCols[3] || '#';
      const imageUrl = cleanCols[4] || `https://picsum.photos/seed/${index}/400/600`;
      const category = cleanCols[5] || 'Geral';
      const fullSummary = cleanCols[6] || '';
      const worthItReason = cleanCols[7] || '';
      const rawQuotes = cleanCols[8] || '';
      const bestQuotes = rawQuotes ? rawQuotes.split(';').map(q => q.trim()) : [];

      const slug = title.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

      return {
        id: `sheet-${index}`,
        slug: slug,
        title: title,
        author: author,
        description: fullSummary || `Destaque na categoria ${category}.`,
        fullSummary: fullSummary,
        worthItReason: worthItReason,
        bestQuotes: bestQuotes,
        imageUrl: imageUrl,
        category: category,
        rating: 4.8,
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
