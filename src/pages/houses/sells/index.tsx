import React from "react";
import Head from "next/head";

import { CountryType, Sell_House_Dto } from "@models";
import { GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import { dehydrate, QueryClient } from "react-query";
import Houses_Layout from "@components/layouts/Layout/Houses";
import WithPrivateRoute from '@util/WithPrivateRoute'


export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();
  

    return {
        props: {
            sells: [
              {
                id: 1,
                price: 10000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 1,
                bedrooms: 3,
                sqft: 25.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
              {
                id: 2,
                price: 20000,
                city: "Miami, FL",
                address : "4na Avenida 1458",
                bathrooms: 2,
                bedrooms: 5,
                sqft: 5835.4,
                photo:"https://pixabay.com/get/g4c5db966f356a1242a7abc7dce4d640cb3e69a143b72c55928d5ae341aaf2781ce017b6bc8f720db841d1bf70f941fcfa3abc70b4fda894081bcc1c91a3ac6bc_1280.jpg",
              },
               {
                id: 3,
                price: 30000,
                city: "Miami, FL",
                address : "4na Avenida 1458",
                bathrooms: 1,
                bedrooms: 4,
                sqft: 305.4,
                photo:"https://pixabay.com/get/g4c5db966f356a1242a7abc7dce4d640cb3e69a143b72c55928d5ae341aaf2781ce017b6bc8f720db841d1bf70f941fcfa3abc70b4fda894081bcc1c91a3ac6bc_1280.jpg",
              },
              {
                id: 4,
                price: 40000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
               {
                id: 5,
                price: 50700,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
               {
                id: 6,
                price: 60000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g8031078ac562a6cda34622d76411e8298a848a13a0a9170c8666a0829b05e5caf27ad7b36f7fb0290bbe1e3c6b02b8bd4b9a3c916a1ed0366c84eabbaae1ee18_1280.jpg",
              },
               {
                id: 7,
                price: 70000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
               {
                id: 8,
                price: 80000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
               {
                id: 9,
                price: 90000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
              {
                id: 10,
                price: 10000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
              {
                id: 11,
                price: 11000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
               {
                id: 12,
                price: 12000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
               {
                id: 13,
                price: 13000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },

            {
                id: 14,
                price: 14000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
              {
                id: 15,
                price: 15000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
              {
                id: 16,
                price: 16000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
              {
                id: 17,
                price: 17000,
                city: "Miami, FL",
                address : "9na Avenida 1458",
                bathrooms: 7,
                bedrooms: 3,
                sqft: 455.25,
                photo:"https://pixabay.com/get/g2362c35c6e5ddcee9bdbb966375258e599ed603a079779a58a45c1b88ebe81e575b4f731bdf06bc143b80de40cd8596254057fb9d9234550604ea06a272c2b89_1280.jpg",
              },
            ],
            dehydratedState: dehydrate(queryClient),
        },
        revalidate: 60,
    };
};


interface ParamsSells {
    sells: Sell_House_Dto[];
}


export default function Sells({ sells }: ParamsSells) {
    
    const listCountry: readonly CountryType[] = [
        {
            id: "1",
            label: "United States",
            phone: "+1",
            flag: "/images/flags/us.svg",
            code: "US",
        },
        {
            id: "2",
            label: "China",
            phone: "+86",
            flag: "/images/flags/cn.svg",
            code: "CN",
        },
        {
            id: "3",
            label: "Brasil",
            phone: "+55",
            flag: "/images/flags/br.svg",
            code: "BR",
        },
        {
            id: "4",
            phone: "+1",
            flag: "/images/flags/ca.svg",
            code: "CA",
            label: "Canada",
        },
        {
            id: "5",
            code: "JP",
            label: "Japan",
            phone: "+81",
            flag: "/images/flags/jp.svg",
        },
        {
            id: "6",
            code: "DE",
            label: "Germany",
            phone: "+49",
            flag: "/images/flags/de.svg",
        },
        {
            id: "7",
            code: "FR",
            label: "France",
            phone: "+33",
            flag: "/images/flags/fr.svg",
        },
        {
            id: "8",
            code: "CU",
            label: "Cuba",
            phone: "+53",
            flag: "/images/flags/cu.svg",
        },
        {
            id: "9",
            code: "ES",
            label: "Spain",
            phone: "+34",
            flag: "/images/flags/es.svg",
        },
        {
            id: "10",
            code: "IT",
            label: "Italy",
            phone: "+39",
            flag: "/images/flags/it.svg",
        },
    ];

    return (
        <>
            <Head>
                <title>LIFBIR | Ventas</title>
            </Head>
            <Houses_Layout 
                type="Sell"
                houses={sells}    
                countriesList={listCountry}
            />
        </>
    );
}

Sells.Auth = WithPrivateRoute