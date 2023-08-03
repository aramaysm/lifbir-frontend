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


async function getData() {   
    return agents;
  }

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const itemID = params?.id;
    const data = await getData();
    const foundItem = data.find((item: Agent_Dto) => itemID === item.id);
  
    if (!foundItem) {
      return {
        props: { 
            hasError: true,
            agent:{
              id: "0",
        fullname: "",
        company_name: "",
        phone:"",
        email: "",    
        cant_reviews: 0,
        photo: null,
            },
          },
      }
  }
  
  return {
    props: {
      agent: foundItem,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getData();
    const pathsWithParams = data.map((agent: Agent_Dto) => ({
         params: { id: agent.id }}))

    return {
        paths: pathsWithParams,
        fallback: true,
    }

}



export default function Agent_Data({agent}:Params) {
    
   

    return (
        <>
            <Head>
                <title>LIFVIR</title>
            </Head>
            <Agents_Data_Layout agent={agent} user={{
               username:"Morales",
                name:"Onel",
            }} />
        </>
    );
}

