import React from "react";
import Head from "next/head";

import { CountryType, LanguageType } from "@models";
import  Profile_Layout  from "@components/layouts/Layout/Account/profile";
import profilePhoto from "@public/images/account/boy_small.png";
import { GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import { dehydrate, QueryClient } from "react-query";
import Preferences_Layout from "@components/layouts/Layout/Account/preferencies";



export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();
  

    return {
        props: {
            user:{
                username:"Morales",
                name:"Onel",
            },
            dehydratedState: dehydrate(queryClient),
        },
        revalidate: 60,
    };
};


interface ParamsPreferences {
    user: {
        username: string,
        name:string
    };
}


export default function Preferences({ user }: ParamsPreferences) {
    
    const listCountry: readonly LanguageType[] = [
        {
            id: 1,
            label: "United States",
            desc: "/images/descs/us.svg",
            value: "US",
        },
        {
            id: 2,
            label: "China",
            desc: "/images/descs/cn.svg",
            value: "CN",
        },
        {
            id: 3,
            label: "Brasil",
            desc: "/images/descs/br.svg",
            value: "BR",
        },
        {
            id: 4,
            desc: "/images/descs/ca.svg",
            value: "CA",
            label: "Canada",
        },
        {
            id: 5,
            value: "JP",
            label: "Japan",
            desc: "/images/descs/jp.svg",
        },
        {
            id: 6,
            value: "DE",
            label: "Germany",
            desc: "/images/descs/de.svg",
        },
        
    ];

    return (
        <>
            <Head>
                <title>LIFVIR</title>
            </Head>
            <Preferences_Layout
                user={user}               
                imgProfile={profilePhoto}
                countriesList={listCountry}
            />
        </>
    );
}