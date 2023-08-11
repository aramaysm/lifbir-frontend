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

export interface PersonalInfoDta_CardAgent{
    icon: string;
    key: string;
    value: string;
};

export interface Agent_Dto {
    id: string;
    fullname:string;
    company_name: string;
    phone: string;
    email:string;
    cant_reviews:number;
    photo: string | null;
};

export interface Sell_House_Dto {
    id: number,
    price: number,
    city: string,
    address : string,
    bathrooms: number,
    bedrooms: number,
    sqft: number,
    is_favorite: boolean,
    photo: string,
}
export interface Rent_House_Dto {
    id: number,
    price: number,
    city: string,
    address : string,
    bathrooms: number,
    bedrooms: number,
    sqft: number,
    is_favorite: boolean,
    photo: string,
    start_available?: Date,
    end_available?: Date,

}

export interface CheckBoxItemGroup {
    name: string;
    label: string;
    checked: boolean;
}