declare namespace IArticleDetail {
  export interface IArticleDetailData {
    message: string;
    isError: boolean;
    data: Data;
  }

  export interface Data {
    id: number;
    title: string;
    description: string;
    authorId: number;
    categoryId: number;
    existIn: string;
    advantage: string;
    disadvantage: any;
    size: any;
    gallery: Gallery[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    author: Author;
    category: Category;
  }

  export interface Gallery {
    image_url: string;
  }

  export interface Author {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
  }

  export interface Category {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
  }
}
