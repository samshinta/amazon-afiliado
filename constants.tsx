import { Book, BlogPost, Quote, Author, Sebo, OfferProduct } from './types';

const generateMockBooks = (): Book[] => {
  const titles = [
    { t: 'Café com Deus Pai Vol. 6 - 2026', a: 'Júnior Rostirola', c: 'Religião', p: 69.90, link: 'https://amzn.to/49ccQDM', img: 'https://i.imgur.com/mh1bIQ4.jpg' },
    { t: 'A psicologia financeira: lições atemporais sobre fortuna, ganância e felicidade', a: 'Morgan Housel', c: 'Finanças', p: 41.90, link: 'https://amzn.to/45uVilk', img: 'https://i.imgur.com/bC7VV6q.jpg' },
    { t: 'Coisa de rico: A vida dos endinheirados brasileiros', a: 'Michel Alcoforado', c: 'Finanças', p: 35.00, link: 'https://amzn.to/3Yc8M1w', img: 'https://i.imgur.com/01tRp7d.jpg' },
    { t: 'A hora da estrela: Edição comemorativa', a: 'Clarice Lispector', c: 'Lit. Brasileira', p: 29.90, link: 'https://amzn.to/4qsowt4', img: 'https://i.imgur.com/BYFx8R7.jpg' },
    { t: 'A empregada (A empregada – Livro 1): Bem-vinda à família', a: 'Freida McFadden', c: 'Suspense', p: 39.90, link: 'https://amzn.to/44MrbFV', img: 'https://i.imgur.com/2PMtHUV.jpg' },
    { t: 'Hábitos Atômicos', a: 'James Clear', c: 'Autoajuda', p: 45.00, link: 'https://amzn.to/4pjcy4a', img: 'https://i.imgur.com/yDAQkM4.jpg' },
    { t: 'O homem mais rico da Babilonia', a: 'George S. Clason', c: 'Finanças', p: 22.90, link: 'https://amzn.to/45J5syS', img: 'https://i.imgur.com/SwVSeru.jpg' },
    { t: 'pai rico pai pobre', a: 'Robert Kiyosaki', c: 'Finanças', p: 49.90, link: 'https://amzn.to/3LoLp1V', img: 'https://imgur.com/SGsNa1o.jpg' },
    { t: 'os segredos da mente milionaria', a: 'T. Harv Eker', c: 'Finanças', p: 32.50, link: 'https://amzn.to/4pw6sh1', img: 'https://i.imgur.com/FATyYfN.jpg' },
    { t: 'mais esperto que o diabo', a: 'Napoleon Hill', c: 'Autoajuda', p: 29.90, link: 'https://amzn.to/3NazBB2', img: 'https://i.imgur.com/4csvkhS.jpg' },
    { t: 'a sutil arte de ligar o foda se', a: 'Mark Manson', c: 'Autoajuda', p: 38.00, link: 'https://amzn.to/450EBy2', img: 'https://i.imgur.com/XXRlgDQ.jpg' },
    { t: 'mulheres que correm com os lobos', a: 'Clarissa Pinkola Estés', c: 'Psicologia', p: 54.90, link: 'https://amzn.to/49o9DkH', img: 'https://i.imgur.com/AxlerOH.jpg' },
    { t: '1984', a: 'George Orwell', c: 'Clássicos', p: 25.00, link: 'https://amzn.to/3N8jhkc', img: 'https://i.imgur.com/YckUbHk.jpg' },
    { t: 'a revolução dos bichos', a: 'George Orwell', c: 'Clássicos', p: 18.90, link: 'https://amzn.to/4srM8Ad', img: 'https://i.imgur.com/BgKF1Eb.jpg' },
    { t: 'o pequeno principe', a: 'Antoine de Saint-Exupéry', c: 'Infantil', p: 15.00, link: 'https://amzn.to/3L97v8C', img: 'https://i.imgur.com/Y7Xv4j6.jpg' },
    { t: 'torto arado', a: 'Itamar Vieira Junior', c: 'Lit. Brasileira', p: 44.90, link: 'https://amzn.to/4jt0oEw', img: 'https://i.imgur.com/GOLtrsG.jpg' },
    { t: 'tudo sobre o amor', a: 'bell hooks', c: 'Sociologia', p: 39.90, link: 'https://amzn.to/45KDMts', img: 'https://i.imgur.com/zwNUsJC.jpg' },
    { t: 'é assim que acaba', a: 'Colleen Hoover', c: 'Romance', p: 36.50, link: 'https://amzn.to/4swZISE', img: 'https://i.imgur.com/EiLl1kB.jpg' },
    { t: 'é assim que começa', a: 'Colleen Hoover', c: 'Romance', p: 38.90, link: 'https://amzn.to/4jtMBxH', img: 'https://i.imgur.com/UJwPIDK.jpg' },
    { t: 'verity', a: 'Colleen Hoover', c: 'Suspense', p: 35.00, link: 'https://amzn.to/49tNJMW', img: 'https://i.imgur.com/Ab0TPxZ.jpg' },
    { t: 'o lado feio do amor', a: 'Colleen Hoover', c: 'Romance', p: 32.00, link: 'https://amzn.to/4snhzeK', img: 'https://i.imgur.com/7PmsKSw.jpg' },
    { t: 'mentirosos', a: 'E. Lockhart', c: 'Suspense', p: 28.00, link: 'https://amzn.to/3Z4jiIo', img: 'https://i.imgur.com/9GtYRbw.jpg' },
    { t: 'daisy jones and the six', a: 'Taylor Jenkins Reid', c: 'Ficção', p: 34.90, link: 'https://amzn.to/3Ngw6J5', img: 'https://i.imgur.com/Y1M8Lsr.jpg' },
    { t: 'os sete maridos de evelyn hugo', a: 'Taylor Jenkins Reid', c: 'Ficção', p: 39.00, link: 'https://amzn.to/4pxERfr', img: 'https://i.imgur.com/DotPTey.jpg' },
    { t: 'heartstopper', a: 'Alice Oseman', c: 'HQ', p: 42.00, link: 'https://amzn.to/49PU8m7', img: 'https://i.imgur.com/aoiF2qX.jpg' },
    { t: 'corte de espinhos e rosas', a: 'Sarah J. Maas', c: 'Fantasia', p: 48.00, link: 'https://amzn.to/4q6efDe', img: 'https://i.imgur.com/Il3M9Ag.jpg' },
    { t: 'o principe cruel', a: 'Holly Black', c: 'Fantasia', p: 35.90, link: 'https://amzn.to/3NmdvLL', img: 'https://i.imgur.com/7MNyQ5l.jpg' },
    { t: 'quarta asa', a: 'Rebecca Yarros', c: 'Fantasia', p: 59.90, link: 'https://amzn.to/4jzuJBs', img: 'https://i.imgur.com/j5DvwoV.jpg' },
    { t: 'biblioteca de almas', a: 'Ransom Riggs', c: 'Fantasia', p: 33.00, link: 'https://amzn.to/3LvK21g', img: 'https://i.imgur.com/Wa6rKNd.jpg' },
  ];

  return titles.map((book, index) => ({
    id: `book-${index}`,
    title: book.t,
    author: book.a,
    description: `Um dos livros mais vendidos e influentes da atualidade na categoria ${book.c}.`,
    price: book.p,
    oldPrice: book.p * 1.3,
    imageUrl: book.img,
    category: book.c,
    rating: 4.8,
    reviewsCount: Math.floor(Math.random() * 20000) + 1000,
    amazonLink: book.link,
    updatedAt: new Date().toISOString()
  }));
};

