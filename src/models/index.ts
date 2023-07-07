export interface SocialModel {
    id: number;
    name: string;
    icon: any;
    url: string;
}

export interface MenuModel {
    id: number;
    title: string;
    url: string;
}

export interface CountryType {
    id: string;
    code: string;
    label: string;
    flag: string;
    phone: string;
}

export interface MenuItemType {
    id: number;
    label: string;
    value:  string | number;
}

export interface LanguageType {
    id: number;
    label: string;
    value:  string | number;
    desc: string;
}

export interface RadioButtonType {
    label:string;
    value:string;
}