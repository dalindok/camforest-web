declare namespace IHome {
  export interface IHomeData {
    message: string;
    isError: boolean;
    data: Data;
  }

  export interface Data {
    banner: Banner[];
    articles: Article[];
    whyUs: WhyUs;
  }

  export interface Banner {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }

  export interface Article {
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

  export interface WhyUs {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }
}