export const MOCK_BOOKS: Book[] = generateMockBooks();

export const MOCK_OFFERS: OfferProduct[] = [
  {
    id: 'off-1',
    title: 'Pilha recarregável AA 2700Mah Elgin Com 4 unidades Comum',
    category: 'Eletronico',
    description: 'Pilha recarregável AA 2700Mah Elgin Com 4 unidades Comum.',
    price: 38.22,
    oldPrice: 55.11,
    discount: -29,
    imageUrl: 'https://i.imgur.com/sgsN1N1.jpg',
    amazonLink: 'https://amzn.to/49CuC3g'
  },
  {
    id: 'off-2',
    title: 'Kindle Paperwhite Signature Edition 32 GB',
    category: 'Tecnologia',
    description: 'Leitor de livros digitais com tela de 6,8” e iluminação ajustável.',
    price:  0, 
    oldPrice: 0,
    discount: 0,
    imageUrl: 'https://i.imgur.com/YgU1AA3.jpg',
    amazonLink: 'https://amzn.to/4qeMTe6'
  },
  {
    id: 'off-3',
    title: 'Huggies Supreme Care Fralda G 140 Unidades',
    category: 'Bebê',
    description: 'Máxima proteção e conforto para o seu bebê com tecnologia Huggies.',
    price: 174.90,
    oldPrice: 229.90,
    discount: 23,
    imageUrl: 'https://i.imgur.com/d5lPqwL.jpg',
    amazonLink: 'https://amzn.to/4puRaJv'
  },
  {
    id: 'off-4',
    title: 'Impressora Multifuncional HP Smart Tank 581',
    category: 'Informática',
    description: 'Tanque de tinta de alta capacidade para impressões coloridas de baixo custo.',
    price: 799.90,
    oldPrice: 1099.00,
    discount: 27,
    imageUrl: 'https://i.imgur.com/AsgzCNK.jpg',
    amazonLink: 'https://amzn.to/4bpvFpR'
  },
  {
    id: 'off-5',
    title: 'Personal Papel Higiênico Vip Folha Tripla 32 Rolos',
    category: 'Casa',
    description: 'Maciez e resistência superior com folha tripla de alta qualidade.',
    price: 47.92,
    oldPrice: 65.20,
    discount: 26,
    imageUrl: 'https://i.imgur.com/gUfqKqH.jpg',
    amazonLink: 'https://amzn.to/450w5ze'
  },
  {
    id: 'off-6',
    title: 'Lápis De Cor Faber-Castell Ecolápis 24 Cores',
    category: 'Papelaria',
    description: 'Cores vibrantes e mina macia para desenhos incríveis.',
    price: 44.12,
    oldPrice: 75.17,
    discount: 41,
    imageUrl: 'https://i.imgur.com/lx5GP87.jpg',
    amazonLink: 'https://amzn.to/3LGJWnE'
  },
  {
    id: 'off-7',
    title: 'NIVEA Sérum Facial Cellular Luminous 630 30ml',
    category: 'Beleza',
    description: 'Deixa a pele uniforme, Reduz marcas escurecidas',
    price: 61.79,
    oldPrice: 129.90,
    discount: 52,
    imageUrl: 'https://i.imgur.com/6NOZVsM.jpg',
    amazonLink: 'https://amzn.to/3YzyBIY'
  }
];

