
import { Book, BlogPost, Quote, Author } from './types';

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'A Biblioteca da Meia-Noite',
    author: 'Matt Haig',
    description: 'Entre a vida e a morte, existe uma biblioteca com infinitas versões da sua vida.',
    price: 34.90,
    oldPrice: 49.90,
    imageUrl: 'https://picsum.photos/id/10/400/600',
    category: 'Ficção',
    rating: 4.8,
    reviewsCount: 15420,
    amazonLink: '#',
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Hábitos Atômicos',
    author: 'James Clear',
    description: 'Um guia definitivo para mudar seus hábitos de forma sustentável.',
    price: 45.00,
    imageUrl: 'https://picsum.photos/id/20/400/600',
    category: 'Autoajuda',
    rating: 4.9,
    reviewsCount: 22100,
    amazonLink: '#',
    updatedAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'O Homem Mais Rico da Babilônia',
    author: 'George S. Clason',
    description: 'Segredos antigos para o sucesso financeiro moderno.',
    price: 22.90,
    oldPrice: 35.00,
    imageUrl: 'https://picsum.photos/id/30/400/600',
    category: 'Finanças',
    rating: 4.7,
    reviewsCount: 8900,
    amazonLink: '#',
    updatedAt: new Date().toISOString()
  }
];

export const MOCK_BLOG: BlogPost[] = [
  {
    id: '1',
    title: 'Por que ler ficção científica aumenta a criatividade?',
    excerpt: 'Descubra como mundos imaginários podem expandir seus horizontes cognitivos.',
    content: '...',
    author: 'Ana Silva',
    date: '2024-05-20',
    imageUrl: 'https://picsum.photos/id/40/800/400',
    tags: ['Sci-Fi', 'Criatividade', 'Leitura']
  }
];

export const MOCK_QUOTES: Quote[] = [
  {
    id: '1',
    text: "Um leitor vive mil vidas antes de morrer. Aquele que nunca lê vive apenas uma.",
    author: "George R.R. Martin",
    book: "A Dança dos Dragões"
  }
];

export const MOCK_AUTHORS: Author[] = [
  {
    id: '1',
    name: "Machado de Assis",
    bio: "O maior nome da literatura brasileira, fundador da ABL.",
    imageUrl: "https://picsum.photos/id/50/400/400",
    famousBooks: ["Dom Casmurro", "Memórias Póstumas de Brás Cubas"]
  }
];
