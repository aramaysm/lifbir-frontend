import React from "react";
import Head from "next/head";

import { CountryType } from "@models";
import profilePhoto from "@public/images/account/boy_small.png";
import { GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import { dehydrate, QueryClient } from "react-query";
import {Account_Layout} from "@components";


export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();
  

    return {
        props: {
            user:{
                username:"onelito",
                name:"Onel",
                lastname:"Mendoza",
            },
            dehydratedState: dehydrate(queryClient),
        },
        revalidate: 60,
    };
};


interface ParamsAccount {
    user: {
        username: string,
        name:string;
        lastname:string;
    };
}


export default function Account({ user }: ParamsAccount) {
    
  
    return (
        <>
            <Head>
                <title>LIFVIR</title>
            </Head>
            <Account_Layout 
                user={user}               
                imgProfile={profilePhoto}
                
            />
        </>
    );
}