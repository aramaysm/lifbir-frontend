import React, { FC } from "react";


import imageRoleAnfitrion from "@public/images/homepage/hombrecasual.png";
import imageRoleAgente from "@public/images/homepage/empresario.png";
import imageTextPublicity from "@public/images/homepage/Home.png";
import imageWhoAre from "@public/images/homepage/who-are-banner.png";
import imageContactAgent from "@public/images/homepage/chica-buscar-agente.png"

import {Banner_Services, Banner_ContactAgent} from "@components/templates/Home/Banners";

import { DirectionEnum, PositionEnum, TabItem } from "@components/types";
import {
    Banner,
    Card,
    ContactCard,
    Image,
    Grid,
    Layout,
    SearchContent,
    Stack,
    TextPublicity,
    Typography,
} from "@components";
import * as styles_Home from "./styles";
import { CountryType } from "@models";
import WhoAreBanner from "@components/organisms/WhoAreBanner";
import { cardsRoles,infoWhoAreBanner } from "./load_data";
import CardBordered from "@components/molecules/Card/CardBordered";
import { Banner_ContactComercial } from "./Banners/Banner_ContactComercial";

const textFirst =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae " +
    "earum est voluptas. A ad architecto consequuntur doloremque doloribus ea, ex " +
    "exercitationem illum ipsam, natus officia porro quibusdam rerum sit! " +
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque " +
    "consequuntur ex explicabo hic nesciunt, nulla quasi quia quisquam, quos ratione " +
    "repellendus, ullam voluptates? Debitis expedita fugiat odio vero voluptate!";

 


interface IProps {
    bannerImage: {
        imageProps: { src: string; type?: string; blurDataURL: string };
    };
    sesionTabs: TabItem[];
    countriesList: readonly CountryType[];
}

const HomeTemplate: FC<IProps> = ({
    bannerImage,
    sesionTabs,
    countriesList,
}) => {
    return (
        <Layout sesionTabs={sesionTabs} countriesList={countriesList}>
            <Banner
                banner={bannerImage}
                styleBox={{ height: { xs: 400, sm: 400, md: 548, xl: 648 }, paddingBottom:"10px",
                backgroundColor:"blue" }}
                styleGird={styles_Home.stylesGridBanner1}
                styleTypography={styles_Home.styleTypographyBanner1}
                textContent={"... no es buscar, es encontrar".toLocaleUpperCase()}
            />
            <SearchContent />

            <Stack style={{ padding: 2 }}>
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.CENTER}
                    verticalPosition={PositionEnum.CENTER}
                    style={styles_Home.styleGridBanner2}
                >
                    <Grid
                        xs={12}
                        md={12}
                        style={{
                            paddingLeft: "16px !important",
                            paddingRight: "16px !important",
                            marginTop:"50px",
                        }}
                    >
                        <WhoAreBanner
                            titlePrimary="¿Quiénes "
                            titleSecondary="somos?"
                            content={infoWhoAreBanner.description}
                            image={imageWhoAre}
                            maxWidth="100%"    
                            displayCard="flex"
                          
                        />
                    </Grid>
                                       
                </Grid>
            </Stack>

            <Banner_Services />


            <Stack style={{ marginTop:"50px"}}>
             <Grid xs={12} md={12}>
               
                        <TextPublicity
                            title="Publique su propiedad en LIFBIR"
                            description={textFirst}
                            buttonLabel="Empezar ahora"
                            imageBG={imageTextPublicity}
                        />
                    </Grid>
            </Stack>

            <Grid container style={styles_Home.styleGridBanner5} >
                    <Grid   
                        xs={12}
                        md={4}
                        container
                        style={{ marginBottom:"20px"}} >                     
                    
                            <Typography variant="h4"
                            sx={styles_Home.styleTypographyBanner5_1}>
                            Dé un salto más en su 
                            </Typography>
                            <Typography variant="h4"
                            sx={styles_Home.styleTypographyBanner5_2}>
                            economía 
                            </Typography>
                            
                    </Grid>
                    <Grid 
                        xs={12}
                        md={8}
                        container
                        style={{
                        justifyContent:"space-around",
                        }}>
                        {
                            cardsRoles([imageRoleAnfitrion,imageRoleAgente]).map((item:any)=>
                            <Grid key={item.title}
                            xs={12}
                            md={6}
                            style={styles_Home.styleGridBanner6}
                            >
                            <CardBordered bgImage="linear-gradient(#e900ca,#ef0f4f)"
                                title={item.title}
                                content={item.content}
                                maxWidth="99%"
                                height="100% !important"
                                image={item.image}
                                upperCaseContent={true}
                                justifyContentAction={PositionEnum.CENTER}
                            />
                        </Grid>
                    )}
                    
                    
                    </Grid>
            </Grid>
          
        	<Banner_ContactAgent />
          
            <Banner_ContactComercial/>
        </Layout>
    );
};




export default HomeTemplate;