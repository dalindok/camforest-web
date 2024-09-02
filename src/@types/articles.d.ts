declare namespace IArticle {
  export interface IArticleData {
    message: string;
    isError: boolean;
    pagination: Pagination;
    data: ArticleData[];
  }

  export interface Pagination {
    limit: number;
    currentPage: number;
    totalPage: number;
    total: number;
  }

  export interface ArticleData {
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
  }

  export interface Gallery {
    image_url: string;
  }
}
