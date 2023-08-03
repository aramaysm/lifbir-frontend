import React from 'react';
import FacebookIcon  from '@mui/icons-material/Facebook';
import { Agent_Dto } from "@models";
import { TabItem } from '@components/types';
import ImageHouse from "@public/images/homepage/Home.png"

export const specialities = [
    {
        id:"all",
        value:"all",
        label:"Todos",
    },
    {
        id:"Comprar",
        value:"buy",
        label:"Comprar",
    },
    {
        id:"Vender",
        value:"sell",
        label:"Vender",
    },
    {
        id:"Cotizar",
        value:"",
        label:"Cotizar",
    },
    {
        id:"Reubicacion",
        value:"reubicate",
        label:"Reubicacion",
    },
    {
        id:"Consultor",
        value:"consult",
        label:"Consultor",
    },
    {
        id:"Administrador de propiedad",
        value:"manager",
        label:"Administrador de propiedad",
    },
];

export const languages = [
    {
        id:"Español",
        value:"spanish",
        label:"Español",
    },
    {
        id:"Ingles",
        value:"english",
        label:"Ingles",
    },
    {
        id:"Portugues",
        value:"portuguese",
        label:"Portugues",
    },
    {
        id:"Italiano",
        value:"italian",
        label:"Italiano",
    },
    {
        id:"Fances",
        value:"francaise",
        label:"Fances",
    },
    
];

export const agents:Agent_Dto[] = [
    {
        id: "1",
        fullname: "Irma Charreer",
        company_name: "Enterprise S.R.L",
        phone:"5555555",
        email: "irrma@gmail.com",    
        cant_reviews: 75,
        photo: null,
    },
    {
        id: "2",
        fullname: "Omar Charreer",
        company_name: "Enterprise S.R.L 2",
        phone:"25555555",
        email: "omara@gmail.com",    
        cant_reviews: 40,
        photo: null,
    },
    {
        id: "3",
        fullname: "Esteban Charreer",
        company_name: "Enterprise S.R.L 3",
        phone:"25555555",
        email: "omara@gmail.com",    
        cant_reviews: 40,
        photo: null,
    },
    {
        id: "4",
        fullname: "Omar Charreer",
        company_name: "Enterprise S.R.L 4",
        phone:"25555555",
        email: "omara@gmail.com",    
        cant_reviews: 40,
         photo: null,
    },
    {
        id: "5",
        fullname: "Omar Charreer",
        company_name: "Enterprise S.R.L 5",
        phone:"25555555",
        email: "omara@gmail.com",    
        cant_reviews: 40,
        photo: null,
    },
    {
        id: "6",
        fullname: "Omar Charreer",
        company_name: "Enterprise S.R.L 6",
        phone:"25555555",
        email: "omara@gmail.com",    
        cant_reviews: 40,
        photo: null,
    },
    {
        id: "7",
        fullname: "Omar Charreer",
        company_name: "Enterprise S.R.L 7",
        phone:"25555555",
        email: "omara@gmail.com",    
        cant_reviews: 40,
        photo: null,
    },
];

export const tabs: TabItem[] = [
   
    { id: 0, label: "Venta"},
    { id: 1, label: "Permuta" },
    { id: 2, label: "Renta" },
];

export const generalData_Agent = {
    Telefono:"55874478",
    Correo:"aramaysm@gmail.com",
    Licencia:"25-lifbir",
   /* contact: {
        facebook:"wwww.facebook.com/aramaysm",
        instagram: "www.instagram.com/aramaysm",
    },*/
    //skills: ["Venta","Renta","Negociación","Destreza"],
};

export const personalDataAgent1 = {
    País:"United States",
    Estado:"Florida",
    Ciudad:"Miami",
    Zip:"10905",
    Dirección:"90 Street",
    id:"5",
    //languages:["English","Spanish"],
    Unido:"02-03-2023",
    
}

export const socialMediaAgent = {
        facebook:"wwww.facebook.com/aramaysm",
        instagram: "www.instagram.com/aramaysm",
        twitter:"www.twitter.com/aramaysm",
}

 const sells = [
    {
        id: 1,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:4,
        bathrooms: 2,
        price:1500,
    },
    {
        id: 2,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:3,
        bathrooms: 1,
        price:2500,
    },
]
 const rents = [
    {
        id: 1,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:4,
        bathrooms: 2,
        price:7500,
    },
    {
        id: 2,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:3,
        bathrooms: 1,
        price:9500,
    },
     {
        id: 3,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:3,
        bathrooms: 1,
        price:27000,
    },
]
 const permute = [
    {
        id: 1,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:4,
        bathrooms: 2,
        price:68000,
    },
    {
        id: 2,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:3,
        bathrooms: 1,
        price:27000,
    },
     {
        id: 3,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:3,
        bathrooms: 1,
        price:27000,
    },
     {
        id: 4,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:3,
        bathrooms: 1,
        price:27000,
    },
     {
        id: 5,
        image:ImageHouse,
        address:"Miami 74 FL, ",
        rooms:3,
        bathrooms: 1,
        price:27000,
    },
]


export const reviews = [
    {
        opinion:"Una persona tan maravillosa y amable."+
        " Ella es rápida y hace el trabajo! La recomiendo encarecidamente!"+
        " Ella era muy profesional y agradable. Anita encontró un comprador"+
        " para mi casa y cerramos en dos semanas!",
         score:{Negociacion: 4,
                Conocimiento: 5,
                Experiencia: 4,
        },
        date:"05/06/2008",
        fullname_user: "Esperanza Martinez",
    },
    {
        opinion:"Anita siempre estuvo al tanto de todo,"+
        " fue informativa y siempre nos cuidó.No podría "+
        "haber tenido un mejor agente inmobiliario!! Lo mejor de su juego, lo mejor!!",
         score:{Negociacion: 5,
                Conocimiento: 5,
                Experiencia: 5,
        },
        date:"05/06/2008",
        fullname_user: "Pepe Rodriguez",
    },
     {
        opinion:"No recomendaría a Anita, ella prometió"+
        " mucha acción pero entrega 0. Tampoco es una exageración,"+
        " solo tuvo que comunicarse con el agente de listado para"+
        " UNA casa, una, y hubo demora tras demora y excusa tras"+
        " excusa por la que no respondió cuando dijo.",
         score:{Negociacion: 1,
                Conocimiento: 2,
                Experiencia: 1,
        },
        date:"05/06/2008",
        fullname_user: "Fula 2222",
    },
]

export const houses =[
    sells,
    permute,
    rents,
]