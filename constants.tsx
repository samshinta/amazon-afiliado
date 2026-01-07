
import { Book, BlogPost, Quote, Author, Sebo } from './types';

const generateMockBooks = (): Book[] => {
  const titles = [
    { 
      t: 'A Biblioteca da Meia-Noite', 
      a: 'Matt Haig', 
      c: 'Ficção', 
      p: 34.90, 
      link: 'https://amzn.to/3Yo4Vi1',
      img: 'https://i.imgur.com/BTmFOnM.jpg'
    },
    { t: 'Hábitos Atômicos', a: 'James Clear', c: 'Autoajuda', link: 'https://amzn.to/4pjcy4a',  img: 'https://i.imgur.com/yDAQkM4.jpg', p: 45.00 },
    { 
      t: 'O Homem Mais Rico da Babilônia', 
      a: 'George S. Clason', 
      c: 'Finanças', 
      p: 22.90,
      link: 'https://amzn.to/45J5syS',
      img: 'https://i.imgur.com/SwVSeru.jpg'
    },
    { 
      t: 'Pai Rico, Pai Pobre', 
      a: 'Robert Kiyosaki', 
      c: 'Finanças', 
      p: 49.90,
      link: 'https://amzn.to/3LoLp1V',
      img: 'https://i.imgur.com/T3FNoKa.jpg'
    },
    { t: 'Os Segredos da Mente Milionária', a: 'T. Harv Eker', c: 'Finanças', p: 32.50 },
    { t: 'Mais Esperto que o Diabo', a: 'Napoleon Hill', c: 'Autoajuda', p: 29.90 },
    { t: 'A Sutil Arte de Ligar o F*da-se', a: 'Mark Manson', c: 'Autoajuda', p: 38.00 },
    { t: 'Mulheres que Correm com os Lobos', a: 'Clarissa Pinkola Estés', c: 'Psicologia', p: 54.90 },
    { t: '1984', a: 'George Orwell', c: 'Clássicos', p: 25.00 },
    { t: 'A Revolução dos Bichos', a: 'George Orwell', c: 'Clássicos', p: 18.90 },
    { t: 'O Pequeno Príncipe', a: 'Antoine de Saint-Exupéry', c: 'Infantil', p: 15.00 },
    { t: 'Torto Arado', a: 'Itamar Vieira Junior', c: 'Lit. Brasileira', p: 44.90 },
    { t: 'Tudo Sobre o Amor', a: 'bell hooks', c: 'Sociologia', p: 39.90 },
    { t: 'É Assim que Acaba', a: 'Colleen Hoover', c: 'Romance', p: 36.50 },
    { t: 'É Assim que Começa', a: 'Colleen Hoover', c: 'Romance', p: 38.90 },
    { t: 'Verity', a: 'Colleen Hoover', c: 'Suspense', p: 35.00 },
    { t: 'O Lado Feio do Amor', a: 'Colleen Hoover', c: 'Romance', p: 32.00 },
    { t: 'Mentirosos', a: 'E. Lockhart', c: 'Suspense', p: 28.00 },
    { t: 'Daisy Jones and The Six', a: 'Taylor Jenkins Reid', c: 'Ficção', p: 34.90 },
    { t: 'Os Sete Maridos de Evelyn Hugo', a: 'Taylor Jenkins Reid', c: 'Ficção', p: 39.00 },
    { t: 'Heartstopper: Dois Garotos, Um Encontro', a: 'Alice Oseman', c: 'HQ', p: 42.00 },
    { t: 'Corte de Espinhos e Rosas', a: 'Sarah J. Maas', c: 'Fantasia', p: 48.00 },
    { t: 'O Príncipe Cruel', a: 'Holly Black', c: 'Fantasia', p: 35.90 },
    { t: 'Quarta Asa', a: 'Rebecca Yarros', c: 'Fantasia', p: 59.90 },
    { t: 'Biblioteca de Almas', a: 'Ransom Riggs', c: 'Fantasia', p: 33.00 },
    { t: 'Café com Deus Pai', a: 'Junior Rostirola', c: 'Religião', p: 65.00 },
    { t: 'O Poder da Autorresponsabilidade', a: 'Paulo Vieira', c: 'Autoajuda', p: 19.90 },
    { t: 'Ansiedade: Como enfrentar o mal do século', a: 'Augusto Cury', c: 'Psicologia', p: 24.90 },
    { t: 'Mindset', a: 'Carol Dweck', c: 'Psicologia', p: 41.00 },
    { t: 'Rápido e Devagar', a: 'Daniel Kahneman', c: 'Psicologia', p: 52.00 },
    { t: 'Sapiens: Uma Breve História da Humanidade', a: 'Yuval Noah Harari', c: 'História', p: 58.00 },
    { t: 'Homo Deus', a: 'Yuval Noah Harari', c: 'História', p: 54.00 },
    { t: '21 Lições para o Século 21', a: 'Yuval Noah Harari', c: 'Sociologia', p: 49.00 },
    { t: 'Meditações', a: 'Marco Aurélio', c: 'Filosofia', p: 22.00 },
    { t: 'Assim Falou Zaratustra', a: 'Friedrich Nietzsche', c: 'Filosofia', p: 30.00 },
    { t: 'Admirável Mundo Novo', a: 'Aldous Huxley', c: 'Clássicos', p: 33.00 },
    { t: 'Fahrenheit 451', a: 'Ray Bradbury', c: 'Clássicos', p: 31.00 },
    { t: 'O Senhor dos Anéis: A Sociedade do Anel', a: 'J.R.R. Tolkien', c: 'Fantasia', p: 55.00 },
    { t: 'O Hobbit', a: 'J.R.R. Tolkien', c: 'Fantasia', p: 38.00 },
    { t: 'Harry Potter e a Pedra Filosofal', a: 'J.K. Rowling', c: 'Fantasia', p: 39.90 },
    { t: 'O Silmarillion', a: 'J.R.R. Tolkien', c: 'Fantasia', p: 45.00 },
    { t: 'Duna', a: 'Frank Herbert', c: 'Sci-Fi', p: 52.00 },
    { t: 'Neuromancer', a: 'William Gibson', c: 'Sci-Fi', p: 39.00 },
    { t: 'Fundação', a: 'Isaac Asimov', c: 'Sci-Fi', p: 44.00 },
    { t: 'Eu, Robô', a: 'Isaac Asimov', c: 'Sci-Fi', p: 38.00 },
    { t: 'A Menina que Roubava Livros', a: 'Markus Zusak', c: 'Ficção', p: 35.00 },
    { t: 'O Caçador de Pipas', a: 'Khaled Hosseini', c: 'Ficção', p: 36.00 },
    { t: 'Cem Anos de Solidão', a: 'Gabriel García Márquez', c: 'Clássicos', p: 48.00 },
    { t: 'Grande Sertão: Veredas', a: 'Guimarães Rosa', c: 'Lit. Brasileira', p: 65.00 },
    { t: 'Dom Casmurro', a: 'Machado de Assis', c: 'Lit. Brasileira', p: 19.00 },
  ];

  return titles.map((book, index) => ({
    id: String(index + 1),
    title: book.t,
    author: book.a,
    description: `Um dos livros mais vendidos e influentes da atualidade na categoria ${book.c}.`,
    price: book.p,
    oldPrice: book.p * 1.3,
    imageUrl: (book as any).img || `https://picsum.photos/seed/${index + 100}/400/600`,
    category: book.c,
    rating: 4.5 + Math.random() * 0.5,
    reviewsCount: Math.floor(Math.random() * 20000) + 1000,
    amazonLink: (book as any).link || 'https://www.amazon.com.br/gp/bestsellers/books/',
    updatedAt: new Date().toISOString()
  }));
};

