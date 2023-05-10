export interface Product {
  description: string;
  id: number;
  imageURL: string;
  name: string;
  price: number;
  categoryId: number;
}

export interface Category {
  categoryName: string;
  description: string;
  id: number;
  imageUrl: string;
  products: Product[];
}

export type ResponseCategories = Category[];
