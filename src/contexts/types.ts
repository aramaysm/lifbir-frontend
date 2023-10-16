export const LOGIN = "LOGIN";
export const PERMISSIONS = "PERMISSIONS";

export interface ILOGIN {
    id: number;
    title: string;
    description: string;
    status: boolean;
  }
  export type Auth_ContextType = {
   
    login: (email: string, pass:string) => void;
  };