export const MOCK_BOOKS: Book[] = generateMockBooks();

export const MOCK_BLOG: BlogPost[] = [
  {
    id: '1',
    title: 'Por que ler ficção científica aumenta a criatividade?',
    excerpt: 'Descubra como mundos imaginários podem expandir seus horizontes cognitivos.',
    content: `
      A ficção científica é frequentemente vista como entretenimento sobre naves espaciais e tecnologia futurista. No entanto, sua função vai muito além da diversão: ela atua como um laboratório mental que expande a nossa capacidade de pensar fora da caixa.

      ### Flexibilidade Cognitiva
      Ler sobre mundos que operam sob regras físicas ou sociais radicalmente diferentes das nossas exige um esforço cerebral único. O cérebro precisa constantemente atualizar seus modelos mentais para acompanhar a narrativa. Esse exercício fortaleolce a **flexibilidade cognitiva**, a habilidade de alternar entre diferentes conceitos ou pensar sobre múltiplos conceitos simultaneamente.

      ### Simulação Social e Teoria da Mente
      Diferente de outros gêneros, a ficção científica nos coloca em contato com o "verdadeiramente outro" — sejam alienígenas, inteligências artificiais ou sociedades distópicas. Isso treina a nossa empatia de uma forma específica.

      > "A função da ficção é a abstração e simulação da experiência social." 
      > — **Raymond Mar & Keith Oatley (2008)**, York University.

      O estudo de Mar e Oatley sugere que a leitura de ficção treina a **Teoria da Mente**, permitindo-nos compreender melhor as intenções e emoções alheias ao simular interações sociais complexas. Na ficção científica, essa simulação é levada ao limite, forçando o leitor a encontrar humanidade em contextos inumanos.

      ### O Poder do "E se?"
      O núcleo da ficção científica é o questionamento hipotético. "E se pudéssemos viajar no tempo?", "E se a morte fosse opcional?". Ao confrontar essas perguntas, o leitor desenvolve um pensamento crítico mais aguçado e uma visão menos rígida da realidade. Para profissionais de inovação e tecnologia, essa capacidade de visualizar cenários futuros é uma ferramenta de trabalho essencial.

      ### Conclusão
      Se você busca expandir seus horizontes criativos, mergulhar em uma obra de Isaac Asimov ou Frank Herbert pode ser tão eficaz quanto um curso de brainstorming. Você não está apenas lendo uma história; você está treinando sua mente para o desconhecido.
    `,
    author: 'Ana Silva',
    date: '2024-05-20',
    imageUrl: 'https://picsum.photos/id/40/800/400',
    tags: ['Sci-Fi', 'Criatividade', 'Leitura']
  }
];

