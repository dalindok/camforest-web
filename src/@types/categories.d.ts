declare namespace ICategories {
  export interface ICategoriesData {
    message: string;
    isError: boolean;
    data: CategoriesData[];
  }
  export interface ICategoriesDetailData {
    message: string;
    isError: boolean;
    data: CategoriesData;
  }

  export interface CategoriesData {
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
