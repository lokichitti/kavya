
export interface User{
    phone: number;
    email: string;
    password: string;
}

export interface UserCredential {
    email: string;
    password: string;
  }
  
  export interface UserProfile {
    email: string;
    fName: string;
  }
  export interface ShopDetails {
    shopName: string;
    phoneNumber: string;
    shopCategory: string;
    shopAddress: string;
    langitude: string;
    latitude: string;
    shopPhoto: string;
    isVisibleForPublic: boolean;
  }