export const MOCK_QUOTES: Quote[] = [
  {
    id: 'q1',
    text: "Não é preciso ser brilhante para ser próspero, basta ter um plano e segui-lo.",
    author: "Robert Kiyosaki",
    book: "Pai Rico, Pai Pobre"
  },
  {
    id: 'q2',
    text: "Você não atinge o nível de seus objetivos. Você cai para o nível de seus sistemas.",
    author: "James Clear",
    book: "Hábitos Atômicos"
  },
  {
    id: 'q3',
    text: "Entre o passado e o futuro, existe um lugar chamado agora, e é lá que a vida acontece.",
    author: "Matt Haig",
    book: "A Biblioteca da Meia-Noite"
  },
  {
    id: 'q4',
    text: "Liberdade é a liberdade de dizer que dois mais dois são quatro. Se isso for concedido, tudo mais virá em seguida.",
    author: "George Orwell",
    book: "1984"
  },
  {
    id: 'q5',
    text: "O essencial é invisível aos olhos.",
    author: "Antoine de Saint-Exupéry",
    book: "O Pequeno Príncipe"
  },
  {
    id: 'q6',
    text: "É preciso muito esforço para que as coisas pareçam fáceis.",
    author: "Taylor Jenkins Reid",
    book: "Daisy Jones and The Six"
  },
  {
    id: 'q7',
    text: "Às vezes, a pessoa que te ama é a que mais te machuca.",
    author: "Colleen Hoover",
    book: "É Assim que Acaba"
  },
  {
    id: 'q8',
    text: "Nem todos os que vagam estão perdidos.",
    author: "J.R.R. Tolkien",
    book: "O Senhor dos Anéis"
  },
  {
    id: 'q9',
    text: "São as nossas escolhas que revelam o que realmente somos, muito mais do que as nossas capacidades.",
    author: "J.K. Rowling",
    book: "Harry Potter e a Pedra Filosofal"
  },
  {
    id: 'q10',
    text: "O medo é o assassino da mente.",
    author: "Frank Herbert",
    book: "Duna"
  },
  {
    id: 'q11',
    text: "A vida não é o que a gente viveu, e sim o que a gente recorda, e como recorda para contá-la.",
    author: "Gabriel García Márquez",
    book: "Cem Anos de Solidão"
  },
  {
    id: 'q12',
    text: "Viver é muito perigoso; e não é não. Nem sabe a gente. Só quando se morre é que se sabe que se viveu.",
    author: "Guimarães Rosa",
    book: "Grande Sertão: Veredas"
  },
  {
    id: 'q13',
    text: "Amo a liberdade, por isso deixo livre tudo que amo. Se voltar, é porque conquistei. Se não voltar, é porque nunca possuí.",
    author: "Machado de Assis",
    book: "Dom Casmurro"
  },
  {
    id: 'q14',
    text: "O amor não é algo que você sente, é algo que você faz.",
    author: "bell hooks",
    book: "Tudo Sobre o Amor"
  },
  {
    id: 'q15',
    text: "Nossa história é escrita pelos nossos pés, pelo caminho que escolhemos trilhar.",
    author: "Itamar Vieira Junior",
    book: "Torto Arado"
  }
];

