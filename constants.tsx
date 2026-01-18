
import { Book, BlogPost, Quote, Author, Sebo, OfferProduct } from './types';

const generateMockBooks = (): Book[] => {
  const baseBooks = [
    { 
      t: 'Café com Deus Pai Vol. 6 - 2026', 
      a: 'Júnior Rostirola', 
      c: 'Religião', 
      link: 'https://amzn.to/49ccQDM', 
      img: 'https://i.imgur.com/mh1bIQ4.jpg',
      sum: 'Um guia devocional diário que propõe um encontro com Deus a cada manhã. O volume 2026 traz mensagens inéditas focadas em renovação e propósito.',
      worth: 'Sim! Para quem busca constância espiritual, o Café com Deus Pai é o livro mais indicado por sua linguagem simples e profundidade emocional.',
      quotes: ['Sua jornada começa com um passo de fé.', 'O café esfria, mas a palavra de Deus permanece quente no coração.']
    },
    { 
      t: 'A Psicologia Financeira', 
      a: 'Morgan Housel', 
      c: 'Finanças', 
      link: 'https://amzn.to/45uVilk', 
      img: 'https://i.imgur.com/bC7VV6q.jpg',
      sum: ' Morgan Housel apresenta 19 histórias curtas que exploram as formas estranhas como as pessoas pensam sobre o dinheiro e ensina como ter uma relação mais saudável com suas finanças.',
      worth: 'Com certeza. Se você busca entender por que toma decisões financeiras ruins e quer mudar sua mentalidade sobre riqueza, este é o melhor livro do gênero.',
      quotes: ['Gastar dinheiro para mostrar às pessoas quanto dinheiro você tem é a maneira mais rápida de ter menos dinheiro.', 'Fazer bem com dinheiro tem pouco a ver com o quão inteligente você é e muito a ver com como você se comporta.']
    },
    { 
      t: 'Hábitos Atômicos', 
      a: 'James Clear', 
      c: 'Autoajuda', 
      link: 'https://amzn.to/4pjcy4a', 
      img: 'https://i.imgur.com/yDAQkM4.jpg',
      sum: 'James Clear revela um sistema prático para criar bons hábitos e abandonar os maus, focando em pequenas mudanças de 1% que geram resultados gigantes.',
      worth: 'Vale cada centavo. Diferente de livros teóricos, este entrega um plano de ação imediato para transformar sua rotina através de sistemas simples.',
      quotes: ['Você não atinge o nível de seus objetivos. Você cai para o nível de seus sistemas.', 'Todos os grandes feitos vêm de pequenos começos.']
    },
    { 
      t: 'Pai Rico, Pai Pobre', 
      a: 'Robert Kiyosaki', 
      c: 'Finanças', 
      link: 'https://amzn.to/3LoLp1V', 
      img: 'https://imgur.com/SGsNa1o.jpg',
      sum: 'O clássico de finanças que quebra o mito de que você precisa ter uma renda alta para ser rico e ensina a diferença entre ativos e passivos.',
      worth: 'É leitura obrigatória. É a base fundamental para qualquer pessoa que deseje sair da corrida dos ratos e alcançar a independência financeira.',
      quotes: ['A classe média trabalha pelo dinheiro. Os ricos fazem o dinheiro trabalhar para eles.', 'Não é o quanto de dinheiro você ganha, mas quanto você guarda.']
    }
  ];

  return baseBooks.map((book, index) => {
    const slug = book.t.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    return {
      id: `book-${index}`,
      slug: slug,
      title: book.t,
      author: book.a,
      description: book.sum,
      fullSummary: book.sum,
      worthItReason: book.worth,
      bestQuotes: book.quotes,
      imageUrl: book.img,
      category: book.c,
      rating: 4.8,
      reviewsCount: 1500 + Math.floor(Math.random() * 5000),
      amazonLink: book.link,
      updatedAt: new Date().toISOString()
    };
  });
};

export const MOCK_BOOKS: Book[] = generateMockBooks();

export const MOCK_OFFERS: OfferProduct[] = [
  {
    id: 'o1',
    title: 'Kindle 11ª Geração - O mais leve e compacto',
    category: 'E-readers',
    description: 'Tela de 300 ppi de alta resolução para textos e imagens nítidos.',
    imageUrl: 'https://m.media-amazon.com/images/I/71Bf9u7-EHL._AC_SL1500_.jpg',
    amazonLink: 'https://amzn.to/3YzO7yR'
  }
];

export const MOCK_BLOG: BlogPost[] = [
  {
    id: '1',
    slug: 'como-ler-mais-em-2024',
    title: 'Como ler 24 livros em um ano: O guia prático',
    excerpt: 'Dicas simples de rotina para quem quer retomar o hábito da leitura.',
    content: 'O segredo não é ler rápido, é ler sempre...',
    author: 'Equipe MelhoresPreços',
    date: '2024-01-10',
    imageUrl: 'https://picsum.photos/id/24/800/400',
    tags: ['Dicas', 'Leitura']
  }
];

export const MOCK_QUOTES: Quote[] = [
  { id: 'q1', text: "O essencial é invisível aos olhos.", author: "Antoine de Saint-Exupéry", book: "O Pequeno Príncipe" }
];

export const MOCK_AUTHORS: Author[] = [];
export const MOCK_SEBOS: Sebo[] = [];
