import React from "react";
import Head from "next/head";

import { CountryType } from "@models";
import  Security_Layout  from "@components/layouts/Layout/Account/security";
import profilePhoto from "@public/images/account/boy_small.png";
import { GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import { dehydrate, QueryClient } from "react-query";



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


interface ParamsSecurity {
    user: {
        username: string,
        name:string
    };
}


export default function Security({ user }: ParamsSecurity) {
    
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
                <title>LIFVIR</title>
            </Head>
            <Security_Layout 
                user={user}               
                
            />
        </>
    );
}