export const MOCK_BLOG: BlogPost[] = [
  {
    id: '1',
    slug: 'por-que-ler-ficcao-cientifica-aumenta-a-criatividade',
    title: 'Por que ler ficção científica aumenta a criatividade?',
    excerpt: 'Descubra como mundos imaginários podem expandir seus horizontes cognitivos.',
    content: `
      A ficção científica é frequentemente vista como entretenimento sobre naves espaciais e tecnologia futurista. No entanto, sua função vai muito além da diversão: ela atua como um laboratório mental que expande a nossa capacidade de pensar fora da caixa.

      ### Flexibilidade Cognitiva
      Ler sobre mundos que operam sob regras físicas ou sociais radicalmente diferentes das nossas exige um esforço cerebral único. O cérebro precisa constantemente atualizar seus modelos mentais para acompanhar a narrativa. Esse exercício fortalece a **flexibilidade cognitiva**, a habilidade de alternar entre diferentes conceitos ou pensar sobre múltiplos conceitos simultaneamente.

      ### Simulação Social e Teoria da Mente
      Diferente de outros gêneros, a ficção científica nos coloca em contato com o "verdadeiramente outro" — sejam alienígenas, inteligências artificiais ou sociedades distópicas. Isso treina a nossa empatia de uma forma específica.

      > "A função da ficção é a abstração e simulação da experiência social." 
      > — **Raymond Mar & Keith Oatley (2008)**, York University.

      ### O Poder do "E se?"
      O núcleo da ficção científica é o questionamento hipotético. Ao confrontar essas perguntas, o leitor desenvolve um pensamento crítico mais aguçado e uma visão menos rígida da realidade.

      ### Conclusão
      Se você busca expandir seus horizontes criativos, mergulhar em uma obra de Isaac Asimov ou Frank Herbert pode ser tão eficaz quanto um curso de brainstorming.
    `,
    author: 'Ana Silva',
    date: '2024-05-20',
    imageUrl: 'https://picsum.photos/id/40/800/400',
    tags: ['Sci-Fi', 'Criatividade', 'Leitura']
  }
];

