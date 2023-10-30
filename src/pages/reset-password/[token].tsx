import React from "react";
import Head from "next/head";

import { CountryType , Agent_Dto } from "@models";
import  Profile_Layout  from "@components/layouts/Layout/Account/profile";
import profilePhoto from "@public/images/account/boy_small.png";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import { dehydrate, QueryClient } from "react-query";
import Agents_Layout from "@components/layouts/Layout/Agents";
import { agents } from "@components/templates/Agents/load_data";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Agents_Data_Layout from "@components/layouts/Layout/Agents/agent_data";
import { AuthProvider,ProtectRoute } from "@contexts/authcontext/AuthState";
import ResetPassword_Layout from "@/components/layouts/Layout/Reset_Password";


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const itemID = params?.token;
   
    
      return {
        props: { 
            hasError: true,
            token:itemID,
          },
      
  }  
  
}




export default function Agent_Data({token}:Params) {
    
   

    return (
        <>
            <Head>
                <title>Reset Password</title>
            </Head>
            <AuthProvider>
             <ProtectRoute>
                <ResetPassword_Layout token={token} user={undefined} image={""} />
               
           
            </ProtectRoute>
          </AuthProvider>
        </>
    );
}