export const MOCK_AUTHORS: Author[] = [
  {
    id: 'a1',
    name: "Matt Haig",
    bio: "Escritor britânico conhecido por suas obras de ficção e não-ficção que abordam saúde mental com sensibilidade.",
    imageUrl: "https://picsum.photos/seed/matthaig/400/400",
    category: "Ficção / Saúde Mental",
    topBooks: ["A Biblioteca da Meia-Noite", "Razões para Continuar Vivo", "O Livro do Conforto"],
    hobby: "Correr e caminhar pela natureza",
    country: "Reino Unido",
    maritalStatus: "Casado",
    children: "2 filhos"
  },
  {
    id: 'a2',
    name: "James Clear",
    bio: "Especialista em formação de hábitos e melhoria contínua, criador do best-seller 'Hábitos Atômicos'.",
    imageUrl: "https://picsum.photos/seed/jamesclear/400/400",
    category: "Autoajuda / Produtividade",
    topBooks: ["Hábitos Atômicos", "The Clear Habit Journal"],
    hobby: "Levantamento de peso e fotografia",
    country: "Estados Unidos",
    maritalStatus: "Casado",
    children: "Sem filhos"
  },
  {
    id: 'a3',
    name: "Colleen Hoover",
    bio: "Fenômeno do TikTok e autora número 1 do New York Times, famosa por seus romances emocionantes.",
    imageUrl: "https://picsum.photos/seed/hoover/400/400",
    category: "Romance / New Adult",
    topBooks: ["É Assim que Acaba", "Verity", "É Assim que Começa"],
    hobby: "Leitura e filantropia",
    country: "Estados Unidos",
    maritalStatus: "Casada",
    children: "3 filhos"
  },
  {
    id: 'a4',
    name: "Robert Kiyosaki",
    bio: "Empresário e autor de finanças pessoais mais vendido de todos os tempos, criador da série 'Pai Rico'.",
    imageUrl: "https://picsum.photos/seed/robertk/400/400",
    category: "Finanças / Educação Financeira",
    topBooks: ["Pai Rico, Pai Pobre", "Independência Financeira", "O Quadrante de Fluxo de Caixa"],
    hobby: "Investir e Jogar Golfe",
    country: "Estados Unidos",
    maritalStatus: "Casado",
    children: "Sem filhos"
  },
  {
    id: 'a5',
    name: "Taylor Jenkins Reid",
    bio: "Autora aclamada por criar biografias fictícias de ícones culturais que parecem reais.",
    imageUrl: "https://picsum.photos/seed/tjr/400/400",
    category: "Ficção Contemporânea",
    topBooks: ["Os Sete Maridos de Evelyn Hugo", "Daisy Jones and The Six", "Malibu Renasce"],
    hobby: "Escrever roteiros e viajar",
    country: "Estados Unidos",
    maritalStatus: "Casada",
    children: "1 filha"
  },
  {
    id: 'a6',
    name: "Sarah J. Maas",
    bio: "Rainha da fantasia romântica moderna, criadora de mundos épicos e characters inesquecíveis.",
    imageUrl: "https://picsum.photos/seed/sjm/400/400",
    category: "Fantasia / Romantasia",
    topBooks: ["Corte de Espinhos e Rosas", "Trono de Vidro", "Cidade da Lua Crescente"],
    hobby: "Ouvir música e criar histórias",
    country: "Estados Unidos",
    maritalStatus: "Casada",
    children: "2 filhos"
  },
  {
    id: 'a7',
    name: "George Orwell",
    bio: "Voz profética da literatura clássica, cujas obras sobre totalitarismo permanecem cruciais hoje.",
    imageUrl: "https://picsum.photos/seed/orwell/400/400",
    category: "Clássicos / Distopia",
    topBooks: ["1984", "A Revolução dos Bichos", "Lutando na Espanha"],
    hobby: "Jardinagem e criação de animais",
    country: "Reino Unido",
    maritalStatus: "Viúvo (na época do falecimento)",
    children: "1 filho (adotivo)"
  },
  {
    id: 'a8',
    name: "Itamar Vieira Junior",
    bio: "Escritor baiano e geógrafo, vencedor do Prêmio Jabuti e um dos maiores nomes da literatura brasileira atual.",
    imageUrl: "https://picsum.photos/seed/itamar/400/400",
    category: "Literatura Brasileira",
    topBooks: ["Torto Arado", "Doramar ou a Odisseia", "Salvar o Fogo"],
    hobby: "Pesquisa antropológica",
    country: "Brasil",
    maritalStatus: "Privado",
    children: "Sim"
  },
  {
    id: 'a9',
    name: "Yuval Noah Harari",
    bio: "Historiador e professor israelense, autor de obras que analisam o passado e o futuro da humanidade.",
    imageUrl: "https://picsum.photos/seed/harari/400/400",
    category: "História / Sociologia",
    topBooks: ["Sapiens", "Homo Deus", "21 Lições para o Século 21"],
    hobby: "Meditação Vipassana",
    country: "Israel",
    maritalStatus: "Casado",
    children: "Sem filhos"
  },
  {
    id: 'a10',
    name: "Mark Manson",
    bio: "Autor e blogueiro que desafia a positividade tóxica com uma abordagem realista da felicidade.",
    imageUrl: "https://picsum.photos/seed/manson/400/400",
    category: "Autoajuda / Filosofia",
    topBooks: ["A Sutil Arte de Ligar o F*da-se", "F*deu-se", "Everything is F*cked"],
    hobby: "Música e viagens pelo mundo",
    country: "Estados Unidos",
    maritalStatus: "Casado",
    children: "Sem filhos"
  }
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