export const MOCK_QUOTES: Quote[] = [
  { id: 'q1', text: "Não é preciso ser brilhante para ser próspero, basta ter um plano e segui-lo.", author: "Robert Kiyosaki", book: "Pai Rico, Pai Pobre" },
  { id: 'q2', text: "Você não atinge o nível de seus objetivos. Você cai para o nível de seus sistemas.", author: "James Clear", book: "Hábitos Atômicos" },
  { id: 'q3', text: "Entre o passado e o futuro, existe um lugar chamado agora, e é lá que a vida acontece.", author: "Matt Haig", book: "A Biblioteca da Meia-Noite" },
  { id: 'q4', text: "Liberdade é a liberdade de dizer que dois mais dois são quatro. Se isso for concedido, tudo mais virá em seguida.", author: "George Orwell", book: "1984" },
  { id: 'q5', text: "O essencial é invisível aos olhos.", author: "Antoine de Saint-Exupéry", book: "O Pequeno Príncipe" },
  { id: 'q6', text: "É preciso muito esforço para que as coisas pareçam fáceis.", author: "Taylor Jenkins Reid", book: "Daisy Jones and The Six" },
  { id: 'q7', text: "Às vezes, a pessoa que te ama é a que mais te machuca.", author: "Colleen Hoover", book: "É Assim que Acaba" },
  { id: 'q8', text: "Nem todos os que vagam estão perdidos.", author: "J.R.R. Tolkien", book: "O Senhor dos Anéis" },
  { id: 'q9', text: "São as nossas escolhas que revelam o que realmente somos, muito mais do que as nossas capacidades.", author: "J.K. Rowling", book: "Harry Potter e a Pedra Filosofal" },
  { id: 'q10', text: "O medo é o assassino da mente.", author: "Frank Herbert", book: "Duna" },
  { id: 'q11', text: "A vida não é o que a gente viveu, e sim o que a gente recorda, e como recorda para contá-la.", author: "Gabriel García Márquez", book: "Cem Anos de Solidão" },
  { id: 'q12', text: "Viver é muito perigoso; e não é não. Nem sabe a gente. Só quando se morre é que se sabe que se viveu.", author: "Guimarães Rosa", book: "Grande Sertão: Veredas" },
  { id: 'q13', text: "Amo a liberdade, por isso deixo livre tudo que amo. Se voltar, é porque conquistei. Se não voltar, é porque nunca possuí.", author: "Machado de Assis", book: "Dom Casmurro" },
  { id: 'q14', text: "O amor não é algo que você sente, é algo que você faz.", author: "bell hooks", book: "Tudo Sobre o Amor" },
  { id: 'q15', text: "Nossa história é escrita pelos nossos pés, pelo caminho que escolhemos trilhar.", author: "Itamar Vieira Junior", book: "Torto Arado" }
];

