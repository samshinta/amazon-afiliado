import { Book, BlogPost, Quote, Author, Sebo } from './types';

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
    description: `Um dos livros mais vendidos e influentes da atualidade.`,
    price: book.p,
    oldPrice: book.p * 1.3,
    imageUrl: book.img,
    category: book.c,
    rating: 4.8,
    reviewsCount: 1000,
    amazonLink: book.link,
    updatedAt: new Date().toISOString()
  }));
};

export const MOCK_BOOKS: Book[] = generateMockBooks();

export const MOCK_AUTHORS: Author[] = [];

export const MOCK_SEBOS: Sebo[] = [
  // SÃO PAULO (Restaurado)
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

  // RIO DE JANEIRO (Restaurado)
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

  // MINAS GERAIS (Restaurado)
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