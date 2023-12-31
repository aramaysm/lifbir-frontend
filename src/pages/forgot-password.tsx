import React from "react";
import Head from "next/head";

import { CountryType } from "@models";
import image from "@public/images/account/edificio_blanco.jpg";
import { GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import { dehydrate, QueryClient } from "react-query";
import Login_Layout from "@components/layouts/Layout/Login";
import {AuthProvider} from "@contexts/authcontext/AuthState"; 
import ForgotPassword_Layout from "@components/layouts/Layout/Forgot_Password";



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


export default function ForgotPassword({ user }: ParamsLogin) {
    
  
    return (
        <AuthProvider>
            <Head>
                <title>LIFBIR</title>
            </Head>
            
            <ForgotPassword_Layout 
                 user={user}               
                image={image}
                
            />
        </AuthProvider>
    );
}