export const MOCK_AUTHORS: Author[] = [
  { id: 'a1', name: "Júnior Rostirola", bio: "Pastor e autor do best-seller 'Café com Deus Pai', Rostirola foca em devocionais diários que trazem paz e reflexão.", imageUrl: "https://i.imgur.com/mh1bIQ4.jpg", category: "Religião", topBooks: ["Café com Deus Pai Vol. 6 - 2026"], hobby: "Teologia", country: "Brasil", maritalStatus: "Casado", children: "2 filhos" },
  { id: 'a2', name: "Morgan Housel", bio: "Morgan Housel é sócio do Collaborative Fund e ex-colunista do Wall Street Journal. É um dos maiores especialistas em finanças comportamentais.", imageUrl: "https://i.imgur.com/bC7VV6q.jpg", category: "Finanças", topBooks: ["A psicologia financeira"], hobby: "Escrita Econômica", country: "Estados Unidos", maritalStatus: "Casado", children: "2 filhos" },
  { id: 'a3', name: "Michel Alcoforado", bio: "Antropólogo e consultor, Michel Alcoforado estuda o comportamento de consumo e a vida das elites brasileiras.", imageUrl: "https://i.imgur.com/01tRp7d.jpg", category: "Sociologia / Finanças", topBooks: ["Coisa de rico"], hobby: "Antropologia", country: "Brasil", maritalStatus: "Solteiro", children: "Sem filhos" },
  { id: 'a4', name: "Clarice Lispector", bio: "Uma das figuras mais importantes da literatura brasileira do século XX, conhecida por seu estilo introspectivo e inovador.", imageUrl: "https://i.imgur.com/BYFx8R7.jpg", category: "Literatura Brasileira", topBooks: ["A hora da estrela"], hobby: "Pintura", country: "Brasil", maritalStatus: "Divorciada", children: "2 filhos" },
  { id: 'a5', name: "Freida McFadden", bio: "Médica especializada em reabilitação cerebral e autora de suspenses psicológicos que dominam as listas da Amazon.", imageUrl: "https://i.imgur.com/2PMtHUV.jpg", category: "Suspense", topBooks: ["A empregada"], hobby: "Medicina", country: "Estados Unidos", maritalStatus: "Casada", children: "Sim" },
  { id: 'a6', name: "James Clear", bio: "Especialista em formação de hábitos e autor da obra-prima 'Hábitos Atômicos', que ajudou milhões a melhorar suas rotinas.", imageUrl: "https://i.imgur.com/yDAQkM4.jpg", category: "Autoajuda", topBooks: ["Hábitos Atômicos"], hobby: "Fotografia", country: "Estados Unidos", maritalStatus: "Casado", children: "Sem filhos" },
  { id: 'a7', name: "George S. Clason", bio: "Famoso por suas parábolas ambientadas na antiga Babilônia, ensinando princípios atemporais de gestão financeira.", imageUrl: "https://i.imgur.com/SwVSeru.jpg", category: "Finanças", topBooks: ["O homem mais rico da Babilonia"], hobby: "História", country: "Estados Unidos", maritalStatus: "Casado", children: "Sim" },
  { id: 'a8', name: "Robert Kiyosaki", bio: "Autor de 'Pai Rico, Pai Pobre', um dos livros de finanças pessoais mais vendidos de todos os tempos.", imageUrl: "https://imgur.com/SGsNa1o.jpg", category: "Finanças", topBooks: ["pai rico pai pobre"], hobby: "Investimentos", country: "Estados Unidos", maritalStatus: "Casado", children: "Sem filhos" },
  { id: 'a9', name: "T. Harv Eker", bio: "Especialista em mindset de riqueza, autor do clássico 'Os Segredos da Mente Milionária'.", imageUrl: "https://i.imgur.com/FATyYfN.jpg", category: "Finanças", topBooks: ["os segredos da mente milionaria"], hobby: "Palestras", country: "Canadá", maritalStatus: "Casado", children: "Sim" },
  { id: 'a10', name: "Napoleon Hill", bio: "Pioneiro no gênero de desenvolvimento pessoal, estudou as mentes mais ricas de sua época.", imageUrl: "https://i.imgur.com/4csvkhS.jpg", category: "Autoajuda", topBooks: ["mais esperto que o diabo"], hobby: "Jornalismo", country: "Estados Unidos", maritalStatus: "Casado", children: "Sim" },
  { id: 'a11', name: "Mark Manson", bio: "Autor e blogueiro que traz uma abordagem pragmática e realista para a felicidade e o sucesso.", imageUrl: "https://i.imgur.com/XXRlgDQ.jpg", category: "Autoajuda", topBooks: ["a sutil arte de ligar o foda se"], hobby: "Viagens", country: "Estados Unidos", maritalStatus: "Casado", children: "Sem filhos" },
  { id: 'a12', name: "Clarissa Pinkola Estés", bio: "Analista junguiana e poetisa, autora do transformador 'Mulheres que Correm com os Lobos'.", imageUrl: "https://i.imgur.com/AxlerOH.jpg", category: "Psicologia", topBooks: ["mulheres que correm com os lobos"], hobby: "Canto", country: "Estados Unidos", maritalStatus: "Casada", children: "3 filhos" },
  { id: 'a13', name: "George Orwell", bio: "Escritor e jornalista britânico, cujas obras '1984' e 'A Revolução dos Bichos' são marcos da crítica social.", imageUrl: "https://i.imgur.com/YckUbHk.jpg", category: "Clássicos", topBooks: ["1984", "a revolução dos bichos"], hobby: "Jardinagem", country: "Reino Unido", maritalStatus: "Viúvo", children: "1 filho" },
  { id: 'a14', name: "Antoine de Saint-Exupéry", bio: "Aviador francês e escritor, imortalizado pela doçura e sabedoria de 'O Pequeno Príncipe'.", imageUrl: "https://i.imgur.com/Y7Xv4j6.jpg", category: "Infantil", topBooks: ["o pequeno principe"], hobby: "Aviação", country: "França", maritalStatus: "Casado", children: "Sem filhos" },
  { id: 'a15', name: "Itamar Vieira Junior", bio: "Geógrafo e escritor brasileiro, autor do aclamado 'Torto Arado', um marco da literatura contemporânea.", imageUrl: "https://i.imgur.com/GOLtrsG.jpg", category: "Literatura Brasileira", topBooks: ["torto arado"], hobby: "Geografia", country: "Brasil", maritalStatus: "Privado", children: "Sim" },
  { id: 'a16', name: "bell hooks", bio: "Teórica feminista e ativista, suas obras sobre amor e justiça social são fundamentais para o pensamento moderno.", imageUrl: "https://i.imgur.com/zwNUsJC.jpg", category: "Sociologia", topBooks: ["tudo sobre o amor"], hobby: "Educação", country: "Estados Unidos", maritalStatus: "Solteira", children: "Sem filhos" },
  { id: 'a17', name: "Colleen Hoover", bio: "Fenômeno global da literatura contemporânea, conhecida por seus romances emocionantes e personagens reais.", imageUrl: "https://i.imgur.com/EiLl1kB.jpg", category: "Romance", topBooks: ["é assim que acaba", "é assim que começa", "verity", "o lado feio do amor"], hobby: "TikTok", country: "Estados Unidos", maritalStatus: "Casada", children: "3 filhos" },
  { id: 'a18', name: "E. Lockhart", bio: "Pseudônimo de Emily Jenkins, autora de suspenses intensos e premiados como 'Mentirosos'.", imageUrl: "https://i.imgur.com/9GtYRbw.jpg", category: "Suspense", topBooks: ["mentirosos"], hobby: "Escrita", country: "Estados Unidos", maritalStatus: "Casada", children: "Sim" },
  { id: 'a19', name: "Taylor Jenkins Reid", bio: "Autora aclamada por criar biografias fictícias de ícones que parecem existir na vida real.", imageUrl: "https://i.imgur.com/Y1M8Lsr.jpg", category: "Ficção", topBooks: ["daisy jones and the six", "os sete maridos de evelyn hugo"], hobby: "Séries", country: "Estados Unidos", maritalStatus: "Casada", children: "1 filha" },
  { id: 'a20', name: "Alice Oseman", bio: "Autora e ilustradora britânica, criadora da amada série de quadrinhos 'Heartstopper'.", imageUrl: "https://i.imgur.com/aoiF2qX.jpg", category: "HQ / Romance", topBooks: ["heartstopper"], hobby: "Desenho", country: "Reino Unido", maritalStatus: "Solteira", children: "Sem filhos" },
  { id: 'a21', name: "Sarah J. Maas", bio: "Rainha da fantasia moderna, Maas criou universos épicos em 'Corte de Espinhos e Rosas'.", imageUrl: "https://i.imgur.com/Il3M9Ag.jpg", category: "Fantasia", topBooks: ["corte de espinhos e rosas"], hobby: "Música", country: "Estados Unidos", maritalStatus: "Casada", children: "2 filhos" },
  { id: 'a22', name: "Holly Black", bio: "Mestre da fantasia feérica, autora da trilogia 'O Povo do Air', que inclui 'O Príncipe Cruel'.", imageUrl: "https://i.imgur.com/7MNyQ5l.jpg", category: "Fantasia", topBooks: ["o principe cruel"], hobby: "Coleções", country: "Estados Unidos", maritalStatus: "Casada", children: "1 filho" },
  { id: 'a23', name: "Rebecca Yarros", bio: "Autora premiada que explodiu no gênero Romantasia com seu épico de dragões 'Quarta Asa'.", imageUrl: "https://i.imgur.com/j5DvwoV.jpg", category: "Fantasia", topBooks: ["quarta asa"], hobby: "Harpa", country: "Estados Unidos", maritalStatus: "Casada", children: "6 filhos" },
  { id: 'a24', name: "Ransom Riggs", bio: "Conhecido por suas histórias fantásticas ilustradas por fotos vintage autênticas.", imageUrl: "https://i.imgur.com/Wa6rKNd.jpg", category: "Fantasia", topBooks: ["biblioteca de almas"], hobby: "Fotografia", country: "Estados Unidos", maritalStatus: "Casado", children: "1 filha" },
  { id: 'a25', name: "Matt Haig", bio: "Escritor britânico cujas obras exploram a saúde mental e as infinitas possibilidades da vida.", imageUrl: "https://i.imgur.com/BTmFOnM.jpg", category: "Ficção", topBooks: ["A Biblioteca da Meia-Noite"], hobby: "Corrida", country: "Reino Unido", maritalStatus: "Casado", children: "2 filhos" },
];

