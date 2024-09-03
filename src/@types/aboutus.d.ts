declare namespace IAboutUs {
  export interface IAdboutUsData {
    message: string;
    isError: boolean;
    data: Data;
  }

  export interface Data {
    banner: Banner;
    ourMission: OurMission[];
    ourTeam: OurTeam[];
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

  export interface OurMission {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }

  export interface OurTeam {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    userId: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }
}
