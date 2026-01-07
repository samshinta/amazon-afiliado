
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewsCount: number;
  amazonLink: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  book?: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  category: string;
  topBooks: string[];
  hobby: string;
  country: string;
  maritalStatus: string;
  children: string;
}

export interface Sebo {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  instagram: string;
  coordinates?: { lat: number; lng: number };
}
