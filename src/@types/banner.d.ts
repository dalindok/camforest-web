declare namespace IBanner {
  export interface IBannerData {
    message: string;
    isError: boolean;
    data: Banner[];
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
}