export const MOCK_SEBOS: Sebo[] = [
  // SÃO PAULO
  { id: 'sp1', name: 'Sebo do Messias', city: 'São Paulo', state: 'SP', address: 'Praça João Mendes, 140 - Centro', phone: '(11) 3104-7111', instagram: '@sebodomessias' },
  { id: 'sp2', name: 'Desapontamento', city: 'São Paulo', state: 'SP', address: 'Rua Bento Freitas, 447 - República', phone: '(11) 3222-1234', instagram: '@desapontamento' },
  { id: 'sp3', name: 'Sebo do Mar', city: 'São Paulo', state: 'SP', address: 'Rua Simão Álvares, 102 - Pinheiros', phone: '(11) 3031-6655', instagram: '@sebodomar' },
  { id: 'sp4', name: 'Sebo Clepsidra', city: 'São Paulo', state: 'SP', address: 'Rua Doutor Frederico Steidel, 81 - Santa Cecília', phone: '(11) 3223-2233', instagram: '@seboclepsidra' },
  { id: 'sp5', name: 'Banca do Livro', city: 'São Paulo', state: 'SP', address: 'Av. Paulista, 1000 - Bela Vista', phone: '(11) 2222-3333', instagram: '@bancadolivro' },
  { id: 'sp6', name: 'Livraria Suburbano Convicto', city: 'São Paulo', state: 'SP', address: 'Rua Treze de Maio, 70 - Bixiga', phone: '(11) 3257-1111', instagram: '@suburbanoconvicto' },
  { id: 'sp7', name: 'Sebo Liberdade', city: 'São Paulo', state: 'SP', address: 'Rua da Glória, 45 - Liberdade', phone: '(11) 3105-9999', instagram: '@seboliberdade' },
  { id: 'sp8', name: 'Casarão do Livro', city: 'São Paulo', state: 'SP', address: 'Rua da Consolação, 2000', phone: '(11) 3255-8888', instagram: '@casaraodolivro' },
  { id: 'sp9', name: 'Sebo Aliança', city: 'São Paulo', state: 'SP', address: 'Rua São Bento, 300 - Centro', phone: '(11) 3101-7777', instagram: '@seboalianca' },
  { id: 'sp10', name: 'Canto das Letras', city: 'São Paulo', state: 'SP', address: 'Rua Teodoro Sampaio, 1500 - Pinheiros', phone: '(11) 3081-6666', instagram: '@cantodasletras' },

  // RIO DE JANEIRO
  { id: 'rj1', name: 'Sebo Berinjela', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua do Rosário, 121 - Centro', phone: '(21) 2221-3333', instagram: '@seboberinjela' },
  { id: 'rj2', name: 'Livraria Leonardo da Vinci', city: 'Rio de Janeiro', state: 'RJ', address: 'Av. Rio Branco, 185 - Centro', phone: '(21) 2533-2233', instagram: '@leonardodavincilivraria' },
  { id: 'rj3', name: 'Sebo Baratos da Ribeiro', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Paulino Fernandes, 15 - Botafogo', phone: '(21) 2513-3333', instagram: '@baratosdaribeiro' },
  { id: 'rj4', name: 'Folha Seca', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua do Ouvidor, 37 - Centro', phone: '(21) 2507-7155', instagram: '@livrariafolhaseca' },
  { id: 'rj5', name: 'Sebo Praia dos Livros', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Dias Ferreira, 417 - Leblon', phone: '(21) 2259-4444', instagram: '@praiadoslivros' },
  { id: 'rj6', name: 'Sebo Orvalho', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Voluntários da Pátria, 200 - Botafogo', phone: '(21) 2527-5555', instagram: '@seboorvalho' },
  { id: 'rj7', name: 'Relíquia Livros', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Sete de Setembro, 150 - Centro', phone: '(21) 2232-6666', instagram: '@reliquialivros' },
  { id: 'rj8', name: 'Sebo Carioca', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua da Carioca, 40 - Centro', phone: '(21) 2222-7777', instagram: '@sebocarioca' },
  { id: 'rj9', name: 'O Garimpo', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Jardim Botânico, 600', phone: '(21) 2511-8888', instagram: '@ogarimpolivros' },
  { id: 'rj10', name: 'Estação Literária', city: 'Rio de Janeiro', state: 'RJ', address: 'Rua Conde de Bonfim, 300 - Tijuca', phone: '(21) 2568-9999', instagram: '@estacaoliteraria' },

  // MINAS GERAIS
  { id: 'mg1', name: 'Sebo Scriptum', city: 'Belo Horizonte', state: 'MG', address: 'Rua Fernandes Tourinho, 99 - Savassi', phone: '(31) 3223-1234', instagram: '@scriptumlivraria' },
  { id: 'mg2', name: 'Livraria Quixote', city: 'Belo Horizonte', state: 'MG', address: 'Rua Fernandes Tourinho, 274 - Savassi', phone: '(31) 3227-3077', instagram: '@quixote_livraria' },
  { id: 'mg3', name: 'Sebo Cultural', city: 'Belo Horizonte', state: 'MG', address: 'Rua dos Guajajaras, 189 - Centro', phone: '(31) 3212-3333', instagram: '@seboculturalbh' },
  { id: 'mg4', name: 'Banca do Saber', city: 'Belo Horizonte', state: 'MG', address: 'Praça da Liberdade, S/N', phone: '(31) 3232-4444', instagram: '@bancadosaber' },
  { id: 'mg5', name: 'Sebo do Savassi', city: 'Belo Horizonte', state: 'MG', address: 'Rua Sergipe, 1200 - Savassi', phone: '(31) 3222-5555', instagram: '@sebosavassi' },
  { id: 'mg6', name: 'Livraria do Psicólogo e Educador', city: 'Belo Horizonte', state: 'MG', address: 'Rua dos Goitacazes, 1029 - Centro', phone: '(31) 3213-6666', instagram: '@livrariapsicologo' },
  { id: 'mg7', name: 'Sebo das Gerais', city: 'Belo Horizonte', state: 'MG', address: 'Av. Getúlio Vargas, 1400 - Savassi', phone: '(31) 3221-7777', instagram: '@sebodasgerais' },
  { id: 'mg8', name: 'Garimpo das Letras', city: 'Belo Horizonte', state: 'MG', address: 'Rua da Bahia, 1100 - Centro', phone: '(31) 3224-8888', instagram: '@garimpodasletras' },
  { id: 'mg9', name: 'Sebo Ouro Preto', city: 'Ouro Preto', state: 'MG', address: 'Rua Direita, 50 - Centro Histórico', phone: '(31) 3551-9999', instagram: '@seboouropreto' },
  { id: 'mg10', name: 'Alfarrabista Tiradentes', city: 'Tiradentes', state: 'MG', address: 'Rua Direita, 100 - Centro', phone: '(32) 3355-1111', instagram: '@alfarrabistatiradentes' }
];