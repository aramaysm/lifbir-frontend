import React from "react";
import Head from "next/head";

import { CountryType } from "@models";
import image from "@public/images/account/edificio_blanco.jpg";
import { GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import { dehydrate, QueryClient } from "react-query";
import Login_Layout from "@components/layouts/Layout/Login";



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


interface ParamsLogin {
    user: {
        username: string,
        name:string;
        lastname:string;
    };
    
}


export default function Login({ user }: ParamsLogin) {
    
  
    return (
        <>
            <Head>
                <title>LIFBIR</title>
            </Head>
            <Login_Layout 
                isLogin
                user={user}               
                image={image}
                
            />
        </>
    );
}